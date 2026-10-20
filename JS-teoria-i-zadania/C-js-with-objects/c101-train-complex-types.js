/* #1 Zadanie:
Zdefiniuj i przypisz obiekt shoppingCartItem z polami:
	name (typu :string)
	price (typu :number)
	tax (typu :number)

	Samodzielnie wymyśl ich wartości
*/

// Factory function => funkcja której zadaniem jest tworzenie nowych
function makeNewCartItem(name = '', price = 10, tax = 0.23) {
	// UWAGA! return musi mieć "zaczęte" to co zwraca w tej samej linii co jest napisany
	return {
		name: name,
		price, // wykorzystanie tzw. object property shorthand (lukier składniowy - tak to się nazywa w językach programowania)
		// lukier składniowy -> uproszczony zapis, ułatwienie dla programisty (często wchodzi w nowej wersji języka)
		tax: tax
	}
}

// Przykład utworzenia obiektu ze wszystkimi wartościami domyślnymi
console.log(makeNewCartItem())


const shoppingCartItem = makeNewCartItem('Laptop', 4500); 

console.log(shoppingCartItem)
// cena brutto
const grossValue = shoppingCartItem.price + shoppingCartItem.price * shoppingCartItem.tax;
console.log(grossValue);

/* #2 Zadanie:
Zdefiniuj i przypisz obiekt shoppingCartItem2 z polami:
	name (typu :string)
	price (typu :number)
	tax (typu :number)

	Samodzielnie wymyśl ich wartości

Pokaż w console.log sumy cen(price) i podatków(tax) obydwu produktów jako wartość koszyka
*/

// const shoppingCartItem2 = {
// 	name: 'Smartfone',
// 	price: 2500,
// 	tax: 0.23
// }

const shoppingCartItem2 = makeNewCartItem('Smartfone', 2500)

const grossValue2 = shoppingCartItem2.price + shoppingCartItem2.price * shoppingCartItem2.tax;
console.log(grossValue2);

const shoppingCartGrossValue = grossValue + grossValue2;

console.log(shoppingCartGrossValue);






// #3 Wykaż, że zainicjowanie dwóch nowych pustych obiektów po porównaniu === da nam wartość false.
// Wyjaśnij dlaczego tak się dzieje
