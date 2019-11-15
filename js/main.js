var elementHome = document.getElementById("home");
var elementAbout = document.getElementById("about");
var elementServices = document.getElementById("services");
var elementContacts = document.getElementById("contacts");
var elementApply = document.getElementById("apply");
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var btn3 = document.querySelector(".btn3");
var btn4 = document.querySelector(".btn4");
var btn5 = document.querySelector(".btn5");

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
