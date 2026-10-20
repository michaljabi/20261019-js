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

function countItemGrossValue(item) {
	// const parialSum = item.price + 98;
	// ALE NIE:
	// item.partialSum = 98; //  !! bo to mutuje obiekt (dopisze nowe pole do tego co "wchodzi" do funkcji)
	// item.tax = 0.8 // tutaj z kolei zmieniamy "niespodzewanie" wartość 
	// REGUŁA:
	// jeśli pracujesz z obiektami wparametrach funkcji - to traktuj je TYLKO DO OCZYTU
	// lub kopiuj (shallow lub, clone) jeśli koniecznie potrzebujesz obiektu
	return item.price * (1 + item.tax)
}

// Przykład utworzenia obiektu ze wszystkimi wartościami domyślnymi
console.log(makeNewCartItem())


const shoppingCartItem = makeNewCartItem('Laptop', 4500); 
console.log(shoppingCartItem)
// cena brutto
const grossValue = countItemGrossValue(shoppingCartItem);
console.log(shoppingCartItem)

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
const grossValue2 = countItemGrossValue(shoppingCartItem2)
const shoppingCartGrossValue = grossValue + grossValue2;

console.log(shoppingCartGrossValue);

// Array daje nam możliwość utworzenia koszyka przechowującego elementy (kolekcję)
const cartItems = [
	makeNewCartItem('Laptop', 4500), 
	makeNewCartItem('Smartfone', 2500),
	makeNewCartItem('Smartfone 14', 2600),
	makeNewCartItem('Smartfone 15', 2900),
	makeNewCartItem('Smartfone 16', 2900),
]

console.log(cartItems.push(makeNewCartItem('toster', 200, 0.8)))

console.log(cartItems.length)
console.log(cartItems)
console.log(cartItems[2])
console.log(cartItems[2].price)
console.log(cartItems[2].tax)

console.log(cartItems[4])
console.log(cartItems[493])

// Jak odnieść się do ostaniego elementu ?
console.log(cartItems[cartItems.length - 1])

let totalGrossValue = 0;
for(const items of cartItems) {
	totalGrossValue += countItemGrossValue(items);
	console.log(totalGrossValue);
}
console.log(totalGrossValue);


// #3 Wykaż, że zainicjowanie dwóch nowych pustych obiektów po porównaniu === da nam wartość false.
// Wyjaśnij dlaczego tak się dzieje

// Obiekt, 
console.log({} === {});
// to pod spodem to tak naprawdę:
console.log(new Object() === new Object());

const a = {};
const b = a;

console.log(a === b);

console.log(makeNewCartItem())
console.log(makeNewCartItem())

console.log(makeNewCartItem() === makeNewCartItem());
console.log([] === []);
console.log(new Date() === new Date());

// co je łączy ?
console.log(null === null);
console.log('' === '');
console.log(1 === 1);
// bo to TYPY PROSTE

// NIESTETY UWAGA - JS wchodzi cały na biało ze swoimi dziwadłami
console.log(false == 0)
console.log('' == 0)
// problem - uzywamy == zamiast === - NIE róbmy tego dla typów prostych!
// zobacz ===
console.log(false === 0)
console.log('' === 0)
// === oznacza - porównaj wartość i NIE ZRÓWNUJ TYPU ! (nie rzutuj)

// console.log()


// Przykład rzutowania
const numberAsString = '987'

const myNumber = Number(numberAsString); // można na : String(), Number(), BigInt(), Boolean() => bez słowa kluczowego "new".

console.log(numberAsString)
console.log(myNumber)

// Niestety NaN jest typu number:
console.log(typeof NaN);

// Niestety 2, NaN nie jest stałą!!
console.log(NaN === NaN);

console.log(Number.isNaN(NaN));
