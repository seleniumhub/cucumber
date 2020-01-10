package StepDefination;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class PaytmApplicationLogin {
	
	
@Given ("^Desired Capabilities and device are ready$")
	public void Desired_Capabilities_device ()
	{
	
	System.out.println("Desired Capabilities and device are ready");
	}
	


@When("^Application lauched on device succesfully$")
public void application_lauched_on_device_succesfully() throws Throwable {
	System.out.println("Application lauched on device succesfull");
 
}

@Then("^user select the lanuage$")
public void user_select_the_lanuage() throws Throwable {
	System.out.println("user select the lanuage");
}

@Then("^user enter Phone Number$")
public void user_enter_Phone_Number() throws Throwable {
	System.out.println("user enter Phone Number");
    
}

@And("^user click on login button$")
public void user_click_on_login_button() throws Throwable {
	System.out.println("user click on login button"); 
}

@Then("^verify that user login correctly$")
public void verify_that_user_login_correctly() throws Throwable {
	System.out.println("verify that user login correctly"); 
	
	Assert.assertEquals("Test", "test1");
}








}
