const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('#search-btn');
var result = document.querySelector('#Result');
let searchLink = "https://www.google.com/search?q=";
searchBtn.addEventListener('click', () => {
  if (searchInput.value.length) {
    location.href = searchLink + searchInput.value;
    /*location.replace('result.html');
    localStorage.setItem('Url', searchLink + searchInput.value);*/
  }
});
searchInput.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    location.href = searchLink + searchInput.value;
    /*location.replace('result.html');
    localStorage.setItem('Url', searchLink + searchInput.value); */
  }
});