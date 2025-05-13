  const nameInput = document.querySelector('#name-input');
  const nameOutput = document.querySelector('#name-output');

  if (nameInput && nameOutput) {
    nameInput.addEventListener('input', (event) => {
      const inputValue = event.target.value;
      const cleanedValue = inputValue.trim();

      if (cleanedValue === '') {
        nameOutput.textContent = 'Anonymous';
      } else {
        nameOutput.textContent = cleanedValue;
      }
    });
  } else {
    console.error("Не знайдено один або обидва потрібні елементи (input#name-input або span#name-output)!");
  }
