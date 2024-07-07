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
