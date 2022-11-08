let level = document.getElementById('level');


export let levelfetch = level.addEventListener('click', async (event) => {
    let levelvalue = event.target.value;
    localStorage.setItem('level', levelvalue);
    document.location.href = '#lobby';
    location.reload();
})
