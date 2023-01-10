let arrayGastos = []

let lista = document.querySelectorAll("li")
let padre = document.getElementById("lista")


lista.forEach(element => {
	arrayGastos.push(element.innerHTML)
})

function anadirGasto() {
	let nuevo = document.getElementById("gasto").value
	if (nuevo != "")
		arrayGastos.push(nuevo)
	arrayGastos.sort();
	padre.appendChild(document.createElement("li"))
	for (let i = 0; i <= lista.length; i++) {
		lista[i].innerHTML = arrayGastos[i]
	}
}	
