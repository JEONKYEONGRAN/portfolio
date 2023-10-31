window.onload = function(){
	$(function(){

		/*
			ページ内リンクの移動をスクロールに
			リンク先がシャープで始まる a.anchor に適応されます
		*/
		$('.anchor').click(function(){
			href = $(this).attr('href');
			if (href=='#')
				$('html, body').animate({scrollTop: 0},1200);
			else
				$('html, body').animate({scrollTop: $(href).offset().top},1200);
			return false;
		});

	});
}