// DOM ready
$(function() {


	// navigation
	var $flapnav = $("#flap-nav").flapNav({
		elt_wrapper: "#page-container"
	});

	// click nav mobile = close flap nav
	$("#nav-mobile a").on("click", function(e) {
		$flapnav.data("plugin_flapNav").click();
		// @todo => smooth scroll effect to section
	});


	// active fullpage scroll
	$('#content-main .page-content').fullpage({
		sectionSelector: ".zone",
		verticalCentered: false,
		resize: true,
		anchors:['z-header', 'z-albums', 'z-ecoute', 'z-videos', 'z-avis', 'z-apropos', 'z-photos', 'z-dates', 'z-contacts'],
		// autoScrolling: false

		afterLoad: function (anchorLink, index) {
			// console.log( "coucou" );
			// console.log( anchorLink );

			$(".nav-scroll li").find("a.active" ).removeClass("active");
			$(".nav-scroll li").eq(index - 1).find("a").addClass("active");
		}
	});
});