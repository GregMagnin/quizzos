let nbquestion = document.getElementById('nbquestion');


export let questionsfetch = nbquestion.addEventListener('click', async (event) => {
 let nbquestionsvalue = event.target.value;
 localStorage.setItem('questions', nbquestionsvalue);  
 document.location.href = '#lobby';
 location.reload();
})