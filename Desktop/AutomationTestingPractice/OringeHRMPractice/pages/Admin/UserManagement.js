const { AdminDashbordPage } = require('./AdminDashbordPage');
class UserManegment {
    constructor(page) {
        this.Userbtn = page.locator('a:has-text("Users")');
        this.Username = page.getByLabel('Username');
        this.UserRole = page.locator(
            '.oxd-input-group:has(label:has-text("User Role")) .oxd-select-text'
        );
        this.EmployeeName = page.getByLabel('Employee Name');
        this.Status = this.page.locator(
            '.oxd-input-group:has(label:has-text("Status")) .oxd-select-text'
        );
        this.Searchbtn = page.getByRole('button', { name: ' Search ' });
        this.Resetbtn = page.getByRole('button', { name: 'Reset ' });
        this.Addbtn = page.getByRole('button', { name: ' Add ' });
        this.Deletebtn = page.locator('button:has(i.bi-trash)');
        this.Editbtn = page.locator('button:has(bi-pencil-fill)');
        this.Maincheckbox = page.getByRole('checkbox').first();
        this.Deletconfirmbtn = page.getByRole('button', { name: ' Yes, Delete ' });
        this.Deletcancelbtn = page.getByRole('button', { name: ' No, Cancel ' });
        this.Closeconfirmation = page.getByRole('button', { name: '×' });
        //this.EdituserRole = 
        this.EditEmployname = page.getByPlaceholder('Type for hints...');
        this.EditCanclebtn = page.getByRole('button', { name: ' Cancel ' });
        this.EditSavebtn = page.getByRole('button', { name: ' Save ' });

    }
    async gotouser() {
        Admin = new AdminDashbordPage;
        await Admin.UserManegment.click();
        await this.Userbtn.click();

    }

   async systemUser(userName, userRole, employName, status) {

    // Username
    if (userName) {
        await this.Username.fill(userName);
    }

    // 🔥 User Role (Dropdown)
    if (userRole) {
        await this.UserRole.click();
        await this.page.getByRole('option', { name: userRole }).click();
    }

    // Employee Name (Auto-suggestion)
    if (employName) {
        await this.EmployeeName.fill(employName);
        await this.page.getByRole('option').first().click();
    }

    // 🔥 Status (Dropdown) → FIX locator (your getByLabel won't work)
    if (status) {
        
        await Status.click();
        await this.page.getByRole('option', { name: status }).click();
    }

    // Search
    await this.Searchbtn.click();
}

}

module.exports = {UserManegment};