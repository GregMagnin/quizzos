import {routes} from "./routes.js";

const APP = document.getElementById('app');

const ROUTER = async () => {
    let hash = location.hash.split("#")[1] || '/';

    APP.innerHTML = await routes[hash].render();
    await routes[hash].after_render();
}

window.addEventListener('hashchange', async () => {
    await ROUTER();
});

export default ROUTER;
