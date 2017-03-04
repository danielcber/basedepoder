<!DOCTYPE html>
<html lang="es">
<?php 
	include_once 'nav.php';
?>


<script type="text/javascript">
		jQuery(document).ready(function()
		{
			$(".container").hide(0).delay(500).fadeIn(1000);
			$(".cinco").mouseenter(function(){
				$("#five8").css( 'background-color','rgba(67, 178, 46, 0.3)' );
			})
			$(".cinco").mouseleave(function(){
				$("#five8").css( 'background-color','white' );
			})
			$(".ocho").mouseenter(function(){
				$("#eight12").css( 'background-color','rgba(67, 178, 46, 0.3)' );
			})
			$(".ocho").mouseleave(function(){
				$("#eight12").css( 'background-color','white' );
			})
		}
		);
	</script>
<div class="container">
		<div class="row">



			<div id="panelpanel" class="panel panel-default col-xs-12 col-sm-12 col-md-3 col-lg-3">
				<div class="panel-heading"><label>Tu disponibilidad para hacer trabajo comunitario y cultural</label></div>
				<div class="panel-body">

				<form action="" id="formcal" name="formcal" onsubmit="return validarCal();" method="get">
					<h4>Lunes</h4>
					<input type="checkbox" id="lunes5a8" name="lunes5a8"" onclick="return validate();"><label for="lunes5a8" class="cinco">&nbsp;5:00pm-8:00pm</label><br>
					<input type="checkbox" id="lunes8a12" name="lunes8a12" onclick="return validateUno();"><label class="ocho" for="lunes8a12">&nbsp;8:00pm-12:00am</label><br>
					<h4>Martes</h4>
					<input type="checkbox" id="martes5a8" name="martes5a8" onclick="return validateDos();"><label class="cinco" for="martes5a8">&nbsp;5:00pm-8:00pm</label><br>
					<input type="checkbox" id="martes8a12" name="martes8a12" onclick="return validateTres();"><label class="ocho" for="martes8a12">&nbsp;8:00pm-12:00am</label><br>
					<h4>Miércoles</h4>
					<input type="checkbox" id="miercoles5a8" name="miercoles5a8" onclick="return validateCuatro();"><label class="cinco" for="miercoles5a8">&nbsp;5:00pm-8:00pm</label><br>
					<input type="checkbox" id="miercoles8a12" name="miercoles8a12" onclick="return validateCinco();"><label class="ocho" for="miercoles8a12">&nbsp;8:00pm-12:00am</label><br>
					<h4>Jueves</h4>
					<input type="checkbox" id="jueves5a8" name="jueves5a8" onclick="return validateSeis();"><label class="cinco" for="jueves5a8">&nbsp;5:00pm-8:00pm</label><br>
					<input type="checkbox" id="jueves8a12" name="jueves8a12" onclick="return validateSiete();"><label class="ocho" for="jueves8a12">&nbsp;8:00pm-12:00am</label><br>
					<h4>Viernes</h4>
					<input type="checkbox" id="viernes5a8" name="viernes5a8" onclick="return validateOcho();"><label class="cinco" for="viernes5a8">&nbsp;5:00pm-8:00pm</label><br>
					<input type="checkbox" id="viernes8a12" name="viernes8a12" onclick="return validateNueve();"><label class="ocho" for="viernes8a12">&nbsp;8:00pm-12:00am</label><br>
					<h4>Sábado</h4>
					<input type="checkbox" id="sabado5a8" name="sabado5a8" onclick="return validateDiez();"><label class="cinco" for="sabado5a8">&nbsp;5:00pm-8:00pm</label><br>
					<input type="checkbox" id="sabado8a12" name="sabado8a12" onclick="return validateOnce();"><label class="ocho" for="sabado8a12">&nbsp;8:00pm-12:00am</label><br>
					<h4>Domingo</h4>
					<input type="checkbox" id="domingo5a8" name="domingo5a8" onclick="return validateDoce();"><label class="cinco" for="domingo5a8">&nbsp;5:00pm-8:00pm</label><br>
					<input type="checkbox" id="domingo8a12" name="domingo8a12" onclick="return validateTrece();"><label class="ocho" for="domingo8a12">&nbsp;8:00pm-12:00am</label><br>
					<div class="form-group">
						<button type="submit" value="Submit" class="btn btn-primary">Enviar</button>
					</div>
				</form>


				</div>
			</div>


			<div id="panelpanel" class="panel panel-default col-xs-12 col-sm-12 col-md-8 col-lg-8 panelconfirm">
				<div class="panel-heading"><label>Calendario</label></div>
				<div class="panel-body">
					<table class="table table-striped table-responsive">
						<thead>
							<tr id="labels">
								<th>Tiempo</th>
								<th>Lunes</th>
								<th>Martes</th>
								<th>Miércoles</th>
								<th>Jueves</th>
								<th>Viernes</th>
								<th>Sábado</th>
								<th>Domingo</th>
							</tr>
						</thead>
						<tbody>
							<tr id="five8">
								<td class="tiempo">5:00pm-8:00pm</td>
								<td id="lun5a8" class="nada disponible"></td>
								<td id="mar5a8" class="nada disponible"></td>
								<td id="mie5a8" class="nada disponible"></td>
								<td id="jue5a8" class="nada disponible"></td>
								<td id="vie5a8" class="nada disponible"></td>
								<td id="sab5a8" class="nada disponible"></td>
								<td id="dom5a8" class="nada disponible"></td>
							</tr>
							<tr id="eight12">
								<td class="tiempo">8:00pm-12:00am</td>
								<td id="lun8a12" class="nada disponible"></td>
								<td id="mar8a12" class="nada disponible"></td>
								<td id="mie8a12" class="nada disponible"></td>
								<td id="jue8a12" class="nada disponible"></td>
								<td id="vie8a12" class="nada disponible"></td>
								<td id="sab8a12" class="nada disponible"></td>
								<td id="dom8a12" class="nada disponible"></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			



		</div>
</div>

</body>

</html>