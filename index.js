const container = document.querySelector(".container");

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
      pixel.style.borderStyle = "solid";
      pixel.style.borderColor = "black";
      pixel.style.flex = "auto";

      pixel.addEventListener('mouseover', (e) => {
        pixel.style.backgroundColor = "grey"; 
      });

      subcontainer.appendChild(pixel);
    }
  }  
}

gridCreator(32,32);
