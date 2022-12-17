const toTop = document.querySelector('.arrow11');

window.addEventListener('scroll', () => {
    toTop.classList.toggle('active', window.scrollY > 300)
})