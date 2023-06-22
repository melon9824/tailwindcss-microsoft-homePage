/**
 *! all microsoft menu show / hide
 */
const allMicrosoft = document.getElementById('all-microsoft');
const allMicrosoftBtn = document.getElementById('all-microsoft-btn');
const allMicrosoftLists = document.getElementById('all-microsoft-lists');

allMicrosoftBtn.addEventListener('click', () => {
    allMicrosoftLists.classList.toggle('opacity-0');

    allMicrosoft.classList.toggle('allMicrosoftStyle');
})