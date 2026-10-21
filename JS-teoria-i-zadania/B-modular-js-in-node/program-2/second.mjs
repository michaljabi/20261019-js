import { Car } from "./Car.mjs";
// mjs - oznacza dla Node.js że to MODUŁ ESM. (Ecma Script Modules od 2015)
// jeśli tego nie ma Node.js spodziewa się swojej składni (od 2009) CommonJS

const car1 = new Car()
const car2 = new Car('Bugatti', 'Veyron')

car1.makeSomeNoise()
car2.makeSomeNoise()

console.log(MY_VALUE);

