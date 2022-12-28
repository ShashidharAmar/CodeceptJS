import { assert } from "console";

Feature('Handling tabs');

Scenario('Practice on Tabs', async ({I})=>
{
    I.amOnPage('https://codenboxautomationlab.com/practice/')

    I.click('//a[@id="opentab"]')

    // number of tabs open
    let tabs = await I.grabNumberOfOpenTabs();
    console.log(tabs)

    // Handling tabs
    I.switchToNextTab()

    I.click("//ul[@Class='dropdown']//li//a[contains(text(),'Contact')]")
    const  contactus = await I.grabTextFrom('//h1[@class="title"]')
    console.log(contactus)
    I.wait(5)

});