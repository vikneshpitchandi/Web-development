function ValidateEmail(MailText,PasswordText)
{
	
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var passwordformat = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
	var emailformat_notvalid=0;
	var passwordformat_notvalid=0;
	var emailempty_valid=0;
	var passwordempty_valid=0;
    $(PasswordText).removeClass("invalid");
    $(MailText).removeClass("invalid");
	if(PasswordText.value== "" || MailText.value== "")
	{
		if(PasswordText.value== "" && MailText.value== "")
		{
			 
			  $(PasswordText).parent().find("label").attr('data-error' , 'Please enter the password');
			  $(PasswordText).removeClass("valid");
			  $(PasswordText).addClass("invalid");
			  $(PasswordText).parent().find("label").addClass("active");
			  
			  passwordempty_valid=1;
			  
			  $(MailText).parent().find("label").attr('data-error' , 'Please enter the Mailid');
			  $(MailText).removeClass("valid");
			  $(MailText).addClass("invalid");
			  $(MailText).parent().find("label").addClass("active");
			  
			  emailempty_valid=1;
			  return false
		 }
		else if(MailText.value=="" && PasswordText!="")
		{
			   $(MailText).parent().find("label").attr('data-error' , 'Please enter the Mailid');
			   $(MailText).removeClass("valid");
			   $(MailText).addClass("invalid");
			   $(MailText).parent().find("label").addClass("active");
			   
			   emailempty_valid=1;
			   
			   if(!PasswordText.value.match(passwordformat))
			   {
				  $(PasswordText).parent().find("label").attr('data-error' , 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters');
				  $(PasswordText).removeClass("valid");
				  $(PasswordText).addClass("invalid");
				  $(PasswordText).parent().find("label").addClass("active");
				  
				  passwordformat_notvalid=1;
			   }
			   return false
		}
		else if(PasswordText.value=="" && MailText.value!="")
		{
			  $(PasswordText).parent().find("label").attr('data-error' , 'Please enter the password');
			  $(PasswordText).removeClass("valid");
			  $(PasswordText).addClass("invalid");
			  $(PasswordText).parent().find("label").addClass("active");
			  
			  passwordempty_valid=1;
			  
			  if(!MailText.value.match(mailformat))
			  {
				   $(MailText).parent().find("label").attr('data-error' , 'wrong mail format');
				   $(MailText).removeClass("valid");
				   $(MailText).addClass("invalid");
				   $(MailText).parent().find("label").addClass("active");
				   
				   emailformat_notvalid=1;
			  }
				 
			  return false
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
			{
				  $(PasswordText).parent().find("label").attr('data-error' , 'Must contain atleast one number and one uppercase and lowercase letter, and at least 8 or more characters');
				  $(PasswordText).removeClass("valid");
				  $(PasswordText).addClass("invalid");
				  $(PasswordText).parent().find("label").addClass("active");
				  
				  passwordformat_notvalid=1;
			}
			if(!MailText.value.match(mailformat))
			{
				   $(MailText).parent().find("label").attr('data-error' , 'wrong mail format');
				   $(MailText).removeClass("valid");
				   $(MailText).addClass("invalid");
				   $(MailText).parent().find("label").addClass("active");
				   
				   emailformat_notvalid=1;
			}
			return false;
		}

		
	}
	
}