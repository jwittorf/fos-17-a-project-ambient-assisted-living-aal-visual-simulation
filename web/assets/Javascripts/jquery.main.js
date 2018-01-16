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
	}

	/**
	 * +++++++++++++++++++++++++++++++++++++++++++
	 * ++ Control section
	 * +++++++++++++++++++++++++++++++++++++++++++
	 */
	FOS.initControlSection = function () {
		$(".kitchen-stove-control").click(function () {
			var target = $(this).data("target");
			$(".kitchen-stove-hotplate").removeClass("alert-danger");
			$(target).addClass("alert-danger");
		})
	};

}(window.FOS = window.FOS || {}, jQuery));
