'use strict';
var score=0;
var uName = prompt('what\'s your name?');
alert(`welcome ${uName} to my web site..`);
alert('please, answer the next questions by yes/no or y/n');

var answer1 = '';

//first question about favorite car
function carQuestion (){

  answer1 = prompt('Is  Mercedes my favorite car company?').toLowerCase();
  if (answer1 === 'y' || answer1 === 'yes') {
    alert('your answer is wrong');
  }
  else if (answer1 === 'no' || answer1 === 'n') {
    alert('your answer is True');
    score++;
  }
  else {
    alert('you should answer yes/y or no/n, please.');
  }

}
carQuestion ( );


//second question about fav color
answer1 = prompt('Is blue my favorite color?').toLowerCase();

function colorQuestion (answer1){
  if (answer1 === 'y' || answer1 === 'yes') {
    alert('your answer is wrong');
  }
  else if (answer1 === 'no' || answer1 === 'n') {
    alert('your answer is True');
    score++;
  }
  else {
    alert('you should answer yes/y or no/n, please.');
  }
}
colorQuestion (answer1);

//third question about studying
function uniQuestion (){
  answer1 = prompt('Am I studying at Zarqa University?').toLowerCase();
  if (answer1 === 'y' || answer1 === 'yes') {
    alert('your answer is True');
    score++;
  }
  else if (answer1 === 'no' || answer1 === 'n') {
    alert('your answer is Wrong');
  }
  else {
    alert('you should answer yes/y or no/n, please.');
  }

}
uniQuestion ();

//forth question about summer
answer1 = prompt('Do I like the summer?').toLowerCase();
function summerQuestion ( answer1) {
  if (answer1 === 'y' || answer1 === 'yes') {
    alert('your answer is Wrong');
  }
  else if (answer1 === 'no' || answer1 === 'n') {
    alert('your answer is True');
    score++;
  }
  else {
    alert('you should answer yes/y or no/n, please.');
  }
}
summerQuestion (answer1);


//fifth question about coding
function codingQuestion (){
  answer1 = prompt('Do I love coding').toLowerCase();
  if (answer1 === 'y' || answer1 === 'yes') {
    alert('your answer is True');
    score++;
  }
  else if (answer1 === 'no' || answer1 === 'n') {
    alert('your answer is Wrong');
  }
  else {
    alert('you should answer yes/y or no/n, please.');
  }
}
codingQuestion ();


//6th question about guessing a number: 4 attempt to user.
function guessNumber (){
  alert('let\'s play another game, guessing a number game, Good luck');
  let number =22;
  for(let i=0; i<4 ; i++){
    var answer = Number(prompt(`guess anumber between 0 and 50, you have ${4-i} attempts: `));
    if(!answer){ // for check taht the user enter a number.
      alert('you should enter a number please.');
      i--; // for keep the number of real attempts is four.
    }else if(answer ===number){
      alert('great, it\'s true.'); //break out of loop if the answer is true.
      score++;
      break;
    }
    else{
      if(i===3){ //for last false attempt, let the user know that he lost.
        alert('Unfortunatly, you don\'t have another chances, game over!');
      }
      //to calculate if the answer is greater or lower the number
      else if ((answer - number)>10 ){
        alert('too high');
      }
      else if ((answer - number)>5){
        alert('higher than the number');
      }
      else if ((answer - number)<5 && (answer - number)>0 ){
        alert('higher than the number, but you are so close');
      }
      else if(Math.abs((answer - number))>10){ //take the absolute value of the result.
        alert('too low');
      }
      else if(Math.abs((answer - number))>5){
        alert('lower than the number');
      }
      else if( Math.abs((answer - number))<5 && Math.abs((answer - number))>0 ){
        alert('lower than the number, but you are so close');
      }
    }
  }
}
guessNumber ();

//7th question about choose a color from array:
function guessColor (){
  const colorArr=['red','green','blue','yellow','gray','white','brown','skyBlue','black','orange','purple','pink','maroon','gold','bronze','silver'];
  alert('One last game, you have 6 attempts to choose the correct favorite color from list of colors');

  for(let i=0 ; i < 6 ; i++ ){
    var answer = prompt(`you have ${6-i} attempts: \n select a color from the list.\n which one is my favorite color?\n ${colorArr.join(' - ')}`).toLowerCase();
    if(answer=== colorArr[5]){
      alert('great, it\'s true, you won');
      score++;
      break;
    }
  }
}
guessColor();

alert(`Thanks ${uName} for your answers, your score is ${score}.\n I hope that you have enjoyed with us..`);


