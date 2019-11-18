const elementHome = document.getElementById("home");
const elementAbout = document.getElementById("about");
const elementServices = document.getElementById("services");
const elementContacts = document.getElementById("contacts");
const elementApply = document.getElementById("apply");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");

function scrollToHome() {
  elementHome.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function scrollToAbout() {
  elementAbout.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function scrollToServices() {
  elementServices.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function scrollToContacts() {
  elementContacts.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function scrollToApply() {
  elementApply.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

btn1.addEventListener("click", scrollToHome);
btn2.addEventListener("click", scrollToAbout);
btn3.addEventListener("click", scrollToServices);
btn4.addEventListener("click", scrollToContacts);
btn5.addEventListener("click", scrollToApply);
