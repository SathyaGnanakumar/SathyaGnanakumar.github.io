document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Handle click events
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Handle scroll events to auto-highlight current section
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id], #home, #about, #projects, #resume, #footer');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        // Special handling for footer - if we're near the bottom of the page
        const footer = document.getElementById('footer');
        if (footer) {
            const footerTop = footer.offsetTop;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            
            // If we're close to the bottom or have scrolled to footer
            if (window.pageYOffset >= (footerTop - 300) || 
                window.pageYOffset + windowHeight >= documentHeight - 100) {
                current = 'footer';
            }
        }
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});