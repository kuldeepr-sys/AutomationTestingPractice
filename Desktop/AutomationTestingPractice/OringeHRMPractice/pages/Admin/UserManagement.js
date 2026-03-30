const { AdminDashbordPage } = require('./AdminDashbordPage');
class UserManegment {
    constructor(page) {
        this.page = page;
        this.Userbtn = page.locator('a:has-text("Users")');
        this.Username = page.locator(
  '.oxd-input-group:has(label:has-text("Username")) input'
);
        this.UserRole = page.locator(
            '.oxd-input-group:has(label:has-text("User Role")) .oxd-select-text'
        );
        this.EmployeeName = page.getByPlaceholder('Type for hints...');
        this.Status = page.locator(
  '.oxd-input-group:has(label:has-text("Status")) .oxd-select-text'
);  
        this.Searchbtn = page.getByRole('button', { name: ' Search ' });
        this.Resetbtn = page.getByRole('button', { name: 'Reset ' });
        this.Addbtn = page.getByRole('button', { name: ' Add ' });
        this.Deletebtn = page.locator('button:has(i.bi-trash)');
        this.Editbtn = this.page.locator('button:has(i.bi-pencil-fill)').first();
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
        const admin = new AdminDashbordPage(this.page);

    await admin.gotoUserMgt(); // ✅ clean
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
    await this.Status.click(); // ✅ correct

    await this.page.getByRole('option', { name: status }).click();
}

    // Search
    await this.Searchbtn.click();
}

// async editExistingUser(){
//     await this.Editbtn.click()
// }

async editExistingUser() {
    await this.Editbtn.first().click();
}

async editEmployName(name){
    //await this.EditEmployname.clear();  // ✅ fixed
    await this.EditEmployname.fill(name);
    await this.page.getByRole('option', { name }).click();
}

async deleteSystemUser(i){
    await this.Deletebtn.nth(i).click();
    await this.Deletconfirmbtn.click();
}

async searchByUser(username){
    await this.Username.fill(username);
    await this.Searchbtn.click();
}
}

module.exports = {UserManegment};