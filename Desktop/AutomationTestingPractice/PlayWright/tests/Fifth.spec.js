const {test} = require('@playwright/test')

test("Browser Context",async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    // const page2 = await context.newPage()
    await page.pause()
    await page2.pause()
})