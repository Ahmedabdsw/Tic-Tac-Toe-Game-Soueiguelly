var board = ["id1","id2","id3","id4","id5","id6","id7","id8","id9"];
//var winners = [6,9,12,15,18,24];
var playerPic = "";
var place=0;
let playersboard = [0,0,0,0,0,0,0,0,0];
var bool1 = false;
var bool2 = false;

function setPlayer(p){
 switch(p){
  case 1:
   playerPic = "<img src='sercle.png'>";
  break;
  case 2:
   playerPic =  "<img src='croix.png'>";
  break;
  }
 }
 
 function computer(){
  
  gameOrder = grtPrefectPosition(playersboard);
  setPlayer(1);
  ToPlay(playerPic,gameOrder)
  /* [5,7,3,5,2,9,4,8,1,5,2,3,7,9,4,9,5,6,8]; [1,5,2,3,7,9,4,6,8];
 for (e of gameOrder){
  var bool = playersboard.includes(e);
  if(!bool){
  playSound('action2.mp3');
  ToPlay(playerPic,e);
  break;
 }
 } */
 }

 function Gamer(c){
  setPlayer(2);
  ToPlay(playerPic,c);
  playSound('action1.mp3');
  computer();
 }

function ToPlay(player,move_to){
doc = document.getElementById(board[move_to-1]);
checkMove = playersboard[move_to-1];
console.log(checkMove);
if(checkMove == 0){
 if(doc.innerHTML == '<img src="null.png">'){

  var b = document.getElementById(board[move_to-1]);
b.innerHTML = playerPic;

place = move_to; 
length = playersboard.length;  

switch(player){
  case "<img src='sercle.png'>":
    playersboard[place-1] = 1;
  break;
  case "<img src='croix.png'>":
   playersboard[place-1] = 2;   
  break;
  }

}
getWinner();
}
} 

function getWinner(){

if(playersboard[0] == 1 && playersboard[1] == 1 && playersboard[2] == 1  && !bool2)
 bool1 = true
 if(playersboard[3] == 1 && playersboard[4] == 1 && playersboard[5] == 1  && !bool2)
 bool1 = true
 if(playersboard[6] == 1 && playersboard[7] == 1 && playersboard[8] == 1  && !bool2)
 bool1 = true
 if(playersboard[0] == 1 && playersboard[3] == 1 && playersboard[6] == 1  && !bool2)
 bool1 = true
 if(playersboard[1] == 1 && playersboard[4] == 1 && playersboard[7] == 1  && !bool2)
 bool1 = true
 if(playersboard[2] == 1 && playersboard[5] == 1 && playersboard[8] == 1  && !bool2)
 bool1 = true
 if(playersboard[0] == 1 && playersboard[4] == 1 && playersboard[8] == 1  && !bool2)
 bool1 = true
 if(playersboard[2] == 1 && playersboard[4] == 1 && playersboard[6] == 1  && !bool2)
 bool1 = true

 if(playersboard[0] == 2 && playersboard[1] == 2 && playersboard[2] == 2  )
 bool2 = true
 if(playersboard[3] == 2 && playersboard[4] == 2 && playersboard[5] == 2  )
 bool2 = true
 if(playersboard[6] == 2 && playersboard[7] == 2 && playersboard[8] == 2  )
 bool2 = true
 if(playersboard[0] == 2 && playersboard[3] == 2 && playersboard[6] == 2  )
 bool2 = true
 if(playersboard[1] == 2 && playersboard[4] == 2 && playersboard[7] == 2  )
 bool2 = true
 if(playersboard[2] == 2 && playersboard[5] == 2 && playersboard[8] == 2  )
 bool2 = true
 if(playersboard[0] == 2 && playersboard[4] == 2 && playersboard[8] == 2  )
 bool2 = true
 if(playersboard[2] == 2 && playersboard[4] == 2 && playersboard[6] == 2  )
 bool2 = true


if(bool1){
  displayWinner('You lose');
  //alert('you winner');
  playSound('winner.mp3');
  setTimeout(() => {  history.go(); }, 5000);  
  
}
 else if(bool2){
  displayWinner('You win'); 
 //alert('you lose');
 playSound('winner.mp3');
 setTimeout(() => {  history.go(); }, 5000);
}

}

function playSound(sound){
  var audio = new Audio(sound);
  audio.play();
}

function displayWinner(message){
  var doc = document.getElementById("winner");
  doc.style.visibility= 'visible';
  //doc.innerHTML = "<center><h1>"+message+"</h1></center>";
  console.log(message);
    if(message == 'You win')
      doc.innerHTML = "<h1>"+message+" !!!</h1>";
    else if(message == 'You lose')
      doc.innerHTML = "<h1  style='color:red;'>"+message+" !</h1>";
    else
    doc.innerHTML = "<h1  style='color:red;'>"+message+" !</h1>";
}

function grtPrefectPosition(board){
c = 1;

/* 
  if(board[1] != 0 && board[1] != 1 && board[1] != 2)
  {
    c = 1;
  }
  else if(board[2] != 0 && board[2] != 1 && board[2] != 2)
  {
    c = 2;
  }

  else if(board[4] != 0 && board[4] != 1 && board[4] != 2)
  {
    c = 4;
  }

  else if(board[5] != 0 && board[5] != 1 && board[5] != 2)
  {
    c = 5;
  }

  else if(board[6] != 0 && board[6] != 1 && board[6] != 2)
  {
    c = 6;
  }

  else if(board[7] != 0 && board[7] != 1 && board[7] != 2)
  {
    c = 7;
  }

  else if(board[8] != 0 && board[8] != 1 && board[8] != 2)
  {
    c = 8;
  }

  else if(board[9] != 0 && board[9] != 1 && board[9] != 2)
  {
    c = 9;
  } */

  for(i=9; i>=0; i--){
 
    if(board[i] == 0  && board[i] <= 9)
    {
      c = i+1;
      
  console.log(board[i]+';'+board[i+1]+';'+board[i+2]);
    }
    if(board[i] == 1 && board[i+1] != 1 == 1 && board[i+1] != 2  && board[i+1] != 2 && board[i+1] <= 9)
  {
    c = i+2;
  }
 

  } 

console.log(board);
console.log(c +';;');
return c;
   
}
