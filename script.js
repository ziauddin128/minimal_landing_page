var tl = gsap.timeline();

tl.to(".main",{
    y:"100%",
    duration:0.7,
    scale:0.3
});
tl.to(".main",{
    y:"0%",
    duration:0.9,
    scale:0.7
});
tl.to(".main",{
    y:"0%",
    rotate:360,
    scale:1
});

