let boton = document.getElementById("boton")
boton.addEventListener("click",cambiarColor)
document.addEventListener("click", cambiarColor)

function cambiarColor(event) {
	let color;
	let simbolos;
	simbolos = "0123456789ABDCEF"
	color = "#"
	if (event.target.type == "submit") {
		for(var i = 0; i < 6; i++){
			color = color + simbolos[Math.floor(Math.random() * 16)];
		}
		document.body.style.background = color
	} else {
		document.body.style.background = "white"
	}
	event.preventDefault();
	event.stopPropagation();
}



