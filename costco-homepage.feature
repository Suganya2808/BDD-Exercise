Feature: As a costco customer, I want to be able to navigate to costco's homepage

@Costco @SignIn
Scenario: Customer is displayed with costco.com landing page
Given I am on the costco website
When I click on Sign In/Register link
Then I should see Sign In Header

@Costco @ForgotPassword
Scenario: Customer is displayed with costco Forgot password link
Given I am on the costco website
When I click on Sign In/Register link
And I click on Forgot password link
Then I should see Password Reset header

@Costco @CreateAccount
Scenario: Customer is displayed with costco Create an account link
Given I am on the costco website
When I click on Sign In/Register link
And I click on Create account link
Then I should see Create account header

@Costco @SignIn @RequiredPassword
Scenario: Customer is displayed with costco landing page
Given I am on the costco website
When I click on Sign In/Register link
And I click on Sing In button
Then I should see Password is required text

@Costco @TermsAndConditions
Scenario: Customer is displayed with costco Term and conditions link
Given I am on the costco website
When I click on Sign In/Register link
And I click on Terms and conditions link
Then I should see Please read these terms and conditions content
