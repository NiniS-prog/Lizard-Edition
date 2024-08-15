// ext.js
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
    var menuToggle = document.querySelector(".toggle");
    var menu = document.querySelector(".menu");
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
}

// Update active menu item based on scroll position
function updateActiveMenu() {
    const sections = document.querySelectorAll("section");
    const menuItems = document.querySelectorAll("header .menu li a");

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
            menuItems.forEach(item => {
                item.classList.remove("active");
                if (item.getAttribute("href") === `#${section.id}`) {
                    item.classList.add("active");
                }
            });
        }
    });
}

// Event listeners for scroll and load to update active menu item
window.addEventListener("scroll", updateActiveMenu);
window.addEventListener("load", updateActiveMenu);

// ext2.js (Accessibility Button)
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('accessibility-button');
    if (button) {
        button.addEventListener('click', function() {
            console.log('Accessibility button clicked');
            document.body.classList.toggle('accessibility-mode');
            console.log('Accessibility mode:', document.body.classList.contains('accessibility-mode'));
        });
    } else {
        console.error('Accessibility button not found');
    }
});






