

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

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 


  document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.querySelector('.typing-text');
    const textArray = ["Estudante de Frontend Developer", "Flutter Developer", "estudante ciência da computação"];
    let index = 0;
    let letterIndex = 0;

    function type() {
      if (letterIndex < textArray[index].length) {
        textElement.textContent += textArray[index][letterIndex];
        letterIndex++;
        setTimeout(type, 100); // Ajuste o intervalo de digitação aqui
      } else {
        setTimeout(erase, 1500); // Tempo de espera antes de começar a apagar o texto
      }
    }

    function erase() {
      if (letterIndex > 0) {
        textElement.textContent = textArray[index].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(erase, 50); // Ajuste o intervalo de apagar aqui
      } else {
        index = (index + 1) % textArray.length;
        setTimeout(type, 500); // Tempo de espera antes de começar a digitar o próximo texto
      }
    }

    type(); // Inicie a animação quando o conteúdo for carregado
  });



        workCards.forEach(function (card) {
            card.addEventListener('mouseenter', function () {
                var info = card.querySelector('.work__info');
                info.style.opacity = 1;
                info.style.transform = 'translateY(0)';
            });

            card.addEventListener('mouseleave', function () {
                var info = card.querySelector('.work__info');
                info.style.opacity = 0;
                info.style.transform = 'translateY(20px)';
            });

            
        });

        
