package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\himanshuagrawal\\Desktop\\cucumber\\Project\\src\\main\\java\\Feature\\mobileApp.feature"
		,glue= {"StepDefination"}
		,format = {"pretty","html:test-output"}
		
		)

public class RunnerClass {

}
