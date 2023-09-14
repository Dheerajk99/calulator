let string = "";
let buttons = document.querySelectorAll('.button');
let inputField = document.querySelector('input');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            try {
                string = eval(string);
                inputField.value = string;
            } catch (error) {
                inputField.value = "Error";
            }
        } else if (e.target.querySelector('i.fas.fa-backspace')) {
            // Remove the last character
            string = string.slice(0, -1);
            inputField.value = string;
        } else if (e.target.innerHTML === 'AC') {
            string = "";
            inputField.value = string;
        } else {
            string = string + e.target.innerHTML;
            inputField.value = string;
        }
    });
});
