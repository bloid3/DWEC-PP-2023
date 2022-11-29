const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L',
'C', 'K', 'E']

let idA = setInterval(midni,5000)
let nletras = []

function midni() {
	let dni = prompt("Introduzca un dni sin letra")
	if (dni == -1) {
		clearInterval(idA)
		document.write(nletras)
	} else {
		dni = parseInt(dni)
		ndni = dni % 23
		nletras.push(letras[ndni])	
	}
}
