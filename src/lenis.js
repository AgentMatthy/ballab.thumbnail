import Lenis from 'lenis'
import Snap from 'lenis/snap'

const MOBILE_BREAKPOINT = 768;

const lenis = new Lenis({
  autoRaf: true,
});

lenis.on('scroll', (e) => {
  console.log(e);
});

let snap = null;

const get_element_pos = (selector) => {
  const element = document.querySelector(selector);
  
  const rect = element.getBoundingClientRect();
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  
  return rect.top + scrollTop + (rect.height / 2) - (window.innerHeight / 2);
};

const snapSections = ["#hero", "#intro", "#about", "#stats", "#services", "#contact"];

const initSnap = () => {
  // Destroy existing snap if it exists
  if (snap) {
    snap.destroy();
    snap = null;
  }
  
  // Only enable snap on desktop
  if (window.innerWidth >= MOBILE_BREAKPOINT) {
    snap = new Snap(lenis, {});
    
    snapSections.forEach(section => {
      snap.add(get_element_pos(section));
    });
    snap.add(document.documentElement.scrollHeight - window.innerHeight);
  }
};

// Initialize snap on load
initSnap();

// Update snap points on resize (debounced)
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(initSnap, 150);
});

document.querySelector('#herobtn').addEventListener('click', () => {
    lenis.scrollTo(get_element_pos("#intro"));
});

document.querySelector('#homeBtn').addEventListener('click', () => {
    lenis.scrollTo(get_element_pos("#hero"));
});

document.querySelector('#aboutBtn').addEventListener('click', () => {
    lenis.scrollTo(get_element_pos("#about"));
});

document.querySelector('#statsBtn').addEventListener('click', () => {
    lenis.scrollTo(get_element_pos("#stats"));
});

document.querySelector('#servicesBtn').addEventListener('click', () => {
    lenis.scrollTo(get_element_pos("#services"));
});

document.querySelector('#contactBtn').addEventListener('click', () => {
    lenis.scrollTo(get_element_pos("#contact"));
});
