function toggleNavMenu() {
	var navMenu = document.getElementById('navMenu');
	if (navMenu.classList.contains('show')) {
		navMenu.classList.remove('show');
		setTimeout(() => { navMenu.style.display = 'none'; }, 300);
	} else {
		navMenu.style.display = 'block';
		setTimeout(() => { navMenu.classList.add('show'); }, 10);
	}
}

function hideNavMenu() {
	navMenu.classList.remove('show');
	setTimeout(() => { navMenu.style.display = 'none'; }, 300);
}