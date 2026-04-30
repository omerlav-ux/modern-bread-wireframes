import { chromium } from 'playwright'

const captureId = process.argv[2]
const targetUrl = process.argv[3]

if (!captureId || !targetUrl) {
  console.error('Usage: node scripts/figma-external-capture.mjs <captureId> <fullUrl>')
  process.exit(1)
}

const endpoint = `https://mcp.figma.com/mcp/capture/${captureId}/submit`

const browser = await chromium.launch({ headless: true })
const context = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  deviceScaleFactor: 1,
})
const page = await context.newPage()

await page.route('**/*', async (route) => {
  try {
    const response = await route.fetch({ timeout: 60000 })
    const headers = { ...response.headers() }
    delete headers['content-security-policy']
    delete headers['content-security-policy-report-only']
    await route.fulfill({ response, headers })
  } catch {
    await route.continue()
  }
})

await page.goto(targetUrl, { waitUntil: 'networkidle', timeout: 120000 })

const r = await context.request.get('https://mcp.figma.com/mcp/html-to-design/capture.js')
const scriptText = await r.text()

await page.evaluate((s) => {
  const el = document.createElement('script')
  el.textContent = s
  document.head.appendChild(el)
}, scriptText)

await new Promise((r) => setTimeout(r, 1500))

await page.waitForFunction(
  () => typeof window.figma !== 'undefined' && typeof window.figma.captureForDesign === 'function',
  null,
  { timeout: 30000 }
)

const result = await page.evaluate(
  ({ captureId, endpoint }) =>
    window.figma.captureForDesign({
      captureId,
      endpoint,
      selector: 'body',
    }),
  { captureId, endpoint }
)

console.log(JSON.stringify({ captureId, targetUrl, result }))
await browser.close()
