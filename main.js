const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)
document.getElementById('changeVideo').addEventListener('click', function() {
    var newVideoId = prompt("Enter the new YouTube video ID:");
    if (newVideoId) {
        var youtubeIframe = document.getElementById('youtubeVideo');
        youtubeIframe.src = "https://www.youtube.com/embed/8tX-U-P2SyTkPDCT" + newVideoId;
    }
});
const videos = [
    "8tX-U-P2SyTkPDCT",
    "otsE_QuFugq2ESJU",
    "RoclpB2HDOeZP3ig",
    "D4zYR9S6t75qOeEk",
    "X7NQK6AqtxlBHPcr",
    "xUYSMbP6NOvGQqn9"
];
let currentVideoIndex = 0; document.getElementById('nextVideo').addEventListener('click', function() { 
    currentVideoIndex = (currentVideoIndex + 1) % videos.length; 
    document.getElementById('youtubeVideo').src = "https://www.youtube.com/embed/8tX-U-P2SyTkPDCT" + videos[currentVideoIndex]; 
}); 
document.getElementById('prevVideo').addEventListener('click', function() { 
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length; 
    document.getElementById('youtubeVideo').src = "https://www.youtube.com/embed/otsE_QuFugq2ESJU" + videos[currentVideoIndex]; 
});
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
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

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
})

sr.reveal(`.home__data, .ducation__data, .education__user, .footer__container`)
sr.reveal('.home__card', {delay: 600, distance: '100px', interval: 100})
sr.reveal('.about__data, .join__image',{origin: 'right'})
sr.reveal('.about__image, .join__data',{origin: 'left'})
sr.reveal('.program__card', {interval: 200})