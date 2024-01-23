let move = 0

const boardGame = document.querySelector(".boardGame")
const resetBtn = document.querySelector(".resetBtn")
const numMoves = document.querySelector(".move")

resetBtn.addEventListener("click", () => {
  // console.log("clicked")
})
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
    } else {
      console.log("No match")
      setTimeout(() => {
        card.style.backgroundColor = "#818181"
        prevCard.style.backgroundColor = "#818181"
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
