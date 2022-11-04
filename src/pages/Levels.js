export default {
    render: async () => {
        return `
<section id='level' class="level-page">
  <div class="green-circle-top-left"></div>
  <div class="green-circle-right"></div>
  <div class="green-circle-bottom-left"></div>

  <div class="title-box-level">
    <h2>Choose your level</h2>
  </div>
  <div id="level">
  <input type="button" class="level-box" id="easy" value="Easy" />
  <input type="button" class="level-box" id="medium" value="Medium" />
  <input type="button" class="level-box" id="hard" value="Hard" />
  <input type="button" class="level-box" id="legend" value="Legend" />
  </div>
</section>

`
    },
    after_render: async () => {
        await import("../scripts/level-fetch");

        let questions = document.getElementsByClassName("level-box");
        let scaleDownFromBottom = await import('../../src/animations/scaleDownFromBottom.js');
        Array.from(questions).forEach((question) => {
            question.addEventListener('click', async () => {
                await (scaleDownFromBottom.default)('levels');
            });
        })
    }
}
