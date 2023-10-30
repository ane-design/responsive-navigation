const hamburgerMenu = document.querySelector('.hamburger-menu');
const navigation = document.querySelector('.navigation');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

const menu = function() {
	navigation.classList.toggle('menu');
	hamburgerMenu.classList.toggle('close');
	overlay.classList.toggle('hidden');
    body.classList.toggle('overflow');
};

hamburgerMenu.addEventListener('click', menu);
overlay.addEventListener('click', menu);