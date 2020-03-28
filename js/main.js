var typed = new Typed('#typed', {

    strings: [
                "Power your Business", 
                "Power your Business"
                ],
  
    typeSpeed: 150,
    backspead: 150,
    loop: true
});

// Exploade The Image To Small Parts
$(function(){
    'use strict';
   $(document).on("click", ".explode", function(){
         setTimeout(function() {
            $("#breaking-background").explode({
                maxWidth: 200,
                minWidth:10,
            });
        },500);
       
       setTimeout(function() {
             window.location.href='home.html';
       },3000)
        
   })
   
});