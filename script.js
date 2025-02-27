// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

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

function openOverlay(projectName) {
  const overlayContainer = document.getElementById('overlay-container');
  const overlayContent = document.createElement('div');
  const body = document.body;
  overlayContent.classList.add('overlay-content');
  
  // Disable scrolling on the body element
  body.style.overflowY = 'hidden';

  // Add project-specific content here
  const projectContent = `
    <h2>${projectName}</h2>
    <p>This is the project content for ${projectName}.</p><br>
    <div class="close" onclick="closeOverlay()">
     <i class="fa fa-times" aria-hidden="true"></i>
</div>
    <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="1100" height="650" src="https://embed.figma.com/design/kSyiHDP0jyuNfZXMvRyiuM/Untitled?node-id=0-1&embed-host=share" allowfullscreen></iframe><br><br>
    <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="1100" height="650" src="https://embed.figma.com/design/ATZxn9RfASRXF2CML2Ao4g/Untitled?node-id=1-2&embed-host=share" allowfullscreen></iframe>
   <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="1100" height="650" src="https://embed.figma.com/design/57H44J576wwBf3Oo2Ky6jp/dashboard?node-id=0-1&embed-host=share" allowfullscreen></iframe>
  `;
  overlayContent.innerHTML = projectContent;
  
  overlayContainer.appendChild(overlayContent);
  overlayContainer.style.display = 'flex';
}

function openOverlay2(projectName) {
  const overlayContainer = document.getElementById('overlay-container');
  const overlayContent = document.createElement('div');
  const body = document.body;
  overlayContent.classList.add('overlay-content');
  
  // Disable scrolling on the body element
  body.style.overflowY = 'hidden';

  // Add project-specific content here
  const projectContent = `
    <h2>${projectName}</h2>
    <p>This is the project content for ${projectName}.</p><br>
    <div class="close" onclick="closeOverlay()">
     <i class="fa fa-times" aria-hidden="true"></i>
</div>
<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="1000" height="750" src="https://weather-dashboard-capstone-project.netlify.app" allowfullscreen></iframe><br><br>
<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="1000" height="750" src="https://gymwebsite-project.netlify.app" allowfullscreen></iframe><br><br>
// <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="1000" height="750" src="https://animated-gym-website.netlify.app" allowfullscreen></iframe><br><br>
<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="1000" height="750" src="https://dynamic-to-do-list-project.netlify.app" allowfullscreen></iframe><br><br>

`;
  overlayContent.innerHTML = projectContent;
  overlayContainer.appendChild(overlayContent);
  overlayContainer.style.display = 'flex';
}


function openOverlay3(projectName) {
  const overlayContainer = document.getElementById('overlay-container');
  const overlayContent = document.createElement('div');
  const body = document.body;
  overlayContent.classList.add('overlay-content');
  
  // Disable scrolling on the body element
  body.style.overflowY = 'hidden';

  // Add project-specific content here
  const projectContent = `
    <h2>${projectName}</h2>
    <p>This is the project content for ${projectName}.</p><br>
   
    <div class="close" onclick="closeOverlay()">
     <i class="fa fa-times" aria-hidden="true"></i>
</div>
 <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="510px" height="510px" src="new Mobile App Video.mp4" mute=1 allowfullscreen></iframe>
 <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="510px" height="510px" src="Mobile App Post.png" allowfullscreen></iframe>
  <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="510px" height="510px" src="sapi flyer.pdf"  allowfullscreen></iframe>
 
 `;
  overlayContent.innerHTML = projectContent;
  
  overlayContainer.appendChild(overlayContent);
  overlayContainer.style.display = 'flex';
}

function closeOverlay() {
  const overlayContainer = document.getElementById('overlay-container');
  overlayContainer.style.display = 'none';
  const body = document.body;
  // Enable scrolling on the body element
  body.style.overflowY = 'auto';
  overlayContainer.innerHTML = '';
}

