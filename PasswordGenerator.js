const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
const generatedPass1 = document.querySelector(".generatedPass1");
const generatedPass2 = document.querySelector(".generatedPass2");
function generatePassword(length = 15) {
  let password1 = "";
  let password2 = "";
  for (let i = 0; i < length; i++) {
    let randomNumber1 = Math.floor(Math.random() * characters.length);
    let randomNumber2 = Math.floor(Math.random() * characters.length);
    password1 += characters[randomNumber1];
    password2 += characters[randomNumber2];
  }
  generatedPass1.textContent = password1;
  generatedPass2.textContent = password2;
}

function pass1() {
  let password1 = generatedPass1.textContent;

  // Copy the password to the clipboard
  navigator.clipboard.writeText(password1);
  generatedPass1.textContent = "copied to clibooard:";
  //   alert("Copied the password: " + password1);
}
