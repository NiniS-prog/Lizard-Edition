// ext.js
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Toggle the menu visibility
function toggleMenu() {
    const menuToggle = document.querySelector(".toggle");
    const menu = document.querySelector(".menu");
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
}

// Update active menu item based on scroll position
function updateActiveMenu() {
    const sections = document.querySelectorAll("section");
    const menuItems = document.querySelectorAll("header .menu li a");

    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
            currentSectionId = section.id;
        }
    });

    menuItems.forEach(item => {
        item.classList.remove("active");
        if (item.getAttribute("href").includes(`#${currentSectionId}`)) {
            item.classList.add("active");
        }
    });
}

// Event listeners for scroll and load to update active menu item
window.addEventListener("scroll", updateActiveMenu);
window.addEventListener("load", updateActiveMenu);

// Optional: Trigger toggleMenu if needed, for example, on mobile interaction
document.querySelector(".toggle").addEventListener("click", toggleMenu);

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('accessibility-button');
    const modal = document.getElementById('accessibility-modal');
    const closeModal = document.getElementById('close-modal');
    const toggleHighContrast = document.getElementById('toggle-high-contrast');
    const increaseFontSize = document.getElementById('increase-font-size');
    const decreaseFontSize = document.getElementById('decrease-font-size');

    if (button) {
        button.addEventListener('click', function() {
            modal.style.display = 'block';
        });
    } else {
        console.error('Accessibility button not found');
    }

    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    if (toggleHighContrast) {
        toggleHighContrast.addEventListener('click', function() {
            document.body.classList.toggle('accessibility-mode');
        });
    }

    if (increaseFontSize) {
        increaseFontSize.addEventListener('click', function() {
            document.body.classList.add('large-font-size');
            document.body.classList.remove('small-font-size');
        });
    }

    if (decreaseFontSize) {
        decreaseFontSize.addEventListener('click', function() {
            document.body.classList.add('small-font-size');
            document.body.classList.remove('large-font-size');
        });
    }
});
