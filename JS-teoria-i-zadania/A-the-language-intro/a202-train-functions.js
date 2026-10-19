// #1 Zadanie:
// Napisz funkcję, która wyświetli na ekranie napis: 'Witaj Nieznajomy'
// wywołana bez argumentu
// wywołana z argumentem 'Michał' wyświetli napis: 'Witaj Michał'
// Zastanów się nad poprawnymi nazwami funkcji i jej parametru

function sayHello(name = 'Nieznajomy') {
    // if(name === undefined) { // póżniej: a402
    //     console.log('Witaj Nieznajomy')
    //     return;
    // }
    console.log('Witaj', name);
}

sayHello('Michał')
sayHello()