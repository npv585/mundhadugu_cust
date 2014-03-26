
if((navigator.userAgent.match(/iPhone/i)) || 
   (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))){
    $(window).load(function() {

      $('#slider').nivoSlider({effect: 'slideRight'});
        $('#slider2').nivoSlider({effect: 'slideRight'});
        $('#slider3').nivoSlider({effect: 'slideRight'});
        $('#slider4').nivoSlider({effect: 'slideRight'});
        $('#slider5').nivoSlider({effect: 'slideRight'});
        $('#slider6').nivoSlider({effect: 'slideRight'});
        $('#sliderBranding').nivoSlider({effect: 'slideRight'});
      });
}
else
{
  $(document).ready(function () {
      $("body").queryLoader2({
          barColor: "#ffffff",
          backgroundColor: "#00CCFF",
          percentage: true,
          barHeight: 1,
          completeAnimation: "grow",
          minimumTime: 100
      });

  //Contact Page
    $("#sendMessage").click(function() {

          var msg = "";
               
          var name = $("#senderName").val();
          var senderEmail = $("#senderEmail").val();
          var spamFilter = $("#spamCheck").val();
          var message = $("#message").val();

            if (senderEmail ==null || senderEmail==""){
                  msg += "Your email address is missing. </br>";
            }

            if (name ==null || name==""){
                  msg += "Please tell me your name. </br>";
            }

            if (message ==null || message==""){
                  msg += "Please tell me what you are inquiring about. </br>";
            }
 
            if (msg.length>0) {
              $(".statusMessage").html(msg),
              $(".statusMessage").fadeIn(500)
              return false;
            }

                $("#contactForm").fadeOut(500);
                $(".statusMessage").html("Sending email...");
                $(".statusMessage").fadeIn(500); 

          var form_data = {
            name: $("#senderName").val(),
            senderEmail: $("#senderEmail").val(),
            senderName: $("#senderName").val(),
            spamFilter: $("#spamCheck").val(),
            message: $("#message").val(), 
          };

          $.ajax({
            url: "email.php",
            data: form_data,
            dataType: 'json',
            success: function(data)
            {
              var status = data[0];
              var msg = data[1];
              if(status == 'success')
                $("#contactForm").fadeOut(500),
                $(".statusMessage").html(msg),
                $(".statusMessage").fadeIn(500),
                $(".statusMessage").delay(2000).fadeOut(500),
                $("#contactForm").delay(3000).fadeIn(500)
                else
                $("#contactForm").fadeOut(500),
                $(".statusMessage").html(msg),
                $(".statusMessage").fadeIn(500),
                $(".statusMessage").delay(2000).fadeOut(500),
                $("#contactForm").delay(3000).fadeIn(500)
            }
          });
           return false;
  });
//});

  });
  $(window).load(function() {

      $('#slider').nivoSlider({effect: 'fade'});
        $('#slider2').nivoSlider({effect: 'fade'});
        $('#slider3').nivoSlider({effect: 'fade'});
        $('#slider4').nivoSlider({effect: 'fade'});
        $('#slider5').nivoSlider({effect: 'fade'});
        $('#slider6').nivoSlider({effect: 'fade'});
        $('#sliderBranding').nivoSlider({effect: 'fade'});
       // Home Page Animation

        $('#logo').css({'opacity' : 0, 'top' : '-1000px'});
        $('#logo').animate({
          opacity: 1,
          top: 140
        }, 1500 );

 /*        $("#logo").hover(
          function() {
          $("#branding").animate({"left": "310"}, "fast");
          },
          function() {
          $("#branding").animate({"left": "155"}, "slow");
          });

         $("#logo").hover(
          function() {
          $("#interactive").animate({"left": "310"}, "fast");
          },
          function() {
          $("#interactive").animate({"left": "0"}, "slow");
          });

         $("#logo").hover(
          function() {
          $("#about").animate({"left": "310"}, "fast");
          },
          function() {
          $("#about").animate({"left": "635"}, "slow");
          });

         $("#logo").hover(
          function() {
          $("#contact").animate({"left": "310"}, "fast");
          },
          function() {
          $("#contact").animate({"left": "790"}, "slow");
          });*/

        $('#branding').css({'opacity' : 0, 'left' : '310px'});
        $('#branding').delay(1500).animate({
          opacity: .6,
          left: 155
        }, 1500 );
        $("#branding").hover(
          function() {
          $(this).animate({"opacity": "1"}, "slow");
          },
          function() {
          $(this).animate({"opacity": ".6"}, "slow");
          });

        $('#interactive').css({'opacity' : 0, 'left' : '155px'});
        $('#interactive').delay(2500).animate({
          opacity: .6,
          left: 0
        }, 1500 );
         $("#interactive").hover(
          function() {
          $(this).animate({"opacity": "1"}, "slow");
          },
          function() {
          $(this).animate({"opacity": ".6"}, "slow");
          });

        $('#about').css({'opacity' : 0, 'left' : '479px'});
        $('#about').delay(1500).animate({
          opacity: .6,
          left: 635
        }, 1500 );
         $("#about").hover(
          function() {
          $(this).animate({"opacity": "1"}, "slow");
          },
          function() {
          $(this).animate({"opacity": ".6"}, "slow");
          });

        $('#contact').css({'opacity' : 0, 'left' : '635px'});
        $('#contact').delay(2500).animate({
          opacity: .6,
          left: 790
        }, 1500 );
         $("#contact").hover(
          function() {
          $(this).animate({"opacity": "1"}, "slow");
          },
          function() {
          $(this).animate({"opacity": ".6"}, "slow");
          });

        $('#section_home a').css({'opacity' : 0});
        $('#section_home a').delay(3500).animate({
          opacity: 1,
        }, 1500 );

        // Scroll To Properties

        $('#contact a').click(function(){
          $("#branding").animate({"opacity": 0}, "slow");  
          $("#interactive").animate({"opacity": 0}, "slow"); 
          $("#about").animate({"opacity": 0}, "slow");
          $("#contact").delay("500").animate({"left": "320"}, "slow");
            $('body').delay("1000").scrollTo('#section_contact', 800);
          $("#branding").delay("1300").animate({"opacity": .6}, "fast");
          $("#interactive").delay("1300").animate({"opacity": .6}, "fast");
          $("#about").delay("1300").animate({"opacity": .6}, "fast");
          $("#contact").delay("2000").animate({"left": "790"}, "fast");
        return false;
        });

        $('#about a').click(function(){
          $("#branding").animate({"opacity": 0}, "slow");  
          $("#interactive").animate({"opacity": 0}, "slow"); 
          $("#about").delay("500").animate({"left": "320"}, "slow");
          $("#contact").animate({"opacity": 0}, "slow"); 
            $('body').delay("1000").scrollTo('#section_about', 800);
          $("#branding").delay("1300").animate({"opacity": .6}, "fast");
          $("#interactive").delay("1300").animate({"opacity": .6}, "fast");
          $("#about").delay("1300").animate({"left": "635"}, "fast");
          $("#contact").delay("1300").animate({"opacity": .6}, "fast");
        return false;
        });

        $('#branding a').click(function(){
          $("#branding").delay("500").animate({"left": "320"}, "slow");  
          $("#interactive").animate({"opacity": 0}, "slow"); 
          $("#about").animate({"opacity": 0}, "slow");
          $("#contact").animate({"opacity": 0}, "slow"); 
            $('body').delay("1000").scrollTo('#section_branding', 800);
          $("#branding").delay("2000").animate({"left": "155"}, "fast");
          $("#interactive").delay("1300").animate({"opacity": .6}, "fast");
          $("#about").delay("1300").animate({"opacity": .6}, "fast");
          $("#contact").delay("1300").animate({"opacity": .6}, "fast");
        return false;
        });

        $('#interactive a').click(function(){
          $("#branding").animate({"opacity": 0}, "slow");  
          $("#interactive").delay("500").animate({"left": "320"}, "slow");
          $("#about").animate({"opacity": 0}, "slow");
          $("#contact").animate({"opacity": 0}, "slow"); 
            $('body').delay("1000").scrollTo('#section_interactive', 800);
          $("#branding").delay("1300").animate({"opacity": .6}, "fast");
          $("#interactive").delay("2000").animate({"left": "0"}, "fast");
          $("#about").delay("1300").animate({"opacity": .6}, "fast");
          $("#contact").delay("1300").animate({"opacity": .6}, "fast");
        return false;
        });
  });
}

  $(window).load(function() {

      // Slideshow Functions

        $('.scrollContact').click(function(){
            $('body').scrollTo('#section_contact', 800);
        return false;
        });

        // One Page Nav

        $('#nav').onePageNav();

        $('#nav').onePageNav({
          begin: function() {
          console.log('start')
          },
          end: function() {
          console.log('stop')
          }
        });  

    });
