window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const sections = document.querySelectorAll('section'); // Assuming sections are what you want to detect

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const headerHeight = header.offsetHeight;

        // Check if the section is beneath the header
        if (rect.top < headerHeight && rect.bottom > 0) {
            header.classList.add('light-up');
        } else {
            header.classList.remove('light-up');
        }
    });
});
