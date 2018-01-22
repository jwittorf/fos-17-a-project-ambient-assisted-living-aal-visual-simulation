(function (FOS, $, undefined) {

	$(function () {
		//FOS.initSomeComponent();
		FOS.initAjax();
		FOS.initToggleVars();
		FOS.initToggles();
		FOS.initControlSectionLocal();
		FOS.initControlFrontdoorLock();
		FOS.initControlSectionGlobalReset();
		FOS.initLocalEmergency();
		FOS.initGlobalTimer();
	});

}(window.FOS = window.FOS || {}, jQuery));
