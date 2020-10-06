'use strict';
var uName = prompt('what\'s your name?');
alert(`welcome ${uName} to my web site..`);
alert('please, answer the next questions by yes/no or y/n');
var answer1 = prompt('Is  Mercedes my favorite car company?').toLowerCase();


//first question about favorite car
if (answer1 === 'y' || answer1 === 'yes') {
  //console.log('your answer is wrong');
  alert('your answer is wrong');
}
else if (answer1 === 'no' || answer1 === 'n') {
  //console.log('your answer is True');
  alert('your answer is True');
}
else {
  //console.log(`you should answer yes/y or no/n, please.`);
  alert('you should answer yes/y or no/n, please.');
}


//second question about fav color
answer1 = prompt('Is blue my favorite color?').toLowerCase();
if (answer1 === 'y' || answer1 === 'yes') {
  //console.log('your answer is wrong');
  alert('your answer is wrong');
}
else if (answer1 === 'no' || answer1 === 'n') {
  //console.log('your answer is True');
  alert('your answer is True');
}
else {
  //console.log(`you should answer yes/y or no/n, please.`);
  alert('you should answer yes/y or no/n, please.');
}

//third question about studying
answer1 = prompt('Am I studying at Zarqa University?').toLowerCase();
if (answer1 === 'y' || answer1 === 'yes') {
  //console.log('your answer is True');
  alert('your answer is True');
}
else if (answer1 === 'no' || answer1 === 'n') {
  //console.log('your answer is Wrong');
  alert('your answer is Wrong');
}
else {
  //console.log(`you should answer yes/y or no/n, please.`);
  alert('you should answer yes/y or no/n, please.');
}

//forth question about summer
answer1 = prompt('Do I like the summer?').toLowerCase();
if (answer1 === 'y' || answer1 === 'yes') {
  //console.log('your answer is Wrong');
  alert('your answer is Wrong');
}
else if (answer1 === 'no' || answer1 === 'n') {
  //console.log('your answer is True');
  alert('your answer is True');
}
else {
  //console.log(`you should answer yes/y or no/n, please.`);
  alert('you should answer yes/y or no/n, please.');
}

//fifth question about coding
answer1 = prompt('Do I love coding').toLowerCase();
if (answer1 === 'y' || answer1 === 'yes') {
  //console.log('your answer is True');
  alert('your answer is True');
}
else if (answer1 === 'no' || answer1 === 'n') {
  // console.log('your answer is Wrong');
  alert('your answer is Wrong');

}
else {
  //console.log(`you should answer yes/y or no/n, please.`);
  alert('you should answer yes/y or no/n, please.');
}



//6th question about guessing a number: 4 attempt to user.
alert('let\'s play another game, guessing a number game, Good luck');
let number =22;
for(let i=0; i<4 ; i++){
  var answer = Number(prompt(`guess anumber between 0 and 50, you have ${4-i} attempts: `));
  if(!answer){ // for check taht the user enter a number.
    alert('you should enter a number please.');
    i--; // for keep the number of real attempts is four.
  }else if(answer ===number){
    alert('great, it\'s true.'); //break out of loop if the answer is true.
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


alert(`Thanks ${uName} for your answers, I hope that you have enjoyed with us..`);


