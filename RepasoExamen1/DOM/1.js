function obtenerHijos() {
	let padre = document.getElementsByTagName("div")[0];
	for (let i = 0; i < padre.children.length; i++) {
		console.log(`El hijo ${i + 1} es un ${padre.children[i].tagName}`)
	}
}