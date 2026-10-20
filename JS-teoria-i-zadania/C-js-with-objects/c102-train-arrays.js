// #1 Zadanie:
// Zadeklaruj nową tablicę z numerami 1 do 8
// Wyrzuć z niej pierwszą i ostatnią wartość
const numbers = [1,2,3,4,5,6,7,8];

numbers.pop()
numbers.shift()

console.log(numbers)

// #2 Zadanie:
// Pokaż na konsoli "jedno pod drugim" wynik mnożenia pól tej tablicy przez 3
for(const num of numbers) {
    console.log(num * 3)
}

console.log(numbers);

// #3 Zadanie:
// Sprawdź w dokumentacji metodę "indexOf" dla tablic. Jak ją użyć? Pokaż przykład zastosowania
console.log(numbers.indexOf(5));
console.log(numbers.indexOf(52));


const numbers2 = [9, 15, 90, 388, 29, 15];
console.log(numbers2.indexOf(15));

console.log(numbers2.filter(n => n === 15))

const indexes = [];
numbers2.forEach((n, idx) => {
    if(n === 15){
        console.log(idx);
        indexes.push(idx);
    }
})
console.log(indexes)

// Common pitfall:
const myObjects = [{}, {} ,{}];
console.log(myObjects.indexOf({}));

// Poprawka (szukanie obiektów (muszę mieć referencję)):
const seekFor = {};
const myObjects2 = [{}, {}, seekFor ,{}];
console.log(myObjects2.indexOf(seekFor));

// Przykład bardziej "z życia wzięty"
const cartItems = [ 
    {id: 1, price: 2000, text: 'Smartfon' },
    {id: 2, price: 4000, text: 'Żelasko' },
    {id: 3, price: 2000, text: 'Komputer' }
]

// const idx = cartItems.findIndex((item) => item.id === 2)
const idx = cartItems.findIndex((item) => item.text.toLowerCase().includes('sko'))
console.log(idx);

console.log(cartItems.filter((item) => item.price >= 3000))

console.log(cartItems.filter((item) => item.price === 2000))

// #4 Zadanie:
// Pokaż na konsoli 1-wszy i ostatni element tablicy (jeden pod drugim)

// pierwszy:
console.log(numbers)
console.log(numbers[0])
console.log(numbers.at(0))


console.log(numbers[numbers.length - 1]);
console.log(numbers.at(-1));