document.addEventListener("DOMContentLoaded", () => {
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

  /*==================== GSAP LOADING ====================*/
  gsap.registerPlugin(ScrollTrigger); // Você pode manter isso se ainda for usar ScrollTrigger no futuro

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

  /*==================== GSAP ANIMAÇÕES FIXAS ====================*/
  gsap.from(".div-video", {
    y: 100,
    scale: 0.4,
    ease: "power4.out",
    duration: 5
  });

  gsap.from(".section-presentation aside", {
    x: -200,
    opacity: 0,
    ease: "power4.out",
    duration: 3,
    stagger: { each: 0.2 }
  });

  gsap.from(".section-services > div", {
    x: -200,
    opacity: 0,
    ease: "power4.out",
    duration: 3,
    stagger: { each: 0.2 }
  });

  gsap.from(".section-testimonials > div", {
    x: -200,
    opacity: 0,
    ease: "power4.out",
    duration: 3,
    stagger: { each: 0.2 }
  });

  gsap.from(".section-faq div", {
    x: -200,
    opacity: 0,
    ease: "power4.out",
    duration: 3,
    stagger: { each: 0.2 }
  });

  gsap.from(".section-building div", {
    x: -200,
    opacity: 0,
    ease: "power4.out",
    duration: 3,
    stagger: { each: 0.2 }
  });
});

