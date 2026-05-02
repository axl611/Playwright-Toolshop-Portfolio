// Generated from: features/account/account.feature
import { test } from "playwright-bdd";

test.describe('User account dashboard', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('The user is in the account page', null, { page }); 
  });
  
  test('User wants to check his Favorite', { tag: ['@smoke', '@sanity', '@happy-path'] }, async ({ When, Then, page }) => { 
    await When('The user clicks Favorite CTA', null, { page }); 
    await Then('User is redirected to "/account/favorites"', null, { page }); 
  });

  test('User wants to check his Profile', { tag: ['@smoke', '@sanity', '@happy-path'] }, async ({ When, Then, page }) => { 
    await When('The user clicks Profile CTA', null, { page }); 
    await Then('User is redirected to "/account/profile"', null, { page }); 
  });

  test('User wants to check his Invoices', { tag: ['@smoke', '@sanity', '@happy-path'] }, async ({ When, Then, page }) => { 
    await When('The user clicks Invoices CTA', null, { page }); 
    await Then('User is redirected to "/account/invoices"', null, { page }); 
  });

  test('User wants to check his Messages', { tag: ['@smoke', '@sanity', '@happy-path'] }, async ({ When, Then, page }) => { 
    await When('The user clicks Messages CTA', null, { page }); 
    await Then('User is redirected to "/account/messages"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/account/account.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":["@smoke","@sanity","@happy-path"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is in the account page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When The user clicks Favorite CTA","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then User is redirected to \"/account/favorites\"","stepMatchArguments":[{"group":{"start":22,"value":"\"/account/favorites\"","children":[{"start":23,"value":"/account/favorites","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":12,"tags":["@smoke","@sanity","@happy-path"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is in the account page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When The user clicks Profile CTA","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then User is redirected to \"/account/profile\"","stepMatchArguments":[{"group":{"start":22,"value":"\"/account/profile\"","children":[{"start":23,"value":"/account/profile","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":17,"tags":["@smoke","@sanity","@happy-path"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is in the account page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When The user clicks Invoices CTA","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then User is redirected to \"/account/invoices\"","stepMatchArguments":[{"group":{"start":22,"value":"\"/account/invoices\"","children":[{"start":23,"value":"/account/invoices","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":25,"pickleLine":22,"tags":["@smoke","@sanity","@happy-path"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is in the account page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When The user clicks Messages CTA","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then User is redirected to \"/account/messages\"","stepMatchArguments":[{"group":{"start":22,"value":"\"/account/messages\"","children":[{"start":23,"value":"/account/messages","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end