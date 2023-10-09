const darkMode = localStorage.getItem('dark-mode');

const darkModeToggle = document.getElementById('darkModeToggle');
const image = document.getElementById('image');

const lightModeImg = 'design/switch.svg';
const darkModeImg = 'design/switch-dark.svg'


darkModeToggle.addEventListener('click', ()=> {
      // Toggle between initial and alternate images
  if (image.src.endsWith (lightModeImg)) {
    image.src = darkModeImg;
  } else {
    image.src = lightModeImg;
  }

});
  
