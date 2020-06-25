function elementInToC(entry) {
    return document.querySelector(`#TableOfContents ul li a[href="#${entry.target.getAttribute('id')}"]`);
}

window.addEventListener('DOMContentLoaded', () => {
    var previousActive = null;

    const observer = new IntersectionObserver(entries => {
        var foundActive = false;
        entries.forEach(entry => {
            if (!foundActive && entry.isIntersecting) {
                if(previousActive) {
                    previousActive.classList.remove('active');
                }
                elementInToC(entry).classList.add('active');
                foundActive = true;
                previousActive = elementInToC(entry);
            }
            else {
                elementInToC(entry).classList.remove('active');
            }
        })

        if (!foundActive) {
            previousActive.classList.add('active');
        };
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
