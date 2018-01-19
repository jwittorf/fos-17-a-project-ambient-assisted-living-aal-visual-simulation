<!DOCTYPE html>
<html lang="de">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
	<title>A1 (AAL) - Simulation - RBZ Technik</title>
	<!-- Bootstrap -->
	<link href="assets/Stylesheets/vendor/toggles/toggles.css" rel="stylesheet">
	<link href="assets/Stylesheets/vendor/toggles/themes/toggles-light.css" rel="stylesheet">
	<link href="assets/Stylesheets/main.css" rel="stylesheet">
</head>
<body>
<div id="wrapper">
	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<h3>Meldungen von Not-Tastern</h3>
				<div id="global-emergency-messages">
					<ul class="list-group">
						<li class="list-group-item list-group-item-success">
							<i class="glyphicon glyphicon-ok"></i> Keine Meldungen vorhanden!
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12">
				<div class="row">
					<div class="col-xs-6">
						<div class="row">
							<div class="col-xs-12">
								<!-- Hallway -->
								<div class="hallway-content">
									<div class="station">
										<h3>Kontrollstation</h3>
										<div class="hallway-station-content ajax-content"></div>
										<hr>
										<div class="row">
											<div class="col-xs-6">
												<button type="button" class="btn btn-danger btn-block transition"
														id="global-control-reset"
														disabled>
													Not-Aus
												</button>
											</div>
											<div class="col-xs-6">
												<div id="global-set">
														<span class="btn btn-default transition">Status: <i
																class="glyphicon glyphicon-alert"
																id="global-set-icon"></i></span>
												</div>
											</div>
										</div>
										<hr>
										<div class="row">
											<div class="col-xs-12">
												<div id="global-timer">
													<div class="form-horizontal">
														<div class="input-group">
															<span class="input-group-addon">
																<i class="glyphicon glyphicon-time"></i>
															</span>
															<!-- Start field -->
															<label for="global-timer-start" class="sr-only"> Start
																in Sekunden</label>
															<span class="input-group-addon"><i
																	class="glyphicon glyphicon-play"></i></span>
															<input type="number" min="0" max="1000"
																   class="form-control"
																   aria-label="Zeitschaltuhr Start in Sekunden"
																   id="global-timer-start"
																   name="global-timer-start">
															<!-- Stop field -->
															<label for="global-timer-stop" class="sr-only"> Stop in
																Sekunden</label>
															<span class="input-group-addon"><i
																	class="glyphicon glyphicon-stop"></i></span>
															<input type="number" min="0" max="1000"
																   class="form-control"
																   aria-label="Zeitschaltuhr Stop in Sekunden"
																   id="global-timer-stop"
																   name="global-timer-stop">
															<!-- Set checkbox -->
															<span class="input-group-addon">
																<label
																	for="global-timer-set">Zeitschaltuhr aktivieren</label>
																<input type="checkbox"
																	   id="global-timer-set"
																	   name="global-timer-set"
																	   value="global-timer-active"
																	   data-targetstart="#global-timer-start"
																	   data-targetstop="#global-timer-stop">
															</span>
															<!-- Reset button -->
															<label for="global-timer-refresh" class="sr-only"> Neu
																laden</label>
															<span class="input-group-btn"><button type="button"
																								  class="btn btn-default"><i
																		class="glyphicon glyphicon-refresh"
																		onClick="location.reload()"></i></button></span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<hr>
							</div>
							<div class="col-xs-6">
								<!-- Livingroom -->
								<div id="livingroom-content" class="room">
									<h3>Wohnzimmer</h3>
									<div class="row">
										<div class="col-xs-12">
											<div class="livingroom-emergency-content">
												<div class="row">
													<div class="col-xs-7">
														<div id="livingroom-emergency-name">
															Not-Taster Wohnzimmer
														</div>
													</div>
													<div class="col-xs-5">
														<div class="toggle toggle-light toggle-local-emergency"
															 id="livingroom-emergency"
															 data-name="#livingroom-emergency-name"
															 data-target="#livingroom-content"></div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-xs-12">
											<h4>Fernseher</h4>
											<div class="livingroom-tv-content ajax-content"></div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xs-6">
								<!-- Bedroom -->
								<div id="bedroom-content" class="room">
									<h3>Schlafzimmer</h3>
									<div class="row">
										<div class="col-xs-12">
											<div class="bedroom-emergency-content">
												<div class="row">
													<div class="col-xs-7">
														<div id="bedroom-emergency-name">
															Not-Taster Schlafzimmer
														</div>
													</div>
													<div class="col-xs-5">
														<div class="toggle toggle-light toggle-local-emergency"
															 id="bedroom-emergency"
															 data-name="#bedroom-emergency-name"
															 data-target="#bedroom-content"></div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-xs-6">
											<h4>Nachtisch 1</h4>
											<div class="bedroom-nightstand1-content ajax-content"></div>
										</div>
										<div class="col-xs-6">
											<h4>Nachtisch 2</h4>
											<div class="bedroom-nightstand2-content ajax-content"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xs-6">
						<div class="row">
							<div class="col-xs-12">
								<!-- Kitchen -->
								<div id="kitchen-content" class="room">
									<h3>Küche</h3>
									<div class="row">
										<div class="col-xs-12">
											<div class="kitchen-emergency-content">
												<div class="row">
													<div class="col-xs-7">
														<div id="kitchen-emergency-name">
															Not-Taster Küche
														</div>
													</div>
													<div class="col-xs-5">
														<div class="toggle toggle-light toggle-local-emergency"
															 id="kitchen-emergency" data-name="#kitchen-emergency-name"
															 data-target="#kitchen-content"></div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-xs-6">
											<h4>Waschmaschine</h4>
											<div class="kitchen-washingmachine-content ajax-content"></div>
											<h4>Geschirrspüler</h4>
											<div class="kitchen-dishwasher-content ajax-content"></div>
										</div>
										<div class="col-xs-6">
											<h4>Kühlschrank</h4>
											<div class="kitchen-fridge-content ajax-content"></div>
											<h4>Herd mit Ofen</h4>
											<div class="kitchen-stove-content ajax-content"></div>
											<h4>Gefriertruhe</h4>
											<div class="kitchen-freezer-content ajax-content"></div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xs-12">
								<!-- Bedroom -->
								<div class="bedroom-content ajax-content">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<hr>
	</div>
</div>
<div id="controls-wrapper">
	<div class="container">
		<h2>Kontrollbereich</h2>
		<div class="row">
			<div class="col-xs-4">
				<h4>Küche</h4>
				<ul class="list-group">
					<li class="list-group-item">
						<div class="row">
							<div class="col-xs-7">Backofen</div>
							<div class="col-xs-5">
								<div
									class="toggle toggle-light toggle-local-control kitchen-stove-control"
									id="kitchen-stove-control-oven-one"
									data-target="#kitchen-stove-oven-one"
									data-group="station-group-kitchen"></div>
							</div>
						</div>
					</li>
					<li class="list-group-item">
						<div class="row">
							<div class="col-xs-7">Herdplatte 1</div>
							<div class="col-xs-5">
								<div
									class="toggle toggle-light toggle-local-control kitchen-stove-control"
									id="kitchen-stove-control-hotplate-one"
									data-target="#kitchen-stove-hotplate-one"
									data-group="station-group-kitchen"></div>
							</div>
						</div>
					</li>
					<li class="list-group-item">
						<div class="row">
							<div class="col-xs-7">Herdplatte 2</div>
							<div class="col-xs-5">
								<div
									class="toggle toggle-light toggle-local-control kitchen-stove-control"
									id="kitchen-stove-control-hotplate-two"
									data-target="#kitchen-stove-hotplate-two"
									data-group="station-group-kitchen"></div>
							</div>
						</div>
					</li>
					<li class="list-group-item">
						<div class="row">
							<div class="col-xs-7">Herdplatte 3</div>
							<div class="col-xs-5">
								<div
									class="toggle toggle-light toggle-local-control kitchen-stove-control"
									id="kitchen-stove-control-hotplate-three"
									data-target="#kitchen-stove-hotplate-three"
									data-group="station-group-kitchen"></div>
							</div>
						</div>
					</li>
					<li class="list-group-item">
						<div class="row">
							<div class="col-xs-7">Herdplatte 4</div>
							<div class="col-xs-5">
								<div
									class="toggle toggle-light toggle-local-control kitchen-stove-control"
									id="kitchen-stove-control-hotplate-four"
									data-target="#kitchen-stove-hotplate-four"
									data-group="station-group-kitchen"></div>
							</div>
						</div>
					</li>
					<li class="list-group-item">
						<div class="row">
							<div class="col-xs-7">Kühlschrank</div>
							<div class="col-xs-5">
								<div
									class="toggle toggle-light toggle-local-control kitchen-fridge-control"
									id="kitchen-fridge-control-signal-one"
									data-target="#kitchen-fridge-signal-one"
									data-group="station-group-kitchen"></div>
							</div>
						</div>
					</li>
					<li class="list-group-item">
						<div class="row">
							<div class="col-xs-7">Gefriertruhe</div>
							<div class="col-xs-5">
								<div
									class="toggle toggle-light toggle-local-control kitchen-freezer-control"
									id="kitchen-freezer-control-signal-one"
									data-target="#kitchen-freezer-signal-one"
									data-group="station-group-kitchen"></div>
							</div>
						</div>
					</li>
					<li class="list-group-item">
						<div class="row">
							<div class="col-xs-7">Waschmaschine</div>
							<div class="col-xs-5">
								<div
									class="toggle toggle-light toggle-local-control kitchen-washingmachine-control"
									id="kitchen-washingmachine-control-signal-one"
									data-target="#kitchen-washingmachine-signal-one"
									data-group="station-group-kitchen"></div>
							</div>
						</div>
					</li>
					<li class="list-group-item">
						<div class="row">
							<div class="col-xs-7">Geschirrspüler</div>
							<div class="col-xs-5">
								<div
									class="toggle toggle-light toggle-local-control kitchen-dishwasher-control"
									id="kitchen-dishwasher-control-signal-one"
									data-target="#kitchen-dishwasher-signal-one"
									data-group="station-group-kitchen"></div>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="col-xs-4">
				<h4>Schlafzimmer</h4>
				<ul class="list-group">
					<li class="list-group-item">
						<div class="row">
							<div class="col-xs-7">Nachttisch 1</div>
							<div class="col-xs-5">
								<div
									class="toggle toggle-light toggle-local-control bedroom-nightstand1-control"
									id="bedroom-nightstand1-control-signal-one"
									data-target="#bedroom-nightstand1-signal-one"
									data-group="station-group-bedroom"></div>
							</div>
						</div>
					</li>
					<li class="list-group-item">
						<div class="row">
							<div class="col-xs-7">Nachttisch 2</div>
							<div class="col-xs-5">
								<div
									class="toggle toggle-light toggle-local-control bedroom-nightstand2-control"
									id="bedroom-nightstand2-control-signal-one"
									data-target="#bedroom-nightstand2-signal-one"
									data-group="station-group-bedroom"></div>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="col-xs-4">
				<h4>Wohnzimmer</h4>
				<ul class="list-group">
					<li class="list-group-item">
						<div class="row">
							<div class="col-xs-7">Fernseher</div>
							<div class="col-xs-5">
								<div
									class="toggle toggle-light toggle-local-control livingroom-tv-control"
									id="livingroom-tv-control-signal-one"
									data-target="#livingroom-tv-signal-one"
									data-group="station-group-livingroom"></div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
<div id="emergency-message">
	<div class="modal fade" tabindex="-1" role="dialog" id="emergency-message-modal">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Meldung schließen"><span
							aria-hidden="true">&times;</span></button>
					<h4 class="modal-title">Not-Taster betätigt!</h4>
				</div>
				<div class="modal-body">
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Meldung schließen</button>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="assets/Javascripts/vendor/jquery.js"></script>
<!-- Include all compiled plugins/vendors (below), or include individual files as needed -->
<script src="assets/Javascripts/vendor/bootstrap.js"></script>
<script src="assets/Javascripts/vendor/toggles.min.js"></script>
<!-- Own scripts -->
<script src="assets/Javascripts/jquery.main.js"></script>
<script src="assets/Javascripts/main.init.js"></script>
</body>
</html>
