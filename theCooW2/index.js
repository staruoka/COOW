function adjustImage(image, time) {
	var image_width = image.find("img").width();
	var image_height = image.find("img").height();
	var width = 0;
	var height = 0;
	var margin_left = 0;
	var margin_top = 0;
	var ratio_outer = $(window).width()/$(window).height();
	var ratio_inner = image_width/image_height;
	if (ratio_outer > ratio_inner) {
		width = $(window).width();
		height = width/ratio_inner;
	} else {
		height = $(window).height();
		width = height*ratio_inner;
	}
	margin_left = Math.floor(($(window).width()-width)/2);
	margin_top = Math.floor(($(window).height()-height)/2);
	image.find("img").animate({width:width, height:height}, {duration:time, easing:"easeOutQuart"});
	image.animate({top:margin_top, left:margin_left}, {duration:time, easing:"easeOutQuart"});
}