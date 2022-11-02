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
    <span class="rest-question">Plus que 5 questions !</span>
    <div class="answers" id="answers">
        <span class="answer" id="answer_a"></span>
        <span class="answer" id="answer_b"></span>
        <span class="answer" id="answer_c"></span>
        <span class="answer" id="answer_d"></span>
    </div>
</section>
`
    },
    after_render: async () => {
        await import('../scripts/questions');
    }
}
