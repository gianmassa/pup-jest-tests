import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import FeedbackPage from '../pages/FeedbackPage'
import TopBar from '../pages/components/TopBar'

import { username, password } from '../config'

describe('End-to-End Test', () => {
  let homePage
  let topBar
  let loginPage
  let feedbackPage

  beforeAll(async () => {
    jest.setTimeout(15000)
    homePage = new HomePage()
    topBar = new TopBar()
    loginPage = new LoginPage()
    feedbackPage = new FeedbackPage()
  })

  // afterAll(async () => {
  //   await browser.close()
  // })
  // YOU DON`T USE BROWSER.CLOSE() HERE. IF YOU DO IT WILL RETURN AN ERROR AND THE TESTS WILL FAIL

  it('should load homePage', async () => {
    await homePage.visit()
    await homePage.isNavbarDisplayed()
  })

  it('should submit feedback', async () => {
    await homePage.clickFeedbackLink()
    await feedbackPage.isFeedbackFormDisplayed()
    await feedbackPage.sendForm('tester', 'tester@test.com', 'subject', 'any text')
  })

  it('should try to login and fail', async () => {
    await homePage.visit()
    await topBar.isTopBarDisplayed()
    await topBar.clickSigninButton()
    await loginPage.isLoginformDisplayed()
    await loginPage.login('username_error', 'password_error')
    await loginPage.waitForSelector('.alert-error')
  })

  it('should login to application', async () => {
    await homePage.visit()
    await topBar.isTopBarDisplayed()
    await topBar.clickSigninButton()
    await loginPage.isLoginformDisplayed()
    await loginPage.login(username, password)
    const url = await loginPage.getUrl()
    expect(url).toBe('http://zero.webappsecurity.com/bank/account-summary.html')
  })
})
