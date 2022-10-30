let nbquestion = document.getElementById('nbquestion');


export let questionsfetch = nbquestion.addEventListener('click', async (event) => {
 let nbquestionsvalue = event.target.value;  
    location.replace("#lobby");
})

export default nbquestionsvalue;