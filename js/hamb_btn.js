const menuBtn = document.querySelector('.menu-btn');
const needblur = document.getElementsByClassName('needblur');
const overlay = document.querySelector('.overlay');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
	if(!menuOpen){
		menuBtn.classList.add('open');
		overlay.classList.add('open');
		for (i = 0; i < needblur.length; ++i) needblur[i].classList.add('blur');
		menuOpen = true;
	} else {
		menuBtn.classList.remove('open');
		overlay.classList.remove('open');
		for (i = 0; i < needblur.length; ++i) needblur[i].classList.remove('blur');
		menuOpen = false;
	}
})