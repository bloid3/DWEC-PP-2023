let zFondos150 = ["url('./img/coche-1.jpg')","url('./img/coche-2.jpg')","url('./img/coche-3.jpg')","url('./img/coche-4.jpg')"];

let subImagenes = document.querySelectorAll('[class *= "subImagen-"]');
let imagenes = document.querySelectorAll("div[class^=subImagen")
imagenes.forEach(e => e.addEventListener("mouseenter", porEncima))
function porEncima(e) {
	let numImg = e.target.className.split("-")[1]
	let nuevaImg = document.getElementById("imgPrin")
	nuevaImg.setAttribute("src",`img/600x400/coche-${numImg}.jpg`)
	nuevaImg.setAttribute("id", "imgPrin")
	document.getElementsByClassName("imagen-principal")[0].appendChild(nuevaImg)
	//e.preventDefault();
}

function cambiarImg() {
	let img = document.getElementById("imgPrin")
	if (img.getAttribute("src") == '') {
		img.setAttribute("src",`img/600x400/coche-1.jpg`)
		img.setAttribute("id", "imgPrin")
	} else {
		let num = img.getAttribute("src").split("-")[1].split(".")[0]
		if (num >= 1 && num <= 3) {
			img.setAttribute("src",`img/600x400/coche-${parseInt(num) + 1}.jpg`)
			img.setAttribute("id", "imgPrin")
		} else {
			img.setAttribute("src",`img/600x400/coche-1.jpg`)
			img.setAttribute("id", "imgPrin")
		}
	}
}	