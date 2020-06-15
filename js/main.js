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
      $('.gift-content-slider .row').slick({
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

//item handel

$("#send-review").on("click",function(){
  const rate = $("#star-rate").val();
  const message = $("#message-text").val();
  if(validator.isEmpty(rate)){
    $("#star-rate").addClass("is-invalid");
    return false;
  } else{
    $("#star-rate").removeClass("is-invalid");
    $("#star-rate").addClass("is-valid");
  }

  if(validator.isEmpty(message) || !validator.isAlphanumeric(message,['en-US'])){
    $("#message-text").addClass("is-invalid");
    return false;
  } else{
    $("#message-text").removeClass("is-invalid");
    $("#message-text").addClass("is-valid");
  }
  return;
});


$("#message-text").on("change",function(){
  const message = $("#message-text").val();
  if(validator.isEmpty(message) || !validator.isAlphanumeric(message,['en-US'])){
    $("#message-text").addClass("is-invalid");
    return false;
  } else{
    $("#message-text").removeClass("is-invalid");
    $("#message-text").addClass("is-valid");
  }
});

$("#star-rate").on("change",function(){
  const rate = $("#star-rate").val();
  if(validator.isEmpty(rate)){
    $("#star-rate").addClass("is-invalid");
    return false;
  } else{
    $("#star-rate").removeClass("is-invalid");
    $("#star-rate").addClass("is-valid");
  }
});









var items = document.getElementById("items");
var shoppingsec1 = document.getElementById("shoppingsec1");
var btnInc = document.getElementById("increment-item");
var btnDec = document.getElementById("decrement-item");


let currentUser = {
    firstname :"Mohamed",
    email:"example@gmail.com",
    items :[{
        id: '123456755559',
        price: '$19.99',
        quantity: 1     
    },
    {
        id: '123456788889',
        price: '$54.00',
        quantity: 2 
    }]
};

function show(){
    
    var itemsHtml="";
    for(var i = 0 ; i < currentUser.items.length ; i++){
        itemsHtml+=`    <!-- itemblock -->
        <div class="row d-flex flex-row justify-content-center item-block mt-4 p-0 m-0" data-aos="flip-left">
            <!-- img -->
            <div class="col-12 col-md-12 col-lg-4 item-img d-flex flex-column align-items-center">
                <img class="w-100 img-fluid p-0 m-0" src="images/w5.jpg">
            </div>
            <!-- item-block-data -->
            <div class="row col-12  col-md-12 col-lg-8 item-block-data p-0 m-0">
                <h5 class="p-0 m-0 mt-2 ml-2"><strong>Lorem ipsum dolor, sit amet.</strong></h5>
                <div class="row col-12 p-0 m-0">
                    <!-- itemblockdata-inner1 -->
                    <div class="itemblockdata-inner1 col-6 col-sm-6 col-md-6 d-flex flex-column align-items-between align-content-between">
                        <h6>`+currentUser.items[i].price+`</h4>
                        <p class="remove-item">Remove</p>
                    </div>
                    <!-- itemblockdata-inner1 -->
                    <!-- itemblockdata-inner2 -->
                    <div class="itemblockdata-inner2 col-6 col-sm-6 col-md-6 d-flex d-flex flex-column align-items-center align-content-start">
                        <div class="modify-item d-flex flex-column align-items-center align-content-center ">
                            <h5><strong>Quantity</strong></h5>
                            <div class="modify-group d-flex flex-row justify-content-between d-flex align-items-center text-center">
                                <button type="button" class="btn btn-secondary mt-0 mb-0 pt-0 pb-0" id="decrement-item">-</button>
                                <p class="item-quantity mt-0 mb-0 pt-0 pb-0 mr-3 ml-3">`+currentUser.items[i].quantity+`</p>
                                <button type="button" class="btn btn-secondary mt-0 mb-0 pt-0 pb-0" id="increment-item">+</button>
                            </div>                                  
                        </div>
                        <p class="pt-1">$0.00</p>
                    </div>
                    <!-- itemblockdata-inner2 -->
                </div>
            </div>
            <!-- item-block-data -->
        </div>
        <!-- itemblock -->`
    }
    // console.log(itemsHtml);
    shoppingsec1.innerHTML += itemsHtml;
}
show();

/////////////////////////////////////////////
// page2

$(".tab").each(function(e){
    if($(this).attr("toggle") == "0"){
        $(this).siblings(".content").css("display","none ");
    }
})

$(".tab").click(function(){
    console.log("dsfsdfsdf")
    if($(this).attr("toggle") == "1"){
        console.log("11111111")
        $(this).attr("toggle","0")
        $(this).siblings(".content").children().slideUp()
        $(this).siblings(".content").slideUp();
        // $(this).siblings().slideUp()
    }
    else{
        console.log("000000")
        $(this).attr("toggle","1")
        $(this).siblings(".content").slideToggle() 
        $(this).siblings(".content").children().slideDown()
    }
});

