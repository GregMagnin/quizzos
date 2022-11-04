import { TOKEN } from "../../config";
import { ENDPOINT } from "../../config";

const META = {'X-Api-Key': TOKEN}

let initHeader = { method: 'GET',
               headers: META,
               mode: 'cors',
               cache: 'default' };

let iteration = document.getElementById('iteration_question');
let quest = document.getElementById('question');
let answers = document.getElementById('answers');
let answer_a = document.getElementById('answer_a');
let answer_b= document.getElementById('answer_b');
let answer_c = document.getElementById('answer_c');
let answer_d = document.getElementById('answer_d');
let remaining_quest = document.getElementById('remaining_questions');
let number_question = parseInt(localStorage.getItem('questions'));
let iteration_question = parseInt(localStorage.getItem('iteration_question'));
let number_good_answers = parseInt(localStorage.getItem('number_good_answers'));
let timer;
let timerElement = document.getElementById('timer')
let remaining_questions = number_question - iteration_question;

    async function getDataAsync() {
        let response = await fetch(ENDPOINT, initHeader);
        return await response.json();
    }

    let response = await getDataAsync();

const TIMER = (function timing(){
        let sec = 30;
        timer = setInterval(() => {
           sec = sec < 10 ? "0" + sec : sec;
            timerElement.innerHTML = '00:'+sec;
            sec = sec <= 0 ? 0: sec - 1
            if (sec === 0) {
                iteration_question++;
                localStorage.setItem('iteration_question', (iteration_question.toString()));
                setTimeout(document.location.reload(true), 2000);
            }
        }, 1000)
    })()


    

if (response[0]['multiple_correct_answers'] === 'false') {

    iteration.innerText = localStorage.getItem('iteration_question');
    quest.innerText = response[0]['question'];
    if (remaining_questions > 1){
        remaining_quest.innerText = `Plus que ${remaining_questions.toString()} questions !`;
    } else if (remaining_questions === 1){
        remaining_quest.innerText = `Plus que ${remaining_questions.toString()} question !`;
    } else {
        remaining_quest.innerText = 'Dernière question !'
    }
    answer_a.innerText = response[0]['answers']['answer_a'];
    answer_b.innerText = response[0]['answers']['answer_b'];
    answer_c.innerText = response[0]['answers']['answer_c'];
    answer_d.innerText = response[0]['answers']['answer_d'];

    answers.addEventListener('click', async (e) => {
        let good_answers = response[0]['correct_answers']
        let good_answer = '';
        for (let answer in good_answers) {
            if (good_answers[answer] === 'true') {
                good_answer = answer.split('_')[0] + '_' + answer.split('_')[1];
            }
        }

        let goodAnswerElement = document.getElementById(good_answer);

        goodAnswerElement.style.backgroundColor = "green";

        if (goodAnswerElement === e.target) {
            number_good_answers++;
            localStorage.setItem("number_good_answers", (number_good_answers.toString()));
        }
        if (number_question > iteration_question) {
            iteration_question++;
            localStorage.setItem('iteration_question', (iteration_question.toString()));
            setTimeout(document.location.reload(true), 2000);
        } else {
            document.location.href = '#result';
        }
    })
}
else {
    document.location.reload(true);
}
