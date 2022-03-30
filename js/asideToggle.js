
const asideToggleBtn = document.querySelector('.js-aside-toggle-btn');
const body = document.querySelector('body');

asideToggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    body.classList.toggle('js-aside-toggle');
})