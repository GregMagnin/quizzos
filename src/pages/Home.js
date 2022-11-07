export default {
    render: async () => {
        return `
      <section class="homepage" id="homepage">
<div class="square"></div>
<div class="circle"></div>
<h1>
  <img src="assets/quizzos.png" alt="">
</h1>
<img src="./assets/maskotte.png" alt="le gros cerveau">
<div class="get-started">
  <a href="#" id="started"> GET STARTED</a>
</div>
<img class="arrow" src="assets/fleche.svg" alt="la fleche">
</section>
<div id="lobby"></div> `
            ;

    },
    after_render: async () => {

        let jaw = await import("../components/jaw");
        let homepage_section = document.getElementById("homepage");
        homepage_section.innerHTML += jaw.default;
        let openingAnimationURL = "?OpeningAnimation";
        let URL = document.location.search;
        await import("../animations/openingPageAnimation");


        if (URL !== openingAnimationURL) {
            const UP = document.querySelector(".teeth-form-up");
            const UPSQUARE = document.querySelector(".rectangle-form-top");
            const DOWN = document.querySelector(".teeth-form-down");
            const DOWNSQUARE = document.querySelector(".rectangle-form-bottom");

            UP.style.display = "none";
            DOWN.style.display = "none";
            UPSQUARE.style.display = "none";
            DOWNSQUARE.style.display = "none";
        }


        let start = document.getElementById("started");
        let rotateFall = await import('../../src/animations/rotateFall.js');
        start.addEventListener('click', async (e) => {
            await (rotateFall.default)();
        });
    }
}
