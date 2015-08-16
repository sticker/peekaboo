$(window).load(function() {

	$("#news_data").hide();
	$("#fotorama").hide();	
	$("#shop_data").hide();
	$("#fotorama_info").hide();
	$("#fotorama_opening").hide();
	$("#fotorama_make").hide();
	$("#fotorama_zakka").hide();

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

function fotorama_make_popup(){
	$('#fotorama_make').bPopup({
	    easing: 'easeOutBack', //uses jQuery easing plugin
            speed: 450,
            transition: 'slideDown',
	});
	
	var fotorama = $('#fotorama_make')
      .fotorama({allowfullscreen: true})
      .data('fotorama');

    fotorama.requestFullScreen();
}

function fotorama_zakka_popup(){
	$('#fotorama_zakka').bPopup({
	    easing: 'easeOutBack', //uses jQuery easing plugin
            speed: 450,
            transition: 'slideDown',
	});
	
	var fotorama = $('#fotorama_zakka')
      .fotorama({allowfullscreen: true})
      .data('fotorama');

    fotorama.requestFullScreen();
}

function fotorama_close(){
	$('#fotorama').bPopup().close();
	$('#fotorama_info').bPopup().close();
	$('#fotorama_opening').bPopup().close();
	$('#fotorama_make').bPopup().close();
	$('#fotorama_zakka').bPopup().close();
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
	$.getJSON('https://graph.facebook.com/v2.3/peekaboo.horinouchi/feed?access_token=658191474235259|JkeFWLFjeitSIZdOFugjNviAMfo&limit=1', {
		access_token : '658191474235259|JkeFWLFjeitSIZdOFugjNviAMfo',
		limit : '1'
	}, function(data) {

			var src_url = 'https://graph.facebook.com/' + data.data[0].object_id + '/picture?type=normal';
			$('#fb_image').append('<img class="opa lazy imggray" width="410" height="308" alt="Facebookにて近況を随時アップしています！" src="' + src_url +'">');			

			var fb_body = data.data[0].message;
			console.log(fb_body.length);
			if(fb_body.length >= 120){
				//fb_body = fb_body.substr(0, 100 + (fb_body.indexOf(";", 100) -100)+1) + '...'; 
				fb_body = fb_body.substr(0, 120 ) + '...'; 
			}
			$('.fb_body').append('<a href="javascript:news_popup()"><p>' + fb_body + '</p></a>');
			
	});
});
