import { assert } from "console";

Feature('Windows');

Scenario('Practice on New Windows', async ({I})=>
{
    I.amOnPage('https://codenboxautomationlab.com/practice/')

    I.click('//button[@id="openwindow"]')

    // To handle new window
    I.switchToNextTab();

    I.click("//ul[@Class='dropdown']//li//a[contains(text(),'Contact')]")
    const  contactus = await I.grabTextFrom('//h1[@class="title"]')
    console.log(contactus)
    I.wait(5)
    
});


