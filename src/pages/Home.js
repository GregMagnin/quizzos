export default {
    render: async () => {
        return `
<section id="homepage" class="homepage">
  <div class="square"></div>
  <div class="circle"></div>
  <h1>
    <img src="./assets/quizzos.png" alt="">
  </h1>
  <img src="./assets/maskotte.png" alt="le gros cerveau">
  <div class="get-started">
    <a id="start" href="#"> GET STARTED</a>
  </div>
  <img class="arrow" src="assets/fleche.svg" alt="la fleche">
</section>
<div id="lobby"></div>
`
    },
    after_render: async () => {
        let start = document.getElementById("start");
        let rotateFall = await import('../../src/animations/rotateFall.js');

        start.addEventListener('click', async () => {
            await (rotateFall.default)();
        });
    }
}
