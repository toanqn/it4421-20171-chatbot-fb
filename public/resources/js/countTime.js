$(document).ready(function(){
    
    var minute = 0;
    var second = 2;
    var secondVal =0;
    $("#timeout, .checkStt").hide();
    secondVal = window.setInterval(timeSecond,1000);

    function timeSecond() {
      if(second != 0)
        second--;
      else {
        minute--;
        $("#minute").html(minute);
        second = 59;
      }
      if(second>9)
        $("#second").html(second);
      else
        $("#second").html("0"+second);
      
      if(second%2==0)
        $(".time-left").css("color","red");
      else
        $(".time-left").css("color","green");
      
      if(minute==0 && second==0) {
        $("#timeout, .checkStt").show();
        $(".countTime, .bidPlace").hide();
        window.clearInterval(secondVal);
        
        
      }
      
    }
   
  })