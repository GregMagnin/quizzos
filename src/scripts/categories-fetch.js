let categories = document.getElementById('categories');


categories.addEventListener('click', async (event) => {
    let categorievalue = event.target.value;
    localStorage.setItem('categorie', categorievalue);
    document.location.href = '#lobby';
    location.reload();
})



