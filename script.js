const siButton = document.getElementById('si-button');
const noButton = document.getElementById('no-button');

siButton.addEventListener('mouseover', () => {
  const newX = Math.random() * (window.innerWidth - siButton.offsetWidth);
  const newY = Math.random() * (window.innerHeight - siButton.offsetHeight);
  siButton.style.left = newX + 'px';
  siButton.style.top = newY + 'px';
});

noButton.addEventListener('mouseover', () => {
  const newX = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const newY = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.left = newX + 'px';
  noButton.style.top = newY + 'px';
});