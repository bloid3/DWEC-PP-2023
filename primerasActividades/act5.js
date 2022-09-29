let sueldo = prompt("Introduzca el sueldo")
let tiempo = prompt("Introduzca los años de antigüedad")

sueldo = parseInt(sueldo)
tiempo = parseInt(tiempo)

if(sueldo < 500 && tiempo >= 10) {
	sueldo *= 3
	document.write(`El sueldo ha cambiado a ${sueldo}`)
} else if(sueldo < 500 && tiempo < 10) {
	sueldo *= 2
	document.write(`El sueldo ha cambiado a ${sueldo}`)
} else if (sueldo >= 500)
	document.write("No hay cambios")