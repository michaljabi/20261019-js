/**
 * W JavaScript posiadamy 7 typów prostych (stan na ES11 - rok 2020).
 *
 * Przekazywane są one po przez wartości.
 * Możemy dzięki nim zapisać podstawowe informacje jako string, boolean, number etc.
 */

// Typy proste:

// String (ciąg znaków, może być zapisywany za równo jako: "abc" lub 'abc')
const myString = 'My Sample Text';

// Number (w JavaScript nie ma rozróżnienia typu wg. Integer, Double, Float etc.!)
// jest jeden typ. może on zawierać za równo liczby zmiennoprzecinkowe jak i całkowite (precyzja jak w double)
const myNumber = 123;

// Boolean (dwa stany: prawda i fałsz)
let myBoolean = true;

// Standardowy sposób "sprawdzania co się dzieje" - console.log:
console.log(myString);

// przypomnienie:
// słowo "const" nie oznacza że wartość nie może ulec zmianie,
// oznacza iż nie możemy zmienić przypisania np:
// myNumber = 1233;


// STRINGS
// ----------------------------------------------------------------------------------------------
// Operacje, które są popularne na stringach:
console.log('connect' + ' two ' + 'strings');
console.log(myString + '😎');

// Przykładowe, wbudowane metody:
console.log('>> STRINGS:');
console.log(myString.substring(3));
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.charAt(4));
console.log('Hello World'.charAt(7));
console.log('Hello World'.slice(-5));
console.log(myString.slice(-5));
console.log('Ha'.repeat(3));
console.log(String.fromCharCode(65));
// więcej: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// NUMBERS
// ----------------------------------------------------------------------------------------------
// Operacje, które są popularne na numerach:
console.log('Dodawanie', 9 + 10 + 20);
console.log('Odejmowanie', 14 - 2 - 1 - 1);
console.log('Mnożenie', 4.3 * 2);
console.log('Dzielenie', 4 / 2);
console.log('Potęgowanie', 4 ** 2);
// do pierwiastkowania musimy użyć wbudowanej w natywny JS: Math.sqrt();
console.log('Reszta z dzielenia', 80 % 3);

console.log('Kolejność działań :) ', 2 + 2 * 2);

// Przykładowe, wbudowane metody:
console.log('>> NUMBERS:');
console.log(myNumber.toFixed(3));
console.log(Number.isInteger(2.3));
console.log(Number.parseInt('00110001111101', 2));
console.log(Number.parseInt('00110001111101', 10));
// więcej: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

// BOOLEANS
// ----------------------------------------------------------------------------------------------
// Operacje, które są popularne na boolach:
console.log('Porównanie:', true === true)
console.log('OR:', false || true)
console.log('AND:',true && false)
console.log('NOT:',!false)

// Przykładowa, wbudowana metoda:
console.log('>> BOOLEANS:');
console.log(myBoolean.toString());
// więcej: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean

// Lista wszystkich typów prostych w JS na rok 2020 (ES11):
// Jest ich 7
let myUndefined;
console.log(typeof 'my sample') // string
console.log(typeof true) // boolean
console.log(typeof 123) // number
console.log(typeof 123n) // bigint
console.log(typeof Symbol()) // Symbol
console.log(typeof myUndefined) // undefined

// Specjalny typ prosty, którego nie możemy podejrzeć operatorem "typeof"
console.log(typeof null) // null - UWAGA na typeof w tym przypadku pokazuje "object"

// null w tym przypadku (jako object) to oczywiście pomyłka - bug. Który z powodu kompatybilności wstecz - został w JS.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#null


// więcej o typach prostych:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures


// Typy proste - przekazywane są przez wartości a nie przez referencje.
// Co w praktyce oznacza iż nie da się ich "mutować" tak jak w przypadku obiektów - które są przekazywane przez referencje.

// Pozostałe typy to typy obiektowe, nie da się ich dokładnie określić operatorem "typeof":

console.log(typeof {})
console.log(typeof [])
console.log(typeof new Date())
console.log(typeof new RegExp('\d', 'g'))

// W przypadku złożonych stryktur danych zawsze dostaniemy od "typeof" odpowiedź: "object"
// W tym układzie nie wiele się dowiemy próbując sprawdzać te struktury operatorem typeof
// Wnioski:
  // 1. Operator typeof nadaje się jedynie do sprawdzania typów prostych
  // 2. z uwagi na błąd: `typeof null` - nie możemy polegać na tym co zwraca "typeof" w przypadku jeśli sprawdzana wartość to null

// Dodatek:
// typeof może nam jedynie pomóc w przypadku funkcji:
console.log(typeof function(){} ) // function


// Dodatkowe info:
// Żeby sprawdzić typ złożony musimy znać konstruktor którego poszukujemy i użyć operatora instanceof
console.log({} instanceof Array);

console.log([] instanceof Array);
console.log({} instanceof Object);
console.log(new Date() instanceof Date);
