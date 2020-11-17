export default class UI {
	displayContent() {
		document.querySelector('.content').style.display = 'block'
	}

	hidePreloader() {
		document.querySelector('.preloader').classList.add('preloader--hidden')
	}

	hideAfterloader() {
		document.querySelector('.afterloader').classList.add('afterloader--hidden')
	}

	addAnimationClass() {
		const body = document.body || document.documentElement.body
		if (body.classList.contains('animate-all ')) return
		body.classList.add('animate-all')
	}

	removePreloaderAnimation() {
		document.querySelector('.preloader__circle').style.animation = 'none';
		document.styleSheets[0].addRule('.preloader__circle::before', 'animation: none');
		document.styleSheets[0].addRule('.preloader__circle::after', 'animation: none');

		this.pseudoElementsCss()
	}

	pseudoElementsCss() {
		const beforeValue = window.getComputedStyle(document.querySelector('.preloader__circle'), '::before').getPropertyValue('animation');
		const afterValue = window.getComputedStyle(document.querySelector('.preloader__circle'), '::after').getPropertyValue('animation');

		return console.log(`beforeValue: ${beforeValue} and afterValue: ${afterValue}`)
	}
}