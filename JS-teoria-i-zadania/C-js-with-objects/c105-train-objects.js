// const fruits = ['cherry', 'apple', 'banana'];
// const name = 'Fruit shop'

// function greetings() {
// 	return 'welcome!' + this.name
// }

function makeFruitShop(name = 'Fruit shop') {
	const fruits = ['cherry', 'apple', 'banana'];

	function greetings() {
		return 'welcome!' + this.name
	}
	return {
		name,
		fruits,
		greetings
	}
}

/* #1 Zadanie:
	 Utwórz obiekt shop
	 który będzie posiadał pola: fruits name greetings
	 mają one mieć te same wartości co rzeczy zadeklarowane powyżej
*/
const shop = makeFruitShop();

console.log(shop);

// #2 Zadanie:
// pokaż na konsoli napis "banana welcome!" używając danych z obiektu

console.log(shop.fruits[2], shop.greetings());

// #3 Zadanie:
// utwórz 2 obiekt concurrentShop, który będzie (nowym obiektem) bez referencji do poprzedniego obiektu i jego zawartości (ale zadeklaruj z tymi samymi wartościami)
// dodatkowo będzie miał również metodę banner - która zwróci "here prices are the lowest!"
const concurrentShop = {
	...makeFruitShop(),
	banner() { // Jeśli tutaj będzie `arrow` to UWAGA - nie zadziała this.
		return this.name + " - here prices are the lowest!"; // + this.fruits.join('_?_')
	}
}

// sposób 2 przygotowania nowego obiektu + metoda banner:
const concurrentShop2 = makeFruitShop();
concurrentShop2.banner = function() {
	return this.name + " - here prices are the lowest!";
}

console.log(concurrentShop);
console.log(concurrentShop.banner());


console.log(shop.name);
console.log(shop.greetings());
console.log(concurrentShop.greetings());

console.log(concurrentShop.fruits === shop.fruits)



// #4 Zadnie:
// Pokaż na konsoli wszystkie nazwy pól obiektu shop
// ['fruits', 'name', 'greetings'] //  c101-complex-types.js
for(const prop in shop) {
	console.log(prop)
}

console.log(Object.keys(shop))

// Dla porównania (nie konstruktory!):
console.log(Math)
console.log(Math.PI)
console.log(Math.random())
console.log(Math.round(Math.random() * 100))
console.log(NaN)

export {} // 
// to jest związane z ESM (Ecma Script Modules) - i tutaj dajemy znać TS Server (to narzędzie w VSC)
// że to jest MODUŁ (osobny niezależny plik) | hermetycznie zamknięty