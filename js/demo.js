// Logo + Purchase button
$('header .logo').waypoint(function() {
	if ( !$( this ).hasClass( "animated" ) ){
		$(this).toggleClass('animated fadeInDown');
	}},
{ offset: '100%' });
$('header .desc').waypoint(function() {
	if ( !$( this ).hasClass( "animated" ) ){
		$(this).toggleClass('animated fadeInUp');
	}},
{ offset: '100%' });

// function
$('.function-list li').waypoint(function() {
	if ( !$( this ).hasClass( "animated" ) ){
		$(this).toggleClass('animated slideInUp');
	}},
{ offset: '100%' });

// new label
$('#buy-now').waypoint(function() {
	if ( !$( this ).hasClass( "animated" ) ){
		$(this).toggleClass('animated flipInX');
	}},
{ offset: '80%' });

$(document).ready(function() {
	$('.arrow').click(function(e) { 
		e.preventDefault(); 
		$('html,body').animate({
			scrollTop: $("#store-list").offset().top},
        'slow');
	});
 });
