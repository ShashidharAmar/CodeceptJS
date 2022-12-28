import { assert } from "console";

Feature('iFrames');

Scenario('Practice on iframes and Dropdown', async ({I})=>
{
    I.amOnPage('https://codenboxautomationlab.com/practice/')

    // Hnadling iframes
    I.switchTo('#courses-iframe');
    I.click("//span[@class='genericon genericon-search']")
    I.fillField("//div[@class='container']//input[@placeholder='Search...']", 'shashidhar')

    //  To get attribute value
    let hint = await I.grabAttributeFrom("//div[@class='container']//input[@placeholder='Search...']",'type'); 
    console.log('Attribute value is ='+hint)


    // Handling Dynamic Dropdown
     I.switchTo()

     I.fillField("input#autocomplete",'ind')
     let country=await I.grabTextFromAll('//div[@class="ui-menu-item-wrapper"]')
     console.log(country.length)
     for(var i = 0; i < country.length; i++)
     { 
      console.log(country[i]); 
       if(country[i]==='India') 
       {
           I.click('(//div[@class="ui-menu-item-wrapper"])['+(i+1)+']')
       }
     }
      
    // Static dropdown
   let cource = '//select[@id="dropdown-class-example"]'
   I.selectOption(cource,'API')
    I.wait(5)

})

