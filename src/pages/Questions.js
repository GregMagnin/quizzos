export default {
    render: async() => {
      return `
<section class="question-page">
    <div class="ellipsis"></div>
    <div class="rect1"></div>
    <div class="rect2"></div>
    <div class="timer" id="timer"></div>
    <div class="questions">
        <span class="number-question">Question <span id="iteration_question"></span>:</span>
        <span class="question" id="question"></span>
    </div>
    <span id="remaining_questions"></span>
    <div class="answers" id="answers"></div>
</section>
`
    },
    after_render: async () => {
        let questions = await import('../scripts/questions');
        await questions.default();
    }
}
