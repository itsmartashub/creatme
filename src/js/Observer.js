// const $from_bottom = document.querySelectorAll('.anim-from-bottom')

// export default class Observer {
// 	anim_observer() {
// 		const appearOptions = {
// 			threshold: 0.5,
// 			rootMargin: '0px 0px 0px 0px'
// 		}
// 		const appearOnScroll = new IntersectionObserverEntry((entries, appearOptions) => {
// 			entries.forEach(entry => {
// 				console.log(entry.target.className)

// 				// if(!entry.isIntersecting) { return }
// 				// else {
// 				// 	entry.target.classList.add('appear');
// 				// 	appearOnScroll.unobserve(entry.target); //! stop looking on something when you've done ur job
// 				// }
// 			}, appearOptions)

// 		})

// 		// this.addObserveToEls($from_bottom, appearOnScroll)

// 		$from_bottom.forEach(bottom => {
// 			appearOnScroll.observe(bottom);
// 		})
// 	}

// 	// addObserveToEls(_arrEls, _nameOfObserver) {
// 	// 	_arrEls.forEach(el => {
// 	// 		_nameOfObserver.observe(el)
// 	// 	})
// 	// }
// }



// const $from_bottom = document.querySelectorAll('.anim-from-bottom')
// const $from_bottom = document.querySelectorAll('section')
const $from_bottom = document.querySelectorAll('.anim--fromBottom')
const $from_top = document.querySelectorAll('.anim--fromTop')
const $from_left = document.querySelectorAll('.anim--fromLeft')
const $from_right = document.querySelectorAll('.anim--fromRight')
const $imgs = [...document.querySelectorAll('.anim--imgs')]
const $circle_imgs = document.querySelectorAll('.anim--circle-imgs')
const $icons = document.querySelectorAll('.anim--icon')
const $from_bottom_cards = document.querySelectorAll('.anim--card-fromBottom')
const $scale = document.querySelectorAll('.anim--scale')
const $fade_in = document.querySelectorAll('.anim--fadeIn')
const $from_right_rotating = document.querySelector('.anim--fromRight-rotating')
// const $from_right_rotating = [...document.querySelectorAll('.anim--fromRight-rotating')]
// const $from_right_rotating = document.querySelectorAll('.anim--fromRight-rotating')

export function ANIM_OBSERVER() {

	console.log("ANIM_OBSERVER")

	const appearOptions = {
		threshold: 1,
		rootMargin: '-300px 0px 0px 0px'
	}
	const appearOnScroll = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			// console.log(entry.target.className)
			// console.log($from_right_rotating.className);

			if (!entry.isIntersecting) {
				return
			} else {
				entry.target.classList.add('appear');
				appearOnScroll.unobserve(entry.target); //! stop looking on something when u've done ur job
			}
		}, appearOptions)
	})

	//* primeniti observer na niz elemenata
	appearOnScroll.observe($from_right_rotating);

	$from_bottom.forEach(bottom => {
		appearOnScroll.observe(bottom);
	})
	$from_bottom_cards.forEach(card => {
		appearOnScroll.observe(card);
	})
	$from_top.forEach(top => {
		appearOnScroll.observe(top);
	})
	$from_left.forEach(left => {
		appearOnScroll.observe(left);
	})
	$from_right.forEach(right => {
		appearOnScroll.observe(right);
	})
	$icons.forEach(icon => {
		appearOnScroll.observe(icon);
	})
	$imgs.forEach(img => {
		appearOnScroll.observe(img);
	})
	$circle_imgs.forEach(circle_img => {
		appearOnScroll.observe(circle_img);
	})
	$scale.forEach(scale => {
		appearOnScroll.observe(scale);
	})
	$fade_in.forEach(fade => {
		appearOnScroll.observe(fade);
	})

	// $from_right_rotating.forEach(rot => {
	// 	appearOnScroll.observe(rot);
	// })



	//* primeniti observer na 1 element
	// let element = document.querySelector(_selector)
	// appearOnScroll.observe(element)
}

// module.exports = {
// 	observe_fun: ANIM_OBSERVER()
// }