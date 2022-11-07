export default async () => {
    let homepage = document.getElementById("lobbypage");
    document.getElementById("timer").innerHTML = await (await import('../pages/Timer.js')).default.render()
    homepage.classList.add('pt-page', 'pt-page-current', 'pt-page-ontop', 'pt-page-rotateFall-left')

    await delay(1000);

    location.hash = "#timer"
}


let delay = (ms) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms)
    })
}





