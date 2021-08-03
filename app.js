const menuIcon = document.getElementById('menu-icon')
const container = document.querySelector('.container')
const sidebar = document.querySelector('.sidebar')

menuIcon.addEventListener('click',()=>{
    sidebar.classList.toggle('small-sidebar')
    container.classList.toggle('large-container')
})



