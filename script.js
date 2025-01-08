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
