const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (button.id === 'ac') {
            // Limpiar todo
            display.value = '';
        } 
        else if (button.id === 'de') {
            // Borrar el último carácter (Delete)
            display.value = display.value.slice(0, -1);
        } 
        else if (button.id === '=') {
            // Calcular el resultado
            try {
                // Evaluamos la expresión matemática
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
                setTimeout(() => display.value = "", 1500);
            }
        } 
        else {
            // Escribir el número o operador en el display
            // Si el botón es "00", se añade "00", si no, el texto del botón
            display.value += value;
        }
    });
});
