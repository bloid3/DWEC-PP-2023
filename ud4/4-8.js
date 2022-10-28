
function aficiones() {
	let x = document.getElementsByTagName("input");
	if (document.querySelectorAll("div p").length == 0) {
		for (let i = 0; i < x.length; i++) {
			if (x[i] != "") {
				document.getElementsByTagName("div")[`${i}`].appendChild(document.createElement("p")).innerHTML = x[i].value;
			}
		}
		creado = true;
	}
}
