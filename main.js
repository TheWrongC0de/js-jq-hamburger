$(document).ready(function () {

    $(".fas.fa-bars").on({
        click: function () {
            $(".hamburger-menu").fadeIn();

        },
        mouseenter: function(){
            $(".fas.fa-bars").css("color","blue");
        },
        mouseleave: function(){
            $(".fas.fa-bars").css("color","inherit");
        }

    });

    $(".fas.fa-times").on({
        click: function () {
            $(".hamburger-menu").fadeOut();

        },
        mouseenter: function () {
            $(".fas.fa-times").css("color", "blue");
        },
        mouseleave: function () {
            $(".fas.fa-times").css("color", "inherit");
        }

    });
  };
