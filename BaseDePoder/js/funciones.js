// funciones.js

// Objeto Datos
var ObjDatos = {
	id : "",
	telefono : "",
	nombre : "",
	apellido : "",
	
	mostrarnombre : function(){
		alert( 'Nombre: '+ this.nombre );
	} ,
	
	mostrardatos : function(){
		document.getElementById("datosdatos").innerHTML = ( '\nNombre: ' + this.nombre+" "+this.apellido+'<br>Teléfono: '+ this.telefono+"<br>Correo electrónico: "+this.id);

	}
}

// Nuevo Objeto Preguntas
	var ObjPreguntas = Object.create(ObjDatos);
	ObjPreguntas.id = 'lalocaobrera@gmail.com';
	ObjPreguntas.nombre = 'Lalo';
	ObjPreguntas.telefono = '04141234567';
	ObjPreguntas.apellido = 'Cabrera';

// Nuevo Objeto Mas Información
	var ObjEmpleado = Object.create(ObjDatos);
	ObjEmpleado.id = 'katdelacalle@gmail.com';
	ObjEmpleado.nombre = 'Kat';
	ObjEmpleado.telefono = '04249832745';
	ObjEmpleado.apellido = 'West';
	
// Nuevo Objeto Emergencia
	var ObjEmergencia = Object.create(ObjDatos);
	ObjEmergencia.id = 'adavezmas@gmail.com';
	ObjEmergencia.telefono = '04140987654';
	ObjEmergencia.nombre = 'Ada';
	ObjEmergencia.apellido = 'Velez Mason';

// Nuevo Objeto Cultura
	var ObjCultura = Object.create(ObjDatos);
	ObjCultura.id = 'cafebailao@gmail.com';
	ObjCultura.telefono = '+12398764533';
	ObjCultura.nombre = 'Café';
	ObjCultura.apellido = 'Bailao';

// Función para Validar el formulario
// function validarform()
// {
// 	var error = 0 ;
		
// 	// validar Texto
// 	var errorTexto = document.getElementById('errorTexto');
// 	var corrigeTexto = document.getElementById('corrigeTexto');

// 	var Txt = document.formjs.texto;
// 	if( Txt.value === '' )
// 	{
// 		errorTexto.style.visibility = 'visible';
// 		corrigeTexto.style.visibility = 'hidden';
// 		Txt.style.background = '#FFFFCC';
// 		error = 1;
// 	}
// 	else
// 	{
// 		errorTexto.style.visibility = 'hidden';
// 		// validar Texto
// 		var re = /^[a-z_ ]*$/i;
// 		if ( !re.test(formjs.texto.value) )
// 		{
// 			alert ( 'Nombre posee datos NO validos' );
// 			// Txt.style.background = '#';
// 			corrigeTexto.style.visibility = 'visible';
// 			Txt.style.background = '#FFFFCC';
// 			formjs.texto.focus();
// 			error = 1;					
// 		}
// 		else
// 		{
// 			alert('Su nombre satisface nuestros requisitos');
// 			corrigeTexto.style.visibility = 'hidden';
// 			Txt.style.background = '#FFF';
// 		}
// 	}

// 	// validar clave
// 	if ( formjs.clave1.value != formjs.clave2.value )
// 	{
// 		alert ( 'Las claves NO coinciden' );
// 		formjs.clave1.focus();
// 		error = 1;
// 	}


// 	// validar Mensaje
// 	var errorMsj = document.getElementById('errorMsj');
// 	var corrigeMsj = document.getElementById('corrigeMsj');

// 	var Msj = document.formjs.msj;
// 	if( Msj.value === '' )
// 	{
// 		errorMsj.style.visibility = 'visible';
// 		Msj.style.background = '#FFFFCC';
// 		error = 1;
// 	}
// 	else
// 	{
// 		errorMsj.style.visibility = 'hidden';
// 		corrigeMsj.style.visibility = 'hidden';
// 		// validar Mensaje
// 		var re = /^[abcdefghijklmnopqrstuvwxyuzñ'.,0123456789!?:()_ ]*$/i;
// 		if ( !re.test(formjs.msj.value) )
// 		{
// 			alert ( 'La pregunta #1 posee datos NO validos. Añadiste un caracter que no es válido, intenta de nuevo.' );
// 			// Msj.style.background = '#';
// 			corrigeMsj.style.visibility = 'visible';
// 			Msj.style.background = '#FFFFCC';
// 			formjs.msj.focus();
// 			error = 1;					
// 		}
// 		else
// 		{
// 			alert('La pregunta #1 satisface los requisitos');
// 			corrigeMsj.style.visibility = 'hidden';
// 			Msj.style.background = '#FFF';
// 		}
// 	}

// 	// validar Mensaje 2
// 	var errorMsjDos = document.getElementById('errorMsj2');
// 	var corrigeMsjDos = document.getElementById('corrigeMsj2');

// 	var Msj = document.formjs.msj2;
// 	if( Msj.value === '' )
// 	{
// 		errorMsjDos.style.visibility = 'visible';
// 		corrigeMsjDos.style.visibility = 'hidden';
// 		Msj.style.background = '#FFFFCC';
// 		error = 1;
// 	}
// 	else
// 	{
// 		errorMsjDos.style.visibility = 'hidden';
// 		// validar Mensaje
// 		var re = /^[abcdefghijklmnopqrstuvwxyuzñ$'.,0123456789!?:()_ ]*$/i;
// 		if ( !re.test(formjs.msj2.value) )
// 		{
// 			alert ( 'La pregunta #2 posee datos NO validos. Añadiste un caracter que no es válido, intenta de nuevo.' );
// 			// Msj.style.background = '#';
// 			corrigeMsjDos.style.visibility = 'visible';
// 			Msj.style.background = '#FFFFCC';
// 			formjs.msj2.focus();
// 			error = 1;					
// 		}
// 		else
// 		{
// 			alert('La pregunta #2 satisface los requisitos');
// 			corrigeMsjDos.style.visibility = 'hidden';
// 			Msj.style.background = '#FFF';
// 		}
// 	}


// 	// validar Opciones
// 	var Opciones = document.getElementById('opcion');

// 	var Opciones = document.formjs.opcion;
// 	if( opcion.value === '' )
// 	{
// 		errorOpcion.style.visibility = 'visible';
// 		error = 1;
// 	}
// 	else
// 	{
// 		errorOpcion.style.visibility = 'hidden';
// 	}

// //Mensaje 3
// 	var errorMsjTres = document.getElementById('errorMsj3');
// 	var corrigeMsjTres = document.getElementById('corrigeMsj3');



// 	var Msj = document.formjs.msj3;
// 	if( Msj.value === '' )
// 	{
// 		errorMsjTres.style.visibility = 'visible';
// 		Msj.style.background = '#FFFFCC';
// 		error = 1;
// 	}
// 	else
// 	{
// 		errorMsjTres.style.visibility = 'hidden';
// 		corrigeMsjTres.style.visibility = 'hidden';
// 		// validar Mensaje
// 		var re = /^[abcdefghijklmnopqrstuvwxyuzñ$'.,0123456789!?:()_ ]*$/i;
// 		if ( !re.test(formjs.msj3.value) )
// 		{
// 			alert ( 'La pregunta #3 posee datos NO validos. Añadiste un caracter que no es válido, intenta de nuevo.');
// 			// Msj.style.background = '#';
// 			corrigeMsjTres.style.visibility = 'visible';
// 			Msj.style.background = '#FFFFCC';
// 			formjs.msj3.focus();
// 			error = 1;					
// 		}
// 		else
// 		{
// 			alert('La pregunta #3 satisface los requisitos');
// 			Msj.style.background = '#FFF';
// 			corrigeMsjTres.style.visibility = 'hidden';
// 		}
// 	}

// 	// validar Radio
// 	var errorRadio = document.getElementById('errorRadio');
// 	var Radio = document.formjs.radio;
// 	var seleccionado = false;
// 	for(var i=0; i<3; i++)
// 	{    
// 	  if(Radio[i].checked) 
// 		{
// 			seleccionado = true;	
// 		}
// 		errorRadio.style.visibility = 'hidden';
// 	}
// 	if ( seleccionado == false )
// 	{
// 		errorRadio.style.visibility = 'visible';
// 		error = 1;
// 	}

// 	// Valida Errores
// 	if ( error == 0 )
// 		{
// 			alert ( 'Datos enviados exitosamente' );
// 			//document.getElementById("panelpanel").innerHTML = "<br>Listo! Sus datos han sido registrados por el sistema y recibirá un correo electrónico de la organización pronto.<br><br><br>";
// 		}
// 		else
// 		{
// 			return false;
// 		}
// }

function validate() {
	var luncao = document.getElementById('lun5a8');
	var lunes1 = document.getElementById("lunes5a8");

	if(lunes1.checked) {
		luncao.style.visibility = 'visible';
	}
	else {
		luncao.style.visibility = 'hidden';
	}
}

function validateUno() {
	var lunoad = document.getElementById('lun8a12');
	var lunes2 = document.getElementById("lunes8a12");

	if(lunes2.checked) {
		lunoad.style.visibility = 'visible';
	}
	else {
		lunoad.style.visibility = 'hidden';
	}
}

function validateDos() {
	var marcao = document.getElementById('mar5a8');
	var martes1 = document.getElementById("martes5a8");

	if(martes1.checked) {
		marcao.style.visibility = 'visible';
	}
	else {
		marcao.style.visibility = 'hidden';
	}
}

function validateTres() {
	var maroad = document.getElementById('mar8a12');
	var martes2 = document.getElementById("martes8a12");

	if(martes2.checked) {
		maroad.style.visibility = 'visible';
	}
	else {
		maroad.style.visibility = 'hidden';
	}
}

function validateCuatro() {
	var miecao = document.getElementById('mie5a8');
	var miercoles1 = document.getElementById("miercoles5a8");

	if(miercoles1.checked) {
		miecao.style.visibility = 'visible';
	}
	else {
		miecao.style.visibility = 'hidden';
	}
}

function validateCinco() {
	var mieoad = document.getElementById('mie8a12');
	var miercoles2 = document.getElementById("miercoles8a12");

	if(miercoles2.checked) {
		mieoad.style.visibility = 'visible';
	}
	else {
		mieoad.style.visibility = 'hidden';
	}
}

function validateSeis() {
	var juecao = document.getElementById('jue5a8');
	var jueves1 = document.getElementById("jueves5a8");

	if(jueves1.checked) {
		juecao.style.visibility = 'visible';
	}
	else {
		juecao.style.visibility = 'hidden';
	}
}

function validateSiete() {
	var jueoad = document.getElementById('jue8a12');
	var jueves2 = document.getElementById("jueves8a12");

	if(jueves2.checked) {
		jueoad.style.visibility = 'visible';
	}
	else {
		jueoad.style.visibility = 'hidden';
	}
}

function validateOcho() {
	var viecao = document.getElementById('vie5a8');
	var viernes1 = document.getElementById("viernes5a8");

	if(viernes1.checked) {
		viecao.style.visibility = 'visible';
	}
	else {
		viecao.style.visibility = 'hidden';
	}
}

function validateNueve() {
	var vieoad = document.getElementById('vie8a12');
	var viernes2 = document.getElementById("viernes8a12");

	if(viernes2.checked) {
		vieoad.style.visibility = 'visible';
	}
	else {
		vieoad.style.visibility = 'hidden';
	}
}

function validateDiez() {
	var sabcao = document.getElementById('sab5a8');
	var sabado1 = document.getElementById("sabado5a8");

	if(sabado1.checked) {
		sabcao.style.visibility = 'visible';
	}
	else {
		sabcao.style.visibility = 'hidden';
	}
}

function validateOnce() {
	var saboad = document.getElementById('sab8a12');
	var sabado2 = document.getElementById("sabado8a12");

	if(sabado2.checked) {
		saboad.style.visibility = 'visible';
	}
	else {
		saboad.style.visibility = 'hidden';
	}
}

function validateDoce() {
	var domcao = document.getElementById('dom5a8');
	var domingo1 = document.getElementById("domingo5a8");

	if(domingo1.checked) {
		domcao.style.visibility = 'visible';
	}
	else {
		domcao.style.visibility = 'hidden';
	}
}

function validateTrece() {
	var domoad = document.getElementById('dom8a12');
	var domingo2 = document.getElementById("domingo8a12");

	if(domingo2.checked) {
		domoad.style.visibility = 'visible';
	}
	else {
		domoad.style.visibility = 'hidden';
	}
}


function pancon() {
	var iniciar = document.getElementById('iniciar');
	iniciar.style.visibility = 'visible';}
