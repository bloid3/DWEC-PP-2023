const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L',
'C', 'K', 'E']

var idA = setInterval("dni()", 20000)

function dni() {
	var dni = parseint(prompt("Introduzca un dni sin letra"))
	if (dni == -1)
		clearInterval(idA)
	
}