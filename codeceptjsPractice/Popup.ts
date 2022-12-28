import { assert } from "console";

Feature('popup');

Scenario('Practice on iframes and Dropdown', async ({I})=>
{
    I.amOnPage('https://codenboxautomationlab.com/practice/')
    let title = await I.grabTitle();
    console.log(title)

 

    // Prompt Popup

    I.fillField('input[id="name"]','shashidhar')
    I.amAcceptingPopups();
    I.click('//input[@id="confirmbtn"]');
    const text = await I.grabPopupText();
    console.log(text);

    let assert = require('assert')
    await assert.equal('Hello shashidhar, Are you sure you want to confir',text)

    I.acceptPopup();

   
    I.fillField('input[id="name"]','shashidhar')
    I.amCancellingPopups();
    I.click('//input[@id="confirmbtn"]')
    const text1 = await I.grabPopupText();
    console.log(text1)

    await assert.equal('Hello shashidhar, Are you sure you want to confirm?',text1)
    I.cancelPopup()


    // Alert Popup
    I.fillField('input[id="name"]','shashidhar')
    I.click('//input[@id="alertbtn"]')
    console.log(await I.grabPopupText())
    I.acceptPopup();
})



