// const _ = {}; // pytanie: export wszystkiego vs ES

const lastElement = _.last([1, 2, 233]);

document.querySelector('p').innerHTML = 'Last element in array is: <b>'+ lastElement + '</b>';


document.querySelector('p').innerHTML += `<br /> Dropped elements are: ${_.drop([1, 2, 3, 4])}`