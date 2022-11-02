let categories = document.getElementById('categories');


export let categoriesfetch = categories.addEventListener('click', async (event) => {
 let categorievalue = event.target.value;
 localStorage.setItem('categorie', categorievalue);   
    location.replace("#lobby");
})



 