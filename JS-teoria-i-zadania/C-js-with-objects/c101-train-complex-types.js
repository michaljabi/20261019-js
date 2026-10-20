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

const shoppingCartItem2 = {
	name: 'Smartfone',
	price: 2500,
	tax: 0.23
}

const grossValue2 = shoppingCartItem2.price + shoppingCartItem2.price * shoppingCartItem2.tax;
console.log(grossValue2);

const shoppingCartGrossValue = grossValue + grossValue2;

console.log(shoppingCartGrossValue);






// #3 Wykaż, że zainicjowanie dwóch nowych pustych obiektów po porównaniu === da nam wartość false.
// Wyjaśnij dlaczego tak się dzieje
