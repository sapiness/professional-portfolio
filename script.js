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

// open ovarlay to view service

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

// function openOverlay(projectName, src) {
//     const overlayContainer = document.getElementById('overlay-container');
//     if (overlayContainer.style.display === 'flex') return; // prevent multiple overlays

//     const overlayContent = document.createElement('div');
//     const body = document.body;
//     overlayContent.classList.add('overlay-content');

//     // Disable scrolling on the body element
//     body.style.overflowY = 'hidden';

//     // Add project-specific content here
//     const projectContent = `
//         <div class="overlay-header">
//             <h2>${projectName}</h2>
//             <button class="close-btn" onclick="closeOverlay()">×</button>
//         </div>
//         <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="100%" src="${src}" allowfullscreen></iframe>
//     `;
//     overlayContent.innerHTML = projectContent;
//     overlayContainer.appendChild(overlayContent);
//     overlayContainer.style.display = 'flex';
// }

function openOverlay(projectName, srcArray, isVideo = false) {
    const overlayContainer = document.getElementById('overlay-container');
    if (overlayContainer.style.display === 'flex') return; // prevent multiple overlays

    const overlayContent = document.createElement('div');
    const body = document.body;
    overlayContent.classList.add('overlay-content');

    // Disable scrolling on the body element
    body.style.overflowY = 'hidden';

    // Add project-specific content here
    let projectContent = `
        <div class="overlay-header">
            <h2>${projectName}</h2>
            <button class="close-btn" onclick="closeOverlay()">×</button>
        </div>
        <div class="masonry-grid">
    `;

    srcArray.forEach((src) => {
        if (isVideo) {
            projectContent += `
                <div class="grid-item">
                    <video width="100%" height="100%" autoplay muted loop>
                        <source src="${src}" type="video/mp4">
                    </video>
                </div>
            `;
        } else {
            projectContent += `
                <div class="grid-item">
                    <iframe width="100%" height="100%" src="${src}" allowfullscreen></iframe>
                </div>
            `;
        }
    });

    projectContent += `
        </div>
    `;

    overlayContent.innerHTML = projectContent;
    overlayContainer.appendChild(overlayContent);
    overlayContainer.style.display = 'flex';

    // Initialize masonry grid
    const grid = document.querySelector('.masonry-grid');
    const msnry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: 1200,
        gutter: 10
    });
}const msnry = new Masonry(grid,{
    itemSelector: '.grid-item',
    columnWidth: 1200,
    gutter: 20
})
function closeOverlay() {
    const overlayContainer = document.getElementById('overlay-container');
    overlayContainer.style.display = 'none';
    const body = document.body;
    // Enable scrolling on the body element
    body.style.overflowY = 'auto';
    overlayContainer.innerHTML = '';
}
