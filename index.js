const btnSimple = document.querySelector('.btn__simple');
const startPage = document.querySelector('.wrapper');
const simplePage = document.querySelector('.simple')
const btnBack = document.querySelector('.btn__back')
const btnAnswers = document.querySelector('.btn__answers')
const answers = document.querySelector('.task__answers')
const btn2Answers = document.querySelector('.btn2__answers')
const answers2 = document.querySelector('.task2__answers')
const btn3Answers = document.querySelector('.btn3__answers')
const answers3 = document.querySelector('.task3__answers')
const btn4Answers = document.querySelector('.btn4__answers')
const answers4 = document.querySelector('.task4__answers')


const showSimple = () => {
    startPage.style.display = 'none'
    simplePage.style.display = 'block'
}

btnSimple.addEventListener('click', showSimple);

const showStartPage = () => {
    startPage.style.display = 'block'
    simplePage.style.display = 'none'
}

btnBack.addEventListener('click', showStartPage);

const showAnswers = () => {
        answers.classList.toggle('active')
        btnAnswers.classList.toggle('active')
}

btnAnswers.addEventListener('click', showAnswers)

const showAnswers2 = () => {
    answers2.classList.toggle('active')
    btn2Answers.classList.toggle('active')
}

btn2Answers.addEventListener('click', showAnswers2);

const showAnswers3 = () => {
    answers3.classList.toggle('active')
    btn3Answers.classList.toggle('active')
}

btn3Answers.addEventListener('click', showAnswers3);

const showAnswers4 = () => {
    answers4.classList.toggle('active')
    btn4Answers.classList.toggle('active')
}

btn4Answers.addEventListener('click', showAnswers4);