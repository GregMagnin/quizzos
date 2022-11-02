export default async (el) => {
    let lobbypage = document.getElementById("lobbypage");

    const element = document.getElementById(el);
    element.innerHTML = await (await import(`../pages/${capitalizeFirstLetter(el)}.js`)).default.render()
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








