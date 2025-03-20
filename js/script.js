document.addEventListener("DOMContentLoaded", function () {
    // Social Media Links
    document.getElementById("whatsapp-link").href = "https://wa.me/your-number";
    document.getElementById("instagram-link").href = "https://www.instagram.com/your-profile";
    document.getElementById("facebook-link").href = "https://www.facebook.com/your-page";

    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-icon");
    const menu = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // Language Selector
    const languageSelect = document.getElementById("language-select");
    if (languageSelect) {
        languageSelect.addEventListener("change", function () {
            loadLanguage(this.value);
        });
    }

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
    if (partnerTrack) {
        partnerTrack.style.animationDuration = "30s"; // Slow down the scrolling
    }

    // Full-Screen Rotating Home Images
    const images = document.querySelectorAll(".image-gallery img");
    let currentIndex = 0;

    function rotateImages() {
        images.forEach(img => img.style.opacity = "0");
        images[currentIndex].style.opacity = "1";
        currentIndex = (currentIndex + 1) % images.length;
    }

    if (images.length > 0) {
        setInterval(rotateImages, 10000); // Change image every 10 seconds
        rotateImages(); // Initialize first image display
    }

    // File Upload Functionality
    const fileInput = document.getElementById("resume");
    const fileInfo = document.getElementById("file-info");
    const removeFileButton = document.getElementById("remove-file");

    if (fileInput) {
        fileInput.addEventListener("change", function () {
            if (fileInput.files.length > 0) {
                let fileName = fileInput.files[0].name;
                let fileType = fileInput.files[0].type || "Unknown format";
                fileInfo.innerText = `Uploaded: ${fileName} (${fileType})`;
                removeFileButton.style.display = "inline-block";
            } else {
                fileInfo.innerText = "";
                removeFileButton.style.display = "none";
            }
        });
    }

    if (removeFileButton) {
        removeFileButton.addEventListener("click", function () {
            fileInput.value = "";
            fileInfo.innerText = "File removed!";
            removeFileButton.style.display = "none";
        });
    }
});
