import { TOKEN } from "../../config";
import { ENDPOINT } from "../../config";

const META = {'X-Api-Key': TOKEN}

let initHeader = { method: 'GET',
               headers: META,
               mode: 'cors',
               cache: 'default' };

let quest = document.getElementById('question');
let answers = document.getElementById('answers');
let answer_a = document.getElementById('answer_a');
let answer_b= document.getElementById('answer_b');
let answer_c = document.getElementById('answer_c');
let answer_d = document.getElementById('answer_d');

async function getDataAsync() {
    let response = await fetch(ENDPOINT, initHeader);
    return await response.json();
}

let response = await getDataAsync();
console.log(response);

quest.innerText = response[0]['question'];
answer_a.innerText = response[0]['answers']['answer_a'];
answer_b.innerText = response[0]['answers']['answer_b'];
answer_c.innerText = response[0]['answers']['answer_c'];
answer_d.innerText = response[0]['answers']['answer_d'];

answers.addEventListener('click', async(e) => {
    let user_answer = `${e.target.id}_correct`;
    let good_answer = response[0]['correct_answers'];
    for (let answer in good_answer) {
        if(good_answer[answer] === 'true') {
            if(user_answer === answer)
            console.log('Bonne réponse');
        }
    }
});