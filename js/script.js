document.addEventListener("DOMContentLoaded", () => {
  /*==================== HEADER ====================*/
  function scrollHeader() {
    const nav = document.querySelector('header');
    if (window.scrollY >= 200) {
      nav.classList.add('active-header');
    } else {
      nav.classList.remove('active-header');
    }
  }
  window.addEventListener('scroll', scrollHeader);

  function scrollHero() {
    const divhero = document.querySelector('.div-hero');
    if (window.scrollY >= divhero.offsetHeight) {
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
      accordionContent.style.maxHeight = button.classList.contains('accordion-button-active')
        ? accordionContent.scrollHeight + 'px'
        : 0;
    });
  });

  /*==================== INTERSECTION OBSERVER ====================*/
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
  }, { threshold: 0.5 });

  document.querySelectorAll('section.white').forEach(section => observer.observe(section));

  /*==================== SMOOTH SCROLL WITH LENIS ====================*/
  const lenis = new Lenis();
  lenis.on('scroll', ScrollTrigger.update);
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  /*==================== GSAP LOADING ====================*/
  gsap.registerPlugin(ScrollTrigger);

  const tl1 = gsap.timeline();
  tl1
    .to('.logo-load', {
      duration: 2,
      opacity: 0,
      delay: 4,
      filter: 'blur(10px)',
      ease: "power4.out"
    })
    .from("header div", {
      duration: 3,
      opacity: 0,
      y: 200,
      stagger: { each: 0.2 },
      ease: "power4.out"
    }, '-=1.0')
    .from(".hero div", {
      duration: 3,
      opacity: 0,
      x: -200,
      stagger: { each: 0.4 },
      ease: "power4.out"
    }, '-=4.5');

  /*==================== GSAP SCROLL ANIMATIONS ====================*/
  const animations = [
    { selector: ".section-presentation aside", x: -200 },
    { selector: ".section-services > div", x: -200 },
    { selector: ".section-testimonials > div", x: -200 },
    { selector: ".section-faq div", x: -200 },
    { selector: ".section-building div", x: -200 },
    { selector: ".phrase-1", x: -200, scrub: 4 },
    { selector: ".phrase-2", x: 200, scrub: 4 },
    { selector: ".phrase-3", x: -200, scrub: 4 },
    { selector: ".phrase-4", x: 200, scrub: 4 },
    { selector: ".phrase-5", y: 200, scrub: 4 },
    { selector: ".flw", y: 200, scrub: 4 },
    { selector: ".flw2", y: 200, scrub: 4 },
    { selector: ".flw3", y: 200, scrub: 4 },
  ];

  animations.forEach(anim => {
    gsap.from(anim.selector, {
      x: anim.x,
      y: anim.y,
      opacity: 0,
      ease: "power4.out",
      duration: 3,
      stagger: { each: 0.2 },
      scrollTrigger: {
        trigger: anim.selector,
        start: 'top 80%',
        end: 'top 50%',
        scrub: anim.scrub || false,
        // markers: true,
      }
    });
  });

  gsap.from(".div-video", {
    y: 100,
    scale: 0.4,
    ease: "power4.out",
    duration: 5,
    scrollTrigger: {
      trigger: '.div-video',
      start: 'top 80%',
      end: 'top 50%',
      scrub: 3,
    }
  });
});
