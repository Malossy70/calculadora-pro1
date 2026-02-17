const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const calculator = document.getElementById('calculator');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        // Quitar el modo error al presionar cualquier botón
        calculator.classList.remove('error-mode');

        if (button.id === 'ac') {
            display.value = '';
        } 
        else if (button.id === 'de') {
            display.value = display.value.slice(0, -1);
        } 
        else if (button.id === '=') {
            try {
                // Si la pantalla está vacía, no hace nada
                if(display.value === "") return;
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
                // Activar el resplandor rojo
                calculator.classList.add('error-mode');
            }
        } 
        else {
            display.value += value;
        }
    });
});
