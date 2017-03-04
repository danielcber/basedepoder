// jqvalidar.js

// TEXTO
$(function(){
	// $(".resultados").hide();

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
		var re = /^[a-z ,.'-]+$/i
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
			if ( !re.test(formjs.texto.value) )
			{
				$('.estilo').addClass( 'has-error has-feedback' );
				$('.icono').addClass( 'glyphicon-remove' );
				$('.msj').addClass( 'help-block' );
				$('.msj').html('Tiene un carácter inválido');
				errorTxt  = 1;
			}
			else
			{
				$('.estilo').addClass( 'has-success has-feedback' );
				$('.icono').addClass( 'glyphicon-ok' );
				$('.msj').addClass( 'help-block' );
				co = 0;
				errorTxt = 0;
			}
		}
	});

//FECHA
	$('#campofecha').focusin(function(){
		$(this).css( 'background','#FFF' );
		$('.estilofecha').removeClass( 'has-success has-warning has-error' );
		$('.estilofecha').removeClass( 'has-feedback' );
		$('.iconofecha').removeClass( 'glyphicon-ok glyphicon-warning-sign glyphicon-remove' );
		$('.msjfecha').html('');
		$('.msjfecha').removeClass( 'help-block' );
		
	});

	$('#campofecha').focusout(function(event){
		var re2 = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
				if( formjs.campofecha.value === '' )
		{
			$('.estilofecha').addClass( 'has-warning has-feedback' );
			$('.iconofecha').addClass( 'glyphicon-warning-sign' );
			$('.msjfecha').addClass( 'help-block' );
			$('.msjfecha').html('Fecha no es válida, intenta de nuevo');
			co = 1;
		}
		else
		{
			if ( !re2.test(formjs.campofecha.value) )
			{
				$('.estilofecha').addClass( 'has-error has-feedback' );
				$('.iconofecha').addClass( 'glyphicon-remove' );
				$('.msjfecha').addClass( 'help-block' );
				$('.msjfecha').html('Solo utilice números, no se permiten letras y carácteres');
				errorArea = 1;				
			}
			else
			{
				$('.estilofecha').addClass( 'has-success has-feedback' );
				$('.iconofecha').addClass( 'glyphicon-ok' );
				$('.msjfecha').addClass( 'help-block' );
				co = 0;
				errorArea = 0;
			}
		}
	});


//CORREO
	$('#email').focusin(function(){
		$(this).css( 'background','#FFF' );
		$('.estilomail').removeClass( 'has-success has-warning has-error' );
		$('.estilomail').removeClass( 'has-feedback' );
		$('.iconomail').removeClass( 'glyphicon-ok glyphicon-warning-sign glyphicon-remove' );
		$('.msjmail').html('');
		$('.msjmail').removeClass( 'help-block' );
		
	});

	$('#email').focusout(function(event){
		var re2 = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
				if( formjs.email.value === '' )
		{
			$('.estilomail').addClass( 'has-warning has-feedback' );
			$('.iconomail').addClass( 'glyphicon-warning-sign' );
			$('.msjmail').addClass( 'help-block' );
			$('.msjmail').html('Correo electrónico inválido');
			co = 1;
		}
		else
		{
			if ( !re2.test(formjs.email.value) )
			{
				$('.estilomail').addClass( 'has-error has-feedback' );
				$('.iconomail').addClass( 'glyphicon-remove' );
				$('.msjmail').addClass( 'help-block' );
				$('.msjmail').html('Solo utilice números, no se permiten letras y carácteres');
				errorArea = 1;				
			}
			else
			{
				$('.estilomail').addClass( 'has-success has-feedback' );
				$('.iconomail').addClass( 'glyphicon-ok' );
				$('.msjmail').addClass( 'help-block' );
				co = 0;
				errorArea = 0;
			}
		}
	});



//TELEFONO
	$('#tel').focusin(function(){
		$(this).css( 'background','#FFF' );
		$('.estilotel').removeClass( 'has-success has-warning has-error' );
		$('.estilotel').removeClass( 'has-feedback' );
		$('.iconotel').removeClass( 'glyphicon-ok glyphicon-warning-sign glyphicon-remove' );
		$('.msjtel').html('');
		$('.msjtel').removeClass( 'help-block' );
		
	});

	$('#tel').focusout(function(event){
		var re2 = /^[0-9]*$/i;
		if( formjs.tel.value === '' )
		{
			$('.estilotel').addClass( 'has-warning has-feedback' );
			$('.iconotel').addClass( 'glyphicon-warning-sign' );
			$('.msjtel').addClass( 'help-block' );
			$('.msjtel').html('Campo Area Requerido');
			co = 1;
		}
		else
		{
			if ( !re2.test(formjs.tel.value) )
			{
				$('.estilotel').addClass( 'has-error has-feedback' );
				$('.iconotel').addClass( 'glyphicon-remove' );
				$('.msjtel').addClass( 'help-block' );
				$('.msjtel').html('Solo utilice números, no se permiten letras y carácteres');
				errorArea = 1;				
			}
			else
			{
				$('.estilotel').addClass( 'has-success has-feedback' );
				$('.iconotel').addClass( 'glyphicon-ok' );
				$('.msjtel').addClass( 'help-block' );
				co = 0;
				errorArea = 0;
			}
		}
	});

// CONTRASENAS
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

// MSJES
	$('#msj').focusin(function(){
		$(this).css( 'background','#FFF' );
		$('.estilo3').removeClass( 'has-success has-warning has-error' );
		$('.estilo3').removeClass( 'has-feedback' );
		$('.icono3').removeClass( 'glyphicon-ok glyphicon-warning-sign glyphicon-remove' );
		$('.msj3').html('');
		$('.msj3').removeClass( 'help-block' );
		
	});

	$('#msj').focusout(function(){
		if( formjs.msj.value === '' )
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

//MSJ2!!!!
	$('#msj2').focusin(function(){
		$(this).css( 'background','#FFF' );
		$('.estilo23').removeClass( 'has-success has-warning has-error' );
		$('.estilo23').removeClass( 'has-feedback' );
		$('.icono23').removeClass( 'glyphicon-ok glyphicon-warning-sign glyphicon-remove' );
		$('.msj23').html('');
		$('.msj23').removeClass( 'help-block' );
		
	});
	$('#msj2').focusout(function(){
		if( formjs.msj2.value === '' )
		{
			$('.estilo23').addClass( 'has-warning has-feedback' );
			$('.icono23').addClass( 'glyphicon-warning-sign' );
			$('.msj23').addClass( 'help-block' );
			$('.msj23').html('Campo Area Requerido');
			co = 1;
		}
		else
		{
			$('.estilo23').addClass( 'has-success has-feedback' );
			$('.icono23').addClass( 'glyphicon-ok' );
			$('.msj23').addClass( 'help-block' );
			co = 0;
			errorArea = 0;
		}
	});

//MSJ3!!!!

	$('#msj3').focusin(function(){
		$(this).css( 'background','#FFF' );
		$('.estilo33').removeClass( 'has-success has-warning has-error' );
		$('.estilo33').removeClass( 'has-feedback' );
		$('.icono33').removeClass( 'glyphicon-ok glyphicon-warning-sign glyphicon-remove' );
		$('.msj33').html('');
		$('.msj33').removeClass( 'help-block' );
		
	});
	$('#msj3').focusout(function(){
		if( formjs.msj3.value === '' )
		{
			$('.estilo33').addClass( 'has-warning has-feedback' );
			$('.icono33').addClass( 'glyphicon-warning-sign' );
			$('.msj33').addClass( 'help-block' );
			$('.msj33').html('Campo Area Requerido');
			co = 1;
		}
		else
		{
			$('.estilo33').addClass( 'has-success has-feedback' );
			$('.icono33').addClass( 'glyphicon-ok' );
			$('.msj33').addClass( 'help-block' );
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
			$('.msj5').addClass( 'has-success has-feedback' );
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
			$('.msj6').addClass( 'has-success has-feedback' );
			$('.msj6').addClass( 'glyphicon-ok' );
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
			// $(".resultados").show();
		}
	});
});