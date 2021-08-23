import UI from "./classes/UI"
import Observer from "./classes/Observer"

window.addEventListener("load", function () {
	const _ui = new UI()
	const _observe = new Observer()

	_ui.displayContent()
	_ui.hideAfterloader()
	_ui.hidePreloader()
	_ui.addAnimationClass()
	setTimeout(_ui.removePreloaderAnimation, 3000)

	if (!!window.IntersectionObserver) {
		_observe.anim_observer()
	} else {
		_observe.browserDontSupportObserver()
		console.log("NE PODRZAVA OBSERVER")
	}

	//! ========== smooth scrolling

	if (document.documentElement.clientWidth > 1024) {
		const body = document.body
		const $scrollWrap = document.querySelector(".smooth-scroll-wrapper")
		const height = $scrollWrap.getBoundingClientRect().height - 1
		const speed = 0.03
		let offset = 0

		$scrollWrap.classList.add("smooth-scroll-wrapper--active")
		body.style.height = Math.floor(height) + "px"

		function smoothScroll() {
			offset += (window.pageYOffset - offset) * speed

			let scroll = `translate3d(0, -${offset}px, 0)`
			$scrollWrap.style.transform = scroll

			let callScroll = requestAnimationFrame(smoothScroll)
			return callScroll
		}

		window.requestAnimationFrame(smoothScroll)
	}
})
