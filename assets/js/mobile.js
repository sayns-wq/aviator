'use strict';

const open = document.querySelector('#open'),
      close = document.querySelector('#close'),
      menu = document.querySelector('.cascad-menu'),
      mainPage = document.querySelector('.mobile');

let width = window.outerWidth;
    


open.addEventListener('click', () => {
    menu.style.height = '100vh';
    
});

// close.addEventListener('click', () => {
//     menu.classList.remove('show');
// });

close.addEventListener('click', () => {
    menu.style.height = '0vh';
});


// function closeMenu(menu, hideMenu) {
//     mobile.classList.add('animation');
//     menu.classList.remove('show');
// };

// function hideMenu() {
//     menu.classList.add('hide')
// };



