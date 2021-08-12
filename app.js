/* Etch-A-Sketch

   Copyright Stephan Kleinboelting 2021
*/

function makeGrid(n) {
    grid = "";
    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
            grid += `
            <div class="pixel" data-row=${i} data-col=${j}></div>
            `
        }
    }
    return grid
}

function setGrid(canvasID, n) {
    const canvas = document.querySelector(`#${canvasID}`);
    canvas.innerHTML = makeGrid(n)
    canvas.style.gridTemplateColumns = "1fr ".repeat(n);
    return canvas.querySelectorAll(`.pixel`)
}

function clearCanvas(canvas) {
    document.querySelectorAll(`#${canvas}>.pixel`).forEach( pixel => {
        pixel.style.backgroundColor = "#FFF";
    })
}

const n = 32
const canvas = document.querySelector(".canvas");
let pixels = setGrid("canvas", n);

pixels.forEach(pixel => {
    pixel.addEventListener("mouseover", e => {
        pixel.style.backgroundColor = "#000"
    })
});
