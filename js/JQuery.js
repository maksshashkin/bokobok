$(function () {

	
	/* Header menu */
	$("#burger-menu").on("click", 
	function (event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$(".header-menu").toggleClass("active");
		$("body").toggleClass('no-scroll');

	});

});
