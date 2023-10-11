const darkMode = localStorage.getItem('theme');

const darkModeToggle = document.getElementById('darkModeToggle');
const image = document.getElementById('image');
const lightModeImg = 'design/switch.svg';
const darkModeImg = 'design/switch-dark.svg'
const darkModeElements = document.querySelectorAll('body, header, .followers-count, .single-overview');



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
    
    
const applyDarkMode = () =>{
    image.src = darkModeImg;
    darkModeElements.forEach(element =>{
        element.classList.toggle('dark-mode')
    });
};


if(darkMode === 'dark-mode'){
    applyDarkMode();

}



const fetchData = (url, calback) =>{
    const http = new XMLHttpRequest();
    http.open('get', url, true);
    http.onreadystatechange = function(){
        // in this function i need to check the readyState and stutus property.
        if (this.readyState == 4 && http.status == 200){
            // if we have a successful this.response, i have to parse the JSON data
            // and convert it to javasript array.
            const data = JSON.parse(http.responseText);
            calback(data);
        }
    }
    http.send();
};

document.addEventListener('DOMContentLoaded', () => {
    fetchData('data.json', (data) =>{
        const followersCount = data['followers-count'];

        const singleOverview = data['single-overview']

        let followersHTML = '';
        followersCount.forEach((follower) => {
           followersHTML += ` <div class="followers-count  ">
            <p class="email"><i id="${follower["social_media_id"]}" class="${follower["social_media"]}"></i>${follower.username}</p>
            <h1 id="count">${follower.count}</h1>
            <p id="followers">${follower["followers_type"]}</p>
            <p id="${follower["arrow_id"]}"><i class="fa-solid fa-caret-up"></i>${follower["change_today"]} </p>
        </div>`;
        });
        document.querySelector('.follower-section').innerHTML = followersHTML;
        
        let overviewHTML = '';
        singleOverview.forEach((overview) =>{
            overviewHTML += `<div class="single-overview ">
            <div class="title">
                <p>${overview.metric}</p>
                <i id="${overview["social_media_id"]}" class="${overview["icon_class"]}"></i>
            </div>
            <div class="result ">
                <h1>${overview["result"]}</h1>
                <p id="${overview["arrow_id"]}"><i class="fa-solid fa-caret-up"></i> ${overview["change_today"]}</p>
            </div>
        </div>`;
        });
        document.querySelector('.daily-overview').innerHTML = overviewHTML;
    });
    // Assume 'followers-count' elements have the class 'new-class-name' initially.

    const darkModeToggle = document.getElementById('darkModeToggle');

    darkModeToggle.addEventListener('click', () => {
        const followersCountElements = document.querySelectorAll('.followers-count, .single-overview');

        followersCountElements.forEach(element => {
            element.classList.toggle('dark-mode');
        });
    });

});