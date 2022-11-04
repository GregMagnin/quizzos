export default async () => {
    let homepage = document.getElementById("homepage");
    document.getElementById("lobby").innerHTML = await (await import('../pages/Lobby.js')).default.render()
    homepage.classList.add('pt-page', 'pt-page-current', 'pt-page-ontop', 'pt-page-rotateFall')

    await delay(1500);

    location.hash = "#lobby"
}

let delay = (ms) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms)
    })
}





