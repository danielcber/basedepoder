<!-- registrate.php -->
<?php 
	error_reporting(E_ERROR | E_PARSE); // Desactiva la notificación y warnings de error en php.
?>

<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<link rel="stylesheet" href="../css/jquery-ui.min.css">
	<link href="../css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="../css/style.css">
	<script src="../jq/jquery-2.2.4.min.js"></script>
	<script src="../js/bootstrap.min.js"></script>
	<script type="text/javascript" src="../js/bootstrap.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script src="../jq/jquery-ui.min.js" ></script>
	<script src="../js/enlaces.js"></script>
	<script src="../js/funciones.js"></script>
	<script src="../jq/jqvalidar.js"></script>
	<title>Base de Poder</title>
</head>

<body>

	<nav class="navbar">
	  <div class="container-fluid">
	    <div class="navbar-header">
	    	<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>                        
	      	</button>
	      <a class="navbar-brand">Base de Poder</a>
	    </div>
	    <div class="collapse navbar-collapse" id="myNavbar">
		    <ul class="nav navbar-nav">
		      <li><a href="../index.php">Inicio</a></li>
		      <li class="active"><a href="registrate.php">Regístrate</a></li>
		      <li><a href="calendario.html">Horario</a></li>
		      <li><a href="reporta.html">Reporta</a></li>
		      <li><a href="info.html">Información</a></li>
		    </ul>
		    <ul class="nav navbar-nav navbar-right">
		        <li><a href="../index.php"><span class="glyphicon glyphicon-user"></span> Iniciar</a></li>
		        <li><a href="registrate.php"><span class="glyphicon glyphicon-log-in"></span> Registrar</a></li>
	      	</ul>
	  </div>
	  </div>
	</nav>

	<script type="text/javascript">
		jQuery(document).ready(function()
		{
			$(".container").hide(0).delay(500).fadeIn(500);
		}
		);
	</script>
	<div class="container">
		<div class="row">
			<div id="panelpanel" class="panel panel-default col-xs-10 col-xs-offset-2 col-sm-10 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
				<!-- PHP va acá -->
	<?php 
		error_reporting(E_ERROR | E_PARSE); // Desactiva la notificación y warnings de error en php.
	?>


	<?php
		$texto = $_REQUEST['texto'];
		$fecha = $_REQUEST['fecha'];
		$email = $_REQUEST['email'];
		$tel = $_REQUEST['usrtel'];
		$clave2 = $_REQUEST['clave2'];
		$msj = $_REQUEST['msj'];
		$msj2 = $_REQUEST['msj2'];
		$msj3 = $_REQUEST['msj3'];
		$opcion = $_REQUEST['opcion'];
		$radio = $_REQUEST['radio'];
		$radio2 = $_REQUEST['radio2'];
		$radio3 = $_REQUEST['radio3'];
	?>
	<label for="texto">Nombre y apellido</label><br>
	 <?php  echo $texto;?><br>
	<label for="fecha">Fecha para empezar inscripcción</label><br>
	<?php echo $fecha;?><br>
	<label for="email">Correo electrónico </label><br>
	<?php echo $email;?><br>
	<label for="texto">Clave</label><br>
	<?php
		if ( $clave2 )
		{
			echo " ******* ";
		} else {
			echo " Invalid password";
		}
	?><br>
	<label for="usrtel">Teléfono</label><br>
	<?php echo $tel;?><br>
	<label for="comment">¿Porqué quieres ser parte de esta red?</label><br>
	<?php echo $msj;?><br>
	<label for="comment">¿Qué entiendes como la construcción de poder en nuestras comunidades?</label><br>
	<?php echo $msj2;?><br>
	<label for="opcion">¿A cuantas personas conoces dentro de la red?</label><br>
	<?php echo $opcion; ?><br>
	<label for="comment">Escribe acá el nombre de estas personas, como y cuando las conociste.</label><br>
	<?php echo $msj3;?><br>
	<label>¿Estas dispuestx a trabajar por el crecimiento de tu comunidad?</label><br>
	<?php echo $radio;?><br>
	<br>
		</div>
	</div>
</body>

</html>