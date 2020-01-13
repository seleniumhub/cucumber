package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"C:\\Users\\himanshuagrawal\\Desktop\\cucumber\\Project\\src\\main\\java\\Feature\\mobileApp.feature","C:\\Users\\himanshuagrawal\\Desktop\\cucumber\\Project\\src\\main\\java\\Feature\\Webapplication.feature"}
		,glue= {"StepDefination"}
		,format = {"pretty","html:test-output","junit:junit_xml/cucumber.xml"}
		,dryRun =  true ///to validate maping b/w feature & step defination 
		,strict = true, /// it shows error if steps is missing.
		tags = {"@web"}
		
		)

public class RunnerClass {
	


}
