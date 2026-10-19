
const x = 2;
let y = 4;

// #1 Zadanie:
// Pokaż wynik dodawania x i y (oczekiwane: 5)
console.log(x + y);

// #2 Zadanie:
// Pokaż wynik potęgowania x do 3 (lub x do y) (oczekiwane: 8)
console.log(x * x * x); // zahardkodowane (slang)
// dawniej przed 2015:
console.log(Math.PI);
console.log(Math.pow(x, y));
// po 2015:
console.log(1 + x ** y)

 try {
    // programsta zakłada że linia :20 może rzucić błąd, dlatego używa bloku `try/catch`
    k
 } catch (e) {
    console.log(e.message)
 }

//------------------------------------------------------------
var hello = "Hello";
const almostWorld = 'Almost World';

// #3 Zadanie:
/*
	Pokaż wynik dodawania hello + almostWorld
    Tak aby na konsoli pokazał się napis "Hello World"
    użyj odpowiedniej metody wbudowanej na stałej almostWorld (!)
*/


//------------------------------------------------------------
const isAnAdmin = true;
console.log(isAnAdmin)
// isAnAdmin = false;
console.log(isAnAdmin)

// #4 Zadanie
// Odkomentuj i napraw błąd w linii z kodem "isAnAdmin = false"
// Powinieneś zobaczyć następujący wynik na konsoli:
// true
// false
