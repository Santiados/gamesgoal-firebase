$('.check').on('click',function(){
	if( $(this).is(':checked') ){
		$('.nacimiento').animate({'opacity':1},100).show().css('display','unset');
    }else{
    	$('.nacimiento').animate({'opacity':0},100).css('display','none');
    }
})

