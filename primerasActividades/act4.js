let dia = prompt("Introduzca un día")
dia = parseInt(dia)
if (dia < 1 || dia > 31) {
	dia = prompt("Introduzca un dia correcto")
	dia = parseInt(dia);
}

let mes = prompt("Introduzca un mes")
mes = parseInt(mes)
if (mes < 1 || mes > 12) {
	mes = prompt("Introduzca un mes correcto")
	mes = parseInt(mes);
}
if (dia === 25 && mes === 12)
	document.write("CORRECTO!")
else
	document.write("Espabila, crack")