import { add } from './calculator/stringCalculator.js';

document.getElementById('calculate-btn').addEventListener('click', () => {
  const input = document.getElementById('numbers-input').value;
  try {
    const result = add(input);
    document.getElementById('result').innerText = `Result: ${result}`;
  } catch (e) {
    document.getElementById('result').innerText = e.message;
  }
});