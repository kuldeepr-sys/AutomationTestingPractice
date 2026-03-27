const {test , expect} = require('@playwright/test')

test("First" , async({page})=>{
    await page.goto("https://www.google.com")
})