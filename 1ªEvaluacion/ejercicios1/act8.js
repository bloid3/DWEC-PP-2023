let n = parseInt(prompt("Introduzca un número"))

for (let i = 1; i <= n; i++) {
	if (i % 2 === 1) {
		document.write(i)
		document.write("<br>")
	}
}