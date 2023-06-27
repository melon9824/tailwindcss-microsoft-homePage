/**
 *! all microsoft lists show / hide
 */
const allMicrosoft = document.getElementById('all-microsoft');
const allMicrosoftBtn = document.getElementById('all-microsoft-btn');
const allMicrosoftLists = document.getElementById('all-microsoft-lists');

allMicrosoftBtn.addEventListener('click', () => {
    allMicrosoftLists.classList.toggle('opacity-0');

    allMicrosoft.classList.toggle('toggleStyle');
})


/**
 *! more lists show / hide
 */
const more = document.getElementById('more');
const moreBtn = document.getElementById('more-btn');
const moreLists = document.getElementById('more-lists');

moreBtn.addEventListener('click', () => {
    moreLists.classList.toggle('hidden');

    more.classList.toggle('toggleStyle');
})


/**
 * ! show scroll up
 */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');

    this.scrollY >= 150 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);