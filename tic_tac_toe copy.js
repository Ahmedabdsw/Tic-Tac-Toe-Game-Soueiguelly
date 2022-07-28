var board = ["id1","id2","id3","id4","id5","id6","id7","id8","id9"];
var winners = [6,9,12,15,18,24];
var playerPic = "";
var place=0;
var counter1 = 0;
var counter2 = 0;
var timing1 = 0;
var timing2 = 0;
const rouds = 3;
let playersboard = [];

function setPlayer(p){
 switch(p){
  case '1':
   playerPic = "<img src='sercle.jpg'>";
  break;
  case '2':
   playerPic =  "<img src='croix.jpg'>";
  break;
  }
 }
 
function ToPlay(player,move_to){
var b = document.getElementById(board[move_to-1]);
b.innerHTML = playerPic;
place = move_to;

switch(player){
  case "<img src='sercle.jpg'>":
    counter1 = counter1 + place;
   timing1++;
  break;
  case "<img src='croix.jpg'>":
    counter2 = counter2 + place;
   timing2++;
   
  break;
  }

  var d = document.getElementById("time1");
   d.innerHTML = timing1;
   d = document.getElementById("time2");
   d.innerHTML = timing2;
   stopPlayer();
   playCouter();
   getWinner(counter1);
   getWinner(counter2);
 
} 

function getWinner(c){
  if( timing1 >= 3 && winners.includes(counter1)){
   var e = document.getElementById("player1");
   e.innerHTML = playerPic + "<br><h3>You Win</h3>";
}
  else if( timing2 >= 3 && winners.includes(counter2)){
  var f = document.getElementById("player2");
  f.innerHTML = playerPic + "<br><h3>You Win</h3>";
}
}

function playCouter(){
    if(timing1 == 1 || timing2 == 1){
    playerPic = "<img src='null.jpg'>";
    
	}
}

function stopPlayer(){
  length = playersboard.length;
   if( timing1<3){
   playersboard[length]= place;
   
   }
  if( timing1<3){
  playersboard[length]= place;
 
  }
}
