/**
 * Scoping to FOS-Namespace and jQuery $
 */
(function (FOS, $, undefined) {

	/**
	 * +++++++++++++++++++++++++++++++++++++++++++
	 * ++ Some Component
	 * +++++++++++++++++++++++++++++++++++++++++++
	 */
	FOS.initSomeComponent = function () {
		// Start writing the code for your component
	};

	/**
	 * +++++++++++++++++++++++++++++++++++++++++++
	 * ++ Ajax call for kitchen
	 * +++++++++++++++++++++++++++++++++++++++++++
	 */
	FOS.initAjaxKitchen = function () {
		$(".kitchen-content").load("ajax/kitchen/stove.html", function (response, status, xhr) {
			if (status !== "success") {
				var msg = "Sorry but something went wrong! ";
				console.log(msg + xhr.status + " " + xhr.statusText);
			}
		});
	};

	/**
	 * +++++++++++++++++++++++++++++++++++++++++++
	 * ++ Control section
	 * +++++++++++++++++++++++++++++++++++++++++++
	 */
	FOS.initControlSection = function () {
		$('.toggle').on('toggle', function(e, active) {
			var target = $(this).data("target");
			if (active) {
				$(target).addClass("alert-success");
			} else {
				$(target).removeClass("alert-success");
			}
		});
	};

	/**
	 * +++++++++++++++++++++++++++++++++++++++++++
	 * ++ Toggles
	 * +++++++++++++++++++++++++++++++++++++++++++
	 */
	FOS.initToggles = function () {
		$('.toggle').toggles({
			drag: false,
			text: {
				on: 'AN',
				off: 'AUS'
			}
		});
	};

}(window.FOS = window.FOS || {}, jQuery));
