let notas = prompt("Introduce notas, separados por comas")
let lista = notas.split(",")
let comprobar = false
let i = 0
while (lista[i] != -1) {
	if (lista[i] == 10)
		comprobar = true
	i++
}
comprobar ? document.write("SI") : document.write("NO")