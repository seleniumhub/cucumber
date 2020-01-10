Feature: Application launch

Scenario: paytm login application

Given Desired Capabilities and device are ready 
When Application lauched on device succesfully
Then user select the lanuage
Then user enter Phone Number
And user click on login button
And verify that user login correctly 