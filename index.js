const container = document.querySelector(".container");
const gridButton = document.querySelector(".grid-button");
const shadeButton = document.querySelector(".shade-button");
const toggleGridButton = document.querySelector(".grid-toggle-button");
const clearButton = document.querySelector(".clear-button");

let gridDim = 16;
let shadeMode = false;
let gridOn = true;

const gridCreator = (width, height) => {
  container.innerHTML = "";

  // Populate the grid
  for (let i=0; i<width; i++) {
    let subcontainer = document.createElement("div");
    subcontainer.classList.add(`col-${i}`);
    subcontainer.style.display = "flex";
    subcontainer.style.flexDirection = "column";
    subcontainer.style.flex = "auto";
    container.appendChild(subcontainer);

    // Create the pixels
    for (let j=0; j<height; j++) {
      let pixel = document.createElement("div");
      pixel.classList.add(`col-${i}`);
      pixel.classList.add(`row-${j}`);

      if (gridOn) {
        pixel.style.borderLeftStyle = "solid";
        pixel.style.borderTopStyle = "solid";
      } else {
        if (i === 0) pixel.style.borderLeftStyle = "solid";
        if (j === 0) pixel.style.borderTopStyle = "solid";
      }

      if (i === width - 1) pixel.style.borderRightStyle = "solid";
      if (j === height - 1) pixel.style.borderBottomStyle = "solid";

      pixel.style.borderColor = "black";
      pixel.style.flex = "auto";
      pixel.dataset.depth = 0;

      pixel.addEventListener('mouseenter', (e) => {
        if (shadeMode && pixel.dataset.depth < 10) {
          let pixelDepth = Number(pixel.dataset.depth) + 1;
          let intensity = 255 - 25*pixelDepth;

          pixel.dataset.depth = pixelDepth;

          console.log(pixelDepth);
          
          pixel.style.backgroundColor = `rgb(${intensity},${intensity},${intensity})`; 
        } else if (!shadeMode) {
          pixel.style.backgroundColor = "grey";
        }
      });

      subcontainer.appendChild(pixel);
    }
  }  
}

// Set grid button callback
gridButton.onclick = () => {
  let newGridSize = Number(prompt("New Grid Size (1 to 100): "));
  gridDim = newGridSize;
  
  if (newGridSize > 0 && newGridSize < 101) {
    gridCreator(gridDim, gridDim);
  } else {
    alert("Please enter a grid size between 1 and 100"); 
  }
}

// Set shade button callback
shadeButton.onclick = () => {
  shadeMode = !shadeMode;
  if (shadeMode) {
    shadeButton.textContent = "Classic Mode";
  } else {
    shadeButton.textContent = "Shade Mode";
  }

  // Recreate the grid
  gridCreator(gridDim, gridDim);
}

toggleGridButton.onclick = () => {
  gridOn = !gridOn;
  // gridCreator(gridDim, gridDim);

  // Get rid of some edges
  for (let i=0; i<gridDim; i++) {
    for (let j=0; j<gridDim; j++) {
      let pixel = document.querySelectorAll(`.col-${i}.row-${j}`)[0];

      if (gridOn) {
        pixel.style.borderLeftStyle = "solid";
        pixel.style.borderTopStyle = "solid";
      } else {
        pixel.style.borderLeftStyle = "none";
        pixel.style.borderTopStyle = "none";
        if (i === 0) pixel.style.borderLeftStyle = "solid";
        if (j === 0) pixel.style.borderTopStyle = "solid";
      }
    }
  }
}

// Set clear button callback
clearButton.onclick = () => {
  gridCreator(gridDim, gridDim);
}

// Generate grid
gridCreator(gridDim, gridDim);

