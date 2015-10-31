$( document ).ready(function() {
    $('.info p').columnize({ columns: 2 });
var Accordion =  (function ( ) {														//Замена Моего Фото, думаю пояснений не требует
	var show = function () {
			$('.filter_holder').hide();
			$ ('.filter_name').on('click',function (e) {
				if(!$(this).hasClass('open')){
			 $(this).siblings('.filter_holder').slideDown('400');
			 $(this).addClass('open');
			 Accordion.hide();
			}
			})   
	    };	

	    var hide = function () {
			$ ('.filter_name').on('click',function (e) {	    	
	    	if($(this).hasClass('open')){	
	    	$(this).removeClass('open');    		
			 $(this).siblings('.filter_holder').slideUp('400');
	    	}
			})   
	    };		
		
    return {
    	hide : hide,
    	show : show
};
}());

Accordion.show();

});