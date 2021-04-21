
	let tabs = document.querySelector('.tabs')
	let btns = tabs.querySelectorAll('.tabs__btn')
	let items = tabs.querySelectorAll('.tabs__item')

	function change(arr, i) {
		arr.forEach(item => {
			item.forEach(i => {
				i.classList.remove('active')
			})
			item[i].classList.add('active')
		})
	}

	for (let i = 0; i < btns.length; i++) {
		btns[i].addEventListener('click', () => {
			change([btns, items], i)
		})
	}

  export default change;