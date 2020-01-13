$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/himanshuagrawal/Desktop/cucumber/Project/src/main/java/Feature/Webapplication.feature");
formatter.feature({
  "line": 1,
  "name": "web Application launch",
  "description": "",
  "id": "web-application-launch",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Web login application",
  "description": "",
  "id": "web-application-launch;web-login-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Browser open",
  "keyword": "Given "
});
formatter.match({
  "location": "PaytmApplicationLogin.browser_open()"
});
formatter.result({
  "status": "skipped"
});
});