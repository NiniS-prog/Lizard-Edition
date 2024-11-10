// Scroll event to toggle sticky header
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    if (header) {
        header.classList.toggle("sticky", window.scrollY > 0);
    }
});

// Toggle the visibility of the menu on mobile
function toggleMenu() {
    const menuToggle = document.querySelector(".toggle");
    const menu = document.querySelector(".menu");

    if (menuToggle && menu) {
        menuToggle.classList.toggle("active");
        menu.classList.toggle("active");
    }
}

// Update the active menu item based on scroll position
function updateActiveMenu() {
    const sections = document.querySelectorAll("section");
    const menuItems = document.querySelectorAll("header .menu li a");

    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Check if the section is in view
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
const toggleButton = document.querySelector(".toggle");
if (toggleButton) {
    toggleButton.addEventListener("click", toggleMenu);
}

// Accessibility Button Code
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('accessibility-button');
    const modal = document.getElementById('accessibility-modal');
    const closeModal = document.getElementById('close-modal');
    const toggleHighContrast = document.getElementById('toggle-high-contrast');
    const increaseFontSize = document.getElementById('increase-font-size');
    const decreaseFontSize = document.getElementById('decrease-font-size');

    // Check if the button exists and add a click event listener
    if (button) {
        button.addEventListener('click', function() {
            console.log('Accessibility button clicked');
            if (modal) {
                modal.style.display = 'block'; // Show the modal on button click
            } else {
                console.error('Modal element not found');
            }
        });
    } else {
        console.error('Accessibility button not found');
    }

    // Close modal when clicking the close button
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            if (modal) {
                modal.style.display = 'none'; // Hide modal
            }
        });
    }

    // Close modal if clicked outside the modal
    window.addEventListener('click', function(event) {
        if (modal && event.target === modal) {
            modal.style.display = 'none'; // Hide modal if clicked outside
        }
    });

    // High contrast toggle
    if (toggleHighContrast) {
        toggleHighContrast.addEventListener('click', function() {
            document.body.classList.toggle('accessibility-mode'); // Toggle high contrast mode
        });
    }

    // Increase font size
    if (increaseFontSize) {
        increaseFontSize.addEventListener('click', function() {
            document.body.classList.add('large-font-size');
            document.body.classList.remove('small-font-size');
        });
    }

    // Decrease font size
    if (decreaseFontSize) {
        decreaseFontSize.addEventListener('click', function() {
            document.body.classList.add('small-font-size');
            document.body.classList.remove('large-font-size');
        });
    }
});
