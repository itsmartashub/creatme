// const body = document.body || document.documentElement.body,
// 	scrollWrap = document.querySelector('.smooth-scroll-wrapper'),
// 	height = scrollWrap.getBoundingClientRect().height - 1,
// 	speed = 0.04;

// let offset = 0;

// body.style.height = `${Math.floor(height)}px`;

// function smoothScroll() {
// 	offset += (window.pageYOffset - offset) * speed;

// 	let scroll = `translateY(-${offset}px) translateZ(0)`;
// 	scrollWrap.style.transform = scroll;

// 	callScroll = requestAnimationFrame(smoothScroll);
// }

// smoothScroll();

window.addEventListener('load', function(){
	displayContent()
	hideAfterloader()
	hidePreloader()
	addAnimationClass()
	setTimeout(removePreloaderAnimation, 3000)
})

const displayContent = () => document.querySelector('.content').style.display = 'block'

const hidePreloader = () => document.querySelector('.preloader').classList.add('preloader--hidden')

const hideAfterloader = () => document.querySelector('.afterloader').classList.add('afterloader--hidden')

const addAnimationClass = () => {
	const body = document.body || document.documentElement.body
	if(body.classList.contains('animate-all ')) return
	body.classList.add('animate-all')
}

const removePreloaderAnimation = () => {
	document.querySelector('.preloader__circle').style.animation = 'none';
	document.styleSheets[0].addRule('.preloader__circle::before','animation: none');
	document.styleSheets[0].addRule('.preloader__circle::after','animation: none');

	pseudoElementsCss()
}

const pseudoElementsCss = () => {
	const beforeValue = window.getComputedStyle(document.querySelector('.preloader__circle'), '::before').getPropertyValue('animation');
	const afterValue = window.getComputedStyle(document.querySelector('.preloader__circle'), '::after').getPropertyValue('animation');

	return console.log(`beforeValue: ${beforeValue} and afterValue: ${afterValue}`)
}