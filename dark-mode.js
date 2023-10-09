const darkMode = localStorage.getItem('theme');

const darkModeToggle = document.getElementById('darkModeToggle');
const image = document.getElementById('image');
const lightModeImg = 'design/switch.svg';
const darkModeImg = 'design/switch-dark.svg'
const darkModeElements = document.querySelectorAll('body, header, .followers-count, .single-overview');

if(darkMode === 'dark-mode'){
    applyDarkMode();
}

darkModeToggle.addEventListener('click', ()=> {
      // Toggle between initial and alternate image
      if (image.src.endsWith (lightModeImg)) {
          image.src = darkModeImg;
          
        } else {
            image.src = lightModeImg;
           
        }

        darkModeElements.forEach(element => {
          element.classList.toggle('dark-mode');
        });
        
        if (image.src.endsWith(darkModeImg)){
            localStorage.setItem('theme', 'dark-mode');
        }else{
            localStorage.setItem('theme', 'light-mode');
        }

        
    });
    function applyDarkMode(){
        image.src = darkModeImg;
        darkModeElements.forEach(element =>{
            element.classList.toggle('dark-mode')
        });
    };
  


