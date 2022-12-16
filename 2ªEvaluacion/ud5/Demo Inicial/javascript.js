
// Al hacer click en el botón de enviar tendrá que llamar a la la función validar 
// que se encargará de validar el formulario.
document.getElementById("idEnviar").addEventListener('click', validar, false);
let formulario=document.forms["idFormulario"]

/****************************************************************
 * FUNCIÓN GENERAL DE VALIDACIÓN
 * Unificar los dos tipos de validación
 *          - Mediante JS
 *          - Mediante Api de acceso a validación de html
 ****************************************************************/
function validar(){
   // IMPORTANTE!!! Realizar limpieza del formulario, a nivel de ClassName
   
   // IMPORTANTE!!! Realizar limpieza del formulario, a nivel de Spam de error

   // IMPORTANTE!!! Deshabilitamos el botón
  let claseError = document.getElementsByClassName("error")
  if (claseError.length > 0) {
	let formArray = Array.from(formulario)
	formArray.forEach(e => {
		e.classList.remove("error")
	})
  }
  let listaSpans = document.querySelectorAll("span")
  listaSpans.forEach(e => e.innerHTML="")
    if(validarAPIHTML() && validarJS() && confirm("¿Deseas enviar el formulario?")){

        return true;

    }else{
        return false  
    }
}


/********************************************************************************************
 *******************************************************************************************
 *************** FUNCIÓN PARA VALIDAR DE FORMA MANUAL MEDIANTE JAVASCRIPT
 *******************************************************************************************
 *******************************************************************************************/
function validarJS() {
    // Validamos cada uno de los apartados con llamadas a sus funciones correspondientes.
    return validarNombre() && validarEdad() && validarPrivacidad();             
}
/****************************************************************************
 * FUNCIÓN INDIVIDUALES DE CADA CAMPO
 /***************************************************************************/

function validarNombre() {
    let inputNombre= formulario.elements["idNombre"]

    if (inputNombre.value == ""){        
        formulario.elements["idNombre"].className = "error";
        formulario.elements["idNombre"].focus();
        document.getElementById('idNombreError').innerHTML="El campo: " + formulario.elements["idNombre"].name + " no puede estar en blanco"
        
        return false
    }
    return true
}

/***************************************************************************/
/***************************************************************************/

function validarEdad() {
    let inputEdad=formulario.elements["idEdad"]
    if (parseInt(inputEdad.value) < 18 || parseInt(inputEdad.value) > 100 || inputEdad.value == "") {
		console.log("hola")
		formulario.elements["idEdad"].className = "error";
		formulario.elements["idEdad"].focus()
		document.getElementById("idEdadError").innerHTML="La edad no puede ser menor de 18 ni mayor de 100"
		return false;
	} else 
    	return true;
}
  
/***************************************************************************/
/***************************************************************************/
function validarPrivacidad() {
	let inputPriv = document.getElementById("condiciones")
	if (inputPriv.checked == false) {
		document.getElementById("labelPriv").style.color = "red"
		inputPriv.focus()
		document.getElementById("errorPriv").innerHTML = "Debes aceptar las condiciones"
		return false;
	} else 
		return true
}


function validarMatricula() {
    
    let inputMatricula=formulario.elements["idMatricula"]

    // IMPORTANTE!! Realizar la validación de la matrícula mediante javascript y utilizando expresiones regulares
    return true;
}


/********************************************************************************************
 *********************************************************************************************
 ******** FUNCIÓN PARA VALIDAR, MEDIANTE EL USO DE LA API DE ACCESO A LA VALIDACIÓN DE HTML 
 *******************************************************************************************
 ********************************************************************************************/

function validarAPIHTML() {   

    return true;
}
