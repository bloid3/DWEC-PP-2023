let notas = prompt("Introduce notas, separados por comas")
let lista = notas.split(",")
let comprobar = false
for (let i = 0; i < lista.length; i++) {
	if (lista[i] == 10)
		comprobar = true
}
if (comprobar == true)
	document.write("SI")
else
	document.write("NO")