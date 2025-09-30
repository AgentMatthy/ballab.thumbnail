import emailjs from '@emailjs/browser';

const wrapper = document.getElementById("tiles");

const createTile = index => {
  const tile = document.createElement("div");
  
  tile.classList.add("tile");
  
  return tile;
}

const createTiles = quantity => {
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper.appendChild(createTile(index));
  });
}

const createGrid = () => {
  wrapper.innerHTML = "";
  
  const size = 50;
  
  columns = Math.floor(window.innerWidth / size);
  rows = Math.floor(window.innerHeight / size);
  
  wrapper.style.setProperty("--columns", columns);
  wrapper.style.setProperty("--rows", rows);
  
  createTiles(columns * rows);
}

createGrid();

window.onresize = () => createGrid();

// EmailJS

emailjs.init({
  publicKey: 'gAU74j2dSw6ljbrVj',
});

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('default_service', 'template_0556nso', this).then(() => {
            console.log('SUCCESS!');
        }, (error) => { console.log('FAILED...', error); });

        // Clear the form
        this.reset();
    });
}
