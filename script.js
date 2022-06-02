const canvas = document.querySelector(".canvas");





for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add(`row-${i + 1}`);
    row.style.cssText = "flex-grow: 1; display: flex; border: 1px solid red";
    for (let j = 0; j < 16; j++) {
        const column = document.createElement("div");
        column.classList.add(`column-${j + 1}`);
        column.style.cssText = "flex-grow: 1; border: 1px solid red";
        row.appendChild(column);
    }
    canvas.appendChild(row);
}

