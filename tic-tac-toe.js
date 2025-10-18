window.addEventListener('DOMContentLoaded', () => {
  const squares = Array.from(document.querySelectorAll('#board div'));

  // Add the "square" CSS class to each one
  squares.forEach(square => {
    square.classList.add('square');
  });
});