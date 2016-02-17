<?php 
	INCLUDE('cfg/config.php');
?>
<!DOCTYPE html>
<html>
	<head>
		<title><?php echo $SERVICE_TITLE; ?></title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<!-- Bootstrap core CSS -->
		<link href="http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet" media="screen">
		<link href="css/custom.css" rel="stylesheet">
		<link href="css/animate.css" rel="stylesheet">

		<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!--[if lt IE 9]>
		<script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.js"></script>
		<script src="http://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.js"></script>
		<![endif]-->
	</head>
	<body>
			<div class="-stockvideo" style="background-image: url('media/background.jpg'); background-size: 100vw 100vh  ;background-repeat: no-repeat;">
			
				<!--<video autoplay loop poster="media/dark_smoke.jpg">
					<source src="../media/dark_smoke.webm" type="video/webm">
					<source src="../media/dark_smoke.mp4" type="video/mp4">
					<source src="../media/dark_smoke.ogg" type="video/ogg">
				</video>-->
				
				<div class="-header">
					<div class="container">
					
					</div>
				</div>
				
				<div class="-body">
					<div class="container">

						<div class="col-md-5 col-xs-12 col-md-push-1 -left">
							<h1 style="margin-top: 4px;"><?php echo($SERVICE_NAME); ?></h1>
							<h4><?php echo($SERVICE_DESC); ?></h4>
							<hr>
							<button id="sign-in"><h2>LOGIN</h2></button>
							<button id="sign-up"><h3>REGISTER</h3></button>
							<hr>
							<h3 style="text-align: center; margin-bottom: 20px; margin-top: 35px;"><span class="highlight">Do you want to download our client ?</span></h3>
							<div class="col-xs-push-2 col-xs-8">
								<button><span class="glyphicon glyphicon-cloud-download"></span> Mirror 1</button>
								<button><span class="glyphicon glyphicon-cloud-download"></span> Mirror 2</button>
								<button><span class="glyphicon glyphicon-magnet"></span> Torrent Magnet</button>
							</div>
						</div>
						
						<div class="col-md-6 col-md-push-1 col-xs-12 -right">
						
							<div class="-sign-up">
								<h1 style="margin-top: 4px;">Join now !</h1>
								<hr>
								<form>
									<h3>Please register to use <?php echo($SERVICE_NAME); ?></h3>
									<br>
									<!-- <label>User name:</label><br> -->
									<input placeholder="User name" type="text"></input><br>
									<!-- <label>E-mail:</label><br> -->
									<input placeholder="E-mail adress" type="email"></input><br>
									<!-- <label>Password:</label><br> -->
									<input placeholder="Password" type="password"></input><br>
									<!-- <label>Password:</label><br> -->
									<input placeholder="Confirm password" type="password"></input><br>
									<button id="Register">JOIN NOW</button>
									<hr>
									<h4>or Join us with:</h4>
								</form>
								<div class="row">
									<div class="col-xs-6">
										<button id="sign-up-Facebook">Facebook</button>
									</div>
									<div class="col-xs-6">
										<button id="sign-up-Google">Google+</button>
									</div>
									<div class="col-xs-6">
										<button id="sign-up-Twitter">Twitter</button>
									</div>
									<div class="col-xs-6">
										<button id="sign-up-Spotify">Spotify</button>
									</div>
								</div>
							</div>
							
							<div class="-sign-in">
								<h1 style="margin-top: 4px;">Log in</h1>
								<hr>
								<form>
									<h3>Please log in to use <?php echo($SERVICE_NAME); ?></h3>
									<br>
									<!-- <label>E-mail:</label><br> -->
									<input placeholder="E-mail adress" type="email"></input><br>
									<!-- <label>Password:</label><br> -->
									<input placeholder="Password" type="password"></input><br>
									<button id="Login">LOGIN</button>
									<hr>
									<h4>or Log in with:</h4>
								</form>
								<div class="row">
									<div class="col-xs-6">
										<button id="sign-in-Facebook">Facebook</button>
									</div>
									<div class="col-xs-6">
										<button id="sign-in-Google">Google+</button>
									</div>
									<div class="col-xs-6">
										<button id="sign-in-Twitter">Twitter</button>
									</div>
									<div class="col-xs-6">
										<button id="sign-in-Spotify">Spotify</button>
									</div>
								</div>
							</div>
							
						</div>
						
					</div>
				</div>
				
				<div class="-navigation">
				
				</div>
				
			</div>
		<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
		<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
		<!-- Include all compiled plugins (below), or include individual files as needed -->
		<script src="http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.min.js"></script>
		
		<!-- Handlers -->
		<script src="js/buttonHandler.js"></script>
	</body>
</html>