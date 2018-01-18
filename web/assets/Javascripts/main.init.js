(function (FOS, $, undefined) {

	$(function () {
		//FOS.initSomeComponent();
		FOS.initAjax();
		FOS.initToggleVars();
		FOS.initToggles();
		FOS.initControlSectionLocal();
		FOS.initControlSectionGlobalReset();
		FOS.initLocalEmergency();
		// FOS.initControlSectionGlobalSet();
	});

}(window.FOS = window.FOS || {}, jQuery));
