const searchBox = document.getElementById('search-box')
const googleIcon = document.getElementById('google-icon')

googleIcon.onclick = function () {
  searchBox.classList.toggle('active')
}