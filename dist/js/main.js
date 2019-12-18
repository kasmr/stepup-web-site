const elementHome = document.getElementById('home');
const elementAbout = document.getElementById('about');
const elementServices = document.getElementById('services');
const elementContacts = document.getElementById('contacts');
const elementApply = document.getElementById('apply');
const btn1 = document.querySelector('.btn1');
const link2 = document.querySelector('.link2');
const link3 = document.querySelector('.link3');
const link4 = document.querySelector('.link4');
const btn5 = document.querySelector('.btn5');
const current = document.getElementById('current');
const imgs = document.querySelectorAll('.imgs img');
const acc = document.querySelectorAll('.accordion');

const opacity = 0.4;

//Burger menu
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  //Toggle nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-links-active');
    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 +
          0.3}s`;
      }
    });

    //Animate burger
    burger.classList.toggle('toggle');
  });
};

navSlide();
//Accordion slide out
acc.forEach(accordion => accordion.addEventListener('click', accClick));

function accClick(e) {
  this.classList.toggle('active');
  const panel = this.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + 'px';
    panel.style.backgroundColor = '#e0e0e0';
    panel.style.borderRadius = '0 0 10px 10px';
    panel.style.paddingTop = '1rem';
    panel.style.marginTop = '-1rem';
  }
}

//Gallery
imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
  current.src = e.target.src;
  imgs.forEach(img => (img.style.opacity = 1));
  current.classList.add('fade-in');
  e.target.style.opacity = opacity;
  setTimeout(() => current.classList.remove('fade-in'), 500);
}

//Scroll

// Trying to make it shorter
// const btns = document.querySelectorAll('.btn');
// btns.forEach(btn => btn.addEventListener('click', scrollTo));
// function scrollTo(e) {
//   this.element
// }

function scrollToHome() {
  elementHome.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

function scrollToAbout() {
  elementAbout.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

function scrollToServices() {
  elementServices.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

function scrollToContacts() {
  elementContacts.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

function scrollToApply() {
  elementApply.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

btn1.addEventListener('click', scrollToHome);
link2.addEventListener('click', scrollToAbout);
link3.addEventListener('click', scrollToServices);
link4.addEventListener('click', scrollToContacts);
btn5.addEventListener('click', scrollToApply);
