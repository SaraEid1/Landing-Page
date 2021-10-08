/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navMenu= document.getElementById('navbar__list');
const sections= document.querySelectorAll('section');    
numSections = sections.length;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

function createNavList(){
  for (let i=0; i< numSections; i++){
      let item = document.createElement('a');
      item.href = `#section${i+1}`;
      item.setAttribute('id', `navItem${i+1}`);
      item.innerText=`Section ${i+1}`;
      item.className=('menu__link');
      navMenu.append(item);
  }
}

//function to highlight the active section
function activeClass(){
    for (let i=0; i<numSections ;i++){
        if (sections[i].href === window.href && (sections[i].getBoundingClientRect().top >= 0 ))
      {
              sections[i].className='active';
        }
            else {
              sections[i].classList.remove('active');
            }
    }
}


//Displaying the button while scrolling
window.onscroll = function() {
    scrollFunction()
};


//This function is responsible for displaying and hiding the button
function scrollFunction() {
    if (document.body.scrollTop > 30) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  }

//This function is responsible for navigating to the top of the page 
  function topFunction() {
    document.body.scrollTop = 0;
  }

// build the nav

createNavList();
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

document.addEventListener("scroll", activeClass);
 

const links = document.querySelectorAll('a');

//apply the smoothScroll event to all the links (navbar menu)
for (const link of links) {
  link.addEventListener("click", smoothScroll);
}
 
//function to make a scroll smooth to the clicked section
function smoothScroll(elem) {
    elem.preventDefault();
    const link = this.getAttribute("href");
    document.querySelector(link).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest"});
  }
// Build menu 

// Scroll to section on link click

// Set sections as active


