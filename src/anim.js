import { onScroll, animate } from 'animejs';

animate( '.r1 .thumbnails', {
    x: -400,
    ease: 'easeInOutQuad',
    autoplay: onScroll({
        target: '#showcase',
        enter: 'bottom top',
        leave: 'top bottom',
        sync: .50,
    })
});

animate( '.r2 .thumbnails', {
    x: 400,
    ease: 'easeInOutQuad',
    autoplay: onScroll({
        target: '#showcase',
        enter: 'bottom top',
        leave: 'top bottom',
        sync: .15,
    })
});

animate( '.r3 .thumbnails', {
    x: -400,
    ease: 'easeInOutQuad',
    autoplay: onScroll({
        target: '#showcase',
        enter: 'bottom top',
        leave: 'top bottom',
        sync: .05,
    })
});

// Navbar to show when scrolled down

animate( 'nav', {
    opacity: 1,
    duration: 1,
    autoplay: onScroll({
        target: '#hero',
        enter: 'top top+=10',
        leave: 'top top+=15',
        sync: 1,
    })
});
