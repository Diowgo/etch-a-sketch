const squares = document.querySelector("div.squares");
const gridSizeButton = document.querySelector("button.gridSize");

function generateGrid(size) {
    for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const div = document.createElement("div");
                div.classList.add("row-" + i);
                div.classList.add("column-" + j);

                const heightAndWidth = returnWidthAndHeight(size);
                setWidthAndHeight(div, heightAndWidth);

                squares.appendChild(div);
            }
        }
}

function deleteGrid() {
    squares.innerHTML = "";
}

function setWidthAndHeight(element, value) {
    element.style.width = value;
    element.style.height = value;
}

function returnWidthAndHeight(size) {
    return 1000/size + "px";
}



function changeBackgroundColor(element) {
    element.style.backgroundColor = "#000";
}

squares.addEventListener("mouseover", (event) => {
    const element = event.target;
    if (element.className != "squares") {
        changeBackgroundColor(element);
    }
})

gridSizeButton.addEventListener("click", (event) => {
    deleteGrid();
    generateGrid(parseInt(prompt("Grid size")));
})