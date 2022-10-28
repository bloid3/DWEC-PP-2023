
function aficiones() {
	let x = document.getElementsByTagName("input");
	let divs = document.querySelectorAll("div");
	
	for (let i = 0; i < x.length; i++) {
		if (divs[i].getElementsByTagName("p").length == 0) {
			if (x[i] != "") {
				divs[`${i}`].appendChild(document.createElement("p")).innerHTML = x[i].value;
				divs[`${i}`].getElementsByTagName("p").className = "azul";
			}
		} else {
			divs[i].getElementsByTagName("p")[0].innerHTML = x[i].value;
		}
	}
}
