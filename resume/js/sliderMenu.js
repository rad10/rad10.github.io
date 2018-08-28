// JavaScript Document
function setSlide(label){
	$(label).click(function(){
		$(label+"C.slider").slideToggle("slow");
	});
}
$(document).ready(function(){
	$(".slider").slideUp("fast");
	setSlide("#skills");
	setSlide("#education");
	setSlide("#volunteering");
	setSlide("#achievements");
	setSlide("#contact");
});