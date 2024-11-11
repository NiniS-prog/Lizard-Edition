// Check if the user has already given consent
window.onload = function() {
    if (document.cookie.indexOf('cookies_accepted=true') === -1) {
        // If not, show the banner
        document.getElementById("cookie-consent-banner").style.display = "block";
    } else {
        // If consent has been given, load cookies (e.g., analytics, etc.)
        loadAnalytics();
    }
};

// Function to handle the acceptance of cookies
function acceptCookies() {
    // Set a cookie to remember that the user accepted
    document.cookie = "cookies_accepted=true; path=/; max-age=" + 60*60*24*365; // 1 year validity
    document.getElementById("cookie-consent-banner").style.display = "none";
    
    // Load non-essential cookies (like analytics, etc.)
    loadAnalytics();
}

// Function to handle the decline of cookies
function declineCookies() {
    // Set a cookie to remember that the user declined
    document.cookie = "cookies_accepted=false; path=/; max-age=" + 60*60*24*365; // 1 year validity
    document.getElementById("cookie-consent-banner").style.display = "none";
    
    // Ensure non-essential cookies (like analytics, ads, etc.) are not loaded
    blockAnalytics();
}

// Function to load analytics cookies (non-essential)
function loadAnalytics() {
    console.log("Analytics loaded");
    // Here, you can load external scripts for analytics or ads.
}

// Function to block analytics cookies if declined
function blockAnalytics() {
    console.log("Analytics blocked");
    // Here, you can prevent analytics scripts from being loaded.
}
