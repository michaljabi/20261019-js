/**
 * W odróżnieniu od innych wysokopoziomowych języków,
 * pomimo swojej obiektowości, JS nie potrzebuje class
 *
 * Tutaj w momencie przypisania do zmiennej lub po prostu wpisania
 * w kod tzw. "Literału obiektowego" {}
 *
 * Tworzone jest miejsce w pamięci i nowa instancja obiektu
 *
 * Obiekt może być dynamicznie rozszerzany o nowe pola.
 * */

// Inny przykład obiektu JS:
// Po deklaracji i przypisaniu, jest gotowy do użytku!
const cat = {
	whiskers: 'long',
	eyes: 2,
	// voice: function () {
	// 	return 'Mrauuu';
	// },
	voice() {
		return 'Mrauuu';
	},
	alwaysLandsOn4Feet: true
};

// #1 Zadanie:
// Pokaż na konsoli wynik działania metody voice
console.log(cat.voice())



// Kolejne przykłady:

// Na początku user posiada tylko pole "name"
const myUser = {
	name: 'Janina'
};

// Potem dynamicznie dodawane jest pole "lastName" z wartością:
myUser.lastName = 'Kowalska'

// przypomnienie:
// Istnieje zapis, który pozwala odnosić się do obiektu tak jak do kolekcji
// W tym układzie możemy "dynamicznie" dostać się do pola w obiekcie
// np.
console.log(myUser['name'])

// #2 Zadanie:
// Przypisz nowy obiekt do stałej - sprawdź i udowodnij że:
	// a) Nie można mieć kilka tak samo nazwanych pól w obiekcie
	// b) Jeśli wystąpi taka sytuacja to "wartość ostatniego pola wygrywa"
const myObj = {
	text: '?',
	text: '!',
	text: 'x',
	num: 82937,
	age: 23,
	address: { street: 'Zielona 23a'}
}

console.log(myObj)
console.log(myObj.hello)

// Shallow Copy ... - to tzw. Spread operator:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// const myObjCopy = { text: 'ok', ...myObj } // przekopiowuje wartości i pola z obiektu a do obiektu b
const myObjCopy = { ...myObj, text: 'ok' } // przekopiowuje wartości i pola z obiektu a do obiektu b

console.log(myObj === myObjCopy);
console.log(myObjCopy);

// Dlatego shallow:
console.log(myObj.address === myObjCopy.address);
console.log(myObj)
console.log(myObjCopy)

// Depp COPY - tzw. CLONE:
const cloneObj = structuredClone(myObj);
console.log(myObj.address === cloneObj.address);

// Poza dynamicznym zapisem, można "dostać się" do wszystkich pól obiektu - dzięki pętli for...in
for(let key in myUser) {
	console.log(key);
}


// Zauważ, że obiekty można zagnieżdżać:
const tree = {
	branch: {
		leaf: 'green',
		isRoot: false
	},
	// address: '' // teoretyczne pole - które chcemy uzupełnić później
}

// tego też nie chcemy robić ! :(
console.HELLO = '234'

console.log(console)

// co to jest tzw. mutacja obiektu
// dodajemy pole które wcześniej nie istniało (podczas deklaracji)
tree.address = 'Leśnicza 4'
// czyli DYNAMICZNIE dodaliśmy nowe - nieistinejące wcześniej pole obiektu

console.log(tree);

console.log(tree.branch.leaf)

// #3 Zadanie:
// Pokaż na konsoli wartość isRoot w obiekcie tree:
console.log(tree.branch.isRoot);

// nieistnijące pole
// To jest błąd
// console.log(tree.roof.sattelite);
// To tak samo jakbyśmy chcieli - dosłownie zrobić:
// console.log(undefined.sattelite);

// Sposób na bezpieczne dostanie się do DOWOLNEGO zagnieżdzenia:
console.log(tree?.roof?.sattelite);

/**
 * W odróżnieniu od typów prostych (primitives).
 *
 * Obiekty nie są przekazywane przez wartości, a przez referencje.
 * Innymi słowy - tworząc jeden obiekt i przypisując go do zmiennej / stałej.
 * Jeśli zapiszemy kolejną zmienną / stałą i przyrównany do poprzedniej,
 * nie utworzymy niezależnej kopii obiektu - a jedynie 2 prowadzące w to samo miejsce w pamięci - odniesienia.
 * */

const house = {
	name: 'MyHome'
}
console.log(house);

const otherHouse = house;
console.log(otherHouse);

// jednakże to tak naprawdę ten sam obiekt:
console.log(house === otherHouse);
// a 2 wskazujące na to samo miejsce w pamięci odniesienia "referencje"
// dowód:
otherHouse.name = 'CHANGED NAME of my home 🏢'

console.log(house);
