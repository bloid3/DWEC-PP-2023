function anadirGasto() {
	let gasto = document.getElementById("gasto").value;
	if (comprobarGasto(gasto) != 1) {
		if (gasto != "") {
			document.getElementById("lista").appendChild(document.createElement("li")).innerHTML = gasto
			document.getElementById("gasto").value = ""
		}
		let lista = gasto.split(": ")
		let valor = parseInt(lista[1])
		valor += parseInt(document.getElementById("idImporteTotal").innerHTML)
		document.getElementById("idImporteTotal").innerHTML = valor
		ordenarLista("lista")
	}
}

function ordenarLista(idUl){
    let ul = document.getElementById(idUl);    
    let lista = ul.getElementsByTagName("li");
    let arrayGastos = Array.from(lista);
    arrayGastos.sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(li => ul.appendChild(li));
}

aniadirOnclick();

function aniadirOnclick() {
	let x = document.getElementsByTagName("li");
	for (let i = 0; i <x.length; i++) {
		x[i].setAttribute("onClick", "borrarProducto(this)");
	}
}
function borrarProducto(e) {
	//CLASSNAME
	if (e.getAttribute("style") != "color:red") {
		e.setAttribute("style", "color:red");
		valor = e.innerHTML;
		let k = valor.split(": ");
		let importe = parseInt(document.getElementById("idImporteTotal").innerHTML) 
		document.getElementById("idImporteTotal").innerHTML = importe - parseInt(k[1]);
	} else {
		e.setAttribute("style", "color:black");
		valor = e.innerHTML;
		let k = valor.split(": ");
		let importe = parseInt(document.getElementById("idImporteTotal").innerHTML) 
		document.getElementById("idImporteTotal").innerHTML = importe + parseInt(k[1]);
	}
}

function comprobarGasto(e) {
	let valores = e.split()
	let existe = 0;
	let lista = document.getElementsByTagName("li");
	for (let i = 0; i < lista.length; i++) {
		let vaLista = lista[i].innerHTML.split(" : ")
		if (vaLista[0].localeCompare(valores[0]) == 0)
			existe = 1;
	}
	return existe;
}