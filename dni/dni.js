let num = parseInt(prompt("Introduzca su DNI sin la letra"))
let letra = prompt("Introduzca la letra de su DNI")

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L',
'C', 'K', 'E']

if (num < 0 || num > 99999999)
	alert("ERROR, introduzca un número válido")
else {
	let letra_val = letras[num % 23]
	if (letra != letra_val)
		alert("ERROR, introduzca la letra correcta")
	else {
		alert(`CORRECTO, su DNI es ${num} - ${letra}`)
	}
}