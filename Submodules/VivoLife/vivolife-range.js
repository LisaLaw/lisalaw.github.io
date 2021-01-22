//make navbar smaller on scroll
window.onscroll = function () {scrollFunction()};

let dropdownMenu = document.getElementsByClassName('inner-list');
let navBar = document.getElementsByClassName('navbar')[0];

function scrollFunction() {
    if(document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        navBar.style.padding = '0px 10px';
        navBar.style.top = '0px';
        dropdownMenu.style.top = '10px';
    }
    else {
        navBar.style.padding = "35px 10px";
        navBar.style.top = "40px";
        dropdownMenu.style.padding = '10px';
        dropdownMenu.style.top = '50px';
    }
}

//make design responsive to width
let toggleBtn = document.getElementsByClassName('toggle-button')[0];
let navLinksLeft = document.getElementsByClassName('nav-links')[0];
let navLinksRight = document.getElementsByClassName('nav-links')[2];

toggleBtn.addEventListener('click', () => { //on click of toggle button, add active function to nav-links
    navLinksLeft.classList.toggle('active');
    navLinksRight.classList.toggle('active');
})

//create dropdown menu
let firstDropdownBtn = document.getElementsByClassName('dropdown')[0];
let secondDropdownBtn = document.getElementsByClassName('dropdown')[1];
let firstInnerLinks = document.getElementsByClassName('inner-list')[0];
let secondInnerLinks = document.getElementsByClassName('inner-list')[1];

//shop+ button:
firstDropdownBtn.addEventListener('click', () => { //on click, do the following
    if (secondInnerLinks.classList == 'inactive-dropdown' && firstInnerLinks.classList == 'inactive-dropdown') { //if both buttons are closed
        firstInnerLinks.classList.remove('inactive-dropdown'); //remove closure from this btn
        firstInnerLinks.classList.add('active-dropdown'); // add opening to this btn
    } else if (secondInnerLinks.classList == 'inactive-dropdown' && firstInnerLinks.classList == 'active-dropdown') { //if other btn is closed and this btn is open
        firstInnerLinks.classList.remove('active-dropdown'); //remove opening from this btn
        firstInnerLinks.classList.add('inactive-dropdown'); //add closure to this btn
    } else { //else the other btn is open
        secondInnerLinks.classList.remove('active-dropdown'); //remove opening from other btn
        firstInnerLinks.classList.toggle('active-dropdown'); //toggle open-close to this btn
    }
})

//vivo+ button
secondDropdownBtn.addEventListener('click', () => { //on click, do the following
    if (firstInnerLinks.classList == 'inactive-dropdown' && secondInnerLinks.classList == 'inactive-dropdown') { //if both buttons are closed
        secondInnerLinks.classList.remove('inactive-dropdown'); //remove closure from this btn
        secondInnerLinks.classList.add('active-dropdown'); // add opening to this btn
    } else if (firstInnerLinks.classList == 'inactive-dropdown' && secondInnerLinks.classList == 'active-dropdown') { //if other btn is closed and this btn is open
        secondInnerLinks.classList.remove('active-dropdown'); //remove opening from this btn
        secondInnerLinks.classList.add('inactive-dropdown'); //add closure to this btn
    } else { //else the other btn is open
        firstInnerLinks.classList.remove('active-dropdown'); //remove opening from other btn
        secondInnerLinks.classList.toggle('active-dropdown'); //toggle open-close to this btn
    }
})

//make first dropdown menu responsive to width
let innerToggleBtnShop = document.getElementsByClassName('toggle')[0];
let innerLinksShop = document.getElementsByClassName('inner-list')[0];

innerToggleBtnShop.addEventListener('click', () => {
    innerLinksShop.classList.toggle('active');
})

//make second dropdown menu responsive to width
let innerToggleBtnVivo = document.getElementsByClassName('toggle')[1];
let innerLinksVivo = document.getElementsByClassName('inner-list')[1];

innerToggleBtnVivo.addEventListener('click', () => {
    innerLinksVivo.classList.toggle('active');
})