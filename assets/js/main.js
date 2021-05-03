window.onload = function() {
    
    const menu = document.querySelector('.menu');
    const menuBtn = document.querySelector('.button');
    const menuNav = document.querySelector('.nav');
    const navItem = document.querySelectorAll('.item');
    
    let showMenu = false;
    menuBtn.addEventListener('click', toggle);
    
    //displays menu on click, otherwise hided.

    function toggle() {
        if (!showMenu) {
            menuBtn.classList.add('close');
            menu.classList.add('show');
            menuNav.classList.add('show');
            
            navItem.forEach(item => item.classList.add('show'));
            showMenu = true;
        }


        else {
            menuBtn.classList.remove('close');
            menu.classList.remove('show');
            menuNav.classList.remove('show');
            
            navItem.forEach(item => item.classList.remove('show'));
            showMenu = false;
        }
    }
}