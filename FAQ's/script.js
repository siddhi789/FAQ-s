$("#q1").click(function() {
    $("#a1").animate({
        width:  [ "toggle", "swing" ],
        height: [ "toggle", "swing" ],
        opacity: "toggle"
      }, "slow" );
    $("#arrow1-down, #arrow1-up").toggleClass("collapse");
   })

   $("#q2").click(function() {
    $("#a2").animate({
        
        height: [ "toggle", "swing" ],
        opacity: "toggle"
      }, "slow" );
    $("#arrow2-down, #arrow2-up").toggleClass("collapse");
   })

   $("#q3").click(function() {
    $("#a3").animate({
    
        height: [ "toggle", "swing" ],
        opacity: "toggle"
      }, "slow" );
    $("#arrow3-down, #arrow3-up").toggleClass("collapse");
   })

   $("#q4").click(function() {
    $("#a4").animate({
       
        height: [ "toggle", "swing" ],
        opacity: "toggle"
      }, "slow" );
    $("#arrow4-down, #arrow4-up").toggleClass("collapse");
   })











  

//    shorthand code

//    $(".question").click(function() {
//     $(this).next().fadeToggle("fast");
//     $(this).children().toggleClass("collapse");
//    })