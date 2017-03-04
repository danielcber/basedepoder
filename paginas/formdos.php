<!-- registrate.php -->
<?php 
	error_reporting(E_ERROR | E_PARSE); // Desactiva la notificación y warnings de error en php.
?>

<!DOCTYPE html>
<html lang="es">
<?php 
	include_once 'nav.php';
?>

<script type="text/javascript">
		jQuery(document).ready(function()
		{
			$(".container").hide(0).delay(500).fadeIn(500);
		}
		);
</script>
	
<div class="container">
	<div class="row">
		<div id="panelpanel" class="panel panel-default col-xs-12 col-sm-6 col-md-6 col-lg-6">
		<!-- PHP va acá -->
			<?php
			// $texto = $_GET['texto'];
			// $mensaje = $_GET['mensaje'];
			// $chk1 = $_GET['valor1'];
			// $chk2 = $_GET['valor2'];
			// $chk3 = $_GET['valor3'];
			// $radio = $_GET['radio'];
			// $opcion = $_GET['opcion'];
			// $archivo = $_GET['archivo'];

			$texto = $POST['texto'];
			$fecha = $POST['fecha'];
			$email = $POST['email'];
			$tel = $POST['usrtel'];
			$clave2 = $POST['clave2'];
			$msj = $POST['msj'];
			$msj2 = $POST['msj2'];
			$msj3 = $POST['msj3'];
			$opcion1 = $POST['opcion'];
			$radio1 = $POST['radio1'];
			$radio2 = $POST['radio2'];
			$radio3 = $POST['radio3'];


			// $texto = $_REQUEST['texto'];
			// $mensaje = $_REQUEST['mensaje'];
			// $chk1 = $_REQUEST['valor1'];
			// $chk2 = $_REQUEST['valor2'];
			// $chk3 = $_REQUEST['valor3'];
			// $radio = $_REQUEST['radio'];
			// $opcion = $_REQUEST['opcion'];
			// $archivo = $_REQUEST['archivo'];

			?>


			<div class="panel-heading">
				<label>Regístrate</label>
			</div>

			<div class="panel-body">
				<form action="" name="formjs" onsubmit="return onsubmit();" method="post">

					<input type="hidden" name="pag" value="form">
					
					<div class="form-group estilo">
					<label for="texto">Nombre y apellido:</label>
					<input type="text" class="form-control" name="texto" id="texto" required placeholder="Nombre y apellido"><span class="glyphicon glyphicon-ok form-control-feedback icono" aria-hidden="true"></span>
					<span class="msj"></span>
					</div>

					<div class="form-group estilofecha">
					<label for="fecha">Fecha para empezar inscripcción:</label>
					<input type="text" name="fecha" id="campofecha" class="form-control" placeholder="MM/DD/AA"><span class="glyphicon form-control-feedback iconofecha" aria-hidden="true"></span><span class="msjfecha"></span>
					</div><br>
					<script>
						$(document).ready(function(){
					   $("#campofecha").datepicker();
					})
					</script>



			    	<div class="form-group estilomail">
			    	<label for="email">Correo electrónico: </label>
			    	<input type="email" class="form-control" name="email" id="email" required placeholder="ejemplo@gmail.com"><span class="glyphicon form-control-feedback iconomail" aria-hidden="true"></span>
					<span class="msjmail"></span></div>

			    	<div class="form-group estilotel">
			    	<label for="usrtel">Teléfono:</label>
						<input type="tel" required name="usrtel" class="form-control" placeholder="Incluye el código de area" id="tel">
						<span class="glyphicon form-control-feedback iconotel" aria-hidden="true"></span>
					<span class="msjtel"></span></div>

					<div class="form-group estilo2">
					<label for="texto">Clave</label>
					<input type="password" class="form-control" name="clave1" id="clave1" required placeholder="**********" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" title="Seis carácteres o más, una mayúscula, una minúscula, y un número">
					<span class="glyphicon glyphicon-ok form-control-feedback icono2" aria-hidden="true">
					</div>
					<p>Seis carácteres o más, una mayúscula, una minúscula, y un número</p>

					<div class="form-group estilo2">
					<label for="texto">Repetir Clave</label>
					<input type="password" class="form-control" name="clave2" id="clave2" required placeholder="**********" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" title="Seis carácteres o más, una mayúscula, una minúscula, y un número">
					<span class="msj2"></span></div>

					<div class="form-group estilo3">
			    	<label for="comment">¿Porqué quieres ser parte de esta red?</label>
						<textarea class="form-control" name="msj" id="msj" required placeholder="Escribe tu mensaje"></textarea>
					<span id='errorMsj' class='error'>Campo Requerido</span>
					<span id='corrigeMsj' class='error'>Añadiste un caracter que no es válido, intenta de nuevo.</span>
					<span class="glyphicon form-control-feedback icono3" aria-hidden="true"></span>
					<span class="msj3"></span></div>

						<div class="form-group estilo23">
						<label for="comment">¿Qué entiendes como la construcción de poder en nuestras comunidades?</label>
						<textarea class="form-control" name="msj2" id="msj2" required placeholder="Escribe tu mensaje"></textarea>
					<span class="glyphicon form-control-feedback icono23" aria-hidden="true"></span>
					<span class="msj23"></span></div>

					<div class="form-group">
						<label for="opcion">¿A cuantas personas conoces dentro de la red?</label><br>
					<select class="form-control" name="opcion" value="opcion" id="opcion" required>
					<option value="">--- Seleccione uno ---  </option>
					<option value="0" name="opcion1"> 0</option>
					<option value="1" name="opcion2"> 1</option>
					<option value="2-5" name="opcion3"> 2-5</option>
					<option value="5+" name="opcion4"> 5+</option>
					</select>
					<span id='errorOpcion' class='error'>Campo Requerido</span>
					<span class="msj6"></span></div>

					<div class="form-group estilo33">
					<label for="comment">Escribe acá el nombre de estas personas, como y cuando las conociste.</label>
						<textarea class="form-control" name="msj3" id="msj3" required placeholder="Escribe tu mensaje"></textarea>
					<span class="glyphicon form-control-feedback icono33" aria-hidden="true"></span>
					<span class="msj33"></div>

						<div class="form-group">
						 ¿Estas dispuestx a trabajar por el crecimiento de tu comunidad?<br>
					<label for="radio1">
					<input type="radio" name="radio" id="radio1" value="Si"> Si
					</label><br>
					<label for="radio2">
					<input type="radio" name="radio" id="radio2" value="No"> No
					</label><br>
					<span id='errorRadio' class='error'>Campo Requerido</span>
					<span class="msj5"></span>
					</div>
			    	
					<div class="form-group enviar">
					<button type="submit" id="enviar" value="Submit" class="btn btn-primary">Enviar</button></div>
				</form>
			</div>

		</div>

		<div id="panelpanel" class="panel panel-default col-xs-12 col-sm-12 col-md-6 col-lg-6 resultados">
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
</div>

</body>

</html>