'use strict';
var uName = prompt(`what's your name?`);
alert(`welcome ${uName} to my web site..`);
alert(`please, answer the next questions by yes/no or y/n`);
var answer1 = prompt(`Is  Mercedes my favorite car company?`).toLowerCase();


//first question about favorite car
if (answer1 === 'y' || answer1 === 'yes') {
    //console.log('your answer is wrong');
    alert('your answer is wrong');
}
else if(answer1 === 'no' || answer1 === 'n') {
    //console.log('your answer is True');
    alert('your answer is True');
}
else{
    //console.log(`you should answer yes/y or no/n, please.`);
    alert(`you should answer yes/y or no/n, please.`);
}


//second question about fav color
answer1 = prompt(`Is blue my favorite color?`).toLowerCase();
if (answer1 === 'y' || answer1 === 'yes') {
    //console.log('your answer is wrong');
    alert('your answer is wrong');
}
else if(answer1 === 'no' || answer1 === 'n') {
    //console.log('your answer is True');
    alert('your answer is True');
}
else{
    //console.log(`you should answer yes/y or no/n, please.`);
    alert(`you should answer yes/y or no/n, please.`);
}

//third question about studying
answer1 = prompt(`Am I studying at Zarqa University?`).toLowerCase();
if (answer1 === 'y' || answer1 === 'yes') {
    //console.log('your answer is True');
    alert('your answer is True');
}
else if(answer1 === 'no' || answer1 === 'n'){
    //console.log('your answer is Wrong');
    alert('your answer is Wrong');
}
else{
    //console.log(`you should answer yes/y or no/n, please.`);
    alert(`you should answer yes/y or no/n, please.`);
}

//forth question about summer
answer1 = prompt(`Do I like the summer?`).toLowerCase();
if (answer1 === 'y' || answer1 === 'yes') {
    //console.log('your answer is Wrong');
    alert('your answer is Wrong');
}
else if(answer1 === 'no' || answer1 === 'n'){
    //console.log('your answer is True');
    alert('your answer is True');
}
else{
    //console.log(`you should answer yes/y or no/n, please.`);
    alert(`you should answer yes/y or no/n, please.`);
}

//fifth question about coding
answer1 = prompt(`Do I love coding`).toLowerCase();
if (answer1 === 'y' || answer1 === 'yes') {
    //console.log('your answer is True');
    alert('your answer is True');
}
else if(answer1 === 'no' || answer1 === 'n'){
   // console.log('your answer is Wrong');
    alert('your answer is Wrong');

}
else{
    //console.log(`you should answer yes/y or no/n, please.`);
    alert(`you should answer yes/y or no/n, please.`);
}



alert(`Thanks ${uName} for your answers, I hope that you have enjoyed with us..`);


