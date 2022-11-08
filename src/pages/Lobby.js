export default {
    render: async () => {
        return `
<section id="lobbypage" class="lobby-page">
    <div class="square"></div>
    <div class="circle"></div>
    <ul>
      <li id="category"><a>CATEGORY</a></li>
      <li id="difficulty"><a>DIFFICULTY</a></li>
      <li id="numbers-of-questions"><a>NUMBERS OF QUESTIONS</a></li>
      <li id="start-quiz">START</li>
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

        let start = document.getElementById("start-quiz");
        let rotateFall = await import('../../src/animations/rotateFallLeft.js');
        start.addEventListener('click', async (e) => {
            await (rotateFall.default)();
            
        });

    }
}
