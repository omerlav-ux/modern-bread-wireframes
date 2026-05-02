import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { spawn } from 'child_process'

const __dirname = dirname(fileURLToPath(import.meta.url))
const BASE = 'https://omerlav-ux.github.io/modern-bread-wireframes'
const manifestPath = process.env.FIGMA_CAPTURE_MANIFEST || join(__dirname, 'figma-capture.manifest.json')
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))
const skip = Math.max(0, parseInt(process.env.FIGMA_CAPTURE_SKIP || '0', 10) || 0)
const timeoutMs = Math.max(30000, parseInt(process.env.FIGMA_CAPTURE_TIMEOUT_MS || '240000', 10) || 240000)

function runCapture(captureId, url) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [join(__dirname, 'figma-external-capture.mjs'), captureId, url], {
      stdio: 'inherit',
      cwd: join(__dirname, '..'),
      env: process.env,
    })
    const killTimer = setTimeout(() => {
      child.kill('SIGKILL')
      reject(new Error(`timeout ${timeoutMs}ms`))
    }, timeoutMs)
    child.on('error', (err) => {
      clearTimeout(killTimer)
      reject(err)
    })
    child.on('exit', (code) => {
      clearTimeout(killTimer)
      if (code === 0) resolve()
      else reject(new Error(`exit ${code}`))
    })
  })
}

for (const { route, captureId } of manifest.slice(skip)) {
  const url = `${BASE}/#${route}`
  console.error('\n---', route, captureId, '\nURL:', url)
  try {
    await runCapture(captureId, url)
  } catch (e) {
    console.error('Capture failed (continuing):', route, e.message)
  }
}

console.error('\nPlaywright submit attempts finished. Poll pending captureIds with Figma MCP generate_figma_design until completed.')
