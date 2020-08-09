window.onload = function () {
    var toggle = document.getElementById("dark-mode-toggle");
    var theme = document.getElementById("theme");

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme(localStorage.getItem("dark-mode-storage") || "dark");
    } else {
        setTheme(localStorage.getItem("dark-mode-storage") || "light");
    }

    toggle.addEventListener("click", () => {
        if (toggle.className === "fas fa-moon") {
            setTheme("dark");
        } else if (toggle.className === "fas fa-sun") {
            setTheme("light");
        }
    });

    function setTheme(mode) {
        localStorage.setItem("dark-mode-storage", mode);
        if (mode === "dark") {
            theme.className = "darkTheme";
            toggle.className = "fas fa-sun";
        } else if (mode === "light") {
            theme.className = "lightTheme";
            toggle.className = "fas fa-moon";
        }
    }
}