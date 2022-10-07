let ano = parseInt(prompt("Introduce un año para comprobar si es bisiesto"))
let bis = false
if (ano % 4 == 0)
	bis = true
if (ano % 100 == 0 && ano % 400 == 0)
	bis = true
if (bis == false)
	document.write(`El año ${ano} no es bisiesto`)
else
	document.write(`El año ${ano} es bisiesto`)