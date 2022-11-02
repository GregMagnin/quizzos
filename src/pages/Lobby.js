export default {
    render: async () => {
        return `
<section id="lobbypage" class="lobby-page">
    <div class="square"></div>
    <div class="circle"></div>
    <ul>
      <li><a id="category" href="#lobby">CATEGORY</a></li>
      <li><a id="difficulty" href="#lobby">DIFFICULTY</a></li>
      <li><a id="numbers-of-questions" href="#lobby">NUMBERS OF QUESTIONS</a></li>
      <li id="start">START</li>
    </ul>
</section>
<div id="categories"></div>
<div id="levels"></div>
<div id="nbQuestions"></div>

`
    },
    after_render: async () => {
        await import("../scripts/start-quiz");

        let category = document.getElementById("category");
        let difficulty = document.getElementById("difficulty");
        let questions = document.getElementById("numbers-of-questions");
        let scaleDownFromTop = await import('../../src/animations/scaleDownFromTop.js');

        category.addEventListener('click', async () => {
            await (scaleDownFromTop.default)('categories');
        });

        difficulty.addEventListener('click', async () => {
            await (scaleDownFromTop.default)('levels');
        });

        questions.addEventListener('click', async () => {
            await (scaleDownFromTop.default)('nbQuestions');
        });
    }
}
