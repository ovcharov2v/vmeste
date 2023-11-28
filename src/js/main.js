import './vendor';
import SlimSelect from 'slim-select'
import noUiSlider from 'nouislider'
import wNumb from 'wnumb'
import IMask from 'imask'

// Check Webp support
(function checkWebpSupport() {
	const img = new Image()
	img.onload = function () {
		if ((img.width > 0) && (img.height > 0)) {
			document.body.classList.add("webp-support");
		} else {
			document.body.classList.add("no-webp-support");
		}
	}
	img.onerror = function () {
		document.body.classList.add("no-webp-support");
	}
	img.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
})()

// Scroll to
document.addEventListener("DOMContentLoaded", function () {
	const linkList = document.querySelectorAll('*[data-scroll-to]')
	if (!linkList.length) return

	linkList.forEach((link) => {
		link.addEventListener('click', (evt) => {
			evt.preventDefault()
			const target = document.querySelector(`#${link.dataset.scrollTo}`)
			if (target) {
				target.scrollIntoView({
					behavior: 'smooth'
				})
			}
		})
	})
});

// Custom selects
const selectList = document.querySelectorAll('.select')
const ssList = []
if (selectList.length) {
	selectList.forEach((select) => {
		const ss = new SlimSelect({
			select: select,
			settings: {
				showSearch: false,
				placeholderText: "   ",
			},
			events: {
				beforeChange: () => {
					select.closest('.form-group').classList.add('form-group--filled')
				}
			}
		})

		ssList.push(ss)
	})
}

// Range slider
const slider = document.querySelector('.form-group__range');
noUiSlider.create(slider, {
	start: [100],
	range: {
		'min': 5,
		'max': 200
	},
	format: wNumb({
		decimals: 0
	}),
	pips: {
		mode: 'steps',
		stepped: true,
		density: 200
	}
});
const rangeValue = document.querySelector('.form-group__range-top-counter');
const rangeValueInput = document.querySelector('#range-value-input');
slider.noUiSlider.on('update', function (values, handle, unencoded) {
	rangeValue.innerHTML = values[handle].toString()
	rangeValueInput.value = values[handle]
})

// Input masks
const phoneMask = IMask(
	document.querySelector('#phone'),
	{
		mask: '+{7}(000) 000-00-00'
	}
)

const dateMask = IMask(
	document.querySelector('#date'),
	{
		mask: Date
	}
)

// Form submit
const form = document.querySelector('.section-order__form')
if (form) {
	form.addEventListener('submit', (evt) => {
		evt.preventDefault()
		const data = new URLSearchParams(new FormData(form));
		fetch("http://localhost:3000/", {
			method: 'post',
			body: data,
		})
			.then((response) => {
				//response.json()
				// ----do something----
				showModal();
			})
		formReset()
	})
}

const formReset = () => {
	ssList.forEach((ss) => {
		const select = ss.select.select
		select.closest('.form-group').classList.remove('form-group--filled')
		const event = new Event('change');
		setTimeout(() => {
			select.dispatchEvent(event)
		})
	})
	phoneMask.updateValue()
	dateMask.updateValue()
	form.reset()
}


const modal = document.querySelector('.modal')
const modalCloseBtn = modal.querySelector('.modal__close')

const showModal = () => {
	document.body.style.overflow = 'hidden'
	modal.style.display = 'flex'
	setTimeout(() => {
		modal.classList.add('modal--show')
	})
}

const closeModal = () => {
	modal.classList.remove('modal--show')
	setTimeout(() => {
		document.body.style.overflow = ''
		modal.style.display = ''
	}, 300)
}

modalCloseBtn.addEventListener('click', () => closeModal())

modal.addEventListener('click', (evt) => {
	if(!evt.target.closest('.modal__window')) {
		closeModal()
	}
})
