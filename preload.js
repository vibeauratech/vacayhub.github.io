var tl = gsap.timeline({
    defaults : {
        ease: "slowMo.easeOut"
    }
})

gsap.from(".logo", 0.9, {
    y : -50,
    opacity : 0,
    ease :" power4.inOut",
    delay: 0.8,
    stagger : {
        amount : 0.3,
    }
})


gsap.from(".explore", 0.9, {
    y : 50,
    opacity : 0,
    ease :" power4.inOut",
    delay: 1.2,
    stagger : {
        amount : 0.7,
    }
})

gsap.from(".arrow", 0.9, {
   scale: 0.1,
   opacity : 0,
   delay: 1.6,
})

gsap.to(".arrow", 0.9, {
    y : 20,
    yoyo : true,
    repeat : -1,
   
})



gsap.to("#create", {
    scrollTrigger :{
        trigger:"#create",
        toggleActions: "restart pause reverse pause " 
      }, 
    y : "0%",
    duration : 0.9,
    stagger : 0.2
})

gsap.to(".box", {
    scrollTrigger :{
      trigger:".box",
      toggleActions: "restart pause reverse pause "
    }, 
    scale: 1.3,
    duration : 2,
    delay: 0.3
})


