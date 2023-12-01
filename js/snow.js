if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
	// 移动端不显示
  }
else {
	(function($){
		$.fn.snow = function(options){
		var $flake = $('<div id="snowbox" />').css({'position': 'absolute','z-index':'9999', 'top': '-50px'}).html('&#10052;'),
		documentHeight 	= $(document).height(),
		documentWidth	= $(document).width(),
		defaults = {
			minSize		: 10,
			maxSize		: 20,
			newOn		: 1000,
			flakeColor	: "#FFFFFF" /* 此处可以定义雪花颜色，若要白色可以改为#FFFFFF */
		},
		options	= $.extend({}, defaults, options);
		var interval= setInterval( function(){
		var startPositionLeft = Math.random() * documentWidth - 100,
		startOpacity = 0.5 + Math.random(),
		sizeFlake = options.minSize + Math.random() * options.maxSize,
		endPositionTop = documentHeight - 200,
		endPositionLeft = startPositionLeft - 500 + Math.random() * 500,
		durationFall = documentHeight * 10 + Math.random() * 5000;
		$flake.clone().appendTo('body').css({
			left: startPositionLeft,
			opacity: startOpacity,
			'font-size': sizeFlake,
			color: options.flakeColor
		}).animate({
			top: endPositionTop,
			left: endPositionLeft,
			opacity: 0.2
		},durationFall,'linear',function(){
			$(this).remove()
		});
		}, options.newOn);
		};
	})(jQuery);
	$(function(){
		$.fn.snow({ 
			minSize: 3, 	// 定义雪花最小尺寸 
			maxSize: 20,	// 定义雪花最大尺寸 
			newOn: 1000  	// 定义密集程度，数字越小越密集 
		});
	});
}