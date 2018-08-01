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
			if(fb_body.length >= 75){
				//fb_body = fb_body.substr(0, 100 + (fb_body.indexOf(";", 100) -100)+1) + '...'; 
				fb_body = fb_body.substr(0, 75 ) + '...'; 
			}
			$('#fb_body').append('<a href="javascript:news_popup()"><p>' + fb_body + '</p></a>');
			
	});
});


/*
$(function() {
	$.ajax({
		url: 'https://api.instagram.com/v1/users/4516074146/media/recent/',
		data: { access_token : '30630151.32bc03f.a4b5cf3602704ebd923f85eb2bbe00a5', count: '3'},
		dataType: "jsonp",
		error: function(jqXHR, textStatus, errorThrown) {
            $("#insta_body").append(textStatus);
        },
        success: function(data, textStatus, jqXHR) {

			for (var i = 0, length = 3; i < length; i++) {
				var d = data.data[i];
				var idx = i + 1;
				//var src_url = data.data[0].images.low_resolution.url;
				var src_url = d.images.standard_resolution.url;
				
				//$('#insta_image_'+idx).append('<img class="opa lazy imggray" width="306" height="306" alt="Instagramをチェックしてください！" src="' + src_url +'">');			
				$('#insta_image_'+idx).append('<img class="opa lazy imggray" width="612" height="612" alt="Instagramをチェックしてください！" src="' + src_url +'">');			
				
				var insta_body = d.caption.text;
				console.log(insta_body.length);
				if(insta_body.length >= 75){
					//fb_body = fb_body.substr(0, 100 + (fb_body.indexOf(";", 100) -100)+1) + '...'; 
					insta_body = insta_body.substr(0, 75 ) + '...'; 
				}
				
				//var insta_url = d.link;
				var insta_url = "https://www.instagram.com/peekaboo_staff/"
				$('#insta_body_'+idx).append('<a href="' + insta_url + '"><p>' + insta_body + '</p></a>');
				$('#insta_url_'+idx).attr("href", insta_url);
				//$('#insta_body').append(insta_body);
			}
		}
			
	});
});
*/

/*
$(function() {
    $.ajax({
      url: "https://api.instagram.com/v1/users/self/media/recent",
      data: { access_token: "30630151.32bc03f.a4b5cf3602704ebd923f85eb2bbe00a5" },
      dataType: "jsonp",
      error: function(jqXHR, textStatus, errorThrown) {
        $("#insta_body").append(textStatus);
      },
      success: function(data, textStatus, jqXHR) {
        $("#insta_body").text("");
        for (var i = 0, length = 5; i < length; i++) {
          var d = data.data[i];
          $("#insta_body").append(
          $("<div>").addClass("image").append($("<a>").attr("href", d.link).attr("target", "_blank").append($("<img>").attr("src", d.images.thumbnail.url))));}
        }
    });
});
*/