// //@ts-check

/**
 *  Funkcje mogą być deklarowane z tzw. parametrami.
 *  Są to zapisy odnoszące się do argumentów (danych) przekazanych do funkcji.
 *
 *  Można ich zdefiniować teoretycznie "nieskończenie wiele"
 *  stosując odpowiedni zapis z operatorem rest "..."
 *
 *  Jednak w praktyce nie chcemy żeby tych parametrów było więcej jak 5-7.
 *  Dla czytelności naszego kodu i wygody jego używania.
 *
 *
 *  W momencie deklarowania litery a i b to "parametry"
 *
 *  natomiast przesyłane dane "10" i "20" nazywamy argumentami
 */

// zakres w JS to tzw. SCOPE (patrz: a301)

// zakres zewnętrzny
// Deklaracja:
/** 
 * // https://jsdoc.app/tags-param
 * @param {number} a 
 * @param {number} b 
*/
function sumTwoNumbers(a, b) {
	console.log(a);
	console.log(b);
	// zakres funkcji
	if(typeof a !== 'number' || typeof b !== 'number' || Number.isNaN(a) || Number.isNaN(b)) {
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
		// zakres wewnętrzny
		throw new Error('a and b must be a numbers !')
		// return 'You must provide a number'
		// return 0;
	}
	// if(a < 0) {
		// zakres wewnętrzny
		// return 0;
	// }
	return a + b;
	//return a + b
	//return a + b
}

// Wywołanie:
try {
	// const result = sumTwoNumbers('x', '2');
	const result = sumTwoNumbers(NaN, NaN);
	// #1 Zadanie:
	// Pokaż wynik dodawania 10 + 20 na ekranie
	console.log(result)
} catch (e) {
	console.log(e.message);
}






// #2 Zadanie:
// Policz ile to 30 + 560
console.log(sumTwoNumbers(30, 560))

const result2 = sumTwoNumbers(30, 560);
console.log(result2);

// #3 Zadanie:
// co jeśli byśmy mieli policzyć 450 + 200 + 100 ?
const partial = sumTwoNumbers(450, 200);
const final = sumTwoNumbers(partial, 100);

console.log(final);

// Dla interpretera te "stałe pomocnicze" nie mają znaczenia:
console.log(sumTwoNumbers(sumTwoNumbers(450, 200), 100))

/* ---------------------- */
// Funkcje po 2015 roku mogą posiadać parametry domyślne:

function greetings(user = 'Admin') {
	console.log('Hello', user)
}

// #4 Zadanie:
// spróbuj wywołać greetings z argumentami i bez argumentu, co się stanie ?


// #5 Zadanie:
// Po wykonaniu zadania #4 usuń domyślną wartość user - co się stanie ?
