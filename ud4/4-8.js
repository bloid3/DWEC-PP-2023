function aficiones() {
	let x = document.getElementsByTagName("input");
	for (let i = 0; i < x.length; i++) {
		if (x[i] != "") {
			document.getElementsByTagName("div")[`${i}`].appendChild(document.createElement("p")).innerHTML = x[i].value;
		}
	}
}