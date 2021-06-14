
  
/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__img', {origin:'right', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 400})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', {delay:50, interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})













/*
const card_hover=['card1','card2','card3','card4','card5','card6','card7']
card_hover[0] = document.getElementById('hover-1');
card_hover[1] = document.getElementById('hover-2');
card_hover[2] = document.getElementById('hover-3');
card_hover[3] = document.getElementById('hover-4');
card_hover[4] = document.getElementById('hover-5');

card_hover[6] = document.getElementById('hover-7');



const body = document.body;
const hovered=['hovered-1','hovered-2','hovered-3','hovered-4','hovered-5','hovered-7']    


card_hover[0].onmouseover= function() {
body.className = hovered[0];
   }


   card_hover[1].onmouseover = function() {
body.className = hovered[1];
   }


   card_hover[2].onmouseover = function() {
body.className = hovered[2];
   }


   card_hover[3].onmouseover = function() {
body.className = hovered[3];
   }
   card_hover[4].onmouseover = function() {
body.className = hovered[4];
   }









   card_hover[0].onmouseout=function() {
    body.className=hovered[6]
}
card_hover[1].onmouseout=function() {
    body.className=hovered[6]
}

card_hover[2].onmouseout=function() {
    body.className=hovered[6]
}

card_hover[3].onmouseout=function() {
    body.className=hovered[6]
}

card_hover[4].onmouseout=function() {
    body.className=hovered[6]
}





/*card_hover[1,2,3,4,5,6].onmouseout = function() {
body.className = 'body2';
}*/


