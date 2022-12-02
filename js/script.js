
//single item start
$(document).ready(function(){

   $('.wrapper').slick();


});
//single item end

//multiple item start
$(document).ready(function(){
  
	$('.wrapper2').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1
	});

});
//multiple item end
//responsive item start
$(document).ready(function(){
  
	$('.wrapper3').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll:2,
	   speed: 300,
	   arrows: false,




		 responsive: [
		    {
		      breakpoint: 991,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 575,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
	  
	    ]
	

	});



});
//responsive item end
//Center Mode start
$(document).ready(function(){
	$('.wrapper4').slick({
	  centerMode: true,
	  centerPadding: '60px',
	  slidesToShow: 3,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
});


});
//Center Mode end
//lazy loading start

//lazy loading end
//autoplay start
$(document).ready(function(){

	$('.wrapper5').slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    autoplay: true,
	    autoplaySpeed: 2000,
	  });


});
//autoplay end
//fade start
  $(document).ready(function(){

	$('.wrapper6').slick({
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear'
	});


});

//fade end  
//Variable Width start
$(document).ready(function(){

	$('.wrapper7').slick({
	  infinite: true,
	  speed: 300,
	  slidesToShow:4,
	  centerMode: true,
	
	});


});
//Variable Width end

$(document).ready(function(){
	
			$('.slider-nav').slick({
				 slidesToShow: 1, 
				 slidesToScroll: 1, 
				 arrows: false, 
				 fade: true, 
				 asNavFor: '.slider-for' 
			}); 
			$('.slider-for').slick({
				 slidesToShow: 3, 
				 slidesToScroll: 1, 
				 asNavFor: '.slider-nav', 
				 centerMode: true, 
				 focusOnSelect: true 
			});
	


});


//Slider Syncing start
$(document).ready(function(){

			$('.slider-nav').slick({
			 slidesToShow: 1, 
			 slidesToScroll: 1, 
			 arrows: false, 
			 fade: true, 
			 asNavFor: '.slider-for' 
			}); 
			$('.slider-for').slick({
			 slidesToShow: 3, 
			 slidesToScroll: 1, 
			 asNavFor: '.slider-nav', 
			 dots: true, 
			 centerMode: true, 
			 focusOnSelect: true 
			});

});

//Slider Syncing end