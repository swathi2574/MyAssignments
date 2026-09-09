/* 1. Load Red Bus in an Edge browser instance and verify the page title and URL.  
2. Load Flipkart in a Webkit browser instance and verify the page title and URL.  */

import {test,  chromium, webkit } from "@playwright/test"

//sampe-practise
/* import test from "@playwright/test";


test ('launch red bus',async ({page}) => {
    await page.goto("https://www.redbus.in/")
}
) */

test ('launch red bus', async () => {
    const broswer = await chromium.launch({ channel : 'msedge'})
    const context = await broswer.newContext();
    const page = await context.newPage();

     await page.goto("https://www.redbus.in/")
      
     console.log(await page.title());
     console.log(await page.url());
     
}
) 

test('launch flipkart ', async() => {
    const browser1 = await webkit.launch()
    const context1 = await browser1.newContext()
    const page1 = await context1.newPage()

    await page1.goto("https://www.flipkart.com/")
    console.log(await page1.title());
    console.log(await page1.url());
    
})
