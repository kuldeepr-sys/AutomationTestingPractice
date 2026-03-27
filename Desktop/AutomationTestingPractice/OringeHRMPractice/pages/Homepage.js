class Homepage {
    constructor(page){
        this.page = page;
        this.logo = page.getByAltText('client brand banner');
        this.upgrade = page.getByRole('button',{name:'Upgrade'});
        this.profile = page.getByText('manda user');
        this.search = page.getByPlaceholder('Search');
        this.admin = page.getByRole('link',{name:'Admin'});
        this.pim = page.getByRole('link',{name:'PIM'});
        this.Leave = page.getByRole('link',{name:'Leave'});
        this.Time = page.getByRole('link',{name:'Time'});
        this.Recruitment = page.getByRole('link',{name:'Recruitment'});
        this.MyInfo = page.getByRole('link',{name:'My Info'});
        this.Performance = page.getByRole('link',{name:'Performance'});
        this.Dashboard = page.getByRole('link',{name:'Dashboard'});
        this.Directory = page.getByRole('link',{name:'Directory'});
        this.Maintenance = page.getByRole('link',{name:'Maintenance'});
        this.Claim = page.getByRole('link',{name:'Claim'});
        this.Buzz = page.getByRole('link',{name:'Buzz'});
        this.Slider = page.locator('.oxd-icon-button oxd-main-menu-button'); 
    }
    async gotologo(){
        await this.logo.click();
    }
    async gotoupgrade(){
        await this.upgrade.click();
    }
    async gotoprofile(){
        await this.profile.click();
    }
    async gotosearch(){
        await this.search.click();
    }
    async gotoadmin(){
        await this.admin.click();
    }
    async gotopim(){
        await this.pim.click();
    }
    async gotoLeave(){
        await this.Leave.click();
    }
    async gotoTime(){
        await this.Time.click();
    }
    async gotoRecruitment(){
        await this.Recruitment.click();
    }
    async gotoMyInfo(){
        await this.MyInfo.click();
    }
    async gotoPerformance(){
        await this.Performance.click();
    }
    async gotoDashboard(){
        await this.Dashboard.click();
    }
    async gotoDirectory(){
        await this.Directory.click();
    }
    async gotoMaintenance(){
        await this.Maintenance.click();
    }
    async gotoClaim(){
        await this.Claim.click();
    }
    async gotoBuzz(){
        await this.Buzz.click();
    }
    async gotoSlider(){
        await this.Slider.click();
    }
    
}

module.exports = {Homepage}