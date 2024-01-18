const styledButton = document.getElementById('styledButton');

styledButton.addEventListener('click', function() {
  this.classList.add('pulse');
  setTimeout(() => {
    this.classList.remove('pulse');
  }, 500);
});
