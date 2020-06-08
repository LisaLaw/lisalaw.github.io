//domcontentloaded => html has loaded; in this case is an event. second param is function 
document.addEventListener('DOMContentLoaded', function() { 
    initScroll(); // ruft fctn auf
}) 

function getWindowScrollPosition() {
    return {
      x: window.pageXOffset || document.documentElement.scrollLeft,
      y: window.pageYOffset || document.documentElement.scrollTop,
    };
}

function initScroll() {
    document.addEventListener('scroll', function() {
        let scrollPos = getWindowScrollPosition().y; //herausfinden, wie weit wir von oben weg sind
        let sections = document.querySelectorAll('.main');
        
        sections.forEach(function(section) {
            let sectionTop = section.getBoundingClientRect().top; //draws invisible Kasten around elem
            let sectionBottom = section.getBoundingClientRect().bottom;
            let sectionId = section.id;
            
            if (sectionId === 'home') {
                
            

            let link = document.querySelector(`nav li a[href="#${sectionId}"]`);
            

            if (sectionTop <= scrollPos && sectionBottom >= scrollPos) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
            console.log(sectionTop, sectionBottom, scrollPos);}
        });
        
    });
}
