document.addEventListener("DOMContentLoaded", function () {
    // Social Media Links
    document.getElementById("whatsapp-link").href = "https://wa.me/your-number";
    document.getElementById("instagram-link").href = "https://www.instagram.com/your-profile";
    document.getElementById("facebook-link").href = "https://www.facebook.com/your-page";

    // Language Selector
    const languageSelect = document.getElementById("language-select");
    languageSelect.addEventListener("change", function () {
        loadLanguage(this.value);
    });

    function loadLanguage(language) {
        fetch(`languages/${language}.json`)
            .then(response => response.json())
            .then(data => {
                document.getElementById("info-text").innerText = data.info;
            })
            .catch(error => console.error("Error loading language file:", error));
    }

    // Partner Logos Scroll
    const partnerTrack = document.querySelector(".partners-track");
    partnerTrack.style.animationDuration = "30s"; // Slow down the scrolling

    // Full-Screen Rotating Home Images
    const images = document.querySelectorAll(".image-gallery img");
    let currentIndex = 0;

    function rotateImages() {
        images.forEach(img => img.style.opacity = "0");
        images[currentIndex].style.opacity = "1";
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(rotateImages, 10000); // Change image every 10 seconds
    rotateImages(); // Initialize first image display
});
