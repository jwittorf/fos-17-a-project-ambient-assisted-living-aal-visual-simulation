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
		$(".kitchen-content").load("kitchen.html", function () {
			console.log("Kitchen loaded");
		});
	}

}(window.FOS = window.FOS || {}, jQuery));
