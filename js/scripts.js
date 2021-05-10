const optionSelector = document.querySelectorAll("option");
const text = document.querySelector("p");

function generalLetter() {
  let letter = "";
  let alphavit = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0, j = 1; i < 5; i++, j++) {
    letter = alphavit.charAt(Math.floor(Math.random() * alphavit.length));
    alphavit = alphavit.replace(letter, "");
    optionSelector[j].innerHTML = letter;
    letter = "";
  }
}
generalLetter();

function renderResult() {
  const letterOptions = document.getElementById("letterSelector").options;
  const selectedLetter = document.getElementById("letterSelector")
    .selectedIndex;
  const selectedLetterText = letterOptions[selectedLetter].text;
  text.innerText = " ";
  let counter = 1;
  fetch("./js/list.json")
    .then((response) => response.json())
    .then(function (getJson) {
      const obj = getJson;
      if (selectedLetterText === "Choose") {
        text.innerText = "Choose a letter";
      } else {
        for (let i = 0; i < obj.length; i++) {
          let nameFirstLetter = obj[i].name.charAt(0);
          if (selectedLetterText === nameFirstLetter) {
            text.innerText += `${counter}. ${obj[i].name} \n`;
            ++counter;
          }
        }
        if (counter === 1) {
          text.innerText = "Ops....,no matches(((! Please,try again!";
        }
      }
    });
}
