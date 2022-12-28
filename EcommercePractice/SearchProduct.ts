import { assert } from "console";


Feature('Checking Element price');

Scenario('Selecting sumsung headphone', async ({I})=>
{

    I.amOnPage('https://ecommerce-playground.lambdatest.io/')
     
    I.waitForElement('//div[@id="entry_217822"]//input[@name="search"]','10')
    I.fillField('//div[@id="entry_217822"]//input[@name="search"]','M')
  
 
    const list=await I.grabTextFromAll('//div[@class="dropdown"]/ul/li/div[@class="caption pl-3"]')
    console.log(list)

    I.click("//div[@class='caption pl-3']/h4/a[contains(text(),'Samsung SyncMaster 941BW')]")

    const title=await I.grabTextFromAll("//div[@id='entry_216816']/h1")
    console.log(title)

    const assert = require("assert")
    await assert.equal("Samsung SyncMaster 941BW",title)



});