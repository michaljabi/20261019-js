import confetti from 'https://esm.sh/@hiseb/confetti';

export function makeConfettiButton(text = '', count = 500) {
    const btn = document.createElement('button');
    btn.innerText = text
    btn.addEventListener('click', (e) => {
        confetti({
            position: { x: e.clientX, y: e.clientY },
            velocity: 200,
            count
        })
        /*
        btn.setAttribute('disabled', true);
        setTimeout(() => {
            btn.removeAttribute('disabled')
        }, 3000)
        */
    })
    return btn;
}