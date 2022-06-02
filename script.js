const canvas = document.querySelector(".canvas");
const clearBtn = document.querySelector(".clear-canvas");
const setGridBtn = document.querySelector(".set-grid");
function createCanvas(gridNum) {

    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
    }
    for (let i = 0; i < gridNum; i++) {
        const row = document.createElement("div");
        row.classList.add(`row-${i + 1}`);
        row.style.cssText = "flex-grow: 1; display: flex;";

        for (let j = 0; j < gridNum; j++) {
            const column = document.createElement("div");
            column.classList.add(`column-${j + 1}`);
            column.style.cssText = "flex-grow: 1;";
            column.onmouseover = () => {
                column.style.backgroundColor = "black";
            };
            row.appendChild(column);
        }
        canvas.appendChild(row);
    }

}

let canvasSize = 16;

createCanvas(canvasSize);
if (!clearBtn) console.log("not dound");

clearBtn.addEventListener("click", () => {
    createCanvas(canvasSize);
    console.log("clear");
});

setGridBtn.addEventListener("click", () => {
    let newGridSize = -1;
    while (newGridSize < 1 || newGridSize > 100) {
        newGridSize = prompt("Please enter the grid size (1-100)");

    }
    canvasSize = newGridSize;
    createCanvas(canvasSize);
})

