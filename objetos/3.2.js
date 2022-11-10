class Productos {
	constructor(nombre, categoria, unidades, precio) {
		this._nombre = nombre,
		this._categoria = categoria,
		this._unidades = unidades,
		this._precio = precio
	}

	get nombre() {
		return this._nombre
	}
	set nombre(valor) {
		this._nombre = valor
	}
	
	get categoria() {
		return this._categoria
	}
	set categoria(valor) {
		this._categoria = valor
	}

	get unidades() {
		return this._unidades
	}
	set unidades(valor) {
		this._unidades = valor
	}

	get precio() {
		return this._precio
	}
	set precio(valor) {
		this._precio = valor
	}

	getInfo() {
		console.log(`${this._nombre} (${this._categoria}): ${this._unidades} x ${this._precio} = ${this._unidades*this._precio} €`)
	}
}

let TVSamsung = new Productos("TVSamsung", "Televisores", 4, 345.95)
let PCGaming = new Productos("PCGaming", "Ordenadores", 2, 999.49)
let Aspiradora = new Productos("Aspiradora", "Hogar", 3, 209.99)

class Televisores extends Productos {
	constructor(nombre, categoria, unidades, precio, tamanio) {
		super(nombre, unidades, precio)
		categoria = "Televisores"
		this._tamanio = tamanio
	}

	getInfo() {
		super.getInfo(),
		console.log(` Tamaño: ${this._tamanio}`)
	}
}

let Xiaomi = new Televisores("XIAOMI", 6, 219.99, 44)