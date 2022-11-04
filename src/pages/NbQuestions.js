export default {
    render: async () => {
        return `
<section id="number-question-page" class="number-question-page">
   <div class="background-blue-rectangle"></div>
   <div class="background-pink-rectangle"></div>
   <div class="title-box">
   <h2>How many questions do you want ?</h2>
 </div>
 <div id="nbquestion">
 <input type="button" class="questions-box" id="5" value="5">
 <input type="button" class="questions-box" id="10" value="10">
 <input type="button" class="questions-box" id="15" value="15">
 <input type="button" class="questions-box" id="20" value="20">
</div>
 </section>
`
    },
    after_render: async () => {
        await import("../scripts/nb-questions-fetch");

        let questions = document.getElementsByClassName("questions-box");
        let scaleDownFromBottom = await import('../../src/animations/scaleDownFromBottom.js');
        Array.from(questions).forEach((question) => {
            question.addEventListener('click', async () => {
                await (scaleDownFromBottom.default)("nbQuestions");
            });
        })

    }
}
