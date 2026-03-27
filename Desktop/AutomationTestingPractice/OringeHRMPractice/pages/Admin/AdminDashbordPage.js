class AdminDashbordPage{
    constructor(page){
        this.page = page;
        this.UserManagement = page.getByText('User Management ');
        this.Job = page.getByText('Job ');
        this.Organization = page.getByText('Organization ');
        this.Qualifications = page.getByText('Qualifications ');
        this.Nationalities = page.getByText('Nationalities');
        this.CorporateBranding = page.getByText('Corporate Branding');
        this.Configuration   = page.getByText('Configuration ');
        this.Help = page.getByTitle('Help');
        
    }
    async gotoUserMgt(){
        await this.UserManagement.click();

    }
    async gotojob(){
        await this.Job.click();
    }
    async gotoOrg(){
        await this.Organization.click();
    }
    async gotoQualifications(){
        await this.Qualifications.click();
    }
    async gotoNationalities(){
        await this.Nationalities.click();
    }
    async gotoCorporateBranding(){
        await this.CorporateBranding.click();
    }
    async gotoConfiguration(){
        await this.Configuration.click();
    }
    async gotoHelp(){
        await this.Help.click();
    }
}

module.exports = {AdminDashbordPage};
