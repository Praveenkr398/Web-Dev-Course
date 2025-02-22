let passwordBox = document.querySelector("#password");
let GenBtn = document.querySelector("#btn");
let CopyBtn = document.querySelector("#copyImg");
let show1 = document.querySelector(".show1");
let show2 = document.querySelector(".show2");
let show3 = document.querySelector(".show3");
let UseNum = document.querySelector("#Use");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%&*";
const allChars = upperCase + lowerCase + number + symbol;


// making: random password function
function creatPassword() {
  let Use = UseNum.value;
  const length = Use;
  let password = "";

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  console.log(password);
  passwordBox.value = password;

  // making: voice of password
  
  let sp = new SpeechSynthesisUtterance(`here is your password: ${password}`)
  sp.rate = .7
  speechSynthesis.speak(sp)
  console.log(sp)

  // background animation change text acc password
  show1.innerHTML = password;
  show2.innerHTML = password;
  show3.innerHTML = password;

}

GenBtn.addEventListener("click", creatPassword);

//  create copy button function
function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}

CopyBtn.addEventListener("click", copyPassword);

// making voice speech synthesis
function SetVoice() {
  let speech = new SpeechSynthesisUtterance();
  let voice =
    "welcome to Random Password Generator. Just click on Generate button, it will create a random password with length of 8 character, if you want to change the length, then click here, and increase of decrease the number you want.";
  speech.text = voice;
  speech.lang = "hi-GB";
 window.speechSynthesis.speak(speech);

  setTimeout(() => {
    UseNum.style.transition = 'all 3s'
    GenBtn.style.backgroundColor = "red";
    passwordBox.value = "sZ$3dK49";
    passwordBox.style.color = 'gray'
    
  }, 4000);
  setTimeout(() => {
    UseNum.style.transition = 'all 3s'
    GenBtn.style.backgroundColor = "blue";
    passwordBox.style.color = 'black'
  }, 7000);
  setTimeout(() => {
    UseNum.style.transition = 'all 1s'
    UseNum.style.backgroundColor = "red";
    passwordBox.value = 'sK9%dE94#0d';
  }, 10000);
  setTimeout(() => {
    UseNum.style.transition = 'all 3s'
    UseNum.style.backgroundColor = "white";
    passwordBox.value = '';
  }, 13000);}

window.addEventListener("load", SetVoice);
