export default async (el) => {
    let lobbypage = document.getElementById("lobbypage");
    console.log('ok')
    const element = document.getElementById(el);
    let component = (await import(`../pages/${capitalizeFirstLetter(el)}.js`)).default;
    element.innerHTML = await component.render()
    await component.after_render();
    lobbypage.classList.add('pt-page', 'pt-page-current', 'pt-page-ontop', 'pt-page-scaleDown')
    element.classList.add('pt-page-moveFromBottom', 'pt-page', 'pt-page-current', 'pt-page-ontop');
    await delay(1000);
}

let delay = (ms) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms)
    })
}

let capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}








