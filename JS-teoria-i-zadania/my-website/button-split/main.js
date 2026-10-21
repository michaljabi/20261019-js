import confetti from 'https://esm.sh/@hiseb/confetti';
console.log('?')
const app = document.querySelector('#app');
const btn = document.createElement('button');

btn.innerText = 'Fire !'

app.style.display = 'flex'
app.style.justifyContent  = 'center'

app.append(btn);

btn.addEventListener('click', (e) => {
    confetti({
        position: { x: e.clientX, y: e.clientY },
        velocity: 200,
        count: 500
    })
})