$( document ).ready(function() {
    $('.info p').columnize({ columns: 2 });
var Accordion =  (function ( ) {
	var show = function () {
			$('.filter_holder').hide();
			$('.filter_name').on('click',function (e) {
			if(!$(this).hasClass('open')){
       $(this).children('.arrow').css('background-image', 'url(../img/BigUpArrow.png)');
			 $(this).siblings('.filter_holder').slideDown('400');
			 $(this).addClass('open');				
			} else {
      $(this).children('.arrow').css('background-image', 'url(../img/BigDownArrow.png)');  
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
      max: 13000,
      values: [ 100, 13000 ],
      slide: function( event, ui ){
        $( ".amount_min" ).val(ui.values[ 0 ]);
        $( ".amount_max" ).val(ui.values[ 1 ]);
      }
    });
    $( ".amount_min" ).val($( "#slider-range" ).slider( "values", 0 ));
    $( ".amount_max" ).val($( "#slider-range" ).slider( "values", 1 ));
	}	
		
    return {
    	slide : slide
};
}());
Slider.slide()

var Grid =  (function ( ) {
  var change = function  () {
   $('.gridView_link_line').on('click', function(event) {
    $(this).addClass('gridView_link_line-active');
    $('.gridView-list').find('a').removeClass('gridView_link_inline-active');
    $('.gridView-list').find('a').removeClass('gridView_link_mozaic-active');
      if($('.phone-content')){
     $('.phone-content').removeClass('phone-content').addClass('phone-content_line')
      }
      if($('.phone-content_inline')){
     $('.phone-content_inline').removeClass('phone-content_inline').addClass('phone-content_line');
      }
        
   });

   $('.gridView_link_inline').on('click', function(event) {
    $(this).addClass('gridView_link_inline-active');
    $('.gridView-list').find('a').removeClass('gridView_link_line-active');
    $('.gridView-list').find('a').removeClass('gridView_link_mozaic-active');
      if($('.phone-content')){
     $('.phone-content').removeClass('phone-content').addClass('phone-content_inline')
      }
      if($('.phone-content_line')){
     $('.phone-content_line').removeClass('phone-content_line').addClass('phone-content_inline');
      }
        
   });

   $('.gridView_link_mozaic').on('click', function(event) {
    $(this).addClass('gridView_link_mozaic-active');
    $('.gridView-list').find('a').removeClass('gridView_link_inline-active');
    $('.gridView-list').find('a').removeClass('gridView_link_line-active');
      if($('.phone-content_inline')){
     $('.phone-content_inline').removeClass('phone-content_inline').addClass('phone-content')
      }
      if($('.phone-content_line')){
     $('.phone-content_line').removeClass('phone-content_line').addClass('phone-content');
      }
        
   });
      }
      
   
    
    return {
      change : change
};
}());
Grid.change();


var Clear =  (function ( ) {
    var cleen = function () {
       $('.reset').on('click', function(event) {
          event.preventDefault();
          $(this).closest('.filter_item').children('.filter_holder').children('input:checkbox:enabled').removeAttr('checked');
        }); 
    }
       
    
    return {
      cleen : cleen
};

}());

Clear.cleen();



var SlideShow =  (function ( ) {
  var show = function () {
         $('.phone-item').on('click', function(event) {
           event.preventDefault();
           var target = $( event.target );
             if ( target.is( ".ico_img" ) ) {
              var sourse = target.attr('src').slice(0,11)+'.png';
                $(this).find('.phone-img').attr('src', sourse);
              }
         });
      };    
    
    return {
      show : show
};
}());

SlideShow.show();

var Color =  (function ( ) {
  var show = function () {
         $('.color_item a').on('click', function(event) {
           event.preventDefault();
           
         });
      };    
    
    return {
      show : show
};
}());

Color.show();




});