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

// Post title doesn't get parsed as it is not part of the content file
(function addPostTitle2ToC() {
	var toc = document.getElementById('TableOfContents');
	if (!toc) return;
	var title = document.getElementById("post__title").innerText;
	var ul = toc.querySelector('ul');
	ul.outerHTML = `<ul><li><a href="#post__title" class="active">${title}</a>${ul.outerHTML}</li></ul>`;
})();
