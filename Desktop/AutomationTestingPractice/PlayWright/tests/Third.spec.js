const { test } = require("@playwright/test");

test("To access browser", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  await page.locator("#username").fill("rahulshettyacademy");
  await page.locator("#password").fill("Learning@830$3mK2");

  // define the sign in button properly
  const signInBtn = page.locator("#signInBtn");
  await signInBtn.click();
  console.log(await page.locator(".card-body a").nth(1).textContent());
  const cartTitle = page.locator(".card-body a")
  console.log(cartTitle.first().textContent());
  
  const alltitle = await cartTitle.allTextContents()
  console.log(alltitle);
  
});

// test("To go to the next page", async({browser})=>{
//     const context = await browser.newContext()
//     const page = await context.newPage();
//     await page.goto("https://google.com")
//     console.log();
    
// })