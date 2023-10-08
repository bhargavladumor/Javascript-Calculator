var buttons = document.querySelectorAll(".button");
var res = document.getElementById('input');

var char = ["+", "-", "*", "/", ".", "%"];

for (i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', function () {

        if (this.value == "=") {
            if (char.includes(res.value.charAt(res.value.length - 1))) {
                res.style.border = "1px solid red";
                res.value = res.value;
            }
            else {
                res.style.border = "none";
                res.value = eval(res.value);
            }
        }

        else if (this.value == "AC") {
            res.value = "";
        }

        else if (this.value == "DEL") {
            res.value = res.value.substr(0, res.value.length - 1);
        }

        else if (char.includes(res.value.charAt(res.value.length - 1)) && char.includes(this.value)) {
            res.value = res.value.substr(0, res.value.length - 1) + this.value;
        }

        else if (this.value == "pow") {
            if (char.includes(res.value.charAt(res.value.length - 1))) {
                res.value = res.value.substr(0, res.value.length - 1);
            }
            else {
                res.value = Math.pow(res.value, 2);
            }
        }

        else if (this.value == "sqrt") {
            if (char.includes(res.value.charAt(res.value.length - 1))) {
                res.value = res.value.substr(0, res.value.length - 1);
            }
            else {
                res.value = Math.sqrt(res.value);
            }
        }

        else if (this.value == "%") {
            res.value = eval(res.value);
            res.value = res.value / 100;
        }

        else if (this.value == "PN") {
            if (char.includes(res.value.charAt(res.value.length - 1))) {
                res.value = res.value;
            }
            else if (res.value.charAt(res.value.length - 1) == ")") {
                var lastChar = res.value.substring(res.value.length - 2, res.value.length - 1);
                res.value = res.value.substring(0, res.value.length - 4)
                res.value = res.value + lastChar;
            }
            else {
                var last = res.value.charAt(res.value.length - 1);
                res.value = res.value.substring(0, res.value.length - 1);
                last = "(-" + last + ")";
                res.value = res.value + last;
            }
        }

        else {

            res.value = res.value + this.value;
        }

    })
}