let start = document.getElementById('start');
let categoryresponse = ""
let levelresponse = ""
let nbquestions = localStorage.setItem('questions', '20');
import {ENDPOINT} from '../../config';
import {TOKEN} from '../../config';


const META = {'X-Api-Key': TOKEN}

let initHeader = { method: 'GET',
               headers: META,
               mode: 'cors',
               cache: 'default' };

if (localStorage.getItem('categorie') !== null ) {
    categoryresponse = "&category=" + localStorage.getItem('categorie')
    }

if (localStorage.getItem('level') !== null ) {
        levelresponse = "&difficulty=" + localStorage.getItem('level')
        }
if (localStorage.getItem('questions') !== null) {
    nbquestions = localStorage.getItem('questions')
}


async function fetchAll() {
    const RESPONSE = await fetch(ENDPOINT + categoryresponse + levelresponse, initHeader);
    return await RESPONSE.json();
}

start.addEventListener ('click', async (event) => {
    await fetchAll();
    localStorage.setItem('number_good_answers', "0");
    localStorage.setItem('iteration_question', "1");
    document.location.href = '#questions';
})

