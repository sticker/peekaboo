$(window).load(function() {
	
	$(".fotorama").hide();
	$(".windy-demo").hide();
	
	//nivoSlider初期化
	/*
	$('#slider').nivoSlider({
		randomStart : false,
		//effect:'random', // 画像切り替え時のアニメーション
		//slices:15, // For slice animations
		//boxCols: 8, // For box animations
		//boxRows: 4, // For box animations
		animSpeed : 500, // アニメーション速度(ms)
		pauseTime : 4000, // 画像切り替えまでの時間(ms)
		//startSlide:0, // 初めに表示する画像位置
		//directionNav:true, // 前/次ボタンを表示
		//directionNavHide:true, // マウスホバー時のみdirectionNavを表示
		//controlNav:true, // コントロールナビの表示
		//controlNavThumbs:false, // コントロールナビに画像サムネイルを使用
		//controlNavThumbsFromRel:false, // Use image rel for thumbs
		//controlNavThumbsSearch: '.jpg', // Replace this with...
		//controlNavThumbsReplace: '_thumb.jpg', // ...this in thumb Image src
		//keyboardNav:true, // スライドをキーボードで操作
		//pauseOnHover:true, // マウスホバー時に切り替えを一時停止
		//manualAdvance:false, // 自動スライドしない
		//captionOpacity:0.8, // キャプションの透過度
		//prevText: 'Prev', // 前ボタンの名前
		//nextText: 'Next', // 次ボタンの名前
		//beforeChange: function(){}, // スライド切り替え前のコールバック関数
		//afterChange: function(){}, // スライド切り替え後のコールバック関数
		//slideshowEnd: function(){}, // 全ての画像を表示した後のコールバック関数
		//lastSlide: function(){}, // 最後の画像が表示される後のコールバック関数
		//afterLoad: function(){} // スライドのロードが完了したときのコールバック関数
	});
*/

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

   
   //windy初期化
   
   				var $el = $( '#wi-el' ),
					windy = $el.windy(),
					allownavnext = false,
					allownavprev = false;

				$( '#nav-prev' ).on( 'mousedown', function( event ) {

					allownavprev = true;
					navprev();
				
				} ).on( 'mouseup mouseleave', function( event ) {

					allownavprev = false;
				
				} );

				$( '#nav-next' ).on( 'mousedown', function( event ) {

					allownavnext = true;
					navnext();
				
				} ).on( 'mouseup mouseleave', function( event ) {

					allownavnext = false;
				
				} );

				function navnext() {
					if( allownavnext ) {
						windy.next();
						setTimeout( function() {	
							navnext();
						}, 150 );
					}
				}
				
				function navprev() {
					if( allownavprev ) {
						windy.prev();
						setTimeout( function() {	
							navprev();
						}, 150 );
					}
				}
				
   
});


	
function windy_popup(){
	$('.windy-demo').bPopup({
	    easing: 'easeOutBack', //uses jQuery easing plugin
            speed: 450,
            transition: 'slideDown'
	});
}

function fotorama_popup(){
	$('.fotorama').bPopup({
	    easing: 'easeOutBack', //uses jQuery easing plugin
            speed: 450,
            transition: 'slideDown',
	});
}








//以下不要////////////////
// グレーアウト設定
function glay() {
	/* グレイパネル作成
	 -------------------------------------------------------------------------------*/
	$('<div class="gray_panel" id="gray_panel" onclick="glay_end()"></div>').css({
		"background" : "#000",
		"opacity" : "0.5",
		"width" : "100%",
		"height" : 99999,
		"position" : "fixed",
		"top" : "0",
		"left" : "0",
		"display" : "none",
		"z-index" : "50"
	}).appendTo($("body"));


	// ポップアップの画面中央になる様な位置関係を算出
	var left_position = ($("body").width() / 2) - ($("#popup").width() / 2);
	var top_position = 10;

	// グレーアウトをフェードイン
	$("#gray_panel").fadeIn("slow");

	// ポップアップのスタイルを定義
	$("#popup")
		.css("position", "relative")
		.css("z-index", "51")
		.css("position", "fixed")
		.css("top", top_position)
		.css("left", left_position)
		.fadeIn("slow");

	// フレックススライダー初期化
	$('.flexslider').flexslider({
        animation: "slide",
        controlNav: "thumbnails"
      });
    
    // フレックススライダーCSS
    $(".slides")
    	.css("text-align", "center")
    	.css("color", "#fff")
		.css("background-color", "rgba(0, 0, 0, 0.8)");

	// 閉じるボタンCSS
	$(".menu_close")
		.css("height", "30px")
		.css("width", "30px")
		.css("left", "5px")
		.css("top", "5px");
};

function glay_end() {
	// グレーアウトをフェードアウト
	$("#gray_panel").fadeOut("slow");

	// ポップアップをフェードアウト
	$("#popup").fadeOut("slow");
};

