

let list = document.getElementsByTagName("li");
let existe = 0;
let list2 = [];


function anadir() {
	existe = 0;
	for (let i = 0; i < list.length; i++) {
		if (list[i].innerHTML == document.getElementById("producto").value) {
			existe = 1;
		}
	}
	if (existe == 0) {
		if (document.getElementById("producto").value != "") {
			document.getElementsByTagName("ul")[0].appendChild(document.createElement("li")).innerHTML = document.getElementById("producto").value;
		}
	}
}

function sortList() {
	for (let i = 0; i < list.length; i++) {
		list2.push(list[i].innerHTML);
	}
	list2.sort();
	for (let j = 0; j < list.length; j++) {
		list[j].innerHTML = list2[j];
	}
	for (let k = 0; k < list2.length; k++) {
		document.getElementsByTagName("ul")[0].appendChild(document.createElement("li")).innerHTML = list2[k];
	}
}