$( document ).ready(function() {
    $('.info p').columnize({ columns: 2 });
var Accordion =  (function ( ) {
	var show = function () {
			$('.filter_holder').hide();
			$('.filter_name').on('click',function (e) {
			if(!$(this).hasClass('open')){
			 $(this).siblings('.filter_holder').slideDown('400');
			 $(this).addClass('open');				
			} else {
			$(this).siblings('.filter_holder').slideUp('400');
			$(this).removeClass('open');
			}
			})   
	    };		
		
    return {
    	show : show
};
}());

Accordion.show();

var Slider =  (function ( ) {
	var slide = function  () {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ){
        $( ".amount_min" ).val( "$" + ui.values[ 0 ]);
        $( ".amount_max" ).val( "$" + ui.values[ 1 ]);
      }
    });
    $( ".amount_min" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ));
    $( ".amount_max" ).val( "$" + $( "#slider-range" ).slider( "values", 1 ));
	}	
		
    return {
    	slide : slide
};
}());
Slider.slide()
});