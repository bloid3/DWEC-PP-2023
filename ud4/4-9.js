function anadir() {
	document.getElementsByTagName("ul")[0].appendChild(document.createElement("li")).innerHTML = document.getElementById("producto").value;
}