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

	// _observe.browserDontSupportObserver();
	if (!!window.IntersectionObserver) {
		_observe.anim_observer();
	} else {
		//todo dodati style za sve elemente da su vidljivi i bez transforma
		// _observe.browserDontSupportObserver();
		console.log('NE PODRZAVA OBSERVER');
		alert('We are so sorry but your browser must supports IntersectionObserver :(')
	}
})