let start = document.getElementById('start')
import {ENDPOINT} from '../../config.ex';
import {TOKEN} from '../../config';
import categorievalue from './categories-fetch';
import levelvalue from './level-fetch';
import nbquestionsvalue from './nb-questions-fetch';

const META = {'X-Api-Key': TOKEN}

let initHeader = { method: 'GET',
               headers: META,
               mode: 'cors',
               cache: 'default' };

async function fetchAll() {
    const RESPONSE = await fetch(ENDPOINT + "&category=" + categorievalue + "&difficulty=" + levelvalue + "&limit=" + nbquestionsvalue, initHeader);
    console.log(RESPONSE);
    return await RESPONSE.text();
}

let startquiz = start.addEventListener ('click', async (event) => {
await fetchAll();
})