jQuery(document).ready(function($) {
	$("#pagina-fb").hover(function() {
		$("#pagina-fb").toggleClass('abierto');
	});
	$(".enlacescompartir").on('click',function(e) {
		e.preventDefault();

		var arriba = $(window).height() / 2 -  225 ;
		var izquierda = $(window).width() / 2 - 275;
		window.open($(this).attr("href"),"","scrollbars=1,height=450,width=550,top="+arriba+", left="+izquierda);
	});

	$(".tablatitulocompleto .vc-th td:first-child").attr('colspan',2);
});