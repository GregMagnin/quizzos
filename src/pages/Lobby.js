export default {
    render: async () => {
        return `
<section id="lobbypage" class="lobby-page">
    <div class="square"></div>
    <div class="circle"></div>
    <ul>
      <li><a id="category">CATEGORY</a></li>
      <li><a id="difficulty">DIFFICULTY</a></li>
      <li><a id="numbers-of-questions">NUMBERS OF QUESTIONS</a></li>
      <li id="start-quizz">START</li>
    </ul>
</section>
<div id="categories"></div>
<div id="levels"></div>
<div id="nbQuestions"></div>
<div id="timer"></div>


`
    },
    after_render: async () => {

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

        let start = document.getElementById("start-quizz");
        let rotateFall = await import('../../src/animations/rotateFallLeft.js');
        start.addEventListener('click', async (e) => {
            await (rotateFall.default)();
        });

        // await import("../scripts/start-quiz");

    }
}
