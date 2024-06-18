document.addEventListener("DOMContentLoaded", function() {
    var aboutSection = document.getElementById("about");
    var lizardImage = document.querySelector(".proPic");

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
                lizardImage.style.filter = "none"; // Remove grayscale when in viewport
            } else {
                lizardImage.style.filter = "grayscale(100%)"; // Apply grayscale otherwise
            }
        });
    });

    observer.observe(aboutSection);

    // Add event listeners to remove grayscale filter on hover
    aboutSection.addEventListener("mouseenter", function() {
        lizardImage.style.filter = "none"; // Remove grayscale on hover
    });

    aboutSection.addEventListener("mouseleave", function() {
        // Reapply grayscale if not in viewport
        if (!aboutSection.getBoundingClientRect().top <= 0) {
            lizardImage.style.filter = "grayscale(100%)";
        }
    });
});
