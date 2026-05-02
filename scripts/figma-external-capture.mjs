import { chromium } from 'playwright'

const captureId = process.argv[2]
const targetUrl = process.argv[3]

if (!captureId || !targetUrl) {
  console.error('Usage: node scripts/figma-external-capture.mjs <captureId> <fullUrl>')
  process.exit(1)
}

const log = (...a) => {
  console.error('[figma-capture]', ...a)
}

const endpoint = `https://mcp.figma.com/mcp/capture/${captureId}/submit`

log('launch', captureId)
const browser = await chromium.launch({ headless: true })
const context = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  deviceScaleFactor: 1,
})
const page = await context.newPage()
page.setDefaultTimeout(90000)

await page.route('**/*', async (route) => {
  if (route.request().resourceType() !== 'document') {
    await route.continue()
    return
  }
  try {
    const response = await route.fetch({ timeout: 45000 })
    const headers = { ...response.headers() }
    delete headers['content-security-policy']
    delete headers['content-security-policy-report-only']
    await route.fulfill({ response, headers })
  } catch {
    await route.continue()
  }
})

log('goto', targetUrl)
await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 90000 })
try {
  await page.waitForSelector('#root', { state: 'attached', timeout: 30000 })
  await page.waitForFunction(
    () => {
      const r = document.querySelector('#root')
      return r && r.children.length > 0
    },
    null,
    { timeout: 45000 }
  )
} catch {
  log('root mount wait soft-failed')
}
await new Promise((r) => setTimeout(r, 4000))

log('fetch capture.js')
const jsRes = await context.request.get('https://mcp.figma.com/mcp/html-to-design/capture.js')
const scriptText = await jsRes.text()

await page.evaluate((s) => {
  const el = document.createElement('script')
  el.textContent = s
  document.head.appendChild(el)
}, scriptText)

await new Promise((r) => setTimeout(r, 2000))

try {
  await page.waitForFunction(
    () => typeof window.figma !== 'undefined' && typeof window.figma.captureForDesign === 'function',
    null,
    { timeout: 35000 }
  )
} catch {
  log('waitForFunction timeout, attempting capture anyway')
}

const selector = process.env.FIGMA_CAPTURE_SELECTOR || '#root'
const submitTimeout = Math.max(60000, parseInt(process.env.FIGMA_CAPTURE_SUBMIT_TIMEOUT_MS || '300000', 10) || 300000)
const submitUrlPart = `/capture/${captureId}/submit`

log('captureForDesign', selector, '(wait for POST', submitUrlPart + ')')

const responsePromise = page.waitForResponse(
  (res) =>
    res.request().method() === 'POST' &&
    res.url().includes(submitUrlPart),
  { timeout: submitTimeout }
)

await page.evaluate(
  ({ captureId, endpoint, selector }) => {
    void window.figma.captureForDesign({
      captureId,
      endpoint,
      selector,
    })
  },
  { captureId, endpoint, selector }
)

let res
try {
  res = await responsePromise
} catch (e) {
  log('submit response timeout or error:', e.message)
  await browser.close()
  process.exit(1)
}

const rawText = await res.text()
let body
try {
  body = JSON.parse(rawText)
} catch {
  body = { raw: rawText.slice(0, 500) }
}

log('submit http', res.status())
console.log(JSON.stringify({ captureId, targetUrl, ok: res.ok(), status: res.status(), body }))
if (!res.ok()) {
  await browser.close()
  process.exit(1)
}

await browser.close()
