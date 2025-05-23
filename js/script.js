/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.querySelector('header')
    if(window.scrollY >= 200) nav.classList.add('active-header'); else nav.classList.remove('active-header')
}
window.addEventListener('scroll', scrollHeader)

function scrollHero(){
  const divhero = document.querySelector('.div-hero');
  if(window.scrollY >= divhero.offsetHeight) divhero.classList.add('active-div-hero'); else divhero.classList.remove('active-div-hero')
}
window.addEventListener('scroll', scrollHero)

/*==================== ACCORDION ====================*/ 
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;
        button.classList.toggle('accordion-button-active');
        if(button.classList.contains('accordion-button-active')){
          accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
          accordionContent.style.maxHeight = 0;
        }
    });
});

// IntersectionObserver para trocar background e cor do h6
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('bg-white');
      entry.target.querySelectorAll('h6').forEach(h6 => h6.style.color = '#0F0F0F');
    } else {
      entry.target.classList.remove('bg-white');
      entry.target.querySelectorAll('h6').forEach(h6 => h6.style.color = '');
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('section.white').forEach(section => {
  observer.observe(section);
});

/*--=========== GSAP SCROLLTRIGGER ============- */
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

  // Remove Lenis (scroll normal do navegador)

  /*--=========== TIMELINE LOADING E HERO ============- */
  var tl1 = gsap.timeline();
  
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
  }, '-=4.5')

  /*--=========== ANIMAÇÕES AO SCROLL ============- */

  gsap.from(".section-presentation aside",{
    x: -200,
    opacity: 0,
    ease: "power4.out",
    duration: 3,
    stagger:{each: 0.1},
    scrollTrigger:{
      trigger: '.section-presentation',
      start: 'top 80%',
      end: 'top 50%',
    }
  });

  gsap.from(".section-services > div",{
    x: -200,
    opacity: 0,
    ease: "power4.out",
    duration: 3,
    stagger:{each: 0.3},
    scrollTrigger:{
      trigger: '.section-services',
      start: 'top 80%',
      end: 'top 50%',
    }
  });

  gsap.from(".section-testimonials > div",{
    x: -200,
    opacity: 0,
    ease: "power4.out",
    duration: 3,
    stagger:{each: 0.3},
    scrollTrigger:{
      trigger: '.section-testimonials',
      start: 'top 80%',
      end: 'top 50%',
    }
  });

  gsap.from(".section-faq div",{
    x: -200,
    opacity: 0,
    ease: "power4.out",
    duration: 3,
    stagger:{each: 0.1},
    scrollTrigger:{
      trigger: '.section-faq',
      start: 'top 80%',
      end: 'top 50%',
    }
  });

  gsap.from(".section-building div",{
    x: -200,
    opacity: 0,
    ease: "power4.out",
    duration: 3,
    stagger:{each: 0.4},
    scrollTrigger:{
      trigger: '.section-building',
      start: 'top 80%',
      end: 'top 50%',
    }
  });

  gsap.from(".div-video",{
    y: 100,
    scale: 0.4,
    ease: "power4.out",
    duration: 5,
    scrollTrigger:{
      trigger: '.div-video',
      start: 'top 80%',
      end: 'top 50%',
      scrub: 3,
    }
  });

  gsap.from(".phrase-1",{
    x: -200,
    opacity: 0,
    ease: "power4.out",
    duration: 3,
    scrollTrigger:{
      trigger: '.phrase-1',
      start: 'top 80%',
      end: 'top 50%',
      scrub: 4,
    }
  });

  gsap.from(".phrase-2",{
    x: 200,
    opacity: 0,
    ease: "power4.out",
    duration: 3,
    scrollTrigger:{
      trigger: '.phrase-2',
      start: 'top 80%',
      end: 'top 50%',
      scrub: 4,
    }
  });

  gsap.from(".phrase-3",{
    x: -200,
    opacity: 0,
    ease: "power4.out",
    duration: 3,
    scrollTrigger:{
      trigger: '.phrase-3',
      start: 'top 80%',
      end: 'top 50%',
      scrub: 4,
    }
  });

  gsap.from(".phrase-4",{
    x: 200,
    opacity: 0,
    ease: "power4.out",
    duration: 3,
    scrollTrigger:{
      trigger: '.phrase-4',
      start: 'top 80%',
      end: 'top 50%',
      scrub: 4,
    }
  });

  gsap.from(".phrase-5",{
    y: 200,
    opacity: 0,
    ease: "power4.out",
    duration: 3,
    scrollTrigger:{
      trigger: '.phrase-5',
      start: 'top 80%',
      end: 'top 50%',
      scrub: 4,
    }
  });

  gsap.from(".flw",{
    y: 200,
    opacity: 0,
    ease: "power4.out",
    duration: 3,
    scrollTrigger:{
      trigger: '.flw',
      start: 'top 80%',
      end: 'top 50%',
      scrub: 4,
    }
  });

  gsap.from(".flw2",{
    y: 200,
    opacity: 0,
    ease: "power4.out",
    duration: 3,
    scrollTrigger:{
      trigger: '.flw2',
      start: 'top 80%',
      end: 'top 50%',
      scrub: 4,
    }
  });

  gsap.from(".flw3",{
    y: 200,
    opacity: 0,
    ease: "power4.out",
    duration: 3,
    scrollTrigger:{
      trigger: '.flw3',
      start: 'top 80%',
      end: 'top 50%',
      scrub: 4,
    }
  });

});
