const { login } = require('../pages/login');
const { Homepage } = require('../pages/Homepage');
const { AdminDashbordPage } = require('../pages/Admin/AdminDashbordPage');
const { UserManegment } = require('../pages/Admin/UserManagement');

class POM {
   constructor(page){
     this.page = page;
     this.Login = new login(this.page);
     this.homepage = new Homepage(this.page);
     this.adminDashbord = new AdminDashbordPage(this.page);
     this.userManegment = new UserManegment(this.page);

   }

   getLoginPage(){
    return this.Login;
   }
   getHomepage(){
    return this.homepage;

   }
   getAdminDashbord(){
    return this.adminDashbord;
   }
   getUserManegment(){
    return this.userManegment;
   }

}

module.exports = {POM}