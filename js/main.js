$(window).load(function() {

	$("#news_data").hide();
	$("#fotorama").hide();	
	$("#shop_data").hide();
	$("#fotorama_info").hide();
	$("#fotorama_opening").hide();

   //responsiveSlider初期化
   $(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 1000,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: false,           // Boolean: Show pager, true or false
  nav: false,             // Boolean: Show navigation, true or false
  random: false,          // Boolean: Randomize the order of the slides, true or false
  pause: false,           // Boolean: Pause on hover, true or false
  pauseControls: false,    // Boolean: Pause when hovering controls, true or false
  prevText: "Previous",   // String: Text for the "previous" button
  nextText: "Next",       // String: Text for the "next" button
  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",     // Selector: Declare custom pager navigation
  namespace: "rslides",   // String: Change the default namespace used
  before: function(){},   // Function: Before callback
  after: function(){}     // Function: After callback
});
	
	//ロゴ画像を全画面表示
	$(".loadingWrap_logo").show();

	//ローディング画像を消す
	$(".loadingWrap").hide();
	
	//ロゴ画像をフェードアウト
	$(".loadingWrap_logo").delay(1500).fadeOut(1500);



	
});

function news_popup(){
	$('#news_data').bPopup({
	    easing: 'easeOutBack', //uses jQuery easing plugin
            speed: 450,
            transition: 'slideDown',
	});
}

function fotorama_popup(){
	$('#fotorama').bPopup({
	    easing: 'easeOutBack', //uses jQuery easing plugin
            speed: 450,
            transition: 'slideDown',
	});
	
	var fotorama = $('#fotorama')
      .fotorama({allowfullscreen: true})
      .data('fotorama');

    fotorama.requestFullScreen();
}

function shop_data_popup(){
	$('#shop_data').bPopup({
	    easing: 'easeOutBack', //uses jQuery easing plugin
            speed: 450,
            transition: 'slideDown',
	});
}

function fotorama_info_popup(){
	$('#fotorama_info').bPopup({
	    easing: 'easeOutBack', //uses jQuery easing plugin
            speed: 450,
            transition: 'slideDown',
	});
	
	var fotorama = $('#fotorama_info')
      .fotorama({allowfullscreen: true})
      .data('fotorama');

    fotorama.requestFullScreen();
}


function fotorama_opening_popup(){
	$('#fotorama_opening').bPopup({
	    easing: 'easeOutBack', //uses jQuery easing plugin
            speed: 450,
            transition: 'slideDown',
	});
	
	var fotorama = $('#fotorama_opening')
      .fotorama({allowfullscreen: true})
      .data('fotorama');

    fotorama.requestFullScreen();
}

function fotorama_close(){
	$('#fotorama').bPopup().close();
	$('#fotorama_info').bPopup().close();
	$('#fotorama_opening').bPopup().close();
}

function news_close(){
	$('#news_data').bPopup().close();
}

function shop_data_close(){
	$('#shop_data').bPopup().close();
}



$(function() {
	var formatData = function(date) {
		var d = new Date(date);
		return (d.getFullYear() + '.' + ("0"+(d.getMonth()+1)).slice(-2)  + '.' + ("0"+d.getDate()).slice(-2));
	};
	$.getJSON('http://ajax.googleapis.com/ajax/services/feed/load?callback=?', {
		q : 'http://www.facebook.com/feeds/page.php?id=475567815919958&format=rss20',
		v : '1.0',
		num : 1
	}, function(data) {
		$.each(data.responseData.feed.entries, function(i, item) {
			//$('#facebook').append('<li><span class="fb_date">' + formatData(item.publishedDate) + '</span><p class="fb_comm"><a href="' + item.link + '">' + item.title + '</a></p></li>');

			var img_src_end = item.content.substring( item.content.indexOf("src=\"") + 5);
			var img_src = img_src_end.substring( 0, img_src_end.indexOf("\""));
			var img_src_n = img_src.replace("_s.jpg", "_n.jpg");
			
			$('#fb_image').append('<img class="opa lazy imggray" width="410" height="308" alt="Facebookにて近況を随時アップしています！" src="' + img_src_n +'">');			
			
			var fb_body = item.title;
			if(item.title.length >= 360){
				fb_body = item.title.substr(0, 360 + (item.title.indexOf(";", 360) -360)) + '...'; 
			}
			$('.fb_body').append('<a href="javascript:news_popup()"><p>' + fb_body + '</p></a>');
			
		});
	});
});
