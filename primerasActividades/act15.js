
var esPrimo = (n) => {
	let p = true
	for (let i = 2; i < n/2; i++) {
		if (n % i == 0) 
			p = false;
	}
	if (p == false)
		document.write(`${n} no es primo`)
	else
		document.write(`${n} es primo`)
}
esPrimo(7)
