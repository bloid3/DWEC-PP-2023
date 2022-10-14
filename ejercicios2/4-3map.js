const info = new Map()
for (let i = 0; i < 2; i++) {
	let dupla = prompt("Introduzca nombre y edad, serparados por , ").split(",")
	if (dupla.length === 2) {
		info.set(dupla[0],dupla[1])
	}
}
function mostrar() {
	for (const[n,e] of info.entries()) {
		console.log(`Nombre -> ${n} --- Edad -> ${e}`)
	}
}

function mostrarMedia() {
	let media = 0
	for (const[n,e] of info.entries()) {
		media += parseInt(e)
	}
	alert(`La media es ${media/2}`)
}