import { assert } from "console";


Feature('Checking Element Visible');

Scenario('Element Displayed', async ({I})=>
{
    I.amOnPage('https://codenboxautomationlab.com/practice/')

   

    I.click('//input[@id="hide-textbox"]')
    I.wait(3)
    I.dontSeeElement('//input[@id="displayed-text"]')
    I.click('//input[@id="show-textbox"]') 
    I.wait(3)
    I.seeElement('//input[@id="displayed-text"]')

    const table = await I.grabTextFromAll('//table[@id="product"]/tbody/tr/td')
    // console.log(table)
    for(let i=0;i<table.length;i++)
    {
     
        // console.log(table[i])
        if(table[i]==='Write effective QA Resume that will turn to interview call')
        {
             console.log(table[i])
                
        }

    }

   
    
});
