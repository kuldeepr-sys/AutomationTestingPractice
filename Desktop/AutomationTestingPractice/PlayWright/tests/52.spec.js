const { test, expect, request } = require('@playwright/test')

const payload = {
  userEmail: "tijow93908@netoiu.com",
  userPassword: "Kd@12032003"
}

let token

// API LOGIN
test.beforeAll(async () => {
  const apiContext = await request.newContext()

  const loginResponse = await apiContext.post(
    "https://rahulshettyacademy.com/api/ecom/auth/login",
    { data: payload }
  )

  const loginJson = await loginResponse.json()
  token = loginJson.token

  console.log("Token:", token)
})


// UI TEST
test('Client App Order Flow', async ({ page }) => {

   await page.addInitScript(value =>{
        window.localStorage.setItem('token',value);

    },token)

  const productName = "ZARA COAT 3"

  await page.goto("https://rahulshettyacademy.com/client")

  const products = page.locator(".card-body")
  const count = await products.count()

  // Add product to cart
  for (let i = 0; i < count; i++) {
    if (await products.nth(i).locator("b").textContent() === productName) {
      await products.nth(i).locator("text=Add To Cart").click()
      break
    }
  }

  // Go to cart
  await page.locator("[routerlink*='cart']").click()

  await expect(page.locator("h3:has-text('ZARA COAT 3')")).toBeVisible()

})