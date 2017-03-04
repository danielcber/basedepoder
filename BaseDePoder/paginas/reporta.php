<!DOCTYPE html>
<html lang="es">
<head>
<?php 
	include_once 'nav.php';
?>


<script type="text/javascript">
		jQuery(document).ready(function()
		{
			
			$( "p" ).click(function() {
  				var htmlString = "Llamando...";
  				var nada = "No contestó, intenta de nuevo...";
  				$( this ).text(htmlString).hide(0)
  				.delay(500)
  				.fadeIn(500)
  				.delay(1000)
  				.fadeOut(500)
  				.delay(500)
  				.fadeIn(500)
  				.delay(1000)
  				.fadeOut(500)
  				.delay(500)
  				.fadeIn(500)
  				.delay(1000)
  				.fadeOut(500)
  				.delay(500)
  				.fadeIn(500)
  				.delay(1000)
  				.fadeOut(500);
  				var e = $(this);
				setTimeout(function(){
					e.text(nada).hide(0).delay(0).fadeIn(500);
				}, 11000);
			});

		}
		);
	</script>
<section class="caja_principal container">
		<div class="row">
			<article class="art col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3" clearfix>

				<hr>

				<button type="button" class="btn btn-primary" onmouseover="ObjPreguntas.mostrardatos()">Preguntas generales</button>

				<button type="button" class="btn btn-info" onmouseover="ObjEmpleado.mostrardatos()">Más información</button>

				<button type="button" class="btn btn-success" onmouseover="ObjCultura.mostrardatos()">Eventos culturales</button>
				
				<button type="button" class="btn btn-warning" onmouseover="ObjEmergencia.mostrardatos()">Emergencia</button>

				<hr>

				<p id="datosdatos"></p>

			</article>
	</section>

</body>

</html>