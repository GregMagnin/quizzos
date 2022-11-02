let start = document.getElementById('start');
let categoryresponse = ""
let levelresponse = ""
import {ENDPOINT} from '../../config.ex';
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

async function fetchAll() {
    const RESPONSE = await fetch(ENDPOINT + categoryresponse + levelresponse, initHeader);
    return await RESPONSE.json();
}

let startquiz = start.addEventListener ('click', async (event) => {
    console.log(fetchAll())
    await fetchAll()
    location.replace('#questions');
})

