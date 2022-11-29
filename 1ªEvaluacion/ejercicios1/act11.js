let n = parseInt(prompt("Introduce el número de filas"))

for (let i = 1; i <= n; i++) {
	for(let j = 1; j <= i; j++) {
		document.write("*")
	}
	document.write("<br>")
}