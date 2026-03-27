const {test , expect} = require('@playwright/test');
const {POM} = require('../PageObjectManager/PageObjectManager');
test.beforeEach(async({page})={
    const Objects = new POM(page)

})