/**
 * --> ES6
 *
 Po 2015 roku do JS wprowadzony zostaje tzw. skrócony zapis funkcji: arrow functions.
 (w niektórych językach programowania mówi się o np. lambda expressions)

 Arrow functions poza skróconym zapisem posiadają jeszcze kilka własności:
 a) zawsze są anonimowe i zapisane jako wyrażenia
 b) jeśli możemy je zapisać w jednej linii jako poprawne wyrażenie, które oblicza się do wartości,
    wartość ta zostanie zwrócona jako wynik działania funkcji - bez konieczności użycia słowa kluczowego "return"

 # Zadania
 1. Porównaj i sprawdź działania "arrow functions", wywołując te funkcje i przedstawiając ich wartości na konsoli

 */

// Nowości ES6+ (po 2015r):
// dostajemy Arrow functions:
const newFunc = ( name ) => `Hello ${name}!`;
const newFunc2 = name => `Hello ${name}!`;
const newFunc3 = ( name ) => {
    return `Hello ${name}!`;
};
// Wyrażenie funkcyjne (eng. Function Expression)
const func = function(name) { 
    return `Hello ${name}!` 
}
// Deklaracja funkcji (eng. Function Declaration)
function funcD(name) { 
    return `Hello ${name}!` 
}
console.log(func('Michał'))
console.log(funcD('Michał'))

console.log(newFunc('Michał'))
console.log(newFunc2('Michał'))
console.log(newFunc3('Michał'))


setTimeout(() => {
    console.log(newFunc('Michał'), 'END');
}, 50)

// Przypomnienie:
// Funkcja może zwracać inną funkcję:
function hello() {
    return () => 'World';
}

const innerFn = hello();
// #2 Zadanie:
// Jak wyciągnąć wynik "World" ?
console.log(innerFn())

// Dla intepretera nie ma znaczenia czy mamy pomocniczą referencję
console.log(hello()())





