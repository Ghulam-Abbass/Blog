$(document).ready(function(){

	 var clickEvent = false;
	 $('#myCarousel').carousel({
	 	interval: 4000
	 }).on('click','.list-group li', function(){
	 	clickEvent = true;
	 	$('.list-group li').removeClass('avtive');
	 	$(this).addClass('active');
	 }).on('slid.bs.carousel',function(e) {
	 	if(!clickEvent)
	 }
})



