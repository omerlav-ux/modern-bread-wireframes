import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { spawnSync } from 'child_process'

const __dirname = dirname(fileURLToPath(import.meta.url))
const BASE = 'https://omerlav-ux.github.io/modern-bread-wireframes'
const manifest = JSON.parse(readFileSync(join(__dirname, 'figma-capture.manifest.json'), 'utf8'))
const skip = Math.max(0, parseInt(process.env.FIGMA_CAPTURE_SKIP || '0', 10) || 0)

for (const { route, captureId } of manifest.slice(skip)) {
  const url = `${BASE}/#${route}`
  console.error('\n---', route, captureId, '\nURL:', url)
  const r = spawnSync(process.execPath, [join(__dirname, 'figma-external-capture.mjs'), captureId, url], {
    stdio: 'inherit',
    cwd: join(__dirname, '..'),
    env: process.env,
  })
  if (r.status !== 0) {
    console.error('Failed capture for', route)
    process.exit(r.status ?? 1)
  }
}

console.error('\nAll Playwright submits finished. Poll each captureId with Figma MCP generate_figma_design until completed.')
