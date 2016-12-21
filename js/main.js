



console.log("Running main.js v1.0 as javascript front-end");
$(document).ready(function(){
	$(".portfolio-content").find(".carousel-caption").hide();
	$(".brightness").mouseenter(function(){
		$(this).find(".carousel-caption").show();
		$(this).css({'opacity': .3 })
	



	});
	$(".brightness").mouseleave(function(){
		$(this).find(".carousel-caption").hide();
		$(this).css({'opacity':1})
	});




})