let display = document.getElementById("display");

// Append a value to the display screen
function appendValue(value) {
    if (display.value === "0" || display.value === "Error") {
        display.value = value;
    } else {
        display.value += value;
    }
}

// Clear the display screen
function clearDisplay() {
    display.value = "0";
}

// Calculate the result
function calculateResult() {
    try {
        let result = eval(display.value);
        if (!result) throw new Error("Invalid result");
        display.value = result;
    } catch (e) {
        display.value = "Error";
    }
}

// Theme toggle function
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");

    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        themeIcon.src = "images/moon.png"; // Switch to moon icon in dark mode
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        themeIcon.src = "images/sun.png"; // Switch to sun icon in light mode
    }
}

// Set initial theme to light mode
document.body.classList.add("light-mode");
