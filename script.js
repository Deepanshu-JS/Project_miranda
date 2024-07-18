const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    smoothMobile: true
});


var tl = gsap.timeline()

tl.to("#main", {
    delay:6
  })


tl.to("#main",{
    y:"100vh",
    scale:1,
    duration:0
})
tl.to("#main",{
    y:"0vh",
    duration:1,
    delay:1,
    
})
tl.to("#main",{
    y:"0vh",
    rotate:720,
    scale:1,
    duration:0.7
})




const tl2 = gsap.timeline();

tl2.to("body", {
  overflow: "hidden"
})
  .to(".preloader .text-container", {
    duration: 0,
    opacity: 1,
    ease: "Power3.easeOut"
  })
  .from(".preloader .text-container h1", {
    duration: 2.5,
    delay: 1,
    y: 70,
    skewY: 10,
    stagger: 0.4,
    ease: "Power3.easeOut"
  })
  .to(".preloader .text-container h1", {
    duration: 2.2,
    y: 70,
    skewY: -20,
    stagger: 0.2,
    ease: "Power3.easeOut"
  })
  .to(".preloader", {
    duration: 1.5,
    height: "0vh",
    ease: "Power3.easeOut"
  })
  .to(
    "body",
    {
      overflow: "hidden"
    },
    "-=2"
  )
  .to(".preloader", {
    display: "none"
  });


  


  
