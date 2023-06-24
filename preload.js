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

var textWrapper = document.querySelector('.ml13');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml13 .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i
  }).add({
    targets: '.ml13 .letter',
    translateY: [0,-100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i
  });



