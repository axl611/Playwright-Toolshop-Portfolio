// Generated from: features/login.feature
import { test } from "playwright-bdd";

test.describe('User Authentication', () => {

  test('User tries to login with valid credentials', { tag: ['@smoke', '@sanity', '@happy-path'] }, async ({ Given, When, Then, page }) => { 
    await Given('The user is in the login page', null, { page }); 
    await When('They input valid credentials', null, { page }); 
    await Then('User is logged and redirected to the dashboard', null, { page }); 
  });

  test('User tries to login with empty fields', { tag: ['@smoke', '@sanity', '@negative'] }, async ({ Given, When, Then, page }) => { 
    await Given('The user is in the login page', null, { page }); 
    await When('They dont input any credentials', null, { page }); 
    await Then('The system displays an error message', null, { page }); 
  });

  test('User tries to login with invalid credentials', { tag: ['@smoke', '@sanity', '@negative'] }, async ({ Given, When, Then, page }) => { 
    await Given('The user is in the login page', null, { page }); 
    await When('They input invalid credentials', null, { page }); 
    await Then('The system displays an error message', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@smoke","@sanity","@happy-path"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is in the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When They input valid credentials","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then User is logged and redirected to the dashboard","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":10,"tags":["@smoke","@sanity","@negative"],"steps":[{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user is in the login page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When They dont input any credentials","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then The system displays an error message","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":16,"tags":["@smoke","@sanity","@negative"],"steps":[{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given The user is in the login page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When They input invalid credentials","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then The system displays an error message","stepMatchArguments":[]}]},
]; // bdd-data-end