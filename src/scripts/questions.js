import { TOKEN } from "../../config";
import { ENDPOINT } from "../../config";
import { loading } from "../animations/loader";

export default async () => {
    const META = {'X-Api-Key': TOKEN}

    let initHeader = { method: 'GET',
        headers: META,
        mode: 'cors',
        cache: 'default' };

    let iteration = document.getElementById('iteration_question');
    let quest = document.getElementById('question');
    let answers = document.getElementById('answers');
    let remaining_quest = document.getElementById('remaining_questions');
    let number_question = parseInt(localStorage.getItem('questions'));
    let iteration_question = parseInt(localStorage.getItem('iteration_question'));
    let number_good_answers = parseInt(localStorage.getItem('number_good_answers'));
    let timer;
    let timerElement = document.getElementById('timer')
    let remaining_questions = number_question - iteration_question;
    let categoryresponse = "";
    let levelresponse = "";
    loading.style.display = "flex";

    if (localStorage.getItem('categorie') !== null ) {
        categoryresponse = `&category=${localStorage.getItem('categorie')}`
    }

    if (localStorage.getItem('level') !== null ) {
        levelresponse = `&difficulty=${localStorage.getItem('level')}`
    }

    
    async function getDataAsync() {
        let response = await fetch(ENDPOINT + categoryresponse + levelresponse, initHeader);
        return await response.json();
    }
    
    let response = await getDataAsync();
    loading.style.display = "none";
    const TIMER = (async function timing(){
        let sec = 30;
        timer = setInterval(() => {
           sec = sec < 10 ? `0${sec}` : sec;
            timerElement.innerHTML = sec;
            sec = sec <= 0 ? 0: sec - 1
            if (sec === 0) {
                iteration_question++;
                localStorage.setItem('iteration_question', (iteration_question.toString()));
                setTimeout(document.location.reload(true), 2000);
            }
        }, 1000)
    })()



if (response[0]['multiple_correct_answers'] === 'false') {
    let answers_list = response[0]['answers'];
        iteration.innerText = localStorage.getItem('iteration_question');
        quest.innerText = response[0]['question'];
        if (remaining_questions > 1){
            remaining_quest.innerText = `${remaining_questions.toString()} questions left !`;
        } else if (remaining_questions === 1){
            remaining_quest.innerText = `${remaining_questions.toString()} question left !`;
        } else {
            remaining_quest.innerText = 'Last question !'
        }

        for (let answer of Object.entries(answers_list)) {
            if (answer[1] !== null) {
                let answer_box = document.createElement('span');
                answer_box.classList.add('answer');
                answer_box.setAttribute("id", answer[0]);
                answer_box.innerText = answer[1].toString();
                answers.appendChild(answer_box);
            }
        }

        answers.addEventListener('click', async (e) => {
            let good_answers = response[0]['correct_answers']
            let good_answer = '';
            for (let answer in good_answers) {
                if (good_answers[answer] === 'true') {
                    good_answer = `${answer.split('_')[0]}_${answer.split('_')[1]}`;
                }
            }

            let goodAnswerElement = document.getElementById(good_answer);
            let answers_red = document.querySelectorAll('.answer');
            for (let answer_red of answers_red) {
            answer_red.style.backgroundColor = "rgb(255,39,39)";
            }
            goodAnswerElement.style.backgroundColor = "rgb(0, 201, 68)";

            if (goodAnswerElement === e.target) {
                number_good_answers++;
                localStorage.setItem("number_good_answers", (number_good_answers.toString()));
            }
            if (number_question > iteration_question) {
                iteration_question++;
                localStorage.setItem('iteration_question', (iteration_question.toString()));
                setTimeout(() => {
                    document.location.reload();
                }, 1000);
            } else {
                setTimeout(() => {
                    document.location.href = '#result';
                }, 1000);
            }
        })
    }
    else {
        document.location.reload();
    }
}
