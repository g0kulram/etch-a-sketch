const container = document.querySelector("#container");

let sideSize = 16;

//setting grid size in html
const sizePara = document.querySelector("#control > p");
sizePara.textContent = `Grid Size: ${sideSize}`;

for (let index = 0; index < sideSize ** 2; index++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.classList.add(`${index}`);

  // square.textContent = `${index+1}`
  container.appendChild(square);
}

//event listener to highlight the squares
container.addEventListener("mouseover", (event) => {
  const enteredSquare = event.target;
  if (enteredSquare.classList.contains("square")) {
    enteredSquare.classList.add("hightlight");
  }
});
