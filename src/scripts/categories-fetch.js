let categories = document.getElementById('categories');
import {ENDPOINT} from '../../config.ex';
import {TOKEN} from '../../config';

const META = {'X-Api-Key': TOKEN}

let initHeader = { method: 'GET',
               headers: META,
               mode: 'cors',
               cache: 'default' };


async function fetchCategories(ENDPOINT, categorievalue) {
    const RESPONSE = await fetch(ENDPOINT + "&category=" + categorievalue, initHeader);
    console.log(RESPONSE);
    return await RESPONSE.text();
    
    
}

export let categoriesfetch = categories.addEventListener('click', async (event) => {
 let categorievalue = event.target.value;
    await fetchCategories(ENDPOINT, categorievalue);    
    location.replace("#lobby");
})




