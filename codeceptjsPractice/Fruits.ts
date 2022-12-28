import { assert } from "console";


Feature('Checking Element price');

Scenario('fruits name', async ({I})=>
{
    I.amOnPage('https://rahulshettyacademy.com/seleniumPractise/#/')
     
    const cost= await I.grabTextFromAll('//div[@class="products"]//div[@class="product"]/p')
    
    for(let i=0;i<cost.length;i++)
    {     
      if(cost[i]<=20)
      {
        I.click('(//div[@class="product-action"]/button)['+(i+1)+']')
        let  name= await I.grabTextFrom('(//div[@class="product"]/h4)['+(i+1)+']')
        const vegitables = name.split('-')
        console.log(vegitables[0])
         
      } 
      
    }
    
    I.click('[class="cart-icon"]')
    I.click("//div[@class='action-block']/button[contains(text(),'PROCEED TO CHECKOUT')]")
    I.click("//button[contains(text(),'Place Order')]")
    
    I.click('//div[@class="products"]/div/a')
   
    I.switchToNextTab()

    I.click('[class="wrapperTwo"] a')

    // I.closeCurrentTab();

    I.switchToPreviousTab();
    I.wait(4)
    I.click('//div[@class="products"]/div/div/select')
    const country = '//div[@class="products"]/div/div/select'
    I.selectOption(country,'India')
 
    
});