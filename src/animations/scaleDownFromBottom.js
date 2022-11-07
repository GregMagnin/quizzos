export default async (el) => {
    const lobbyElement = document.getElementById('lobbypage');
    const element = document.getElementById(el);

    lobbyElement.classList.remove('pt-page', 'pt-page-current', 'pt-page-scaleDown')
    element.classList.remove('pt-page-moveFromBottom');
    element.classList.add('pt-page-outFromBottom');

    // wait anmation

    await delay(1000);

    element.classList.remove('pt-page', 'pt-page-current', 'pt-page-ontop', 'pt-page-outFromBottom');
    lobbyElement.classList.remove('pt-page-scaleUp');

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








