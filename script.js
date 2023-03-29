const link = document.querySelectorAll('.link');
const hoverReveal = document.querySelectorAll('.hover-reveal');
const linkImages = document.querySelectorAll('.hidden-img');

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('mousemove', (e) =>{
      hoverReveal[i].style.opacity = 1;
      hoverReveal[i].style.transform = `translate(-100%,-50%) `;
      linkImages[i].style.transform = 'scale(1,1)';
      hoverReveal[i].style.left = e.clientX + "px";
    })

    link[i].addEventListener('mouseleave', (e) =>{
        hoverReveal[i].style.opacity = 0;
        hoverReveal[i].style.transform = `translate(-50%,-50%) `;
        linkImages[i].style.transform = 'scale(0.8,0.8)';
    })
}

const body = document.body,
scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],

height = scrollWrap.getBoundingClientRect().height - 1,

speed = 0.04;

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothscroll() {
     offset += (window.pageYOffset - offset) * speed;

     var scroll = "translateY(-" + offset + "px) translateZ(0)";

     scrollWrap.style.transform = scroll;

     callScroll = requestAnimationFrame(smoothscroll);
}

smoothscroll();





