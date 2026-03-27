const {test , expect , request} = require("@playwright/test")
const payload = {
    userEmail
: 
"tijow93908@netoiu.com",
userPassword
: 
"Kd@12032003"
}
let token

test.beforeAll(async ()=>{
   const apicontext = await request.newContext();
    const login = await apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login" , 
        {
            data:payload
        }
    )
   const jsondata = await login.json()

   token = jsondata.token
   console.log("Token:", token)
    

})

test("Api",async({page})=>{
    await page.addInitScript(value =>{
        window.localStorage.setItem('token',value)
    },token)

    await page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash")
    await page.pause()

})