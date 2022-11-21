function anadirGasto() {
	let gasto = document.getElementById("gasto").value;
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

function ordenarLista(idUl){
    let ul = document.getElementById(idUl);    
    let lista = ul.getElementsByTagName("li");
    let arrayGastos = Array.from(lista);
    arrayGastos.sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(li => ul.appendChild(li));
	for(let i= 0; i< arrayGastos.length; i++){
		arrayGastos[i].setAttribute(onClick,'borrarProducto(this)');
	} 
}
function borrarProducto(element){
	element.innerHTML = "hola";
}