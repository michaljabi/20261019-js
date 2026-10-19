/**
 * JavaScript posiada tzw. literały obiektowe.
 * Pozwalają one utworzyć dany obiekt - bez potrzeby definiowania jego struktury
 * Tak jak dzieje się to w językach zorientowanych obiektowo - które używają klas.
 *
 * Na początek prosty przykład....
 */

const myObject = new Object();

myObject.name = 'Michał';

console.log(myObject)

// Prosty przykład obiektu:
const user = {
	name: 'Marek'
};

// użycie obiektu:
console.log(user);
// użycie pola obiektu:
console.log(user.name);
console.log(myObject.name);

myObject.lastName = 'Kowsalsky'
console.log(myObject)

// Do pól obiektu można dostawać się dynamicznie !
console.log(user['name'])

// lub:
const key = 'name';
console.log(user[key])



const x = 0;
const y = 0;
const z = 0;

const myPoint = {
	x: 1,
	y: 1,
	z: 1
}

const myPoin2 = {
	x: 10,
	y: 1,
	z: 1
}

console.log(myPoint.x + myPoin2.x)











myPoint.z = 10;
myPoint.dimention = '3d';

console.log(myPoint);
console.log(myPoint.x);
console.log(myPoint.y);
console.log(myPoint.z);

