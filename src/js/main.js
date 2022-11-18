const mobileNav = document.querySelector('.navigation-desktop') //nawigacja tekstowa
const burgerIco = document.querySelector('.burger') //burger
const links = document.querySelectorAll('.link') // linki w nawigacji
const burgerLines = document.querySelectorAll('.line') //linie w burgerze
const sections = document.querySelectorAll('.section') //sekcje
const cookieBox = document.querySelector('.cookie-box')
const cookieBtn = document.querySelector('.cookie-btn')
const footerYear = document.querySelector('.footerYear')

burgerIco.addEventListener('click', () => {
	if (!mobileNav.classList.contains('active')) {
		mobileNav.classList.add('active')
		burgerIco.classList.add('active')
		bgnActive()
	} else {
		mobileNav.classList.remove('active')
		burgerIco.classList.remove('active')
	}
})

links.forEach(link =>
	link.addEventListener('click', () => {
		mobileNav.classList.toggle('active')
		burgerIco.classList.remove('active')
	})
)

const handleObserver = () => {
	const currentSection = window.scrollY

	sections.forEach(section => {
		if (
			section.classList.contains('white-section') &&
			section.offsetTop <= currentSection + 180 &&
			!mobileNav.classList.contains('active')
		) {
			burgerLines.forEach(line => {
				line.classList.add('black')
			})
		} else if (
			!section.classList.contains('white-section') &&
			section.offsetTop <= currentSection + 120 &&
			mobileNav.classList != 'active'
		) {
			burgerLines.forEach(line => {
				line.classList.remove('black')
			})
		}
	})
}

const bgnActive = () => {
	if (burgerIco.classList.contains('active') && mobileNav.classlist.contains('active')) {
		burgerLines.forEach(line => line.classList.remove('black'))
	}
}
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
const showCookie = () => {
	const cookieEaten = localStorage.getItem('cookie')
	if (cookieEaten) {
		cookieBox.classList.add('hide')
	}
}
const handleCookieBox = () => {
	cookieBox.classList.add('hide')
	localStorage.setItem('cookie', 'true')
}
window.addEventListener('scroll', handleObserver)
cookieBtn.addEventListener('click', handleCookieBox)
handleCurrentYear()
showCookie()
