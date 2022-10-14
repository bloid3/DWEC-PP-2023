let nombres = new Set
let edades = []
let i = 0
while (i < 6) {
	let nombre = prompt("Introduzca un nombre")
	nombres.add(nombre)
	i++
}
let j = 0
while (j < 6) {
	let edad = prompt(`Introduzca la edad de ${nombres[j]}`)
	edades.push(edad)
	j++
}
for (let x = 0; x < nombres.size; x++) {
	alert(`Nombre: ${nombres[x]} - Edad: ${edades[x]}`)
}