function clearActiveStatesInTableOfContents() {
	document.querySelectorAll('#TableOfContents ul li a').forEach((section) => {
		section.classList.remove('active');
	});
}

window.addEventListener('DOMContentLoaded', () => {

	const observer = new IntersectionObserver(entries => {
		var currentIR = 0;
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > currentIR) {
				currentIR = entry.intersectionRatio;
				clearActiveStatesInTableOfContents();
				document.querySelector(`#TableOfContents ul li a[href="#${id}"]`).classList.add('active');
			}
		});

	});

	// Track all headers that have an `id` applied
	document.querySelectorAll('article h3[id], article h2[id]').forEach((section) => {
		observer.observe(section);
	});
});
