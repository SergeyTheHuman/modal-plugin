import { isWebp } from './components/isWebp.js'

isWebp()

const $modalContainer = document.querySelector('.modal-container')
const $btns = document.querySelectorAll('[data-modal-path]')

$btns.forEach((btn) => {
	const modals = document.querySelectorAll('modal--opened')
	const scrollWidth = document.body.offsetWidth - document.body.clientWidth
	const bodyPadding = parseInt(window.getComputedStyle(document.body).paddingRight)

	btn.addEventListener('click', (e) => {
		console.log(e.target.dataset.modalPath)
		const modalPath = btn.dataset.modalPath
		const modal = $modalContainer.querySelector(`[data-modal-target='${modalPath}']`)

		if (document.querySelectorAll('.modal--opened').length > 0) {
			document.querySelectorAll('.modal--opened').forEach((modal) => {
				modal.classList.remove('modal--opened')
				document.body.style = ``
			})
		}
		modal.classList.add('modal--opened')
		document.body.classList.add('lock-scroll')
		document.body.style.paddingRight = `${bodyPadding + scrollWidth}px`

		modal.addEventListener('click', (e) => {
			if (e.target.classList.contains('modal')) {
				modal.classList.remove('modal--opened')
				document.body.classList.remove('lock-scroll')
				document.body.style = ``
			}
			if (e.target.classList.contains('modal__close')) {
				modal.classList.remove('modal--opened')
				document.body.classList.remove('lock-scroll')
				document.body.style = ``
			}
		})
		window.addEventListener('keydown', (e) => {
			if (e.code === 'Escape' || e.keyCode === 27) {
				modal.classList.remove('modal--opened')
				document.body.classList.remove('lock-scroll')
				document.body.style = ``
			}
		})
	})
})
