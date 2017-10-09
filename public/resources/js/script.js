$(document).ready(function(){
 
    $('input:radio[name="accountType"]').change(function() { 
        if($(this).val()=='business') {
            $('#signupBusiness').removeClass('hide') ;
            $('#signupPersonal').addClass('hide') ;
        }
        else {
            $('#signupBusiness').addClass('hide') ;
            $('#signupPersonal').removeClass('hide') ;
        }
    });
    $('ul.selectCategoryMenu li').click(function(e){
        $('ul.selectCategoryMenu li').removeClass('active');
        $(this).addClass('active');
    })
    
  


    
});