// Objeto Datos
var ObjDatos = {
	id : 1,
	cedula : '12694318',
	nombre : 'Indry',
	apellido : 'Sanchez',
	
	mostrarnombre : function(){
		alert( 'Nombre: '+ this.nombre );
	} ,
	
	mostrardatos : function(){
		alert( 'Cédula: '+ this.cedula +'\nNombre: ' + this.nombre + '\nApellido: ' + this.apellido );
	}
}

// Nuevo Objeto Empleado
	var ObjEmpleado = Object.create(ObjDatos);
	//ObjEmpleado.id = '';
	ObjEmpleado.nombre = '';
	//ObjEmpleado.cedula = '';
	//ObjEmpleado.apellido = '';
	
// Nuevo Objeto Cliente
	var ObjCliente = Object.create(ObjDatos);
	ObjCliente.id = '';
	ObjCliente.cedula = '';
	ObjCliente.nombre = '';
	ObjCliente.apellido = '';

// Función al cargar
function funalcargar()
{
	alert ("\nFormulario con Javascript");	
}

// Función MouseOver
function funmouseover(parametro) {
	parametro.innerHTML = "Mouse Sobre el Titulo del Formulario";
	parametro.style.backgroundColor = "#C0C0C0";
	parametro.style.color = "#fff";
}

// Función MouseOut
function funmouseout(parametro) {
	parametro.innerHTML = "Llenar los datos del formulario";
	parametro.style.backgroundColor = "#fff";
	parametro.style.color = "#000";
}
	
// Función Click en Titulo
function funclicktitulo()
{
	alert("Click sobre el Titulo del Formulario");
	
}

// Función Focus
function funfocus()
{
	//alert("Ingresa acá el nombre");
}

// Función Focus
function funtecla()
{
	//alert("Presionaste una tecla");
}

// Función para Validar el formulario
// function validarform()
// {
// 	var error = 0 ;
		
	

// 	// validar clave
// 	if ( formjs.clave1.value != formjs.clave2.value )
// 	{
// 		alert ( 'Las claves NO coinciden' );
// 		formjs.clave1.focus();
// 		error = 1;
// 	}


// 	// validar Mensaje
// 	var errorMsj = document.getElementById('errorMsj');

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
// 		// validar Mensaje
// 		var re = /^[a-z]*$/i;
// 		if ( !re.test(formjs.msj.value) )
// 		{
// 			alert ( 'Posee datos NO validos' );
// 			// Msj.style.background = '#';
// 			formjs.msj.focus();
// 			error = 1;					
// 		}
// 		else
// 		{
// 			alert('El Mensaje es Correcto');
// 			Msj.style.background = '#FFF';
// 		}
// 	}

// 	// validar Checkbox
// 	var errorChk1 = document.getElementById('errorChk1');
// 	var Checkbox1 = document.formjs.checkbox1;
// 	var seleccionado = false;
// 	if(Checkbox1.checked) 
// 	{
// 		seleccionado = true;
// 		errorChk1.style.visibility = 'hidden';
// 	}
// 	if ( seleccionado == false )
// 	{
// 		errorChk1.style.visibility = 'visible';
// 		error = 1;
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


// 	// Valida Errores
// 	if ( error == 0 )
// 		{
// 			alert ( 'Datos enviados exitosamente' );
// 			return true;
// 		}
// 		else
// 		{
// 			return false;
// 		}
// }