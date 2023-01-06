Feature: As a chipotle customer, I want to be able to navigate to chipotle's homepage

@SignIn
Scenario: Customer is displayed with chipotle.com landing page
Given I am on the chipotle website
When I click on Sign In link
Then I should see Sign In Header

@ForgotPassword
Scenario: Customer is displayed with chipotle Forgot Password link
Given I am on the chipotle website
When I click on Sign In link
And I click on Forgot password link
Then I should see Forgot Password header

@CreateAccount
Scenario: Customer is displayed with chipotle Create an account link
Given I am on the chipotle website
When I click on Sign In link
And I click on Create an account link
Then I should see Create an account header

@ChangeCountry
Scenario:Customer is displayed with chipotle Change country link
Given I am on the chipotle website
When I click on Sign In link
And I click on United States link
Then I should see Change country popup

@Nutrition
Scenario:Customer is displayed with chipotle Nutrition link
Given I am on the chipotle.com website
When I click on Nutrition link
And I click on Allergen statement link
Then I should see Allergens & Special Diet header
