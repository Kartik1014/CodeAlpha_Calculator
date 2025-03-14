function Solve(val) {
    var v = document.getElementById('inputBox');
    v.value += val;
}

function Result() {
    var num1 = document.getElementById('inputBox').value;
    try {
        var num2 = eval(num1); // Removed unnecessary replacement
        document.getElementById('inputBox').value = num2;
    } catch {
        document.getElementById('inputBox').value = 'Error';
    }
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.%';

    if (validKeys.includes(key)) {
        Solve(key);
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault(); // Prevents page reload
        Result();
    } else if (key === 'Backspace') {
        Back();
    } else if (key.toLowerCase() === 'c') {
        clearDisplay();
    }
});

function Back() {
    var ev = document.getElementById('inputBox');
    if (ev.value.length > 0) {
        ev.value = ev.value.slice(0, -1);
    }
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.%';

    if (validKeys.includes(key)) {
        Solve(key);
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault(); // Prevents page reload
        Result();
    } else if (key === 'Backspace') {
        Back();
    } else if (key.toLowerCase() === 'c') {
        clearDisplay();
    }
});
