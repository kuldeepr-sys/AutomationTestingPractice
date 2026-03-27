const { test, expect } = require('@playwright/test');
const { login } = require('../pages/login');
const data = require('../utils/testdata');

let Login;   // global variable

test.beforeEach(async ({ page }) => {
    Login = new login(page);
    await Login.goto();
    
});

test('TC001 ,Valid login with correct credentials', async ({page}) => {
    await Login.login(data.validusername, data.validpassword);
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    
});

test('TC002 , Login with blank username' , async({page})=>{
    await Login.login(data.validpassword);
    
    await expect(Login.requirederror).toBeVisible();
})

test('TC003 , Login with blank password' , async({page})=>{
    await Login.login(data.validusername);
    await expect(Login.requirederror).toBeVisible();
})

test('TC004 , Login with both fields blank' , async({page})=>{
    await Login.login();
    await expect(Login.requirederror.first()).toBeVisible();
    await expect(Login.requirederror.last()).toBeVisible();
})

test('TC005 , Login with incorrect password' , async({page})=>{
    await Login.login(data.validusername,data.invalidpass);
    
    await expect(Login.Invalidcredentialserror).toBeVisible();
})

test('TC006 , Login with incorrect username', async({page})=>{
    await Login.login(data.invaliduser , data.validpassword);
    await expect(Login.Invalidcredentialserror).toBeVisible();
})

test('TC007 , Login with username in lowercase', async({page})=>{
    await Login.login('admin' , data.validpassword);
    await expect(Login.Invalidcredentialserror).toBeVisible();

})

test('TC008 , Password field masks input',async({page})=>{
    const password = await page.getByPlaceholder('Password');
    await password.fill('fnafknje');
    await expect(password).toHaveAttribute('type','password')

})

test('TC009 , Forgot Password link navigates correctly' , async({page})=>{
    await Login.forgotpassword.click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode');
})

test('TC010 Reset password with valid username', async ({ page }) => {
    await Login.forgotpassword.click();

    await page.getByPlaceholder('Username').fill(data.validusername);

    await page.getByRole('button', { name: 'Reset Password' }).click();

    await expect(
        page.getByRole('heading', { name: 'Reset Password link sent successfully' })
    ).toBeVisible();


});
test('TC011 , Reset password with invalid username' , async({page})=>{
    await Login.forgotpassword.click();

    await page.getByPlaceholder('Username').fill(data.invaliduser);

    await page.getByRole('button', { name: 'Reset Password' }).click();

    await expect(
        page.getByRole('heading', { name: 'Reset Password link sent successfully' })
    ).not.toBeVisible();
})

test('TC012 , Reset password with blank username' , async({page})=>{
    await Login.forgotpassword.click();
    await page.getByRole('button', { name: 'Reset Password' }).click();
    await expect(Login.requirederror).toBeVisible()
})

test('TC013 , Session timeout after inactivity' , async({page , context})=>{
    await Login.login(data.validusername , data.validpassword);
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await context.clearCookies();
    await page.reload();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

test('TC014 , Logout successfully' , async({page})=>{
    await Login.login(data.validusername , data.validpassword);
    await page.getByAltText('profile picture').click();
    await page.getByText('Logout').click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

test('TC015 , Back button after logout', async({page})=>{
    await Login.login(data.validusername , data.validpassword);
    await page.getByAltText('profile picture').click();
    await page.getByText('Logout').click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.goBack();
    await expect(page).toHaveURL(/login/)
})

test('TC016 , Login page title is correct',async({page})=>{
    await expect(page).toHaveTitle('OrangeHRM');

})

test('TC017 , OrangeHRM logo visible on login page' , async({page})=>{
    await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
})



test('TC018 Login page responsive on mobile', async ({ browser }) => {

    const context = await browser.newContext({
        viewport: { width: 375, height: 812 }   // iPhone X
    });

    const page = await context.newPage();

    await page.goto('https://opensource-demo.orangehrmlive.com');

    await expect(page.getByPlaceholder('Username')).toBeVisible();
    await expect(page.getByPlaceholder('Password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();

});

test('TC019 SQL injection attempt in username', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com');

    await page.getByPlaceholder('Username').fill("' OR 1=1; --");
    await page.getByPlaceholder('Password').fill('randompass');

    await page.getByRole('button', { name: 'Login' }).click();

    // should NOT login
    await expect(page).toHaveURL(/login/);

    // should show generic error
    await expect(page.getByRole('alert')).toBeVisible();

});

test('TC020 XSS in username field', async ({ page }) => {

    

    // listen for JS dialogs (alert)
    let alertTriggered = false;
    page.on('dialog', async dialog => {
        alertTriggered = true;
        await dialog.dismiss();
    });

    await page.getByPlaceholder('Username')
        .fill("<script>alert('xss')</script>");

    await page.getByPlaceholder('Password').fill('random');

    await page.getByRole('button', { name: 'Login' }).click();

    // should not login
    await expect(page).toHaveURL(/login/);

    // XSS should NOT execute
    expect(alertTriggered).toBeFalsy();

});
