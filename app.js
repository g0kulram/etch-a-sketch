const container = document.querySelector("#container");
const CONTAINER_SIZE = 500;

let sideSize = 16;

//setting grid size in html
const sizePara = document.querySelector("#control > p");
sizePara.textContent = `Grid Size: ${sideSize}`;

const resizeButton = document.querySelector('#control > button');
resizeButton.addEventListener('click', () => {
    const userInput = parseInt(prompt('Set grid size', String(sideSize)));
    if (!isNaN(userInput)) {
        if (userInput <= 0) {
            sideSize = 1;
        } else if (sideSize > 100) {
            sideSize = 100;
        } else {
            sideSize = userInput
        }
        sizePara.textContent = `Grid Size: ${sideSize}`;
        createGrid();
    }
});

createGrid();

//event listener to highlight the squares
container.addEventListener("mouseover", (event) => {
    const enteredSquare = event.target;
    if (enteredSquare.classList.contains("square")) {
        enteredSquare.classList.add("hightlight");
    }
});

function createGrid() {
    container.replaceChildren();
    const squareSize = CONTAINER_SIZE / sideSize;
    for (let index = 0; index < sideSize ** 2; index++) {
        const square = document.createElement("div");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.classList.add("square");
        square.classList.add(`${index}`);

        // square.textContent = `${index+1}`
        container.appendChild(square);
    }
}
