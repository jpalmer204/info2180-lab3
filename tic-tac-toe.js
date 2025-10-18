window.addEventListener('DOMContentLoaded', () => {
  const squares = Array.from(document.querySelectorAll('#board div'));
  let currentPlayer = 'X';

  // Add the "square" CSS class to each one
  squares.forEach(square => {
    square.classList.add('square');

    square.addEventListener('click', () => {
        if (square.textContent !== '') return;
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    });
  });
});