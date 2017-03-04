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
			<div id="panelpanel" class="panel panel-default col-xs-10 col-xs-offset-2 col-sm-10 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
				<!-- PHP va acá -->
				<?php 
					include_once 'formulario.php';
				?>

		</div>
	</div>
</body>

</html>