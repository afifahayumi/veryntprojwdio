import { Given, When, And,Then } from '@wdio/cucumber-framework';
import homePage from  '../pageobjects/page.js';


const searchinput = 'Customer Solutions'
Given(/^I am on the verynt Page$/, async() => {
    await homePage.open();
});

When(/^I click search$/, async()=> {
    await browser.pause(500);
    await homePage.clickBtnSearch();
});

When(/^I Set customer solution$/, async()=> {
    await browser.pause(500);
    await homePage.txtSearch.setValue(searchinput);
});

Then(/^I can see result on search page$/, async()=> {
    await browser.pause(500);
    let print = await homePage.searchResult();
     await console.log(print); 
});

Then(/^i can see result by Customer Solution$/, async()=> {
    await expect(homePage.result).toHaveTextContaining(searchinput);
    await console.log('**********printed********'); 
});


