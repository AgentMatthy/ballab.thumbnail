import { stagger , eases , onScroll , animate } from 'https://cdn.jsdelivr.net/npm/animejs/+esm';

new SplitType('.split');

animate('h1 .char', {
    y: { from: 200 },
    delay: stagger(30),
    duration: 900,
    ease: eases.outExpo,
});

animate('h2 .char', {
    y: -60,
    delay: stagger(18),
    duration: 900,
    ease: eases.inExpo,
    reversed: true,
});

// Problem section animations
animate('.problem-title .char', {
    y: { from: 100 },
    // opacity: { from: 0 },
    delay: stagger(50),
    duration: 800,
    ease: eases.outExpo,
    autoplay: onScroll(

    ),
});

animate('.problem-text li .word', {
    // y: { from: 50 },
    opacity: { from: 0 },
    delay: stagger(20),
    duration: 600,
    ease: eases.outQuart,
    autoplay: onScroll(),
});

animate('.problem-title', {
    marginLeft: '14vw',
    // transform: 'translateY(100)',
    ease: 'linear',

    autoplay: onScroll({
        target: '.problem-title',
        sync: .25,
        enter: 'bottom top',
        leave: 'top bottom',
        // debug: true,
    }),
});

// animate('.c1', {
//     autoplay: true,
// });

// animate('.circles>*', {
//     x: { from: 0 },
//     y: { from: 0 },
//     ease: eases.outExpo,
//     duration: 2000,
//     delay: stagger(100),
//     autoplay: onScroll({
//         target: '.problem-cta',
//         enter: 'top bottom',
//         leave: 'bottom top',
//     }),
// })
