function ValidateEmail(MailText,PasswordText)
{
	
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var passwordformat = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
	var emailformat_notvalid=0;
	var passwordformat_notvalid=0;
	var emailempty_valid=0;
	var passwordempty_valid=0;
	//alert(MailText);
	//***********************************makes the input class to be valid on each call of function*********************************//
    $(PasswordText).removeClass("invalid");
    $(MailText).removeClass("invalid");
	if(PasswordText.value== "" || MailText.value== "")
	{
	    if(PasswordText.value=="" && MailText.value=="")
		{     
	          passwordempty_valid=1;
		      emailempty_valid=1;
	    }
		else if(MailText.value== "" && PasswordText!="")
		{      
	            emailempty_valid=1;
			     if(!PasswordText.value.match(passwordformat))
			         passwordformat_notvalid=1;
		}
		else if(PasswordText.value=="" && MailText.value!="")
		{
			   passwordempty_valid=1;
			  
			  if(!MailText.value.match(mailformat))
			     emailformat_notvalid=1;
		}
			
	}
	else
	{
		 if(PasswordText.value.match(passwordformat) && MailText.value.match(mailformat))
		{
			
			return true;
		}
		else if(!PasswordText.value.match(passwordformat) || !MailText.value.match(mailformat))
		{
			
			if(!PasswordText.value.match(passwordformat))
			     passwordformat_notvalid=1;
			
			if(!MailText.value.match(mailformat))
			
				emailformat_notvalid=1;
		}

	}
	if(emailempty_valid)
	{
		       $(MailText).parent().find("label").attr('data-error' , 'Please enter the Mailid');
			   $(MailText).removeClass("valid");
			   $(MailText).addClass("invalid");
			   $(MailText).parent().find("label").addClass("active");
	}
	if(passwordempty_valid)
	{
			  $(PasswordText).parent().find("label").attr('data-error' , 'Please enter the password');
			  $(PasswordText).removeClass("valid");
			  $(PasswordText).addClass("invalid");
			  $(PasswordText).parent().find("label").addClass("active");
			  
	}
	if(emailformat_notvalid)
	{
			  $(MailText).parent().find("label").attr('data-error' , 'wrong mail format');
			  $(MailText).removeClass("valid");
			  $(MailText).addClass("invalid");
			  $(MailText).parent().find("label").addClass("active");
	}
	if(passwordformat_notvalid)
	{
			  $(PasswordText).parent().find("label").attr('data-error' , 'Must contain atleast one number and one uppercase and lowercase letter, and at least 8 or more characters');
			  $(PasswordText).removeClass("valid");
			  $(PasswordText).addClass("invalid");
			  $(PasswordText).parent().find("label").addClass("active");
					  
	}
	return false;
	
}