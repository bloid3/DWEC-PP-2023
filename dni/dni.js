let num = intval(prompt("Introduzca su DNI sin la letra"))
let letra = prompt("Introduzca la letra de su DNI")
let letra_val

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L',
'C', 'K', 'E']

if (num < 0 || num > 99999999)
	prompt("ERROR, introduzca un número válido")
else {
	letra_val = letras[num % 23]
	if (letra != letra_val)
		prompt("ERROR, introduzca la letra correcta")
	else {
		prompt(`CORRECTO, su DNI es ${num}-${letra}`)
	}
}