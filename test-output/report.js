$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/himanshuagrawal/Desktop/cucumber/Project/src/main/java/Feature/mobileApp.feature");
formatter.feature({
  "line": 1,
  "name": "Application launch",
  "description": "",
  "id": "application-launch",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "paytm login application",
  "description": "",
  "id": "application-launch;paytm-login-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Desired Capabilities and device are ready",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Application lauched on device succesfully",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user select the lanuage",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enter Phone Number",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "verify that user login correctly",
  "keyword": "And "
});
formatter.match({
  "location": "PaytmApplicationLogin.Desired_Capabilities_device()"
});
formatter.result({
  "duration": 90098698,
  "status": "passed"
});
formatter.match({
  "location": "PaytmApplicationLogin.application_lauched_on_device_succesfully()"
});
formatter.result({
  "duration": 73014,
  "status": "passed"
});
formatter.match({
  "location": "PaytmApplicationLogin.user_select_the_lanuage()"
});
formatter.result({
  "duration": 57991,
  "status": "passed"
});
formatter.match({
  "location": "PaytmApplicationLogin.user_enter_Phone_Number()"
});
formatter.result({
  "duration": 64601,
  "status": "passed"
});
formatter.match({
  "location": "PaytmApplicationLogin.user_click_on_login_button()"
});
formatter.result({
  "duration": 79324,
  "status": "passed"
});
formatter.match({
  "location": "PaytmApplicationLogin.verify_that_user_login_correctly()"
});
formatter.result({
  "duration": 2098177,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Test]\u003e but was:\u003c[test1]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat StepDefination.PaytmApplicationLogin.verify_that_user_login_correctly(PaytmApplicationLogin.java:47)\r\n\tat ✽.And verify that user login correctly(C:/Users/himanshuagrawal/Desktop/cucumber/Project/src/main/java/Feature/mobileApp.feature:10)\r\n",
  "status": "failed"
});
});