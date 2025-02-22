const btns = document.querySelectorAll(".btn");
const inputBox = document.querySelector("#passwordBox");

let string = "";

btns.forEach((element) => {
  element.addEventListener("click", (b) => {
   
    console.log("clicked", b.target.innerText);
    if (b.target.innerText == "=") {
      string = String(eval(string));
      inputBox.value = string;
      console.log('value', inputBox.value)
    }
    else if (inputBox.value === 0) { 
      inputBox.value = "hey"; }
     else if (b.target.innerText == "AC") {
      string = "";
      inputBox.value = string;
    }
     else if (b.target.innerText == "⌫") {
      string = string.substring(0, string.length - 1);
      console.log(string);
      inputBox.value = string;
    }
     else if (b.target.id == "plusMinus") {
      string = String(-eval(string));
      inputBox.value = string;
    }
     else {
      string += b.target.innerText;
      inputBox.value = string;
    }
  });
});
