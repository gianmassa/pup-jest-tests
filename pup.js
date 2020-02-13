const puppeteer = require('puppeteer');
// const devices = require('puppeteer/DeviceDescriptors');

(async () => {
  //Define browser and page -> opens a new page
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()

  /*

  // Here starts the actions
  // Go to example.com
  await page.goto('http://example.com', { waitUntil: "networkidle0" })

  // Take a screenshot of the page
  await page.screenshot({ path: "./screenshots/example.png", fullPage: true })

  // Save as a PDF file
  // await page.pdf({ path: "./files/example.pdf", format: "A4" }) *** IT ONLY WORKS IN HEADLESS BROWSER

  //Emulating Devices
  await page.emulate(devices["iPhone X"])
  await page.goto("https:/pptr.dev") // Here you can find a list of devices you can emulate
  await page.waitFor(3000)

  // Faking Geolocation
  // Grant Permissions for geolocation change
  const context = browser.defaultBrowserContext()
  await context.overridePermissions('https://pptr.dev', ['geolocation'])
  await page.goto('https://pptr.dev')
  await page.waitForSelector('title')
  //Change Geolocation to the North Pole
  await page.setGeolocation({ latitude: 90, longitude: 0 })

  // Accessibility Test
  await page.goto('https://pptr.dev')
  await page.waitForSelector('title')
  const snapshot = await page.accessibility.snapshot()
  console.log(snapshot)

  // Measuring Website Performance Data
  await page.goto('https://pptr.dev')
  await page.waitForSelector('title')
  const metrics = await page.evaluate(() => JSON.stringify(window.performance))
  console.log(JSON.parse(metrics))

  */

  //Close the browser
  await browser.close()

})();
