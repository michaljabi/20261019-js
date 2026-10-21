import { makeConfettiButton } from './make-confetti-button.js';
import $app from './app.js'

const myBtn = makeConfettiButton('Fire !', 1000);

$app.append(myBtn, 'czekam..', makeConfettiButton('inny'));

// Przykład "ZMIANY WIDOKU" hipotetyczny
/*
setTimeout(() => {
    $app.innerHTML = '';
    $app.append(
        makeConfettiButton('Mój nowy button')
    )
}, 5000)
*/