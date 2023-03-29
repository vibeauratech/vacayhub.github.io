var tl = gsap.timeline({
    defaults : {
        ease: "slowMo.easeOut"
    }
})

gsap.from(".text", 0.8, {
    y : -170,
    opacity : 0,
    ease :" power2.inOut",
    delay: 1
  })
  
  gsap.from(".loader", 1, {
    y : 50,
    opacity : 0,
    ease :" power4.inOut",
    delay: 2
  })
  
  
  gsap.to(".preloader", 1.5, {
    top : "-150%",
    ease :" power4.inOut",
    delay: 3
  })



gsap.from(".logo", 1.8, {
    y : -50,
    opacity : 0,
    ease :" power4.inOut",
    delay: 5,
    stagger : {
        amount : 0.3,
    }
})


gsap.from(".explore", 0.9, {
    y : 50,
    opacity : 0,
    ease :" power4.inOut",
    delay: 5.2,
    stagger : {
        amount : 7.7,
    }
})

gsap.from(".arrow", 0.9, {
   scale: 0.1,
   opacity : 0,
   delay: 5.6,
})

gsap.from(".arrow", 0.9, {
    y : 20,
    yoyo : true,
    repeat : -1,
   
})



gsap.to("#create", {
    scrollTrigger :{
        trigger:"#create",
        toggleActions: "restart none none none " 
      }, 
    y : "0%",
    duration : 0.9,
    stagger : 0.2
})

gsap.to(".box", {
    scrollTrigger :{
      trigger:".box",
      toggleActions: "restart none none none " 
    }, 
    scale: 1.1,
    duration : 2,
    delay: 0.3
})

gsap.from("#domino", {
    scrollTrigger :{
      trigger:"#domino",
      toggleActions: "restart none none none " 
    }, 

    y: 50,
    opacity : 0,
    ease :" power4.inOut",
    delay: 1
})




