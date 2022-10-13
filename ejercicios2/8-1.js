num = prompt("Introduzca un número límite")
alert(getRandom(num))
function getRandom(limite) {
	let num = parseInt("Introduzca el número máximo para un número aleatorio")
	return parseInt(limite * Math.random() + 1)
}