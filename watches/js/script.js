jQuery(document).ready(function($) {
	// ========================change theme==========================
	$('.theme').click(function() {
		$(".infoText").toggleClass("infoText2");
		$(".catalog").toggleClass("catalog2");
		$(".a").toggleClass("brands2");
		$(".slide").toggleClass("slide2");
		$(".aboutUsText").toggleClass("aboutUsText2");
		$(".socialMedia").toggleClass("socialMedia2");
		$(".phone").toggleClass("phone2");
		$(".allBrands").toggleClass("allBrands2");
		$(".aboutCompany").toggleClass("aboutCompany2");



	});
// =============================login===================================
	$('.login').click(function() {
		$(".loginBox").addClass("loginBoxShow");
	});

	$('.loginClose').click(function() {
		$(".loginBox").removeClass("loginBoxShow");
	});
	


	
});