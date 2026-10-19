// Typy proste - przekazywane przez wartości:

let myX = 1;
let myY = myX;


console.log(myX)
console.log(myY)

console.log(myX === myY)
console.log(myX === 1)
console.log(myY === 1)
console.log(1 === 1);

myX++;

console.log(myX)
console.log(myY);



// Typy złożone - przekazywane przez referencje:

let user = { name: 'Michał'}
let user2 = user;

console.log(user)
console.log(user2)
// console.log({} === {});

user.name = 'Kasia';

console.log(user)
console.log(user2)