
// type="module" musi być ustawione na <script w HTML !!!!
import _ from 'https://cdn.jsdelivr.net/npm/lodash@4.18.1/+esm'
import './my-drop-example.js'

const lastElement = _.last([1, 2, 233]);

document.querySelector('p').innerHTML = 'Last element in array is: <b>'+ lastElement + '</b>';

