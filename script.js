const screen = document.getElementById("scrn");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "AC") {
            expression = "";
            screen.innerText = "";
        }
        else if (value === "DE") {
            expression = expression.slice(0, -1);
            screen.innerText = expression;
        }
        else if (value === "=") {
            try {
                expression = expression.replace(/x/g, "*");
                expression = eval(expression).toString();
                screen.innerText = expression;
            } catch {
                screen.innerText = "Error";
                expression = "";
            }
        }
        else {
            expression += value;
            screen.innerText = expression;
        }
    });
});
