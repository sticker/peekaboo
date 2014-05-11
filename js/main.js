$(window).load(function() {

	$("#fotorama").hide();	
	$("#shop_data").hide();
	$("#fotorama_info").hide();

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

	//ローディング画像を消す
	$(".loadingWrap").fadeOut();
});

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


function fotorama_close(){
	$('#fotorama').bPopup().close();
	$('#fotorama_info').bPopup().close();
}

function shop_data_close(){
	$('#shop_data').bPopup().close();
}
