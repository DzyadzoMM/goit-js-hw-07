// Дочекаємося повного завантаження DOM-дерева
document.addEventListener('DOMContentLoaded', () => {

  // Знаходимо елементи input та span за їхніми ID
  const nameInput = document.querySelector('#name-input');
  const nameOutput = document.querySelector('#name-output');

  // Перевіряємо, чи обидва елементи були знайдені
  if (nameInput && nameOutput) {
    // Додаємо слухач події 'input' до поля вводу
    // Подія 'input' спрацьовує щоразу, коли змінюється значення елемента <input>, <select> або <textarea>
    nameInput.addEventListener('input', (event) => {
      // Отримуємо поточне значення поля вводу з об'єкта події (event.target)
      const inputValue = event.target.value;

      // Очищаємо значення від пробілів на початку та в кінці рядка
      const cleanedValue = inputValue.trim();

      // Перевіряємо, чи очищене значення порожнє (або містило лише пробіли)
      if (cleanedValue === '') {
        // Якщо порожнє, встановлюємо текст спану на "Anonymous"
        nameOutput.textContent = 'Anonymous';
      } else {
        // Якщо не порожнє, встановлюємо текст спану на очищене значення
        nameOutput.textContent = cleanedValue;
      }

      // Коротший варіант з тернарним оператором:
      // nameOutput.textContent = cleanedValue === '' ? 'Anonymous' : cleanedValue;
    });
  } else {
    console.error("Не знайдено один або обидва потрібні елементи (input#name-input або span#name-output)!");
  }
});
