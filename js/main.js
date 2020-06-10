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
          $(window).scrollTop()>300?$(".scroll-up").fadeIn(2300):$(".scroll-up").fadeOut(2300)
        });
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
  if (!validator.isAlpha(search, ['en-US'])){
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
  } else if (!validator.isAlpha(search, ['en-US'])){
    $("#hintMessage").html("Your value <strong> "+search+" </strong> is not letter");
    $('#myModal').modal('show');
    return false;
  } else{
    return true;
  }
});
