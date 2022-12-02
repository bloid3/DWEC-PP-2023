document.addEventListener("mousemove", position)

function position(event) {
	document.getElementById("posx").innerHTML = `Posicion X: ${event.clientX}`
	document.getElementById("posy").innerHTML = `Posicion Y: ${event.clientY}`
}