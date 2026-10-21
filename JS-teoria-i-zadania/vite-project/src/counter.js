import confetti from "@hiseb/confetti"
// zmiast cała biblioteka
// import lodash from "lodash"
// AUTOR pozwala na zrobienie tak: (tylko jedna funcja)
import last from "lodash/last"

export function setupCounter(element) {
  element.addEventListener('click', (ev) => {
    confetti({
      position: { x: ev.clientX, y: ev.clientY },
      color: ['#ff0000']
    })

    console.log(last([1,2,3,4,292, 8]))
  })
  element.innerText = 'Fire !'
}
