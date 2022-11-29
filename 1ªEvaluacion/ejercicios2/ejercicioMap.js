const iesgoya = new Map([
	[ "DWECL",  "Desarrollo Web en Entorno Cliente"],
	[ "DAW",  "Despliegue de Aplicaciones Web"],
	[ "EIE",  "Empresa e Iniciativa Emprendedora"],
	[ "ING",  "Inglés"],
	[ "DES",  "Desarrollo en Entorno Servidor"],
	[ "INTERFACES",  "Desarrollo de Interfaces Web"]
]);
console.log(`Hay ${iesgoya.size} elementos`)
iesgoya.forEach (function(key,value) {
	console.log(`${key}: ${value}`)
})
console.log(iesgoya.keys())

let nombres = iesgoya.values()
for (let nombre of nombres) {
	console.log(nombre)
	nombre++
}


borrar()

function borrar() {
	let clave = prompt("Introduzca la clave del módulo que quieres borrar")
	if (iesgoya.has(clave)) {
		iesgoya.delete(clave)
		console.log("El módulo ha sido borrado")
	} else {
		console.log("Ese módulo no existe")
	}
}