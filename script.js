let locoScroll;

function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

setTimeout(() => {
  ScrollTrigger.refresh();
}, 100);

}

function nav_animation(){
    var nav = document.querySelector("nav");


nav.addEventListener("mouseenter",function(){
    let tl = gsap.timeline()
    //what timeline function does is it perform all the function one by one synchronously
    tl.to("#nav-bottom",{
        height:"21vh",
        duration:0.3
    });
    tl.to(".nav-part2 h5",{
        display:"block",
        duration:0.4
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
        duration:0.01
    })
    
})
};

function cursorfollow(){
    var rightElems = document.querySelectorAll(".right-elem");
rightElems.forEach(function(elem){
elem.addEventListener("mouseenter", function(){
   // console.log(elem.childNodes)//this will give the child elements of the elem but with alternate text as in array like text,h2,text,img,text
    gsap.to(elem.childNodes[3],{
        opacity:1,
        scale:1
    })
})
elem.addEventListener("mouseleave", function(){
   // console.log(elem.childNodes)//this will give the child elements of the elem but with alternate text as in array like text,h2,text,img,text
    gsap.to(elem.childNodes[3],{
        opacity:0,
        scale:0
    })
})
elem.addEventListener("mousemove",function(dets){
    gsap.to(elem.childNodes[3],{
        x:dets.x - elem.getBoundingClientRect().x-60,
        y:dets.y - elem.getBoundingClientRect().y-140
    })
})
})
}

function page3videoAnimation(){
var page3center = document.querySelector(".page3-center");
var video = document.querySelector("#page3 video")
page3center.addEventListener("click",function(){
    video.play(),
    gsap.to(video,{
        Transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0,
        
})
})
video.addEventListener("click",function(){
    video.pause(),
    gsap.to(video,{
        transform:"scaleX(0.7) scaleY(0)",
        opacity:0,
        borderRadius:"30px",
})
})
}

function page6videohover(){
    var sections = document.querySelectorAll(".sec-right")
sections.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        
        gsap.to(elem.childNodes[5],{
        opacity:1,
        scale:1
    })

        elem.childNodes[3].play(),  
        gsap.to(elem.childNodes[3],{
            opacity:1
        })
    })
    elem.addEventListener("mouseleave", function(){
        gsap.to(elem.childNodes[5],{
        opacity:0,
        scale:0
    })
        elem.childNodes[3].load()//this will reload and pause the video
        elem.childNodes[3].style.opacity = 0

    })
    elem.childNodes[3].addEventListener("mousemove",function(details){
     gsap.to(elem.childNodes[5],{
        x:details.x - elem.getBoundingClientRect().x-60,
        y:details.y - elem.getBoundingClientRect().y-570
    })   
    })

})
}

function page6left() {
  var allLeft = document.querySelectorAll(".section .sec-left");

  allLeft.forEach(function (el) {
    el.addEventListener("mouseenter", function () {
      gsap.to(el, {
        borderTopColor: "#000",
        scale: 1.01
      });
    });
    el.addEventListener("mouseleave", function(){
        gsap.to(el,{
            scale:1,
            borderTopColor: "#a19f9f"
        })
    })
  });
}
function page6videoup(){
    var gridblocks = document.querySelectorAll(".page6upvideo");
let gtl = gsap.timeline()
gridblocks.forEach(function(blocks){
    var videorealadd = blocks.querySelector("video");
    var para = blocks.querySelector("p");
   blocks.addEventListener("mouseenter", function(){
    videorealadd.play(),
    gsap.to(blocks,{
        borderTopColor:"#fff",
        borderTopWidth:"2px"
    })
    gtl.to(para,{
        opacity:0,
        duration:0.1
    })
    
    gtl.to(videorealadd,{
        opacity:1,
        height:"50vh",
        duration:0.1
    })
   })
   blocks.addEventListener("mouseleave", function(){
    videorealadd.play(),
    gsap.to(blocks,{
        borderTopColor:"#a19f9f",
        borderTopWidth:"1px"
    })
    
    gtl.to(videorealadd,{
        opacity:0,
        height:"30vh",
        duration:0.1
    })
    gtl.to(para,{
        opacity:1,
        duration:0.1
    })
   })
})
}

function scrollslide(){
    gsap.from(".btm8-parts h4",{
    x:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#btm8-part2",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"0%",
        scrub:true
    }
})
}

function stickybutton(){
    // PAGE 7 PIN (Sticky Replacement)

ScrollTrigger.create({
  trigger: "#page7",
  scroller: "#main",
  start: "top 5%",
  endTrigger: "#page7",
  end: "bottom 25%",
  pin: "#page7 > button",
  pinSpacing: false
});

// REFRESH WHEN DETAILS OPEN

document.querySelectorAll("#page7 details").forEach(detail => {
  detail.addEventListener("toggle", () => {
    locoScroll.update();
    ScrollTrigger.refresh(true);
  });
});
}

function changesvg(){
    
    var pathadd = document.querySelector(".page9-left svg path")
     document.querySelector("#page9").addEventListener("mouseenter", function(){
        gsap.to(pathadd, {
            attr: {
                d: "M1.794 12.674v2.916H4.71l8.602-8.601-2.917-2.916-8.601 8.6Zm13.773-7.94a.774.774 0 0 0 0-1.097l-1.82-1.82a.774.774 0 0 0-1.097 0L11.227 3.24l2.917 2.917 1.423-1.423Z"
            },
            duration: 0.4,
            ease: "power2.out"
        });
    });
    document.querySelector("#page9").addEventListener("mouseleave", function(){
    gsap.to(pathadd, {
        attr: {
            d: "M11.711 3.982H2.64V1.59h13.154v13.155h-2.392V5.673L3.485 15.59 1.794 13.9l9.917-9.918Z"
        },
        duration: 0.4,
        ease: "power2.out"
    });
});

}

function circlefollow(){
    var page9section = document.querySelector("#page9 .page9-content")
    var page9sec = document.querySelector("#page9 .page9-content")
    var circle = document.querySelector("#page9 .page9-content .circle")
    page9section.addEventListener("mousemove", function(data){
        gsap.to(circle,{
            opacity:1,
            
            scale: 1,
            x:data.x-230,
        y:data.y - page9sec.getBoundingClientRect().y-30
        })
    })
    page9section.addEventListener("mouseleave",function(){
        gsap.to(circle,{
            opacity: 0,
            scale:0
        })
    })
}

function round(){
    var svgItem = document.querySelector("#page10 .page10-content .round")
    gsap.to(svgItem,{
         rotation: 360,
    ease: "none",
    scrollTrigger:{
        trigger:"#page10",
        scroller:"#main",
        start:"top 35%",
        end:"bottom 25%",
        markers:false,
        scrub:true
    }
    })
}

function loadingAnimation(){
    var tl = gsap.timeline()
    tl.from("#page1",{
        opacity:0,
        duration:0.3,
        delay:0.2,
    })
    tl.from("#page1",{
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "100px",
        duration: 1,
        ease: "expo.out"
    })
    tl.from("nav",{
        opacity:0,
        delay:-0.15
    })
    
    tl.from("#page1 h1",{
        opacity:0,
        transform: "translateY(100%)",
        stagger:{
            amount:0.1
        } 
    })
    tl.from("#page1 p, #page1 div",{
        opacity:0,
        duration:0.5,
        stagger:0.2
    })

    
}


function dropdown(){
    document.querySelectorAll("#page7 details").forEach(detail => {

    var img = detail.querySelector("summary img");

    detail.addEventListener("toggle", function(){

        if(detail.open){
            gsap.to(img, { rotation: 180, duration: 0.3 });
        } else {
            gsap.to(img, { rotation: 0, duration: 0.3 });
        }

    });

});

}











loadingAnimation();
locomotiveAnimation();
nav_animation();
stickybutton();
cursorfollow();
page3videoAnimation();
page6videohover();
page6left();
page6videoup();
scrollslide();
changesvg();
circlefollow();
round();
dropdown();