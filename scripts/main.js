/*
var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello world!';
*/


/*
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/54fbb2fb43166d2287f64f7c472309f79152d251.jpg.gif') {
      myImage.setAttribute ('src','images/firefox2.jpg');
    } else {
      myImage.setAttribute ('src','images/54fbb2fb43166d2287f64f7c472309f79152d251.jpg.gif');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
