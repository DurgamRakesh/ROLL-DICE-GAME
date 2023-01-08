/*taking player0,player1 and storing in a variable*/
var player0_name  = document.getElementById('name-0');
var player1_name  = document.getElementById('name-1');

/*set name with prompt box for player0,player1*/
var player0 = prompt('Enter player 1 Name:');
var player1 = prompt('Enter player 2 Name:');

console.log(player0);
console.log(player1);

var x;
var prescore;
var ttscore;
var dice;
var game;

playgame();

function playgame(){

  /*setting all values are 0*/
  prescore = 0;
  ttscore = [0,0];
  x = 0;
  game = true;

  /* condition for if prompt is empty it will take player1 and player2 name automatically */
  if(player0 == null){
    player0_name.textContent = 'Player 1'
  }
  else{
    player0_name.textContent = player0
  }
  
  if(player1 == null){
    player1_name.textContent = 'Player 2';
  }
  else{
    player1_name.textContent = player1
  }

  /* setting starting values are 0*/
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.remove('active');

}

/* function for nextplayer*/
function nextPlayer(){
  prescore = 0;
  if(x == 0){
    x = 1;
  }else{
    x = 0;
  }
  
  /* setting starting values are 0*/
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display = 'none';

}

/* roll-button variable taking and function */
var btnroll = document.querySelector('.btn-roll');
btnroll.addEventListener('click',()=>{
  if(game){
    /* generating randaom numbers from 1 to 6 */
    dice = Math.floor(Math.random()*6)+1;
    var diceimg = document.querySelector('.dice');
    diceimg.style.display = 'block';

    /* generating image with that particular number from 1 to 6 */
    diceimg.src = `dice-${dice}.png`;
    if(dice != 1){
      prescore = prescore + dice;
      document.querySelector(`#current-${x}`).textContent = prescore;
    }
    else{
      nextPlayer();
    }
  }
});

/* taking btn-hold button and function */
var btnhold = document.querySelector('.btn-hold');
btnhold.addEventListener('click', () => {
  if(game){
    ttscore[x] = ttscore[x] + prescore;
    document.querySelector(`#score-${x}`).textContent = ttscore[x];
  }

  /* creating winning score variable and setting winning score condition */
  var winningScore;
  /* setting winning score with input value */
  var input = document.querySelector('#winningScore');
  if(input.value) {
    winningScore = input.value;
  } else {
    winningScore = 50;
  }

  /* if total score of player is >= winning score then ,he is winner */
  if(ttscore[x] >= winningScore){
    document.querySelector(`#name-${x}`).textContent = `Winner!!!`;
    document.querySelector(`#name-${x}`).style.fontWeight = 'bold'
    document.querySelector('.dice').style.display = 'none';
    document.querySelector(`.player-${x}-panel`).classList.add('winner');
    document.querySelector(`.player-${x}-panel`).classList.remove('active');
  }
  else{
    nextPlayer();
  }
});

/* taking btn-new and start game again */
var newbtn = document.querySelector('.btn-new');
newbtn.addEventListener('click' ,()=>{
  window.location.reload() //this in-bulit function reload the whole document of webpage
})
