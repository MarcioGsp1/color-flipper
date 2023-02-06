//Generate hex color code
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

//Copy hex color code

const copyButton = document.querySelector("#copyButton");
const copyTarget = document.querySelector(".color");

copyButton.addEventListener("click", function () {
  const textToCopy = copyTarget.innerText;

  
  const textarea = document.createElement("textarea");
  textarea.value = textToCopy;
  document.body.appendChild(textarea);
  textarea.select();

  document.execCommand("copy");
  document.body.removeChild(textarea);

  alert("Texto copiado!");
});
