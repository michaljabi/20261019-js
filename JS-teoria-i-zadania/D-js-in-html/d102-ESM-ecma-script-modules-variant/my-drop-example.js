import _ from 'https://cdn.jsdelivr.net/npm/lodash@4.18.1/+esm'

document.querySelector('p').innerHTML += `<br /> Dropped elements are: ${_.drop([1, 2, 3, 4])}`