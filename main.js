var id = 0;
var turn = 0;
var playerList = [];
var passwordsHolder = 'password';
var displayPassword = []


function takingPassword() {
  let displayPass = document.getElementById('displayPassword').innerHTML = ''
  displayPassword = []
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
} 
document.getElementById('commitPasswordButton').addEventListener('click', takingPassword)


function addPlayers() {
  let playersBox= document.getElementById('playersList');
  let playerName = document.getElementById('playerName').value;

  if(playerName !== '') {
    if(playerList.length === 0) {
      let player = new Object()
          player.name = playerName;
          player.id = id;
          player.pts = 0;
          id++;
          playerList.push(player)
  
          playersBox.innerHTML += `<div class="players"><p>${player.id}</p><p>${player.name}</p><p>${player.pts}</p></div>` 
    } else {
      playerList.forEach(player => {
        if(playerName !== player.name){
          let player = new Object()
          player.name = playerName;
          player.id = id;
          player.pts = 0;
          id++;
          playerList.push(player)
  
          playersBox.innerHTML += `<div class="players"><p>${player.id}</p><p>${player.name}</p><p>${player.pts}</p></div>` 
        } else alert("Person with that name already exist")
      });
    }
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

  for(let i=0; i<passwordsHolder.length; i++){
    if(passwordsHolder[i] === value) {
      displayPassword[i] = value;
    }
  }
  displayPassword.map(el => inner += el)
  displayPasswordBox.innerHTML = inner

  if(turn < playerList.length) {
    turn++
    givePoints()
  } else turn = 0;

  if(inner === passwordsHolder) {
    alert('Wygrałeś!')
  }
  console.log("Work")
}

function givePoints() {
  let whichTurn = document.getElementById('whichTurn')

  if(turn < playerList.length) {
    whichTurn.innerHTML = `Player with index ${turn} have move`;
  } else {
    turn = 0;
    whichTurn.innerHTML = `Player with index ${turn} have move`;
  }
}
givePoints ()


