import { assert } from "console";

Feature('login');

Scenario('test something', async ({ I }) => {
    I.amOnPage('https://admin-demo.nopcommerce.com/login');
    I.fillField("//input[@id='Email']",'admin@yourstore.com');
    I.fillField("//input[@id='Password']",'admin');
    I.pressKey('Enter');
    // I.click("//button[@type='submit']");
    // pause();
    I.wait(5);
    I.waitForElement("//a[@href='#']//p[contains(text(),'Customers')]//i",'10')
    I.click("//a[@href='#']//p[contains(text(),'Customers')]//i");
    I.waitForElement("//a[@href='/Admin/Customer/List']//p[contains(text(),'Customers')]",'5')
    I.click("//a[@href='/Admin/Customer/List']//p[contains(text(),'Customers')]");
    I.click("//a[@class='btn btn-primary']");
    I.fillField("//input[@id='Email']",'shashi@gmail.com');
    I.fillField("//input[@id='FirstName']",'Amarannavar');
    I.click("//input[@id='Gender_Male']");
    I.click("//button[@name='save']");
    // I.see('The new customer has been added successfully.',"//div[@class='alert alert-success alert-dismissable']");
    // const message =  await I.grabTextFrom("//div[@class='alert alert-success alert-dismissable']");

    console.log(await I.grabTextFrom("//li[normalize-space()='Email is already registered']"))
    
});
