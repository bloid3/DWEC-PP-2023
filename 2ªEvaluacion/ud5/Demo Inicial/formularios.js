var color_css = 'background: #222; color: #bada55'
/**
* Uso de addEventListener this y Event
**/

 document.getElementById("idEnviar").addEventListener("click", mostrarInformacion)


function mostrarInformacion(){
    console.clear()
    console.log(`Nombre: ${document.getElementById("texto").value}`)
    
    let elementos = document.getElementsByName("test")
	elementos.forEach(e => {
		if (e.checked) {
			console.log(`Se ha seleccionado la opción: ${e.value}`)
		}
	})
	if (document.getElementById("condiciones").checked)
		console.log(`Has aceptado las condiciones y los términos de privacidad`)
	else
		console.log(`No has aceptado las condiciones y los términos de privacidad`)

	console.log(`Puesto: %c${document.getElementById("select").value}`, "color:green")
	console.log(`Su país de nacimiento es: ${document.getElementById("paises").value}`)
}


