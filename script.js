const squares = document.querySelector("div.squares");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const div = document.createElement("div");
        div.classList.add("row-" + i);
        div.classList.add("column-" + j);
        squares.appendChild(div);
    }
}