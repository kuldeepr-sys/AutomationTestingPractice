// const {test} = require('@playwright/test')

// test("Some more locators", async({page})=>{
// //  const context = await browser.newContext();
// //  const page = await context.newPage()
//  await page.goto("https://rahulshettyacademy.com/angularpractice/")
//  await page.getByLabel("Check me out if you Love IceCreams!").click()
//  await page.getByLabel("Gender").selectOption("Female")
//  await page.getByRole("button",{name:'Submit'}).click()
//  await page.getByRole("link",{name:'Shop'}).click()
//  await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button").click()
//  await page.getByRole("link", { name: "Checkout" }).click();
//  await page.pause()
// })
const { test } = require('@playwright/test');

test("Some more locators", async ({ page }) => {

  await page.goto("https://rahulshettyacademy.com/angularpractice/");

  await page.getByLabel("Check me out if you Love IceCreams!").click();

  await page.getByLabel("Gender").selectOption({ label: "Female" });

  await page.getByRole("button", { name: "Submit" }).click();

  await page.getByRole("link", { name: "Shop" }).click();

  const productCard = page.locator("app-card").filter({ hasText: "Nokia Edge" });

  await productCard.getByRole("button", { name: "Add" }).click();

  await page.getByRole("link", { name: "Checkout" }).click();

  await page.pause();

});