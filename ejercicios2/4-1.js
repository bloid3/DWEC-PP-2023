let nombres = []
let i = 0
while (i < 10) {
	let nombre = prompt("Introduzca un nombre")
	nombres.push(nombre)
	i++;
}
document.write(`${nombres} `)
document.write('<br>')
document.write(`Hay ${nombres.length} nombres`)
document.write('<br>')
let a = nombres.sort()
document.write(a)
document.write('<br>')
let b = nombres.reverse()
document.write(b)