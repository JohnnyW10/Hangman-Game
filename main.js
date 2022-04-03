var id = 0;
var turn = 0;
var playerList = [];
var passwordsHolder = 'password';
var displayPassword = []


function takingPassword() {
  document.getElementById('displayPassword').innerHTML = ''
  let password = document.getElementById('passwordValue').value;
  password = password.toUpperCase()
  let inner = ''
  
  for(let i=0; i<password.length; i++){
    if(password.charAt(i) === " ") {
      displayPassword.push(' ')
    } else displayPassword.push('-')
  }

  displayPassword.map(el => inner += el)
  document.getElementById('displayPassword').innerHTML = inner
  document.getElementById('displayDescription').innerHTML = document.getElementById('passwordDescriptionValue').value
  passwordsHolder = password
  console.log(displayPassword)
} 
document.getElementById('commitPasswordButton').addEventListener('click', takingPassword)


function addPlayers() {
  let playersBox= document.getElementById('playersList');
  let playerName = document.getElementById('playerName').value;

  if(playerName !== '') {
    let player = new Object()
    player.name = playerName;
    player.id = id;
    player.pts = 0;

    id++;
    playerList.push(player)

    playersBox.innerHTML += `<div class="players"><p>${player.id}</p><p>${player.name}</p><p>${player.pts}</p></div>` 
  } else {
    alert('You do not enter you name to textbox')
  }
}
document.getElementById('addPlayerBtn').addEventListener('click', addPlayers)

function keyboardDisplay() {
  const alphabet  = ['A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M', 'N', 'Ń', 'P', 'R', 'S', 'Ś', 'T', 'U', 'W', 'Z', 'Ź', 'Ż']
  let keyboard = document.getElementById('keyboard')
  let keyboardBtns = ''

  alphabet.map((el) => {
    keyboardBtns += `<button class="keybordBtns" onclick="game(this.value)" value="${el}">${el}</button>`
  })
  keyboard.innerHTML = keyboardBtns
}

keyboardDisplay()

function game(value) {
  let displayPasswordBox = document.getElementById('displayPassword') 
  let inner = ''
  let whichTurn = document.getElementById('whichTurn')

  for(let i=0; i<passwordsHolder.length; i++){
    if(passwordsHolder[i] === value) {
      displayPassword[i] = value;
    }
  }
  displayPassword.map(el => inner += el)
  displayPasswordBox.innerHTML = inner

  whichTurn.innerHTML = `Player with index ${turn} have move`;
  if(turn < playerList.length) {
    turn++
  } else turn = 0;

  if(inner === passwordsHolder) {
    alert('Wygrałeś!')
  }
}




