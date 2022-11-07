let start = document.getElementById('start-quiz');
let nbquestions = localStorage.getItem('questions');


if (localStorage.getItem('questions') == null) {
    nbquestions = localStorage.setItem('questions', '20')
}

start.addEventListener('click', async (event) => {
    localStorage.setItem('number_good_answers', "0");
    localStorage.setItem('iteration_question', "1");
    document.location.href = '#questions';
})
