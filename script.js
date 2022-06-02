const canvas = document.querySelector(".canvas");


function createCanvas(gridNum) {

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

createCanvas(64);

