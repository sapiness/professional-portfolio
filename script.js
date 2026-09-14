// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');
const slider = document.querySelector('.slider');

let currentIndex = 0;
let autoSlideInterval;


let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}


// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    
    // FIXES: Restore page scrolling when a link is clicked
    body.style.overflow = "auto"; 
    if (typeof scrollBtn !== 'undefined') {
      scrollBtn.style.pointerEvents = "auto";
    }
  });
}


// Home Animation

const homeContent = document.querySelector('.home-content');
const textElements = document.querySelectorAll('.text-one, .text-two, .text-three');
const button = document.querySelector('.button');
window.addEventListener('load', () => {
  homeContent.classList.add('animate');
  textElements.forEach((element) => {
    element.classList.add('animate');
  });
  button.classList.add('animate');
});



//Tabs
tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        const activeTab = document.querySelector(`#${tab}`);

        // Remove active class from all tabs
        tabBtns.forEach((btn) => btn.classList.remove('active'));
        tabPanes.forEach((pane) => pane.classList.remove('active'));

        // Add active class to clicked tab
        btn.classList.add('active');
        activeTab.classList.add('active');
    });
});




// animations

document.addEventListener('DOMContentLoaded', () => {
  const logoText = document.querySelectorAll('.logo a span');
  logoText.forEach((letter, index) => {
    letter.style.transitionDelay = `${index * 0.1}s`;
    letter.classList.add('pan');
    setTimeout(() => {
      letter.classList.remove('pan');
    }, 500 + (index * 100)); // adjust the time as needed
  });
});


function goBack() {
    // Navigates back to the previous page in history (index.html)
    // This preserves the page state instead of reloading it
    if (document.referrer.includes("index.html") || window.history.length > 1) {
        window.history.back();
    } else {
        // Fallback in case they arrived at this page directly
        window.location.href = "index.html";
    }
}







