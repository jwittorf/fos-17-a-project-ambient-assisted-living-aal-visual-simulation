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
	 * ++ Init variables for toggles
	 * +++++++++++++++++++++++++++++++++++++++++++
	 */
	FOS.initToggleVars = function () {
		statusControlSectionLocal = false;
		$toggleLocalControl = $(".toggle-local-control");
		toggleLocalClass = "alert-danger";
		$globalSetIcon = $("#global-set-icon");
		globalSetIconClass = "text-danger";
	};

	/**
	 * +++++++++++++++++++++++++++++++++++++++++++
	 * ++ Toggles
	 * +++++++++++++++++++++++++++++++++++++++++++
	 */
	FOS.initToggles = function () {
		$(".toggle").toggles({
			drag: false,
			text: {
				on: "AN",
				off: "AUS"
			}
		});
	};

	/**
	 * +++++++++++++++++++++++++++++++++++++++++++
	 * ++ Control section local
	 * +++++++++++++++++++++++++++++++++++++++++++
	 */
	FOS.initControlSectionLocal = function () {
		// Check every local toggle on toggle event
		$toggleLocalControl.on("toggle", function (e, active) {
			// Specifiy target for single toggle
			var target = $(this).data("target");
			if (active) {
				// Set target to active
				$(target).addClass(toggleLocalClass);
				// Enable global reset button
				$("#global-control-reset").removeAttr("disabled");
				// Set global status, that at least one toggle is active for the global set icon
				statusControlSectionLocal = true;
			} else {
				// Set target to inactive
				$(target).removeClass(toggleLocalClass);
				// Run through all toggles and check if at least one toggle is active for the global set icon
				$toggleLocalControl.each(function () {
					if ($(this).data("toggles").active === true) {
						statusControlSectionLocal = true;
						// Abort the loop because one active toggle is enough for the global set icon
						return false;
					} else {
						// Continue loop and eventually end the loop if one/all toggles are inactive
						statusControlSectionLocal = false;
					}
				});
				if (statusControlSectionLocal === false) {
					$("#global-control-reset").attr("disabled", "disabled");
				}
			}
			// Add/remove class for global set icon depending on the toggles' status
			if (statusControlSectionLocal === true) {
				$globalSetIcon.addClass(globalSetIconClass);
			} else {
				$globalSetIcon.removeClass(globalSetIconClass);
			}
		});
	};

	/**
	 * +++++++++++++++++++++++++++++++++++++++++++
	 * ++ Control section global reset
	 * +++++++++++++++++++++++++++++++++++++++++++
	 */
	FOS.initControlSectionGlobalReset = function () {
		$("#global-control-reset").on("click", function () {
			$toggleLocalControl.each(function () {
				// Reset all local toggles
				$(this).data("toggles").toggle(false);
			});
			// Disable reset button after clicking it
			$("#global-control-reset").attr("disabled", "disabled");
		});
	};

	/**
	 * +++++++++++++++++++++++++++++++++++++++++++
	 * ++ Control section global set
	 * ** (old, used with own toggle)
	 * +++++++++++++++++++++++++++++++++++++++++++
	 */
	FOS.initControlSectionGlobalSet = function () {
		$("#global-control-set").on("toggle", function (e, active) {
			if (active) {
				// Check for existing fields
				if (statusControlSectionLocal === true) {
					$globalSetIcon.addClass(globalSetIconClass);
				}
				// Check for fields after activation
				$toggleLocalControl.on("toggle", function () {
					if (statusControlSectionLocal === true) {
						$globalSetIcon.addClass(globalSetIconClass);
					} else {
						$globalSetIcon.removeClass(globalSetIconClass);
					}
				});
			} else {
				$globalSetIcon.removeClass(globalSetIconClass);
			}
		});
	};

}(window.FOS = window.FOS || {}, jQuery));
