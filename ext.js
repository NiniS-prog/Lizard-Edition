// Scroll listener to make header sticky
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Function to toggle the menu (both main menu and dropdown)
function toggleMenu() {
    var menuToggle = document.querySelector(".toggle");
    var menu = document.querySelector(".menu");
    var insightsLink = document.querySelector('.dropdown > a'); // Target Insights & News link

    // Toggle active state for menu and toggle button
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");

    // Toggle active class on "Insights & News" link to show dropdown
    if (insightsLink) {
        insightsLink.classList.toggle("active");
    }
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

                // Check if the item matches the section, or if it's a dropdown item
                if (item.getAttribute("href") === `#${section.id}` || 
                    item.closest('.dropdown-menu') && item.closest('.dropdown-menu').previousElementSibling.classList.contains("active")) {
                    item.classList.add("active");
                    // Make sure dropdown menu link is active
                    if (item.closest('.dropdown-menu')) {
                        item.closest('.dropdown-menu').previousElementSibling.classList.add("active");
                    }
                }
            });
        }
    });
}

// Event listeners for scroll and load to update active menu item
window.addEventListener("scroll", updateActiveMenu);
window.addEventListener("load", updateActiveMenu);

// Accessibility features (if any are present)
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
