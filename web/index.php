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
			<div class="col-xs-9">
				<h2>Wohnbereich und Schaltplan</h2>
				<div class="row">
					<div class="col-xs-5">
						<!-- Living room -->
						<div class="livingroom-content ajax-content">
						</div>
					</div>
					<div class="col-xs-2">
						<!-- Hallway -->
						<div class="hallway-content ajax-content">
						</div>
					</div>
					<div class="col-xs-5">
						<div class="row">
							<div class="col-xs-12">
								<!-- Kitchen -->
								<div class="kitchen-content ajax-content">
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
			<div class="col-xs-3">
				<h2>Kontrollbereich</h2>
				<h3>Lokale Kontrollelemente</h3>
				<div class="panel-group" id="control-panel" role="tablist" aria-multiselectable="true">
					<div class="panel panel-default">
						<div class="panel-heading" role="tab" id="control-panel-heading-one">
							<h4 class="panel-title">
								<a href="#control-panel-body-one" role="button" data-toggle="collapse"
								   data-parent="#control-panel" aria-expanded="true"
								   aria-controls="control-panel-body-one">
									Küche
								</a>
							</h4>
						</div>
						<div class="panel-collapse collapse in" role="tabpanel" id="control-panel-body-one"
							 aria-labelledby="control-panel-heading-one">
							<div class="panel-body">
								<ul class="list-group">
									<li class="list-group-item">
										<div class="row">
											<div class="col-xs-7">Backofen</div>
											<div class="col-xs-5">
												<div
													class="toggle toggle-light toggle-local-control kitchen-stove-control"
													id="kitchen-stove-control-oven-one"
													data-target="#kitchen-stove-oven-one"></div>
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
													data-target="#kitchen-stove-hotplate-one"></div>
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
													data-target="#kitchen-stove-hotplate-two"></div>
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
													data-target="#kitchen-stove-hotplate-three"></div>
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
													data-target="#kitchen-stove-hotplate-four"></div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="panel panel-default">
						<div class="panel-heading" role="tab" id="control-panel-heading-two">
							<h4 class="panel-title">
								<a href="#control-panel-body-two" role="button" data-toggle="collapse"
								   data-parent="#control-panel" aria-expanded="false"
								   aria-controls="control-panel-body-two">
									Schlafzimmer
								</a>
							</h4>
						</div>
						<div class="panel-collapse collapse" role="tabpanel" id="control-panel-body-two"
							 aria-labelledby="control-panel-heading-two">
							<div class="panel-body">
								<p>Lorem ipsum</p>
							</div>
						</div>
					</div>
					<div class="panel panel-default">
						<div class="panel-heading" role="tab" id="control-panel-heading-three">
							<h4 class="panel-title">
								<a href="#control-panel-body-three" role="button" data-toggle="collapse"
								   data-parent="#control-panel" aria-expanded="false"
								   aria-controls="control-panel-body-three">
									Wohnzimmer
								</a>
							</h4>
						</div>
						<div class="panel-collapse collapse" role="tabpanel" id="control-panel-body-three"
							 aria-labelledby="control-panel-heading-three">
							<div class="panel-body">
								<p>Lorem ipsum</p>
							</div>
						</div>
					</div>
				</div>
				<h3>Globale Kontrollelemente</h3>
				<ul class="list-group">
					<li class="list-group-item">
						<div class="row">
							<div class="col-xs-12">
								<button type="button" class="btn btn-danger btn-block" id="global-control-reset"
										disabled>
									Not-Aus
								</button>
							</div>
						</div>
					</li>
					<li class="list-group-item">
						<div class="row">
							<div class="col-xs-12">
								<div id="global-set">
									<h4>Prüfung auf Aktivität</h4>
									<span class="btn btn-default">Status: <i class="glyphicon glyphicon-alert"
																			 id="global-set-icon"></i></span>
								</div>
							</div>
						</div>
						<!--
						div class="row">
							<div class="col-xs-8">
								<div class="row">
									<div class="col-xs-6">
										Aktivieren
									</div>
									<div class="col-xs-6">
										<div class="toggle toggle-light toggle-global-control"
											 id="global-control-set"></div>
									</div>
								</div>
							</div>
							<div class="col-xs-4">
								<div class="row">
									<div class="col-xs-6">
										Status
									</div>
									<div class="col-xs-6">
										<div id="global-set">
											<i class="glyphicon glyphicon-alert"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
						-->
					</li>
				</ul>
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
