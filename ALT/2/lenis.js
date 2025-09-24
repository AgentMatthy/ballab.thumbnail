// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
    lerp: 0.1,
    //easing: 1 ? 1 : 1 - Math.pow(2, -10 * x),
    //easing: (t) => 1 - Math.pow(1 - t, 3),
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
    console.log(e);
});
