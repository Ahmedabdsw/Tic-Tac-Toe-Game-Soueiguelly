var board = ["id1","id2","id3","id4","id5","id6","id7","id8","id9"];
//var winners = [6,9,12,15,18,24];
var winners = [[1,2,3],[1,4,7], [1,5,9],[2,5,8], [3,6,9], [3,5,7], [4,5,6], [7,8,9], 
[1, 2, 4, 7], [2, 7, 8, 9], [2, 5, 6, 8], [2, 3, 6, 9], [1, 9, 8, 7], [1, 5, 7, 3],
[3, 4, 5, 6], [3, 4, 6, 9], [3, 5, 6, 9], [3, 5, 6, 7], [3, 6, 7, 9], [3, 6, 8, 9], [3, 7, 8, 9], [3, 4, 6, 8, 9],
[4, 7, 8, 9],
[5, 7, 8, 9],
[6, 7, 8, 9],
[1, 2, 4, 5, 9], [1, 3, 6, 9], [1, 3, 6, 8, 9], [1, 3, 4, 7, 8], [1, 4, 5, 9], ];
var playerPic = "";
var place=0;
var counter1 = [];
var counter2 = [];
var timing1 = 0;
var timing2 = 0;
const rouds = 3;
let playersboard = [];

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
  
  gameOrder = TTTlearning(counter1.concat(counter2));
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
 console.log(doc.innerHTML);

if(doc.innerHTML == '<img src="null.png">'){
setPlayersboard();
var b = document.getElementById(board[move_to-1]);
b.innerHTML = playerPic;
place = move_to;
 
switch(player){
  case "<img src='sercle.png'>":
    ln1 =counter1.length;
    counter1[ln1] = place;
    timing1++;
  break;
  case "<img src='croix.png'>":
    ln2 =counter2.length;
    counter2[ln2] = place;
    timing2++;
   
  break;
  }

  //playCouter();
  getWinner();

  /* var d = document.getElementById("time1");
   d.innerHTML = timing1;
   d = document.getElementById("time2");
   d.innerHTML = timing2; */
}
else{
 //computer();
}

} 

function getWinner(){

var bool1 = winners.some(function(arr) {
  return arr.every(function(prop, index) {
    return counter1.sort()[index] === prop
  })
});

var bool2 = winners.some(function(arr) {
  return arr.every(function(prop, index) {
    return counter2.sort()[index] === prop
  })
});

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

/* function playCouter(){
    if(timing1 == 1 || timing2 == 1){
    playerPic = "<img src='null.png'>";
    
	}
} */

function setPlayersboard(){
  length = playersboard.length;  

  if(length >= 9){
  displayWinner('No none wine');
 // history.go();
  }
  else if(place != 0){
    playersboard[length]= place;
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

function TTTlearning(board){
var myNetwork = new Architect.Perceptron(5,2,19,4,2,1)
var trainer = new Trainer(myNetwork)

var trainingSet = [
  {
    input: [0,0,0,0,1,0,1,0,0],//7,5
    output: [.3]
  },
  {
    input: [0,0,0,0,1,0,0,0,1],//9,5
    output: [.3]
  },
  {
    input: [1,0,0,0,1,0,0,0,0],//5,1
    output: [.9]
  },
  {
    input: [1,0,0,0,0,0,0,0,1],//9,1
    output: [.5]
  },
  {
    input: [0,0,0,0,1,0,0,1,0],//8,5
    output: [.2]
  },
  {
    input: [0,0,0,0,0,0,1,1,0],//7,8
    output: [.9]
  },
  {
    input: [0,0,0,0,0,0,0,1,1],//8,9
    output: [.7]
  },
  {
    input: [1,1,0,0,0,0,0,0,0],//1,2
    output: [.3]
  },
  {
    input: [0,1,1,0,0,0,0,0,0],//2,3
    output: [.1]
  },
  {
    input: [1,0,1,0,0,0,0,0,0],//1,3
    output: [.2]
  },
  {
    input: [0,0,0,1,1,0,0,0,0],//4,5
    output: [.6]
  },
  {
    input: [0,0,0,1,0,0,0,0,0],//4,6
    output: [.5]
  },
  {
    input: [0,0,0,0,1,0,0,0,0],//6,5
    output: [.4]
  },
  {
    input: [0,1,0,0,1,0,0,0,0],//2,5
    output: [.8]
  },
  {
    input: [0,1,0,0,0,0,0,1,0],//2,8
    output: [.5]
  },
  {
    input: [0,0,0,0,1,0,0,1,0],//8,5
    output: [.2]
  },
  {
    input: [0,1,0,0,1,0,0,0,0],//2,5
    output: [.8]
  },
  {
    input: [1,0,0,0,0,0,1,0,0],//1,7
    output: [.4]
  },
  {
    input: [1,0,0,1,0,0,0,0,0],//1,4
    output: [.7]
  },
  {
    input: [0,0,0,1,0,0,1,0,0],//7,4
    output: [.1]
  },
  {
    input: [0,0,1,0,0,1,0,0,0],//3,6
    output: [.9]
  },
  {
    input: [0,0,1,0,0,0,0,0,1],//3,9
    output: [.6]
  },
  {
    input: [0,0,0,0,0,1,0,1,0,1],//9,6
    output: [.3]
  },

]

//console.log(trainingSet); 
r = trainer.train(trainingSet,{
	rate: .3,
  iterations: 1031, 
	error: .004998819355993572,
	shuffle: true,
	log: 1000,
	cost: Trainer.cost.MSE
});

if(board.length <2)
return generateRandom(1,9);


var bb = [0,0,0,0,0,0,0,0,0];//board.slice(board.length-2, board.length);
for(var i=9; i<0; i--){
  m = board.shift();
  if(m ==i)
  bb[i]=1;
}


console.log(bb);
out = myNetwork.activate(bb);
c = Math.trunc(out *10)

//console.log(myNetwork.activate([7,8]));
console.log(c +';;');

if(board.includes(c))
TTTlearning(board);


  /* var A = new Layer(9);
  var D = new Layer(9);
  var C = new Layer(9);
  var B = new Layer(9);
  A.project(C, Layer.connectionType.ALL_TO_ALL); // All the neurons in layer A now project a connection to all the neurons in layer B\
  C.project(D, Layer.connectionType.ALL_TO_ALL);
  D.project(B, Layer.connectionType.ALL_TO_ALL);
  var learningRate = 3;
 
    // when A activates [1, 0, 1, 0, 1]
    
    [[1,2,3,5,7,3,5,9,4],[1,4,7,5,7,3,5,9,4], [1,5,9,5,7,3,5,9,4] ,[2,5,8,5,7,3,5,9,4], [3,6,9,5,7,3,5,4,1], [3,5,7,5,7,3,9,4,1], [4,5,6,5,7,3,5,9,1], [7,8,9,5,7,3,5,9,1]].forEach(element => {
      A.activate(element);
      C.activate();
      D.activate();
      B.activate();
    B.propagate(learningRate, [2,5,8,5,7,3,5,9,4]);
  
    });
    // train B to activate [0,0]
    
  A.activate([1,2,3,4,5,6,7,8,9]);
  r = B.activate(); */

  return c;
   
}

function generateRandom(min , max) {
  // find diff
  let difference = max - min;
  // generate random number 
  let rand = Math.random();
  // multiply with difference 
  rand = Math.floor( rand * difference);
  // add with min value 
  rand = rand + min;

  return rand;
}