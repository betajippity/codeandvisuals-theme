$(document).ready(function(){
	var $window = $(window);
	//Fade and shrink stuff	
	$(window).scroll(function() {
		var y = $window.scrollTop() / 75; 
		var titleFade = 1 - y/.85;
		if($(window).scrollTop()<=65){
			$('.blog-author').css("opacity",titleFade);
			$('.blog-title').css("opacity",titleFade);	
		}else{
			var nameFade = ($window.scrollTop()-65)/20;
			nameFade = Math.min(1,nameFade);
			$('.blog-author').css("opacity",nameFade);
			$('.blog-title').css("opacity",nameFade);
		}
	});
});
		  
//Pin navbar
$(window).scroll(function(){
	if($(window).scrollTop()>=65){
		$('.blog-title-wrap').css("height","45px");
		$('#site-head').css("position","fixed");
		$('div.navbar-padding').css("height","130px");
		$('.blog-title').css("font-size","30px");
		$('.blog-title').css("left","5px");
		$('.blog-author').css("top","12px");
		$('.blog-author').css("left","230px");
		$('.blog-author').css("font-size","20px");	
		$('.blog-author').css("position","absolute");		
	}else{	
		$('.blog-title-wrap').css("height","");
		$('#site-head').css("position","");
		$('div.navbar-padding').css("height","");
		$('.blog-title').css("font-size","");
		$('.blog-author').css("font-size","");
		$('.blog-author').css("top","");
		$('.blog-author').css("left","");
		$('.blog-title').css("left","");
	}
});
