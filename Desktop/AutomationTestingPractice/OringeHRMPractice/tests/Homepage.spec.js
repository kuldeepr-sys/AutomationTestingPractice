const {test} = require('@playwright/test');
const{Homepage} =  require('../pages/Homepage');
const {login} = require('../pages/login');
const data = require('../utils/testdata');


test('01' , async({page})=>{
    let homepage = new Homepage(page);
    let Login = new login(page);
    await Login.goto()
    await Login.login(data.validusername , data.validpassword);
    await homepage.Directory.click(); 
})