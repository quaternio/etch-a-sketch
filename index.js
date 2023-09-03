const container = document.querySelector(".container");
const gridButton = document.querySelector(".grid-button");
const clearButton = document.querySelector(".clear-button");
let gridDim = 16;

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

      pixel.style.borderLeftStyle = "solid";
      pixel.style.borderTopStyle = "solid";
      if (i === width - 1) pixel.style.borderRightStyle = "solid";
      if (j === height - 1) pixel.style.borderBottomStyle = "solid";

      pixel.style.borderColor = "black";
      pixel.style.flex = "auto";

      pixel.addEventListener('mouseenter', (e) => {
        pixel.style.backgroundColor = "grey"; 
        console.log(`Entered pixel ${j}, ${i}`);
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

// Set clear button callback
clearButton.onclick = () => {
  gridCreator(gridDim, gridDim);
}

// Generate grid
gridCreator(gridDim, gridDim);
