// jqvalidar.js

$(function(){
	
	$('#texto').focusin(function(){
		$(this).css( 'background','#FFF' );
		$('.estilo').removeClass( 'has-success has-warning has-error' );
		$('.estilo').removeClass( 'has-feedback' );
		$('.icono').removeClass( 'glyphicon-ok glyphicon-warning-sign glyphicon-remove' );
		$('.msj').html('');
		$('.msj').removeClass( 'help-block' );
		
	});

	$('#texto').focusout(function(){
		var Txt = document.formjs.texto;
		if( Txt.value === '' )
		{
			$('.estilo').addClass( 'has-warning has-feedback' );
			$('.icono').addClass( 'glyphicon-warning-sign' );
			$('.msj').addClass( 'help-block' );
			$('.msj').html('Campo Requerido');
			co = 1;
		}
		else
		{
			$('.estilo').addClass( 'has-success has-feedback' );
			$('.icono').addClass( 'glyphicon-ok' );
			$('.msj').addClass( 'help-block' );
			co = 0;
			errorTxt = 0;
		}
	});

	$('#clave1 , #clave2').focusin(function(){
		$('.estilo2').removeClass( 'has-success has-warning has-error' );
		$('.icono2').removeClass( 'glyphicon-ok glyphicon-warning-sign glyphicon-remove' );
		$('.msj2').html('');
		$('.msj2').removeClass( 'help-block' );		
	});

	$('#clave1 , #clave2').focusout(function(){
		if( formjs.clave1.value === '' || formjs.clave2.value === '' )
		{
			$('.estilo2').removeClass( 'has-success has-error' );
			$('.estilo2').addClass( 'has-warning has-feedback' );
			$('.icono2').removeClass( 'glyphicon-ok glyphicon-remove' );
			$('.icono2').addClass( 'glyphicon-warning-sign' );
			$('.msj2').addClass( 'help-block' );
			$('.msj2').html('Campo Requerido');
			co = 1;
		}
		else
		{
			if ( formjs.clave1.value != formjs.clave2.value )
			{
				$('.estilo2').removeClass( 'has-success has-warning' );
				$('.estilo2').addClass( 'has-error has-feedback' );
				$('.icono2').removeClass( 'glyphicon-ok glyphicon-warning-sign' );
				$('.icono2').addClass( 'glyphicon-remove' );
				$('.msj2').addClass( 'help-block' );
				$('.msj2').html('Las claves NO coinciden');
				errorClave = 1;	
			}
			else
			{
				$('.estilo2').removeClass( 'has-warning has-error' );
				$('.estilo2').addClass( 'has-success' );
				$('.icono2').removeClass( 'glyphicon-warning-sign glyphicon-remove' );
				$('.icono2').addClass( 'glyphicon-ok' );
				$('.msj2').html('');
				$('.msj2').removeClass( 'help-block' );
				co = 0;
				errorClave = 0;
			}
		}
	});

	$('#area').focusin(function(){
		$(this).css( 'background','#FFF' );
		$('.estilo3').removeClass( 'has-success has-warning has-error' );
		$('.estilo3').removeClass( 'has-feedback' );
		$('.icono3').removeClass( 'glyphicon-ok glyphicon-warning-sign glyphicon-remove' );
		$('.msj3').html('');
		$('.msj3').removeClass( 'help-block' );
		
	});

	$('#area').focusout(function(){
		if( formjs.area.value === '' )
		{
			$('.estilo3').addClass( 'has-warning has-feedback' );
			$('.icono3').addClass( 'glyphicon-warning-sign' );
			$('.msj3').addClass( 'help-block' );
			$('.msj3').html('Campo Area Requerido');
			co = 1;
		}
		else
		{
			$('.estilo3').addClass( 'has-success has-feedback' );
			$('.icono3').addClass( 'glyphicon-ok' );
			$('.msj3').addClass( 'help-block' );
			co = 0;
			errorArea = 0;
		}
	});

	$('#enviar').click(function(){
		if ( $('input[type="checkbox"]').is(':checked') )
		{
			$('.msj4').html('');
			$('.msj4').removeClass( 'help-block' );
			co = 0;
			error = 0;
		}
		else
		{
        	$('.msj4').addClass( 'help-block' );
			$('.msj4').html('Campo Requerido');
			co = 1;
    	}
    });


	$('#enviar').click(function(){
		if ( $('input[name="radio"]').is(':checked') )
		{
			$('.msj5').html('');
			$('.msj5').removeClass( 'help-block' );
			co = 0;
			error = 0;
		}
		else
		{
        	$('.msj5').addClass( 'help-block' );
			$('.msj5').html('Campo Requerido');
			co = 1;
    	}
    });

 	$('#enviar').click(function(){
		if ( formjs.opcion.value === '' )
		{
        	$('.msj6').addClass( 'help-block' );
			$('.msj6').html('Campo Requerido');
			co = 1;
		}
		else
		{
			$('.msj6').html('');
			$('.msj6').removeClass( 'help-block' );
			co = 0;
			error = 0;

    	}
    });

	$('#enviar').click(function(){


		if ( formjs.texto.value === '' )
		{
			$('.estilo').addClass( 'has-warning has-feedback' );
			$('.icono').addClass( 'glyphicon-warning-sign' );
			$('.msj').addClass( 'help-block' );
			$('.msj').html('Campo Requerido');
			co = 1;
		}

		if ( formjs.clave1.value === '' )
		{
			$('.estilo2').removeClass( 'has-success has-error' );
			$('.estilo2').addClass( 'has-warning has-feedback' );
			$('.icono').removeClass( 'glyphicon-ok glyphicon-remove' );
			$('.icono2').addClass( 'glyphicon-warning-sign' );
			$('.msj2').addClass( 'help-block' );
			$('.msj2').html('Campo Requerido');
			co = 1;
		}
		if ( formjs.clave2.value === '' )
		{
			$('.estilo2').removeClass( 'has-success has-error' );
			$('.estilo2').addClass( 'has-warning has-feedback' );
			$('.icono').removeClass( 'glyphicon-ok glyphicon-remove' );
			$('.icono2').addClass( 'glyphicon-warning-sign' );
			$('.msj2').addClass( 'help-block' );
			$('.msj2').html('Campo Requerido');
			co = 1;
		}

		if ( formjs.area.value === '' )
		{
			$('.estilo3').addClass( 'has-warning has-feedback' );
			$('.icono3').addClass( 'glyphicon-warning-sign' );
			$('.msj3').addClass( 'help-block' );
			$('.msj3').html('Campo Area Requerido');
			co = 1;
		}


		if ( errorTxt == 1 || errorClave == 1 || errorArea == 1 || co == 1 )
		{
			$('h1').html('Formulario con jQuery');
		}
		else
		{
			$('h1').html('<span style="color: #F00">Datos enviados Exitosamente</span>');

			$('.enviar').html('<button type="button" id="enviar" class="btn btn-primary" disabled>Enviar</button>');
			
			// OCULTAR el formulario al envíar los datos exitosamente
			
			// $(".formulario").hide();
		}
	});
});