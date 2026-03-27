class login{
    constructor(page){
        this.page = page;
        this.user = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginbtn = page.getByRole('button',{name:' Login '});
        this.invaliderror = page.getByText('Invalid credentials');
        this.requirederror = page.getByText('Required');
        // this.Invalidcredentialserror = page.getByRole('alert').filter({ hasText: 'Invalid credentials' });
         this.Invalidcredentialserror = page.getByText('Invalid credentials');
         this.forgotpassword = page.getByText('Forgot your password? ')

    }

    async goto(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
   async login(user, pass) {
    if (user !== undefined) {
        await this.user.fill(user);
    }
    if (pass !== undefined) {
        await this.password.fill(pass);
    }
    await this.loginbtn.click();
}
}

module.exports = {login}