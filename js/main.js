/*=========================================

Template Name: X-ZONE - Corporate HTML5 Responsive Template 
Author: MD Abunaser Khan
Version: 1.0
Design and Developed by: themepark1

NOTE: This is the custom jQuery file for the template

=========================================*/


(function ($) {
	"use strict";
    
    var $window = $(window),
            $body = $('body');
    
    $(document).ready(function($){


	/*-------------------------------------------------------------------------*
	nav item click js
	*-------------------------------------------------------------------------*/
	$(".navbar-nav li a").click(function () {
	$(this).parent().addClass('active').siblings().removeClass('active');

	});
    
    /*===================================
            owl carousel testimonial
     ====================================*/
    $("#silder-carousel").owlCarousel({
        loop:true,
		nav: true,
		items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		smartSpeed: 450,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    });
	
	

	/*===================================
             jQuery mixItUp
     ====================================*/
	  var Container = $('.container');
        Container.imagesLoaded(function () {
            var portfolio = $('.portfolio-menu');
            portfolio.on('click', 'button', function () {
                $(this).addClass('active').siblings().removeClass('active');
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            var $grid = $('#grid').isotope({
                itemSelector: '.grid-item'
            });

        });
	 

	/*---------------------------------------------------
		Counter
	----------------------------------------------------*/
	$('.counter').counterUp({
		delay: 10, // the delay time in ms
		time: 1000 // the speed time in ms
	});
	
	/*---------------------------------------------------
		Partners Brand
	----------------------------------------------------*/
	var slider_brand = $(".partners-brand");
    slider_brand.owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        mouseDrag: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    });
	
	/*---------------------------------------------------
		Partners Brand
	----------------------------------------------------*/
	var slider_brand = $("#testimonial-slider");
    slider_brand.owlCarousel({
        loop: true,
        nav: false,
		items: 1,
		slideSpeed : 800,
        autoplay: true,
        mouseDrag: true,
		navText: [
		  "<i class='fa fa-angle-left'></i>",
		  "<i class='fa fa-angle-right'></i>"
		  ],
    });
	
	 

	/*---------------------------------------------------
		Parallax
	----------------------------------------------------*/
	$(window).stellar();
	
	/*---------------------------------------------------
		Magnific PopUp
	----------------------------------------------------*/
	$('.popup-img').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	$('.popup-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
		disableOn: 300
	});
		
});
	
	 /*---------------------------------------------------
        Smooth Scroll
    ----------------------------------------------------*/
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    /*---------------------------------------------------
        Click To Top
    ----------------------------------------------------*/
     //scroll to top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
    });
    $('#back-top').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
   

}(jQuery));	

