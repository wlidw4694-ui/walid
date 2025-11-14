let display = document.getElementById("display");

function press(value) {
    if (value === 'π') value = Math.PI;
    if (value === 'e') value = Math.E;

    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let exp = display.value;

    exp = exp.replace(/sin/g, "Math.sin");
    exp = exp.replace(/cos/g, "Math.cos");
    exp = exp.replace(/tan/g, "Math.tan");
    exp = exp.replace(/log/g, "Math.log10");
    exp = exp.replace(/ln/g, "Math.log");
    exp = exp.replace(/√/g, "Math.sqrt");
    exp = exp.replace(/\^/g, "**");

    try {
        display.value = eval(exp);
    } catch (e) {
        display.value = "خطأ";
    }
}
