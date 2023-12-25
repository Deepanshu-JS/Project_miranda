const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var tl = gsap.timeline()

tl.to("#main",{
    y:"100vh",
    scale:1,
    duration:0
})
tl.to("#main",{
    y:"30vh",
    duration:1,
    delay:1,
})
tl.to("#main",{
    y:"0vh",
    rotate:720,
    scale:1,
    duration:0.7
})





// /*page2*/
// tl.to("#page2",{
//     y:"100vh",
//     scale:0.6,
//     duration:0
// })
// tl.to("#page2",{
//     y:"30vh",
//     duration:1,
//     delay:1
// })
// tl.to("#page2",{
//     y:"0vh",
//     rotate:1460,
//     scale:1,
//     duration:0.7
// })