/* #1 Zadanie:
Zdefiniuj i przypisz obiekt shoppingCartItem z polami:
	name (typu :string)
	price (typu :number)
	tax (typu :number)

	Samodzielnie wymyśl ich wartości
*/

const shoppingCartItem = {
	name: 'Laptop',
	price: 4500,
	tax: 0.23
}

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












// #3 Wykaż, że zainicjowanie dwóch nowych pustych obiektów po porównaniu === da nam wartość false.
// Wyjaśnij dlaczego tak się dzieje
