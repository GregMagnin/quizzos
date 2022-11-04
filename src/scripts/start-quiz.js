let start = document.getElementById('start');
let nbquestions = localStorage.setItem('questions', '20');

if (localStorage.getItem('questions') !== null) {
    nbquestions = localStorage.getItem('questions')
}

let startquiz = start.addEventListener('click', async (event) => {

    localStorage.setItem('number_good_answers', "0");
    localStorage.setItem('iteration_question', "1");
    document.location.href = '#questions';
})
