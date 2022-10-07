var idA = setInterval("hora()", 1000)

function hora() {
	var today = new Date()
	var now  = today.toLocaleTimeString(`es-ES`);
	document.title = `La hora es ${now}`;
}