let num1 = prompt("Introduzca un número")
let num2 = prompt("Introduzca el número de resultados que desea")
num1 = parseInt(num1)
num2 = parseInt(num2)
let res;

document.write("<table border=1px>")
for (let i = 1; i <= num2; i++) {
	res = num1 * i;
	document.write("<tr>")
	document.write("<td>")
	document.write(`${num1} X ${i} = ${res}`)
	document.write("</td>")
	document.write("</tr>")
}
document.write("</table>")
