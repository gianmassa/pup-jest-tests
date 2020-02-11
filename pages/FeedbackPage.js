import BasePage from './BasePage'

export default class FeedbackPage extends BasePage {
  async visit() {
    await page.goto('http://zero.webappsecurity.com/feedback.html')
    await page.waitForSelector('.form-inputs')
  }

  async isFeedbackFormDisplayed() {
    await page.waitForSelector('#name')
    await page.waitForSelector('#email')
    await page.waitForSelector('#subject')
    await page.waitForSelector('#comment')
  }

  async sendForm(name, email, subject, text) {
    await page.type('#name', name)
    await page.type('#email', email)
    await page.type('#subject', subject)
    await page.type('#comment', text)
    await page.click('.btn-primary')
  }
}
