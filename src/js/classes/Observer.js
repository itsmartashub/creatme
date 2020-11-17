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

export default class Observer {
	anim_observer() {
		const appearOptions = {
			threshold: 1,
			rootMargin: '-300px 0px 0px 0px'
		}
		const appearOnScroll = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
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
	}


	browserDontSupportObserver() {
		// $from_bottom.forEach(bottom => {
		// 	bottom.style.cssText = `
		// 		opacity: 1;
		// 		transform: translate3d(0,0,0);
		// 	`;
		// });
		// $from_bottom_cards.forEach(card => {
		// 	card.style.cssText = `
		// 		opacity: 1;
		// 		transform: inherit;
		// 	`;
		// });
		// $sliders.forEach(slider => {
		// 	slider.style.cssText = `
		// 		opacity: 1;
		// 		transform: translate3d(0,0,0);
		// 	`;
		// });
		// $anim_text.forEach(text => {
		// 	text.style.cssText = `
		// 		opacity: 1;
		// 		letter-spacing: inherit;
		// 	`;
		// });

		const allAnimEls = [...document.querySelectorAll('[class^="anim--"]')]
		console.log(allAnimEls);
		allAnimEls.forEach(el => {
			// el.classList.contains('anim--').remove()
			// 	let class_list = [...el.classList]
			// 	// class_list[0].contains('anim--').remove()

			// 	// if (class_list.contains('anim--')) {
			// 	// 	console.log('TE');
			// }


			// 	// console.log(class_list.filter(cl => cl.contains('anim--')));
			// 	// el.classList.forEach(cl => {
			// 	// 	console.log(cl.className.contains('anim--'));
			// 	// 	console.log(cl);
			// 	// })
			// });
			// console.log(allAnimEls);
		})
	}
}