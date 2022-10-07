const nombre = prompt("Introduce tu nombre")
const apellido = prompt("Introduce tu apellido")
let num1 = prompt("Introduce un número")
let num2 = prompt("Introduce otro número")
let num3 = prompt("Introduce un último número")
let sum = num1 + num2 + num3
let mul = num1 * num2 * num3
let div = num1 / num3

document.write(`Hola ${nombre} ${apellido}`)
document.write("<br>")
document.write(`Los números que has escogido son ${num1}, ${num2} y ${num3}`)
document.write("<br>")
document.write(`La suma de los 3 es: ${sum}`)
document.write("<br>")
document.write(`La multiplicacion de los 3 es: ${mul}`)
document.write("<br>")
document.write(`La division del primero y el tercero es: ${div}`)


