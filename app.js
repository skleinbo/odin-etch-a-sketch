/* Etch-A-Sketch

   Copyright Stephan Kleinboelting 2021
*/

const canvasColor = `${document.querySelector(".canvas").style.backgroundColor}`

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

function registerPixelEvents(pixels) {
    pixels.forEach(pixel => {
        pixel.addEventListener("mouseover", e => {
            if(e.buttons === 0) // draw only if a mouse button is pressed
                return
            let colormode = document.querySelector("input[name=color]:checked").value
            let color;
            if(colormode === "solid") {
                let colorString = document.querySelector("input[name=solidcolor]").value
                let r = parseInt(colorString.slice(1,3), 16)
                let g = parseInt(colorString.slice(3,5), 16)
                let b = parseInt(colorString.slice(5,7), 16)
                color = `rgb(${r}, ${g}, ${b})`
            }
            else {
                if(pixel.style.backgroundColor != canvasColor)
                    return
                let r = Math.round(Math.random()*255)
                let g = Math.round(Math.random()*255)
                let b = Math.round(Math.random()*255)
                color = `rgb(${r}, ${g}, ${b})`
            }
            pixel.style.backgroundColor = color
        })
    });
}

function setGrid(canvasID, n) {
    const canvas = document.querySelector(`#${canvasID}`);
    canvas.innerHTML = makeGrid(n)
    canvas.style.gridTemplateColumns = "1fr ".repeat(n);
    const pixels = canvas.querySelectorAll(`.pixel`)
    registerPixelEvents(pixels)
    return pixels
}

function clearCanvas(canvas) {
    document.querySelectorAll(`#${canvas}>.pixel`).forEach( pixel => {
        pixel.style.backgroundColor = "#FFF";
    })
}

const n = 32
const canvas = document.querySelector(".canvas");
let pixels = setGrid("canvas", n);

const clearBtn = document.querySelector("button[name=clear]")
const sizeInput = document.querySelector("input[name=size]")
clearBtn.onclick = (e) => {
    setGrid("canvas", sizeInput.value)
    window.preven
}
