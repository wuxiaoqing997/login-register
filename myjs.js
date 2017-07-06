$(document).ready(function() {
	$('#sign_button').bind('click',function () {
		$('#login').css('zIndex','-1');
		$('#back').animate({left:"720px"});
		$('#register').animate({left:"720px"}).css('zIndex','2');
		$('#main').css('background','#d9a62e');
		$('#content').css('background','#e6b422');
	})
	$('#login_button').bind('click',function() {	
		$('#back').animate({left:"320px"});
		$('#register').css('zIndex','-1').animate({left:"320px"});
		$('#login').css('zIndex','2');
		$('#main').css('background','#c37854');
		$('#content').css('background','#cd5e3c');
		});
});