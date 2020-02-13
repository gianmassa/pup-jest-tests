const puppeteer = require('puppeteer-firefox');

(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()

  await page.goto('https:pptr.dev')
  await page.waitForSelector('title')

  await browser.close()
})();
