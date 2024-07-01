window.addEventListener('DOMContentLoaded', () => {
	console.log('Loaded Scripts')

	if (document.querySelector('.splide-1')) {
		const splide = new Splide('.splide-1', {
			perPage: 3,
			focus: 0,
			omitEnd: true,
			gap: 20,
			perMove: 1,
			arrows: true,
			pagination: {
				type: 'custom',
				render: function (splide, list) {
					const maxVisibleNumbers = 5
					let totalSlides = splide.length
					let currentPage = splide.index + 1

					let pageNumbers = Array.from({ length: totalSlides }, (_, i) => i + 1)

					let visibleNumbers = pageNumbers.slice(
						Math.max(0, currentPage - Math.ceil(maxVisibleNumbers / 2)),
						currentPage + Math.floor(maxVisibleNumbers / 2)
					)

					if (
						visibleNumbers.length < maxVisibleNumbers &&
						pageNumbers.length > maxVisibleNumbers
					) {
						visibleNumbers = pageNumbers.slice(0, maxVisibleNumbers)
					}

					list.innerHTML = ''

					visibleNumbers.forEach(number => {
						let li = document.createElement('li')
						li.textContent = number
						li.className =
							'splide__pagination__page' +
							(number === currentPage ? ' is-active' : '')
						li.setAttribute('data-index', number - 1)
						list.appendChild(li)

						// Добавляем обработчик клика для перехода к слайду
						li.addEventListener('click', function () {
							splide.go(number - 1)
						})
					})
				},
			},
			breakpoints: {
				1024: {
					perPage: 3,
				},
				768: {
					perPage: 2,
				},
				640: {
					perPage: 1,
					pagination: false,
				},
			},
			classes: {
				pagination: 'splide__pagination your-class-pagination',
				page: 'splide__pagination__page your-class-page',
			},
		})
		// splide.on('pagination:mounted', function (data) {
		// 	// You can add your class to the UL element
		// 	data.list.classList.add('splide__pagination--custom')

		// 	// `items` contains all dot items
		// 	data.items.forEach(function (item) {
		// 		item.button.textContent = String(item.page + 1)
		// 	})
		// })
		splide.mount()
	}
})

const modal = document.getElementById('modal')
const openModalBtn = document.getElementById('openModal')
const closeModalElements = document.querySelectorAll('.close-modal')

if (modal && openModalBtn && closeModalElements) {
	const openModal = () => {
		modal.classList.remove('hidden')
	}

	const closeModal = () => {
		modal.classList.add('hidden')
	}

	openModalBtn.addEventListener('click', openModal)

	closeModalElements.forEach(el => {
		el.addEventListener('click', closeModal)
	})

	window.addEventListener('click', event => {
		if (event.target === modal) {
			closeModal()
		}
	})
}

document.addEventListener('DOMContentLoaded', function () {
	const wishlistButtonOpen = document.querySelector('#wishlist-open')
	const wishlistBlock = document.querySelector('#wishlist')
	const wishlistCloseBtn = document.querySelector('#wishlist-close')
	const wishlistBg = document.querySelector('#wishlist-bg')

	wishlistButtonOpen.addEventListener('click', () => {
		wishlistBlock.classList.add('active')
		wishlistBg.classList.remove('hidden')
		document.body.classList.add('overflow-hidden')
	})

	wishlistCloseBtn.addEventListener('click', () => {
		wishlistBlock.classList.remove('active')
		wishlistBg.classList.add('hidden')
		document.body.classList.remove('overflow-hidden')
	})

	wishlistBg.addEventListener('click', () => {
		wishlistBlock.classList.remove('active')
		wishlistBg.classList.add('hidden')
		document.body.classList.remove('overflow-hidden')
	})
})

// JavaScript to toggle the mega menu
const toggles = document.querySelectorAll('button[data-menu-target]')
let currentMenu = null
let currentButton = null

toggles.forEach(toggle => {
	toggle.addEventListener('click', function (event) {
		event.stopPropagation()
		const targetId = toggle.getAttribute('data-menu-target')
		const targetMenu = document.getElementById(targetId)

		if (currentMenu && currentMenu !== targetMenu) {
			currentMenu.classList.add('hidden')
			currentButton.classList.remove('active')
		}

		if (targetMenu.classList.contains('hidden')) {
			targetMenu.classList.remove('hidden')
			toggle.classList.add('active')
			currentMenu = targetMenu
			currentButton = toggle
		} else {
			targetMenu.classList.add('hidden')
			toggle.classList.remove('active')
			currentMenu = null
			currentButton = null
		}
	})
})

// Close the mega menu if clicking outside of it
document.addEventListener('click', function (event) {
	if (currentMenu && !currentMenu.contains(event.target)) {
		currentMenu.classList.add('hidden')
		if (currentButton) {
			currentButton.classList.remove('active')
		}
		currentMenu = null
		currentButton = null
	}
})

// Prevent menu closing when clicking inside the mega menu
document.querySelectorAll('.mega-menu').forEach(menu => {
	menu.addEventListener('click', function (event) {
		event.stopPropagation()
	})
})

document.addEventListener('DOMContentLoaded', function () {
	const burgerButton = document.getElementById('burger-button')
	const mobileMenu = document.getElementById('mobile-menu')

	burgerButton.addEventListener('click', () => {
		mobileMenu.classList.toggle('active')
		document.body.classList.toggle('overflow-hidden')
	})
})

document.querySelectorAll('.menu-btn').forEach(button => {
	button.addEventListener('click', () => {
		const submenu = button.nextElementSibling

		// Переключаем видимость подменю
		button.classList.toggle('open-menu')
		submenu.classList.toggle('hidden')

		// Закрываем другие подменю, если они открыты
		document.querySelectorAll('.submenu').forEach(menu => {
			if (menu !== submenu) {
				menu.classList.add('hidden')
			}
		})
	})
})

// Закрываем подменю при клике вне меню
document.addEventListener('click', event => {
	const isClickInsideMenu = event.target.closest('nav')
	if (!isClickInsideMenu) {
		document.querySelectorAll('.submenu').forEach(submenu => {
			submenu.classList.add('hidden')
		})
	}
})

document.querySelectorAll('.product-card--favorites').forEach(icon => {
	icon.addEventListener('click', function (event) {
		event.preventDefault() // Предотвращаем переход по ссылке
		event.stopPropagation() // Предотвращаем всплытие события клика к ссылке

		const productId = this.getAttribute('data-product-id')
		const productElement = document.getElementById(productId)

		if (productElement.classList.contains('active')) {
			productElement.classList.remove('active')
			this.classList.remove('active')
		} else {
			productElement.classList.add('active')
			this.classList.add('active')
		}
	})
})

window.addEventListener('load', () => {
	const selectElements = document.querySelectorAll('.small-select')

	if (selectElements.length > 0) {
		selectElements.forEach(selectElement => {
			selectElement.addEventListener('mousedown', event => {
				event.stopPropagation()
				selectElement.classList.add('open')
			})

			selectElement.addEventListener('blur', () => {
				selectElement.classList.remove('open')
			})

			selectElement.addEventListener('change', () => {
				selectElement.classList.remove('open')
			})
		})

		document.addEventListener('click', () => {
			selectElements.forEach(selectElement => {
				selectElement.classList.remove('open')
			})
		})
	} else {
		console.warn('Элементы с классом .small-select не найдены в DOM.')
	}
})

document.addEventListener('DOMContentLoaded', function () {
	const headers = document.querySelectorAll('.accordion-header')

	headers.forEach(header => {
		header.addEventListener('click', function () {
			const content = header.nextElementSibling
			const icon = header.querySelector('.accordion-icon')

			if (content.classList.contains('show')) {
				content.style.maxHeight = content.scrollHeight + 'px'
				setTimeout(() => {
					content.style.maxHeight = '0'
				}, 10)
				content.classList.remove('show')
				icon.classList.remove('active')
			} else {
				document.querySelectorAll('.accordion-content').forEach(item => {
					if (item !== content) {
						item.style.maxHeight = '0'
						item.classList.remove('show')
						item.previousElementSibling
							.querySelector('.accordion-icon')
							.classList.remove('active')
					}
				})

				content.classList.add('show')
				content.style.maxHeight = content.scrollHeight + 'px'
				icon.classList.add('active')
			}
		})
	})
})

document.addEventListener('DOMContentLoaded', () => {
	const customSelect = document.querySelector('.custom-select')
	const selectBtn = document.querySelector('.select-button')
	const selectedValue = document.querySelector('.selected-value')
	const optionsList = document.querySelectorAll('.select-dropdown li')

	if (optionsList.length > 0) {
		selectedValue.textContent =
			optionsList[0].querySelector('label').textContent

		optionsList[0].querySelector('input').checked = true
	}

	if (selectBtn) {
		selectBtn.addEventListener('click', () => {
			customSelect.classList.toggle('active')

			selectBtn.setAttribute(
				'aria-expanded',
				selectBtn.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
			)

			const dropdown = customSelect.querySelector('.select-dropdown')
			if (customSelect.classList.contains('active')) {
				dropdown.classList.remove('scale-y-0', 'opacity-0', 'invisible')
				dropdown.classList.add('scale-y-100', 'opacity-100', 'visible')
				selectBtn.querySelector('.arrow').classList.add('rotate-180')
			} else {
				dropdown.classList.remove('scale-y-100', 'opacity-100', 'visible')
				dropdown.classList.add('scale-y-0', 'opacity-0', 'invisible')
				selectBtn.querySelector('.arrow').classList.remove('rotate-180')
			}
		})
	}

	optionsList.forEach(option => {
		function handler(e) {
			if (e.type === 'click' && e.clientX !== 0 && e.clientY !== 0) {
				selectedValue.textContent = option.querySelector('label').textContent
				customSelect.classList.remove('active')

				const dropdown = customSelect.querySelector('.select-dropdown')
				dropdown.classList.remove('scale-y-100', 'opacity-100', 'visible')
				dropdown.classList.add('scale-y-0', 'opacity-0', 'invisible')
				selectBtn.querySelector('.arrow').classList.remove('rotate-180')
			}

			if (e.key === 'Enter') {
				selectedValue.textContent = option.querySelector('label').textContent
				customSelect.classList.remove('active')

				const dropdown = customSelect.querySelector('.select-dropdown')
				dropdown.classList.remove('scale-y-100', 'opacity-100', 'visible')
				dropdown.classList.add('scale-y-0', 'opacity-0', 'invisible')
				selectBtn.querySelector('.arrow').classList.remove('rotate-180')
			}
		}

		option.addEventListener('keyup', handler)
		option.addEventListener('click', handler)
	})

	document.addEventListener('click', event => {
		if (customSelect) {
			if (
				!customSelect.contains(event.target) &&
				customSelect.classList.contains('active')
			) {
				customSelect.classList.remove('active')
				const dropdown = customSelect.querySelector('.select-dropdown')
				dropdown.classList.remove('scale-y-100', 'opacity-100', 'visible')
				dropdown.classList.add('scale-y-0', 'opacity-0', 'invisible')
				selectBtn.querySelector('.arrow').classList.remove('rotate-180')
				selectBtn.setAttribute('aria-expanded', 'false')
			}
		}
	})
})
