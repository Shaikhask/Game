let move = 0

const boardGame = document.querySelector(".boardGame")
const resetBtn = document.querySelector(".resetBtn")
const numMoves = document.querySelector(".move")

resetBtn.addEventListener("click", () => {
  // console.log("clicked")
})
let endGameArr = []
const endGame = () => {
  if (endGameArr.length === 6) {
    let winMsg = alert("You Won!")
  }
}

let prevCard = ""
let colorArr = []
boardGame.addEventListener("click", (evt) => {
  console.log(evt.target)
  let card = evt.target
  let cardColor = card.getAttribute("color")
  console.log(cardColor)
  card.style.backgroundColor = cardColor.toLowerCase()
  //add the cardColor to the array
  colorArr.push(cardColor)
  console.log(colorArr)
  //if the array has two elements, compare them
  if (colorArr.length === 2) {
    if (colorArr[0] === colorArr[1]) {
      console.log("Match")
      colorArr = []
      prevCard = ""
      endGameArr.push(0)
      endGame()
    } else {
      console.log("No match")
      setTimeout(() => {
        card.style.backgroundColor = "#ee8f00"
        prevCard.style.backgroundColor = "#ee8f00"
        colorArr = []
        prevCard = ""
      }, 555)
    }
  } else {
    prevCard = card
    console.log(prevCard)
  }
})

//1 figure out a way to remember the color value of which cards have been clicked
//2 figure out a way to compare those values

const numArray = []

const number = 2

numArray.push(number)
