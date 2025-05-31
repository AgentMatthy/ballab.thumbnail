document.addEventListener('DOMContentLoaded', function() {
    // Function to load script
    function loadScript(url, callback) {
        const script = document.createElement('script');
        script.src = url;
        script.onload = callback;
        document.head.appendChild(script);
    }

    // Check if GSAP is loaded, if not load it
    if (typeof gsap === 'undefined') {
        loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js', function() {
            // Load ScrollTrigger after GSAP
            loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js', initAnimation);
        });
    } else if (typeof ScrollTrigger === 'undefined') {
        // If GSAP is loaded but ScrollTrigger is not
        loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js', initAnimation);
    } else {
        // Both are already loaded
        initAnimation();
    }

    function initAnimation() {
        gsap.registerPlugin(ScrollTrigger);

        /// ANIMATIONS ///
        
        let title = new SplitType('#maintitle', { types: 'words, chars' });
        gsap.from(title.chars, {
            ease: "power4.out", // Easing function
            duration: 1,
            //opacity: 0,
            y: 180,
            stagger: 0.05,
        });

        let subtitle = new SplitType('#subtitle', { types: 'words, chars' });
        gsap.from(subtitle.words, {
            ease: "power4.out", // Easing function
            delay: 1,
            duration: 0.7,
            opacity: 0,
            //y: 30,
            stagger: 0.03,
        });

        gsap.from(".about", {
            scrollTrigger: {
                trigger: ".about",
                start: "top 80%", // Trigger when the top of the element hits 80% from the top of viewport
                end: "top top", // End when the bottom of the element hits 20% from the top
                markers: false, // Set to true for debugging
                scrub: true // Allow scrubbing for smoother animation
            },
            ease: "linear", // Easing function
            borderRadius: "5vh",
            marginLeft: "5vw",
            marginRight: "5vw",
        });
    }
});

