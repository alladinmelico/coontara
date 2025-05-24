import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'

async function preRender(url, outputPath) {
  const browser = await puppeteer.launch({
    executablePath:
      process.platform === 'linux'
        ? '/usr/bin/google-chrome'
        : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
  })
  const page = await browser.newPage()
  await page.goto(url, { waitUntil: 'networkidle0' })
  const content = await page.content()
  fs.writeFileSync(path.resolve(outputPath), content)
  await browser.close()
}

preRender('http://localhost:5173', './dist/index.html')
