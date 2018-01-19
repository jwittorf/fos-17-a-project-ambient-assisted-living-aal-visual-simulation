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
		 * ++ Ajax calls for static templates
		 * +++++++++++++++++++++++++++++++++++++++++++
		 */
		FOS.initAjax = function () {
			$(".kitchen-stove-content").load("ajax/kitchen/stove.html", function (response, status, xhr) {
				if (status !== "success") {
					var msg = "Sorry but something went wrong! ";
					console.log(msg + xhr.status + " " + xhr.statusText);
				}
			});
			$(".kitchen-fridge-content").load("ajax/kitchen/fridge.html", function (response, status, xhr) {
				if (status !== "success") {
					var msg = "Sorry but something went wrong! ";
					console.log(msg + xhr.status + " " + xhr.statusText);
				}
			});
			$(".kitchen-freezer-content").load("ajax/kitchen/freezer.html", function (response, status, xhr) {
				if (status !== "success") {
					var msg = "Sorry but something went wrong! ";
					console.log(msg + xhr.status + " " + xhr.statusText);
				}
			});
			$(".kitchen-washingmachine-content").load("ajax/kitchen/washingmachine.html", function (response, status, xhr) {
				if (status !== "success") {
					var msg = "Sorry but something went wrong! ";
					console.log(msg + xhr.status + " " + xhr.statusText);
				}
			});
			$(".kitchen-dishwasher-content").load("ajax/kitchen/dishwasher.html", function (response, status, xhr) {
				if (status !== "success") {
					var msg = "Sorry but something went wrong! ";
					console.log(msg + xhr.status + " " + xhr.statusText);
				}
			});
			$(".hallway-station-content").load("ajax/hallway/station.html", function (response, status, xhr) {
				if (status !== "success") {
					var msg = "Sorry but something went wrong! ";
					console.log(msg + xhr.status + " " + xhr.statusText);
				}
				// Need to call default toggles after the ajax call, otherwise won't init correctly
				FOS.initDefaultToggles();
			});
		};

		/**
		 * +++++++++++++++++++++++++++++++++++++++++++
		 * ++ Init variables for toggles
		 * +++++++++++++++++++++++++++++++++++++++++++
		 */
		FOS.initToggleVars = function () {

			// Local toggle
			statusControlSectionLocal = false;
			$toggleLocalControl = $(".toggle-local-control");
			$toggleLocalEmergency = $(".toggle-local-emergency");
			toggleLocalClass = "alert-danger";

			// Control station
			$station = $(".station");
			toggleGroups = [];

			// Global set (status)
			$globalSetIcon = $("#global-set-icon");
			globalSetIconClass = "global-set-icon-active";

			// Global reset
			$globalControlReset = $("#global-control-reset");
			// Define local toggles excluded from reset
			globalControlResetExclude = [
				"#kitchen-fridge-control-signal-one",
				"#kitchen-freezer-control-signal-one"
			];
			// Join elements to jQuery object/select
			$globalControlResetExclude = $toggleLocalControl.not($(globalControlResetExclude.join(", ")));

			// Default toggles
			// Define toggles to be on by default
			defaultTogglesOn = [
				"#kitchen-fridge-control-signal-one",
				"#kitchen-freezer-control-signal-one"
			];
			// Join elements to jQuery object/select
			$defaultTogglesOn = $(defaultTogglesOn.join(", "));

			// Global emergency messages
			$globalEmergencyMessages = $("#global-emergency-messages");
			globalEmergencyMessagesLog = [];
			emergencyMessages = [];
			$emergencyMessageModal = $("#emergency-message-modal");

			// Global timer
			$globalTimerSet = $("#global-timer-set");
			globalTimerToggles = [];
		};

		/**
		 * +++++++++++++++++++++++++++++++++++++++++++
		 * ++ Init toggles, base configuration
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
				// Specifiy group for single toggle
				var group = $(this).data("group");
				// Specifiy element group for single toggle
				var $groupId = $("#" + group);
				if (active) {
					// Set target to active
					$(target).addClass(toggleLocalClass);
					// Enable global reset button
					$globalControlReset.removeAttr("disabled");
					// Set global status, that at least one toggle is active for the global set icon
					statusControlSectionLocal = true;
					// Add group to array of active groups
					// Will result in having an entry per toggle, which will can be removed afterwards one by one
					// Avoids having to run through loops
					toggleGroups.push(group);
				} else {
					// Set target to inactive
					$(target).removeClass(toggleLocalClass);
					// Run through all toggles and check if at least one toggle is active for the global set icon
					$toggleLocalControl.each(function () {
						if ($(this).data("toggles").active === true) {
							// Set global status, that at least one toggle is active for the global set icon
							statusControlSectionLocal = true;
							// Abort the loop because one active toggle is enough for the global set icon
							return false;
						} else {
							// Continue loop and eventually end the loop if one/all toggles are inactive
							statusControlSectionLocal = false;
						}
					});
					// Remove group FOR THIS TOGGLE from array of active groups
					// It's still possible that other toggles from the same group is still active, so keep their entries
					FOS.removeValueFromArray(toggleGroups, group);
					if (statusControlSectionLocal === false) {
						$globalControlReset.attr("disabled", "disabled");
					}
				}
				// Add/remove class for global set icon depending on the toggles' status
				if (statusControlSectionLocal === true) {
					$globalSetIcon.addClass(globalSetIconClass);
				} else {
					$globalSetIcon.removeClass(globalSetIconClass);
				}
				// Update station data of currently active groups
				var toggleGroupsString = toggleGroups.join(" ");
				$station.data("toggle-groups", toggleGroupsString);
				// Check if group is in the array and class isn't already set (aka group is active),
				// then add the class
				if (($.inArray(group, toggleGroups) !== -1) && (!$groupId.hasClass(toggleLocalClass))) {
					$groupId.addClass(toggleLocalClass);
				} else if (($.inArray(group, toggleGroups) === -1) && ($groupId.hasClass(toggleLocalClass))) {
					// Otherwise if group isn't (anymore) in the array and class is already set,
					// remove the class
					$groupId.removeClass(toggleLocalClass);
				}
			});
		};

		/**
		 * +++++++++++++++++++++++++++++++++++++++++++
		 * ++ Control section global reset
		 * +++++++++++++++++++++++++++++++++++++++++++
		 */
		FOS.initControlSectionGlobalReset = function () {
			$globalControlReset.on("click", function () {
				// Only reset controls that aren't excluded from reset
				$globalControlResetExclude.each(function () {
					// Reset all local toggles
					$(this).data("toggles").toggle(false);
				});
				// Disable reset button after clicking it
				$globalControlReset.attr("disabled", "disabled");
			});
		};

		/**
		 * +++++++++++++++++++++++++++++++++++++++++++
		 * ++ Local emergency controls and messages
		 * +++++++++++++++++++++++++++++++++++++++++++
		 */
		FOS.initLocalEmergency = function () {
			$toggleLocalEmergency.on("toggle", function (e, active) {
				// Build emergency message (for setting and unsetting)
				// Only value of id
				var localEmergency = $(this).attr("id");
				// Value of id with #
				var localEmergencyId = "#" + localEmergency;
				// Id as jQuery object
				var $localEmergency = $(localEmergencyId);
				// Corresponding name (with # given)
				var localEmergencyName = $localEmergency.data("name");
				// Corresponding target (with # given)
				var localEmergencyTarget = $localEmergency.data("target");
				// Corresponding name as jQuery object
				var $localEmergencyName = $(localEmergencyName);
				// Trimmed text of corresponding name, only with the locality
				var localEmergencyNameText = $localEmergencyName.text().trim().replace("Not-Taster ", "");
				// Concatenated emergency message set
				var emergencyMessageSet = "Meldung in: <strong>" + localEmergencyNameText + "</strong>";
				// Add html to emergencyMessageSet
				var emergencyMessageSetHtml = "<li class=\"list-group-item list-group-item-danger\"><i class=\"glyphicon glyphicon-remove\"></i> " + emergencyMessageSet + "</li>";
				// Concatenated emergency message unset
				var emergencyMessageUnset = "Meldung in: <strong>" + localEmergencyNameText + "</strong> aufgelöst.";
				// Add html to emergencyUnsetMessage
				var emergencyMessageUnsetHtml = "<li class=\"list-group-item list-group-item-success\"><i class=\"glyphicon glyphicon-ok\"></i> " + emergencyMessageUnset + "</li>";
				// If toggle was activated, add message to collection, open modal with all messages
				// And highlight the area after closing
				if (active) {
					// Add message to emergencyMessages array
					emergencyMessages.push(emergencyMessageSetHtml);
					// Add message to globalEmergencyMessagesLog array
					globalEmergencyMessagesLog.push(emergencyMessageSetHtml);
					// Set content for modal's body with all emergencyMessages, no need for a loop or something like that :)
					$emergencyMessageModal.find(".modal-body").html("<ul class=\"list-group\">" + emergencyMessages + "</ul>");
					// Open modal with all messages from collection
					$emergencyMessageModal.modal();
					// After closing the modal ...
					$emergencyMessageModal.on("hidden.bs.modal", function (e) {
						// ... highlight target area
						$(localEmergencyTarget).addClass("emergency-active emergency-blink");
					})
				} else {
					// Remove highlight from area after unsetting the emergency
					$(localEmergencyTarget).removeClass("emergency-active emergency-blink");
					// Remove message from emergencyMessages array
					FOS.removeValueFromArray(emergencyMessages, emergencyMessageSetHtml);
					// Add message to globalEmergencyMessagesLog array
					globalEmergencyMessagesLog.push(emergencyMessageUnsetHtml);
				}
				// Output updated globalEmergencyMessagesLog
				$globalEmergencyMessages.children(".list-group").html(globalEmergencyMessagesLog);
			});
		};

		/**
		 * +++++++++++++++++++++++++++++++++++++++++++
		 * ++ Init global timer
		 * +++++++++++++++++++++++++++++++++++++++++++
		 */
		FOS.initGlobalTimer = function () {
			$globalTimerSet.change(function () {
				// Data of entire global timer
				var data = $(this).data();
				// Target of start input (with #)
				var globalTimerTargetStart = data.targetstart;
				// Target of stop input (with #)
				var globalTimerTargetStop = data.targetstop;
				// Start input as jQuery object
				var $globalTimerStart = $(globalTimerTargetStart);
				// Stop input as jQuery object
				var $globalTimerStop = $(globalTimerTargetStop);
				// Start value from input in ms (* 1000)
				var globalTimerStart = $globalTimerStart.val() * 1000;
				// Stop value from input in ms (* 1000)
				var globalTimerStop = $globalTimerStop.val() * 1000;
				var globalTimerStopConcated = globalTimerStart + globalTimerStop;
				// Go through all local toggle controls
				$toggleLocalControl.each(function () {
					// Id of current toggle local control
					var toggleLocalControl = "#" + $(this).attr("id");
					// Current toggle local control as jQuery object
					$toggleLocalControl = $(toggleLocalControl);
					// Check if the current toggle local control isn't excluded from the global reset
					// We want to enable and disable everything, that doesn't need constant electricity
					if ($.inArray(toggleLocalControl, globalControlResetExclude) === -1) {
						// Add current toggle local control to array of globalTimerToggles as jQuery object
						globalTimerToggles.push($toggleLocalControl);
					}
				});
				if (this.checked) {
					// Disable the checkbox to prevent unchecking it too early
					$(this).addClass("disabled").prop("disabled", true);
					// Run helper function to set all global timer toggles to inactive and disabled
					FOS.globalTimerResetInactiveDisable();
					// Execute after waiting for start time from initial time
					setTimeout(function () {
						FOS.globalTimerEnable();
					}, globalTimerStart);
					// Execute after waiting for stop time from initial time,
					// ONTO THE START TIME!
					setTimeout(function () {
						// Enable the checkbox again to enable unchecking it
						$globalTimerSet.removeClass("disabled").prop("disabled", false);
						// Run helper function to set all global timer toggles to inactive and disabled
						FOS.globalTimerResetInactiveDisable();
					}, globalTimerStopConcated);
				} else {
					// Enable global timer toggles after disabling the timer
					FOS.globalTimerEnable();
				}
			})
		};

		/**
		 * +++++++++++++++++++++++++++++++++++++++++++
		 * ++ Helper function to set all global timer toggles
		 * ** to inactive and disabled
		 * +++++++++++++++++++++++++++++++++++++++++++
		 */
		FOS.globalTimerResetInactiveDisable = function () {
			// Go through all globalTimerToggles (all available local control toggles)
			$.each(globalTimerToggles, function () {
				var $this = $(this);
				// Get data from toggles
				var data = $this.data("toggles");
				if (data.active === true) {
					// Set local control toggle inactive
					data.toggle(false);
				}
				// Disable globalTimerToggle
				$this.toggleClass("disabled", true);
			});
		};

		/**
		 * +++++++++++++++++++++++++++++++++++++++++++
		 * ++ Helper function to enable all global timer toggles
		 * +++++++++++++++++++++++++++++++++++++++++++
		 */
		FOS.globalTimerEnable = function () {
			// Go through globalTimerToggles (all available local control toggles)
			$.each(globalTimerToggles, function () {
				// Enable globalTimerToggles again
				$(this).toggleClass("disabled", false);
			});
		};

		/**
		 * +++++++++++++++++++++++++++++++++++++++++++
		 * ++ Toggle the default toggles
		 * +++++++++++++++++++++++++++++++++++++++++++
		 */
		FOS.initDefaultToggles = function () {
			$defaultTogglesOn.each(function () {
				// Activate all default toggles
				$(this).toggles(true);
			});
		};

		/**
		 * +++++++++++++++++++++++++++++++++++++++++++
		 * ++ Remove the first occurrences of a value from an array
		 * +++++++++++++++++++++++++++++++++++++++++++
		 */
		FOS.removeValueFromArray = function (array, element) {
			var index = array.indexOf(element);
			if (index !== -1) {
				array.splice(index, 1);
			} else {
				console.log("Error in removeValueFromArray, element '" + element + "' was not found.");
			}
		};

		/**
		 * +++++++++++++++++++++++++++++++++++++++++++
		 * ++ Control section global set
		 * ** (old, used with own toggle)
		 * ** @deprecated
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

	}(window.FOS = window.FOS || {}, jQuery)
);
