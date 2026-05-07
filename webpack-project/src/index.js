import './style.css';

// Находим элементы на странице
const button = document.getElementById('counter');
const display = document.getElementById('count-display');
let count = 0;

// Добавляем обработчик нажатия на кнопку
button.addEventListener('click', () => {
    count++;
    display.textContent = count;
    console.log(`Vite счетчик: ${count}`);
});

console.log('Vite проект успешно загружен!');