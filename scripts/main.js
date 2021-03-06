let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/test-image2.jpg') {
    myImage.setAttribute('src','images/test-image.jpg');
  } else {
    myImage.setAttribute('src','images/test-image2.jpg');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Ruby is rad, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Ruby is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}