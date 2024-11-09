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
                changeBackgroundColor(div);
                squares.appendChild(div);
            }
        }
}

function reduceOpacity(element) {
    if (element.style.opacity == "") {
        element.style.opacity = 1;
    }

    if (element.style.opacity > 0) {
        element.style.opacity -= 0.25;
    }

}

function calculateRandomHex() {
    const number = Math.floor(Math.random()*256).toString(16);
    return number
}

function calculateRandomColor() {
    const randomHex = '#' + calculateRandomHex() + calculateRandomHex() + calculateRandomHex();
    
    return randomHex
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
    
    const bgColor = calculateRandomColor();
    element.style.backgroundColor = bgColor
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

squares.addEventListener("mousedown", (event) => {
    const element = event.target;
    if (element.className != "squares") {
        reduceOpacity(element);
    }
        
})

