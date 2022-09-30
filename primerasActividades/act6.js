let num = parseInt(prompt("Introduzca su nota"))

if (num >= 0 && num < 3)
	document.write(`Muy deficiente`)
else if (num < 5)
	document.write(`Insuficiente`)
else if (num < 6)
	document.write(`Bien`)
else if (num < 9)
	document.write(`Notable`)
else if (num <= 10)
	document.write(`Sobresaliente`)
else 
	document.write(`Nota incorrecta`)

