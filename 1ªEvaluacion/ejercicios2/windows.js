

function buscar() {
	let bus = document.getElementById("busqueda").value
	let tex = document.getElementById("texto").innerHTML
	if (document.getElementById("completas").checked) {
		if (tex.includes(bus)) {
			alert("La palabra esta en el texto")
		} else {
			alert("No está en el texto")
		}
	} else if (document.getElementById("mayusculas").checked) {
		let texM = tex.toUpperCase()
		let busM = bus.toUpperCase()
		if (texM.includes(busM)) {
			alert("La palabra esta en el texto")
		} else {
			alert("No está en el texto")
		}
	} else {
		if (tex.includes(bus)) {
			alert("La palabra esta en el texto")
		} else {
			alert("No está en el texto")
		}
	}
}