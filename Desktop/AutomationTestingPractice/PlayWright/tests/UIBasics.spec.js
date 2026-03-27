const {test} = require('@playwright/test')

test("First test case", async({browser })=>{
 const context = await browser.newContext()
  const page = await browser.newPage()
 await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
})

test("Open google", async({page})=>{
    await page.goto("https://google.com")
})