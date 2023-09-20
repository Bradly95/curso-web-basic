const navMenu = document.getElementById('nav-menu');
const menuIcon = document.getElementById('menu-icon');

const linksMenu = Array.from(navMenu.getElementsByTagName('a'));
linksMenu.map(l=>{
    l.addEventListener('click', handleClick);
})

menuIcon.addEventListener('click', handleClick);

function handleClick(){
    if(window.innerWidth < 991){
        navMenu.style.display === 'block' ? navMenu.style.display = 'none' : navMenu.style.display = 'block';
    }
}