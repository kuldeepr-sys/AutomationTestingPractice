const { test, expect } = require('@playwright/test')


// test("To log in the practice web ",async({browser})=>{
//    const context = await browser.newContext()
//    const page = await context.newPage()
//    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
//    await page.locator('#userEmail').fill("tijow93908@netoiu.com")
//    await page.locator('#userPassword').type("Kd@12032003")
//    await page.locator("#login").click()
//    await page.waitForSelector(".card-body")
//    const productbody = await page.locator(".card-body")
//    const productname = "ZARA COAT 3"
//    const count = await productbody.count()
//    for(let i =0; i<count; i++){
//     const text = await productbody.nth(i).locator('b').textContent()

//     if(text?.trim() === productname){
//         await productbody.nth(i).locator('text = Add To Cart').click()
//         break
//     }
//    }

//    await page.locator("[routerlink*='/dashboard/cart']").click()

//   await expect(page.locator("h3:has-text('ZARA COAT 3')")).toBeVisible()

//   await page.pause()

// })



// test("To log in the practice web", async ({ browser }) => {
//   const context = await browser.newContext()
//   const page = await context.newPage()

//   await page.goto("https://rahulshettyacademy.com/client/#/auth/login")

//   await page.locator('#userEmail').fill("tijow93908@netoiu.com")
//   await page.locator('#userPassword').type("Kd@12032003")
//   await page.locator("#login").click()

//   await page.waitForSelector(".card-body")

//   const productbody = page.locator(".card-body")
//   const productname = "ZARA COAT 3"
//   const count = await productbody.count()

//   for (let i = 0; i < count; i++) {
//     const text = await productbody.nth(i).locator('b').textContent()

//     if (text?.trim() === productname) {
//       await productbody
//         .nth(i)
//         .locator('button.btn.w-10.rounded')
//         .click()
//       break
//     }
//   }

//   await page.pause()
// })




// test("To log in the practice web", async ({ browser }) => {
//   // create browser context & page
//   const context = await browser.newContext()
//   const page = await context.newPage()

//   // login
//   await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
//   await page.locator('#userEmail').fill("tijow93908@netoiu.com")
//   await page.locator('#userPassword').type("Kd@12032003")
//   await page.locator("#login").click()

//   // wait for products to load
//   await page.waitForSelector(".card-body")

//   // add ZARA COAT 3 to cart
//   await page
//     .locator(".card-body", { hasText: "ZARA COAT 3" })
//     .locator("text=Add To Cart")
//     .click()

//   // go to cart
//   await page.locator("[routerlink*='cart']").click()

//   // wait for cart items
//   await page.locator("div li").first().waitFor()

//   // assertion: verify product in cart
//   await expect(
//     page.locator("h3:has-text('ZARA COAT 3')")
//   ).toBeVisible()

//   // pause for debugging (optional)
//   await page.pause()
// })

test('@Webst Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "tijow93908@netoiu.com";
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Kd@12032003");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
   const count = await products.count();
   for (let i = 0; i < count; ++i) {
      if (await products.nth(i).locator("b").textContent() === productName) {
         //add to cart
         await products.nth(i).locator("text= Add To Cart").click();
         break;
      }
   }
 
   await page.locator("[routerlink*='cart']").click();
   //await page.pause();
 
   await page.locator("div li").first().waitFor();
   const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
   expect(bool).toBeTruthy();
   await page.locator("text=Checkout").click();
 
   await page.locator("[placeholder*='Country']").pressSequentially("ind", { delay: 150 });
   const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }
  
   expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);
 
   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();
 
});

