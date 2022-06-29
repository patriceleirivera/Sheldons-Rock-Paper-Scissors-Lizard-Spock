const centerResultDisplay = document.getElementById('centerResult')
const possibleChoices = document.querySelectorAll('button')
const resultDisplay = document.getElementById('resultDisplay')
const choices = ['rock', 'paper', 'scissors', 'spock', 'lizard']
const userChoiceDisplay = document.getElementById('userChoice')
const computerChoiceDisplay = document.getElementById('computerChoice')
let character1, characterAction, character2, result


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  computerChoice = choices[Math.floor(Math.random() * choices.length)]

  result = 'winner'
  getResults(userChoice, computerChoice)
}))


const getResults = (userChoice, computerChoice) => {
  console.log('i went here')
  switch (userChoice + computerChoice) {
    case 'scissorspaper':
      characterAction = 'cuts'
      break
    case 'paperrock':
      characterAction = 'covers'
      break
    case 'rocklizard':
      characterAction = 'crushes'
      break
    case 'lizardspock':
      characterAction = 'poisons'
      break
    case 'spockscissors':
      characterAction = 'smashes'
      break
    case 'scissorslizard':
      characterAction = 'decapitates'
      break
    case 'lizardpaper':
      characterAction = 'eats'
      break
    case 'paperspock':
      characterAction = 'disapproves'
      break
    case 'spockrock':
      characterAction = 'vaporize'
      break
    case 'rockscissors':
      characterAction = 'crushes'
      break
    //draw
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
    case 'spockspock':
    case 'lizardlizard':
      characterAction = "can't fight"
      result = 'draw'
    break
    default: //lose
      characterAction = "can't fight"
      result = 'loser'
    break
  }
  centerResultDisplay.innerHTML = userChoice+"<br>"+characterAction+"<br>"+computerChoice

  userChoiceDisplay.innerHTML = "User choice: "+userChoice
  computerChoiceDisplay.innerHTML = "Computer choice: "+computerChoice


  if(result === 'winner'){
    resultDisplay.innerHTML ='YOU WIN!'
    resultDisplay.style.color = 'green';
  }
  else if (result === 'loser'){
    resultDisplay.innerHTML ='YOU LOSE!'
    resultDisplay.style.color = 'red';
  }
  else{
    resultDisplay.innerHTML ="IT'S A DRAW"
    resultDisplay.style.color = 'blue';
  }

}