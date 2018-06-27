$(document).ready(function(){
	var step=0;
	var step1=0;
	var step2=0;
    $('.deals_item .rightarrow_rowcarousel').click(function(){ 
    	//decrement if and only if step value is greater than -66 otherwise same value will be there so the carousel will not slide
    	if(step>-66)
    	step=step-33;
        $('.deals_item .rowcarousel').css('transform', 'translateX(' + step + '%)');
        //if carousel reaches the end hide the right arrow
        if(step==-66)
        $('.deals_item .rightarrow_rowcarousel').css('visibility','hidden');
        //if carousel is not at the beginning display the left arrow
        if(step<0)
        $('.deals_item .leftarrow_rowcarousel').css('visibility','initial');  	
    });


    /* left arrow function*/
    $('.deals_item .leftarrow_rowcarousel').click(function(){ 
    	//increment if and only if step value is less than 0 otherwise same value will be there so the carousel will not slide
         if(step<0)
    	step=step+33;
       $('.deals_item .rowcarousel').css('transform', 'translateX(' + step + '%)')
       //if carousel is at the beginning hide the left arrow
       if(step==0)
        $('.deals_item .leftarrow_rowcarousel').css('visibility','hidden'); 
    //if carousel reaches is not at the end of carousel show the right arrow
        if(step>-66)
        $('.deals_item .rightarrow_rowcarousel').css('visibility','initial');  	
    });


    $('.topselling_mobiles .rightarrow_rowcarousel').click(function(){ 
    	//decrement if and only if step value is greater than -66 otherwise same value will be there so the carousel will not slide
    	if(step1>-55)
    	{
    	if(step1==-40)
    	{
    		step1=step1-15;
    	}	
    	else
    	{
    	step1=step1-40;
        }
        }
        $('.topselling_mobiles .rowcarousel').css('transform', 'translateX(' + step1 + '%)');
        //if carousel reaches the end hide the right arrow
        if(step1==-55)
        $('.topselling_mobiles .rightarrow_rowcarousel').css('visibility','hidden');
        //if carousel is not at the beginning display the left arrow
        if(step1<0)
        $('.topselling_mobiles .leftarrow_rowcarousel').css('visibility','initial');  	
    });


    /* left arrow function*/
    $('.topselling_mobiles .leftarrow_rowcarousel').click(function(){ 
    	//increment if and only if step value is less than 0 otherwise same value will be there so the carousel will not slide
         if(step1<0)
         {
           if(step1==-55)
           {
           	step1=step1+15;
           }
           else
           {
    	    step1=step1+40;
    	   }
         }
       $('.topselling_mobiles .rowcarousel').css('transform', 'translateX(' + step1 + '%)')
       //if carousel is at the beginning hide the left arrow
       if(step1==0)
        $('.topselling_mobiles .leftarrow_rowcarousel').css('visibility','hidden'); 
    //if carousel reaches is not at the end of carousel show the right arrow
        if(step1>-55)
        $('.topselling_mobiles .rightarrow_rowcarousel').css('visibility','initial');  	
    });


    $('.electronic_accessories .rightarrow_rowcarousel').click(function(){ 
    	//decrement if and only if step value is greater than -66 otherwise same value will be there so the carousel will not slide
    	if(step2>-55)
    	{
    	if(step2==-40)
    	{
    		step2=step2-15;
    	}	
    	else
    	{
    	step2=step2-40;
        }
        }
        $('.electronic_accessories .rowcarousel').css('transform', 'translateX(' + step2 + '%)');
        //if carousel reaches the end hide the right arrow
        if(step2==-55)
        $('.electronic_accessories .rightarrow_rowcarousel').css('visibility','hidden');
        //if carousel is not at the beginning display the left arrow
        if(step2<0)
        $('.electronic_accessories .leftarrow_rowcarousel').css('visibility','initial');  	
    });


    /* left arrow function*/
    $('.electronic_accessories .leftarrow_rowcarousel').click(function(){ 
    	//increment if and only if step value is less than 0 otherwise same value will be there so the carousel will not slide
         if(step2<0)
         {
           if(step2==-55)
           {
           	step2=step2+15;
           }
           else
           {
    	    step2=step2+40;
    	   }
         }
       $('.electronic_accessories .rowcarousel').css('transform', 'translateX(' + step2 + '%)')
       //if carousel is at the beginning hide the left arrow
       if(step2==0)
        $('.electronic_accessories .leftarrow_rowcarousel').css('visibility','hidden'); 
    //if carousel reaches is not at the end of carousel show the right arrow
        if(step2>-55)
        $('.electronic_accessories .rightarrow_rowcarousel').css('visibility','initial');  	
    });
});