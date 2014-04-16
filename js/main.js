$(window).load(function() {
	$('#slider').nivoSlider({
		randomStart : true,
		//effect:'random', // 画像切り替え時のアニメーション
		//slices:15, // For slice animations
		//boxCols: 8, // For box animations
		//boxRows: 4, // For box animations
		animSpeed : 500, // アニメーション速度(ms)
		pauseTime : 5000, // 画像切り替えまでの時間(ms)
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

});

// グレーアウト設定
function glay() {
	/* グレイパネル作成
	 -------------------------------------------------------------------------------*/
	$('<div class="gray_panel" id="gray_panel"></div>').css({
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
	var left_positon = ($("body").width() / 2) - ($("#popup").width() / 2)

	// グレーアウトをフェードイン
	$("#gray_panel").fadeIn("slow");

	// ポップアップのスタイルを定義
	$("#popup")
		.css("z-index", "51")
		.css("position", "fixed")
		.css("top", 10)
		.css("left", left_positon)
		.fadeIn("slow");

	$('.flexslider').flexslider({
        animation: "slide"
      });
};

function glay_end() {
	// グレーアウトをフェードアウト
	$("#gray_panel").fadeOut("slow");

	// ポップアップをフェードアウト
	$("#popup").fadeOut("slow");
};

