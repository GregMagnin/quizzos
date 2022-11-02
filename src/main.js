import './style.scss';
import ROUTER from "./router/router.js";

window.addEventListener('load', async () => {
    await ROUTER();
});
