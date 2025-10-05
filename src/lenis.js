import Lenis from 'lenis'
import Snap from 'lenis/snap'

const lenis = new Lenis({
  autoRaf: true,
});

lenis.on('scroll', (e) => {
  console.log(e);
});

const snap = new Snap(lenis, {})

function get_element_pos(selector) {
  const element = document.querySelector(selector);
  
  const rect = element.getBoundingClientRect();
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  
  return rect.top + scrollTop + (rect.height / 2) - (window.innerHeight / 2);
}

snap.add(get_element_pos("#hero"))
snap.add(get_element_pos("#intro"))
snap.add(get_element_pos("#about"))
snap.add(get_element_pos("#stats"))
snap.add(get_element_pos("#services"))
snap.add(get_element_pos("#contact"))
snap.add(document.documentElement.scrollHeight - window.innerHeight)

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
