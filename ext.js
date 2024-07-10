window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
});

function toggleMenu(){
    var menuToggle = document.querySelector(".toggle");
    var menu = document.querySelector(".menu");
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
}
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    document.getElementById('accessibility-button').addEventListener('click', function() {
        console.log('Button clicked');
        toggleBackground(); // Toggle background color
    });
});

function toggleBackground() {
    document.body.classList.toggle('alternate-background'); // Toggle a class for alternate background color
    alert('Alternate Background Mode toggled.');
}
