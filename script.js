function nav_animation(){
    var nav = document.querySelector("nav");


nav.addEventListener("mouseenter",function(){
    let tl = gsap.timeline()
    //what timeline function does is it perform all the function one by one synchronously
    tl.to("#nav-bottom",{
        height:"21vh",

    });
    tl.to(".nav-part2 h5",{
        display:"block",
    });
    tl.to(".nav-part2 h5 span",{
        y:0,//it translate in y axis
        // duration:0.4,
        // stagger:0.09//it give the one by one effect
        stagger:{
            amount:0.7
        } 
    })
})
nav.addEventListener("mouseleave",function(){
    let tl = gsap.timeline()
    //what timeline function does is it perform all the function one by one synchronously
    tl.to(".nav-part2 h5 span",{
        y:25,
        stagger:{
            amount:0.5
        }
    })
    tl.to(".nav-part2 h5",{
        display:"none",
        duration:0.01
    })
    tl.to("#nav-bottom",{
        height:0,
        duration:0.1
    })
    
})
};
nav_animation();
