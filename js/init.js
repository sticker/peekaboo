			var isMobile = false;
	
			if( navigator.userAgent.match(/Android/i) || 
				navigator.userAgent.match(/webOS/i) ||
				navigator.userAgent.match(/iPhone/i) || 
				navigator.userAgent.match(/iPad/i)|| 
				navigator.userAgent.match(/iPod/i) || 
				navigator.userAgent.match(/BlackBerry/i)){
								
				isMobile = true;
							
			}
			
			/*iOS5 fixed-menu fix*/
			var iOS5 = false;
			
			if (navigator.userAgent.match(/OS 5(_\d)+ like Mac OS X/i)){
			
				iOS5 = true;
			
			}
		
			$(window).load(function() {
			
				//call slider
				$('.epicSlider').epicSlider({
				
					loop : true,									//Boolean: whether slideshow should loop or not	
					slideShow: true,								//Boolean: use slideshow or not
					autoPlay: true,									//Boolean: autoplay uplon load or not
					slideShowInterval :8000,						//Integer: slideshow cycling speed, in milliseconds
					transitionSpeed : 1000,							//Integer: transitions speed, in milliseconds
					startSlide : 0,									//Integer: starts at 0
					shuffleSlides:false,							//Boolean: shuffle slides or not
					stack:false,									//Boolean:stack slides
					easing : 'easeInOutQuint', 						//String: easing method - see http://jqueryui.com/demos/effect/easing.html
					fx : 'leftToRight',								//String: none, fade, leftToRight, topToBottom 
					fxmobile : 'leftToRight',						//String: mobile effect -  none, fade, leftToRight, topToBottom 
					pattern :true									//Boolean: add pattern or not

				});	
				
				
			});
