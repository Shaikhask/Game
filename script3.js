const boardGame = document.querySelector(".boardGame")
const resetBtn = document.querySelector(".resetBtn")
const numMoves = document.querySelector(".move")

resetBtn.addEventListener("click", () => {
  location.reload()
})
let endGameArr = []
const endGame = () => {
  if (endGameArr.length === 10) {
    let winMsg = alert("Woohoo You Won Again!")
  }
}

let move = 0

let prevCard = ""
let colorArr = []
boardGame.addEventListener("click", (evt) => {
  console.log(evt.target)
  let card = evt.target
  let cardColor = card.getAttribute("color")
  console.log(cardColor)
  card.style.backgroundColor = cardColor.toLowerCase()

  colorArr.push(cardColor)
  console.log(colorArr)

  let tooEarly = false
  const early = () => {
    if (tooEarly === true) {
      return
    }
  }

  if (colorArr.length === 2) {
    tooEarly = true
    if (colorArr[0] === colorArr[1]) {
      console.log("Match")
      colorArr = []
      prevCard = ""
      endGameArr.push(0)
      move++
      numMoves.innerText = `Moves: ${move}`
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
      }, 400)
    }
  } else {
    prevCard = card
    console.log(prevCard)
  }
})
