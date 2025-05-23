/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.querySelector('header');
    if (window.scrollY >= 200) {
        nav.classList.add('active-header');
    } else {
        nav.classList.remove('active-header');
    }
}
window.addEventListener('scroll', scrollHeader);

/*==================== CHANGE HERO DIV ====================*/
function scrollHero() {
    const divhero = document.querySelector('.div-hero');
    if (divhero && window.scrollY >= divhero.offsetHeight) {
        divhero.classList.add('active-div-hero');
    } else {
        divhero.classList.remove('active-div-hero');
    }
}
window.addEventListener('scroll', scrollHero);

/*==================== ACCORDION ====================*/ 
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;
        button.classList.toggle('accordion-button-active');
        if (button.classList.contains('accordion-button-active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;
        }
    });
});

/*==================== INTERSECTION OBSERVER (SECTIONS) ====================*/ 
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const h6Elements = entry.target.querySelectorAll('h6');
        if (entry.isIntersecting) {
            entry.target.classList.add('bg-white');
            h6Elements.forEach(h6 => h6.style.color = '#0F0F0F');
        } else {
            entry.target.classList.remove('bg-white');
            h6Elements.forEach(h6 => h6.style.color = '');
        }
    });
}, {
    threshold: 0.5
});

document.querySelectorAll('section.white').forEach(section => {
    observer.observe(section);
});

/*==================== GSAP SCROLLTRIGGER ====================*/ 
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    const lenis = new Lenis();

    lenis.on('scroll', (e) => {
        console.log(e);
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const tl1 = gsap.timeline();

    tl1
    .to('.logo-load', {
        duration: 2,
        opacity: 0, 
        delay: 4,
        filter: 'blur(10px)',
        ease: "power4.out",
    })
    .from("header div", {
        duration: 3, 
        opacity: 0,
        y: 200, 
        stagger:{each: 0.2},
        ease: "power4.out",
    }, '-=1.0')
    .from(".hero div", {
        duration: 3, 
        opacity: 0,
        x: -200, 
        stagger:{each: 0.4},
        ease: "power4.out",
    }, '-=4.5');

    const scrollAnimations = [
        { trigger: '.section-presentation', target: '.section-presentation aside' },
        { trigger: '.section-services', target: '.section-services > div' },
        { trigger: '.section-testimonials', target: '.section-testimonials > div' },
        { trigger: '.section-faq', target: '.section-faq div' },
        { trigger: '.section-building', target: '.section-building div' },
        { trigger: '.div-video', target: '.div-video', props: { y: 100, scale: 0.4 }, scrub: 3 },
        { trigger: '.phrase-1', target: '.phrase-1', x: -200, scrub: 4 },
        { trigger: '.phrase-2', target: '.phrase-2', x: 200, scrub: 4 },
        { trigger: '.phrase-3', target: '.phrase-3', x: -200, scrub: 4 },
        { trigger: '.phrase-4', target: '.phrase-4', x: 200, scrub: 4 },
        { trigger: '.phrase-5', target: '.phrase-5', y: 200, scrub: 4 },
        { trigger: '.flw', target: '.flw', y: 200, scrub: 4 },
        { trigger: '.flw2', target: '.flw2', y: 200, scrub: 4 },
    ];

    scrollAnimations.forEach(({ trigger, target, x = -200, y = 0, scale = 1, scrub = false, props = {} }) => {
        gsap.from(target, {
            x,
            y,
            scale,
            opacity: 0,
            ease: "power4.out",
            duration: 3,
            stagger: { each: 0.2 },
            ...props,
            scrollTrigger: {
                trigger,
                start: 'top 80%',
                end: 'top 50%',
                scrub,
            }
        });
    });
});
