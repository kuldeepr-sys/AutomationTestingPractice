const {test , expect} = require('@playwright/test');
const {POM} = require('../PageObjectManager/PageObjectManager');
const data = require('../utils/testdata')
let pom;
let varlogin;
let Umgtclick;
test.beforeEach(async({page})=>{
      pom = new POM(page);
      varlogin = pom.getLoginPage();
      Umgtclick = pom.getUserManegment();
    await varlogin.goto();
    await varlogin.login(data.validusername , data.validpassword);
    //await Umgtclick.gotouser();
    
 
});

test('TC031 , Add new system user with valid data' ,async({page})=>{
    // const pom = new POM(page);
    // const varlogin = pom.getLoginPage();
    // await varlogin.goto();
    // await varlogin.login(data.validusername , data.validpassword);
    await page.getByRole('link',{name:'Admin'}).click();
    await page.getByText('User Management').first().click();
    await page.getByRole('link',{name:'Users'})
   await Umgtclick.systemUser('kuldeep','ESS', 'aniket Ashok patil','Enabled');

})