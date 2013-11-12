//Fade top navbar upon scroll
$(document).ready(function(){
	var $window = $(window);
	//Fade and shrink stuff	
	$(window).scroll(function() {
		var y = $window.scrollTop() / 75; 
		var titleFade = 1 - y/.85;
		if($(window).scrollTop()<=65){
			$('.blog-author').css("opacity",titleFade);
			$('.blog-title').css("opacity",titleFade);	
			$('.blog-nav').css("top",navdrop+"px");
			if($(window).scrollTop()>=54){
				var navdrop = 67 + ($(window).scrollTop()-54);
				$('.blog-nav').css("top",navdrop+"px");
				console.log(navdrop);
			}
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
		$('.blog-nav').css("top","12px");
	}else{	
		$('.blog-title-wrap').css("height","");
		$('#site-head').css("position","");
		$('div.navbar-padding').css("height","");
		$('.blog-title').css("font-size","");
		$('.blog-author').css("font-size","");
		$('.blog-author').css("top","");
		$('.blog-author').css("left","");
		$('.blog-title').css("left","");
		$('.blog-nav').css("top","");
	}
});

//Creates figure captions under images
$(document).ready(function() {
	// Every image referenced from a Markdown document
	$(".post-content img").each(function() {
		// Let's put a caption if there is one
		if($(this).attr("alt"))
			$(this).wrap('<div class="image"></div>')
				.after('<div class="figcaption">'+$(this).attr("alt")+'</div>');
		});
});