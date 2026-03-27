const {test , expect} = require("@playwright/test")
const { brotliCompress } = require("node:zlib")

test("To go to page", async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.locator("#username").fill("rahulshettyacademy")
    await page.locator("#password").fill("Learning@830$3mK2")
    await page.locator("#signInBtn").click()
    await page.waitForLoadState("networkidle")
    console.log(await page.locator(".card-body a").allTextContents());
    
})

test("Handle ui " , async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.locator("select.form-control").selectOption("consult")
    await page.locator(".radiotextsty ").last().click()
    await page.locator("#okayBtn").click()
    await page.pause()
})

