const navSlide = () => {
    const menuMobile = document.querySelector('.menuMobile');
    const nav = document.querySelector('.navBar');
    
    menuMobile.addEventListener('click', () => {
        nav.classList.toggle('menuActive')
    });
    
}

navSlide();     