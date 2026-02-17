const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (button.id === 'ac') {
            display.value = '';
        } 
        else if (button.id === 'de') {
            display.value = display.value.slice(0, -1);
        } 
        else if (button.id === '=') {
            try {
                // Usamos una función segura para evaluar o eval
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
                setTimeout(() => display.value = "", 1500);
            }
        } 
        else {
            // Evita que se escriba el texto del botón "=" o "AC" por error
            if (value !== '=' && value !== 'AC' && value !== 'DE') {
                display.value += value;
            }
        }
    });
});
