document.addEventListener("DOMContentLoaded", function () {
    let inputField = document.querySelector(".input");
    let buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let buttonText = this.innerText;

            if (buttonText === "=") {
                try {
                    inputField.value = eval(inputField.value.replace("x", "*"));
                } catch {
                    inputField.value = "Error";
                }
            } else if (buttonText === "C") {
                inputField.value = "";
            } else {
                inputField.value += buttonText;
            }
        });
    });
    document.addEventListener("keydown", function (event) {
        let key = event.key;
        if (!isNaN(key) || "+-*/.".includes(key)) {
            inputField.value += key;
        } else if (key === "Enter") {
            try {
                inputField.value = eval(inputField.value.replace("x", "*"));
            } catch {
                inputField.value = "Error";
            }
        } else if (key === "Backspace") {
            inputField.value = inputField.value.slice(0, -1);
        } else if (key === "Escape") {
            inputField.value = "";
        }
    });
});
