<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<link rel="stylesheet" href="css/jquery-ui.min.css">
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script type="text/javascript" src="js/funciones.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script src="jq/jquery-ui.min.js" ></script>
	<title>Base de Poder</title>
</head>

<body data-spy="scroll" data-target=".navbar" data-offset="50">

	<nav class="navbar" data-spy="affix" data-offset-top="197">
	  <div class="container-fluid">
	    <div class="navbar-header">
	    	<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar" >
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>                        
	      	</button>
	      <a class="navbar-brand">Base de Poder</a>
	    </div>
	    <div class="collapse navbar-collapse" id="myNavbar">
		    <ul class="nav navbar-nav">
		      <li class="active"><a href="index.php">Inicio</a></li>
		      <li><a href="paginas/registrate.php">Regístrate</a></li>
		      <li><a href="paginas/calendario.php">Horario</a></li>
		      <li><a href="paginas/reporta.php">Reporta</a></li>
		      <li><a href="paginas/info.php">Información</a></li>
		    </ul>
		    <ul class="nav navbar-nav navbar-right">
		        <li><a href="index.php"><span class="glyphicon glyphicon-user"></span> Iniciar</a></li>
		        <li><a href="paginas/registrate.php"><span class="glyphicon glyphicon-log-in"></span> Registrar</a></li>
	      	</ul>
	  </div>
	  </div>
	</nav>

<script type="text/javascript">
		jQuery(document).ready(function()
		{
			$(".panel").hide(0).delay(500).fadeIn(1000)
		}
		);
	</script>

<div class="container">
	<div class="row">
		<div class="panel panel-default col-xs-12 col-sm-12 col-md-4 col-lg-4" id="iniciar">
			 <div class="panel-heading"><label>Inicia sesión</label></div>
		 		<form class="panel-body" method="post" action="">
				  <div class="form-group">
				    <label for="email">Correo electrónico: </label>
				    <input type="email" class="form-control" id="email" placeholder="ejemplo@gmail.com">
				  </div>
				  <div class="form-group">
				  <label for="pwd">Contraseña: </label>
				  <input type="password" class="form-control" id="pwd" placeholder="***********">
				  </div>
				  <div class="checkbox">
				  <label><input type="checkbox"> Recuérdame</label>
				  </div>
				  <button type="submit" class="btn btn-default">Iniciar</button>
				  <br><br>
				  <a href="paginas/registrate.html">Aun no soy miembro, me tengo que registrar!</a>
				</form>
		</div>

	<script>
		$( function() {
		// run the currently selected effect
		function runEffect() {
		  // get effect type from
		  var selectedEffect = $( "#effectTypes" ).val();

		  // Most effect types need no options passed by default
		  var options = {};
		  // some effects have required parameters
		  if ( selectedEffect === "scale" ) {
		    options = { percent: 50 };
		  } else if ( selectedEffect === "transfer" ) {
		    options = { to: "#boton1", className: "ui-effects-transfer" };
		  } else if ( selectedEffect === "size" ) {
		    options = { to: { width: 200, height: 60 } };
		  }

		  // Run the effect
		  $( "#pancon" ).effect( selectedEffect, options, 500, callback );
		};

		// Callback function to bring a hidden box back
		function callback() {
		  setTimeout(function() {
		    $( "#pancon" ).removeAttr( "style" ).hide();
		  }, 1000 );
		  	$("#titulo").text("Muchas gracias, ya puede iniciar sesión");

		};

		// Set effect from select menu value
		$( "#boton1" ).on( "click", function() {
		  runEffect();
		  return false;
		});
		} );
	</script>

	<script>

		$( function() {
			$( "#draggable" ).draggable();
		} );
	</script>

		<div class="panel panel-default col-xs-12 col-sm-12 col-md-4 col-lg-4 panelconfirm" id="draggable">
			<div class="panel-heading"><label id="titulo">Confirma que esta es tu información</label></div>
				<div class="panel-body" id="pancon">
					<script type="text/javascript">
					var fecha = new Date;
					document.write("<B>Su hora y fecha es:  </B>"+fecha+"<br>");
					document.write("<B>El Nombre de la Aplicación es:  </B>"+navigator.appName+"<BR>");
					document.write("<B>La Versión de la Aplicación es:  </B>"+navigator.appVersion+"<BR>"); 
					document.write("<B>La cabecera completa del agente enviada  en una petición HTTP es : </B>"+navigator.userAgent+"<BR>"); 
					document.write("<B>La Plataforma es: </B>"+navigator.platform+"<BR>");
					</script>
					<br>
					<select name="effects" id="effectTypes">
					  <option value="blind">Blind</option>
					  <option value="bounce">Bounce</option>
					  <option value="clip">Clip</option>
					  <option value="drop">Drop</option>
					  <option value="explode">Explode</option>
					  <option value="fade">Fade</option>
					  <option value="fold">Fold</option>
					  <option value="highlight">Highlight</option>
					  <option value="puff">Puff</option>
					  <option value="pulsate">Pulsate</option>
					  <option value="scale">Scale</option>
					  <option value="shake">Shake</option>
					  <option value="size">Size</option>
					  <option value="slide">Slide</option>
					  <option value="transfer">Transfer</option>
					</select>

					<button id="boton1" class="ui-state-default ui-corner-all" onclick="return pancon();">Confirma </button>
		</div>
	</div>
</div>


</body>

</html>