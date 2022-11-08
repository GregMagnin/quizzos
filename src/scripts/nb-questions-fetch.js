let nbquestion = document.getElementById('nbquestion');


nbquestion.addEventListener('click', async (event) => {
    let nbquestionsvalue = event.target.value;
    localStorage.setItem('questions', nbquestionsvalue);
    document.location.href = '#lobby';
    location.reload();
})
