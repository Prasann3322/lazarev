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
    elem.childNodes[3].addEventListener("mouseenter", function(){
        gsap.to(elem.childNodes[5],{
        opacity:1,
        scale:1
    })

        elem.childNodes[3].play(),  
        gsap.to(elem.childNodes[3],{
            opacity:1
        })
    })
    elem.childNodes[3].addEventListener("mouseleave", function(){
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
        borderTopColor:"#000",
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















// nav_animation();
// cursorfollow();
// page3videoAnimation();
// page6videohover();
// page6left();
page6videoup();