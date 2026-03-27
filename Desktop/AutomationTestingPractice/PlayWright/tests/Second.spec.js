const {test, expect} = require("@playwright/test")

test("To open browser",async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    console.log(page.title());
    await page.locator("#username").fill("rahulshettyacademy")
    await page.locator("[type='password']").fill("Learning@830$3mK2)")
    await page.locator("#signInBtn").click()
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect')
   
    
})