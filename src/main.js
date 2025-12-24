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
  
  const columns = Math.floor(document.documentElement.clientWidth / size);
  // Use window.innerHeight for iOS - it includes the area behind browser chrome
  // Also use CSS.supports to detect svh support and calculate accordingly
  const viewportHeight = window.innerHeight;
  const rows = Math.floor(viewportHeight / size);
  
  wrapper.style.setProperty("--columns", columns);
  wrapper.style.setProperty("--rows", rows);
  
  createTiles(columns * rows);
}

createGrid();

window.onresize = () => createGrid();

// Mobile Menu Toggle
const menuToggle = document.querySelector('nav .menu-toggle');
const navMenu = document.querySelector('nav ul');
const nav = document.querySelector('nav');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('menu-open');
  });

  // Close menu when clicking a link
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('menu-open');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && nav.classList.contains('menu-open')) {
      nav.classList.remove('menu-open');
    }
  });
}

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
