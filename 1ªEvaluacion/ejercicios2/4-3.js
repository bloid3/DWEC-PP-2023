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
	let edad = parseInt(prompt(`Introduzca la edad de ${getNombres(j)}`))
	edades.push(edad)
	j++
}

function media(){
	let mediaEdad = 0
	edades.forEach(e => mediaEdad += parseInt(e))
	mediaEdad /= 6
	alert(`La media de edad de los empleados es ${mediaEdad}`)
}
function mostrarNombres() {
	for (let x = 0; x < nombres.size; x++) {
		document.write(`Nombre: ${getNombres(x)} - Edad: ${edades[x]}`)
		document.write("<br>")
	}
}
function getNombres(pos){
	const iterator1 = nombres.values();
	let nombre
	for(let i = 0; i <= pos; i++){
		nombre = iterator1.next().value;
	}
	return nombre;
}