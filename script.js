const boardGame = document.querySelector(".boardGame")
const resetBtn = document.querySelector(".resetBtn")
const numMoves = document.querySelector(".move")

resetBtn.addEventListener("click", () => {
  location.reload()
})
let endGameArr = []
const endGame = () => {
  if (endGameArr.length === 6) {
    let winMsg = alert("You Won!")
  }
}

let move = 0
let tooEarly = false
let prevCard = ""
let colorArr = []
boardGame.addEventListener("click", (evt) => {
  if (tooEarly === true) {
    return
  }
  console.log(evt.target)
  let card = evt.target
  let cardColor = card.getAttribute("color")

  console.log(cardColor)
  card.style.backgroundColor = cardColor.toLowerCase()

  colorArr.push(cardColor)
  console.log(colorArr)

  if (colorArr.length === 2) {
    tooEarly = true
    if (colorArr[0] === colorArr[1]) {
      console.log("Match")
      colorArr = []
      prevCard = ""
      endGameArr.push(0)
      move++
      numMoves.innerText = `Moves: ${move}`
      tooEarly = false
      endGame()
    } else {
      console.log("No match")
      setTimeout(() => {
        card.style.backgroundColor = "#fd795e"
        prevCard.style.backgroundColor = "#fd795e"
        colorArr = []
        prevCard = ""
        move++
        numMoves.innerText = `Moves: ${move}`
        tooEarly = false
      }, 1400)
    }
  } else {
    prevCard = card
    console.log(prevCard)
  }
})
