const background = document.getElementById('background');
const changeBackgroundBtn = document.getElementById('change-background-btn');

changeBackgroundBtn.addEventListener('click', () => {
  background.style.backgroundImage = 'url("https://www.w3schools.com/html/mov_bbb.mp4")';
  background.style.backgroundSize = 'cover';
});
