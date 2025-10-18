window.addEventListener('DOMContentLoaded', () => {
  const squares = Array.from(document.querySelectorAll('#board div'));
  const status = document.getElementById('status');
  let currentPlayer = 'X';
  let gameOver = false;

  function checkWinner(player) {
    const board = squares.map(sq => sq.textContent);
    const winPatterns = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    return winPatterns.some(pattern =>
      pattern.every(index => board[index] === player)
    );
  }

  squares.forEach(square => {
    square.classList.add('square');

    square.addEventListener('mouseenter', () => {
      if (square.textContent === '') square.classList.add('hover');
    });

    square.addEventListener('mouseleave', () => {
      square.classList.remove('hover');
    });

    square.addEventListener('click', () => {
      if (gameOver || square.textContent !== '') return;

      square.textContent = currentPlayer;
      square.classList.add(currentPlayer);
      square.classList.remove('hover');

      if (checkWinner(currentPlayer)) {
        status.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
        status.classList.add('you-won');
        gameOver = true;
        return;
      }

      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    });
  });
});