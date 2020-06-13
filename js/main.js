/*
Auther Name : Route Team 12
*/
//import validator library

import validator from "./validator.js";

$("document").ready(function(){
    //for slider
    $('.carousel').carousel({
        interval: 6000
      });
      $(function(){
        "use strict";
        $(window).on("scroll",function(){
          $(window).scrollTop()>300?$(".scroll-up").fadeIn(2300):$(".scroll-up").fadeOut(2300);
        });
      });
      $(function(){
        "use strict";
        $(window).on("scroll",function(){
          $(window).scrollTop()>50?$("#up").addClass("postionTop"):$("#up").removeClass("postionTop");
        });
      });
      $('.gift-content .row').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        arrows:true,
        prevArrow:`<div class="navigation-perv">
                  <span class="gift-perv slick-prev slick-arrow" aria-label="Previous">&LessLess;</span>
                  </div>`,
        nextArrow:`<div class="navigation-next">
                  <span class="gift-next slick-nexr slick-arrow" aria-label="Next" >&GreaterGreater;</span>
                  </div>`,
      });
});

//footer seaction

/*footer Subscribe*/
$("#exampleInputEmail1").on("change",function(){
  "use strict";
  let email = $("#exampleInputEmail1").val();
  if(!validator.isEmail(email)){
    $("#hintMessage").html("Your value <strong> "+email+" </strong> is not email");
    $('#myModal').modal('show');
  }
});
/*footer Subscribe*/
$("#subscribe").on("click",function(){
  "use strict";
  let email = $("#exampleInputEmail1").val();
  if(validator.isEmpty(email)){
    $("#hintMessage").text("you can't enter empty value");
    $('#myModal').modal('show');
    return false;
  } else if (!validator.isEmail(email)){
    $("#hintMessage").html("Your value <strong> "+email+" </strong> is not email");
    $('#myModal').modal('show');
    return false;
  } else{
    return true;
  }
});

//navBar seaction
$("#searchInput").on("change",function(){
  "use strict";
  let search = $("#searchInput").val();
  if (!validator.isAlphanumeric(search, ['en-US'])){
    $("#hintMessage").html("Your value <strong> "+search+" </strong> is not letter");
    $('#myModal').modal('show');
  }
});
/*search button*/
$("#searchButton").on("click",function(){
  "use strict";
  let search = $("#searchInput").val();
  if(validator.isEmpty(search)){
    $("#hintMessage").text("you can't enter empty value");
    $('#myModal').modal('show');
    return false;
  } else if (!validator.isAlphanumeric(search, ['en-US'])){
    $("#hintMessage").html("Your value <strong> "+search+" </strong> is not letter");
    $('#myModal').modal('show');
    return false;
  } else{
    return true;
  }
});

/*gift favorite*/
$(".g-fav").on("click", function(e){
  "use strict";
  //css("color","red");
  if($(e.target).css("color")==="rgb(33, 37, 41)"){
    $(e.target).css("color","red");
  } else{
    $(e.target).css("color","rgb(33, 37, 41)");
  }
});

/*menu*/
$("#menu").on("click",function(){
  "user strict";
  $(".menu-bars").slideToggle(600);
});

//close
$(".close").on("click",function(){
  "user strict";
  $(".menu-bars").slideToggle(500);
});
