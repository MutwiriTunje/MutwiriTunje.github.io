document.addEventListener("DOMContentLoaded", () => {
    // Get the root element
    const root = document.documentElement;
    // Get the theme toggle container
    const themeToggle = document.getElementById("theme-toggle");
    // Get the sun and moon icons
    const sunIcon = document.getElementById("sun-icon");
    const moonIcon = document.getElementById("moon-icon");
    // Get the user's preference from localStorage
    const darkMode = localStorage.getItem("dark-mode");

    // Check if the user has already chosen a theme
    if (darkMode) {
        // If yes, apply it to the root element
        root.classList.add("dark-theme");
        moonIcon.style.display = "none"; // Hide moon icon
        sunIcon.style.display = "inline"; // Show sun icon
    } else {
        sunIcon.style.display = "none"; // Hide sun icon
        moonIcon.style.display = "inline"; // Show moon icon
    }

    // Add an event listener to the theme toggle container
    themeToggle.addEventListener("click", () => {
        // Toggle the dark-theme class on the root element
        root.classList.toggle("dark-theme");

        // Toggle icon visibility
        if (root.classList.contains("dark-theme")) {
            localStorage.setItem("dark-mode", true);
            moonIcon.style.display = "none"; // Hide moon icon
            sunIcon.style.display = "inline"; // Show sun icon
        } else {
            localStorage.removeItem("dark-mode");
            sunIcon.style.display = "none"; // Hide sun icon
            moonIcon.style.display = "inline"; // Show moon icon
        }
    });
});

