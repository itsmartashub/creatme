const $body = document.body
const $scrollWrap = document.querySelector(".smooth-scroll-wrapper")
let speed = 0.02
let offset = 0

export default class SmoothScrolling {
	smoothScroll() {
		// this.setBodyHeight()

		$scrollWrap.classList.add("smooth-scroll-wrapper--active")

		const height = $scrollWrap.getBoundingClientRect().height - 1
		$body.style.height = Math.floor(height) + "px"

		offset += (window.pageYOffset - offset) * speed
		// let scroll = `translate3d(0, -${offset}px, 0)`
		let scrollTranslate = `translateY(-${offset}px) translateZ(0)`
		$scrollWrap.style.transform = scrollTranslate

		console.log($body)

		// console.log(this.smoothScroll)

		requestAnimationFrame(this.smoothScroll)
	}
}
