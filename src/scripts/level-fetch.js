let level = document.getElementById('level');


export let levelfetch = level.addEventListener('click', async (event) => {
 let levelvalue = event.target.value;  
    location.replace("#lobby");
})

export default levelvalue;
