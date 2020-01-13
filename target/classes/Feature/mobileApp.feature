Feature: Application launch
@login
Scenario: paytm login application

Given Desired Capabilities and device are ready 
When Application lauched on device succesfully
Then user select the lanuage
Then user enter Phone Number
And user click on login button
And verify that user login correctly 


@Sceanriooutline
Scenario Outline: Login with multiple User
Then user select the lanuage <language>
Then user enter Phone Number <PhoneNunber>

Examples:
|PhoneNumber|Language|
|9555058096 |English|
|8744940399 |Hindi|





@Regression
Scenario: testScenario for regression
Given for regression given.

@Functional
Scenario: testScenario for functional
Given for functional given.
