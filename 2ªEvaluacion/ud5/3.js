document.addEventListener("keydown", moverDiv)
let cantidad = 10
let caja = document.querySelector("#caja")

function moverDiv(event) {
	console.log(event.key)
	switch (event.key) {
		case "ArrowLeft":
			caja.style.left = cantidad + "px";
			break;
		case "ArrowRight":
			caja.style.left = cantidad + "px";
			break;
		case "ArrowUp":
			caja.style.top =  cantidad + "px";
			break;
		case "ArrowDown":
			caja.style.top = cantidad + "px";
			break;
	}
}