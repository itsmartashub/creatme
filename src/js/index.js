import UI from './classes/UI'
import Observer from './classes/Observer'

window.addEventListener('load', function () {
	const _ui = new UI()
	const _observe = new Observer();

	_ui.displayContent()
	_ui.hideAfterloader()
	_ui.hidePreloader()
	_ui.addAnimationClass()
	setTimeout(_ui.removePreloaderAnimation, 3000)

	if (!!window.IntersectionObserver) {
		_observe.anim_observer();
	} else {
		_observe.browserDontSupportObserver();
		console.log('NE PODRZAVA OBSERVER');
	}
})