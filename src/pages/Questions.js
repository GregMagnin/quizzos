export default {
    render: async() => {
      return `
<section class="question-page">
   <div class="ellipsis"></div>
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="questions">
            <span class="number-question">Question 10:</span>
            <span class="question">Parmis ces quatre réponses qui a le plus grand cerveau?Parmis ces quatre réponses qui a le plus grand cerveau? </span>
        </div>
        <span class="rest-question">Plus que 5 questions !</span>
        <div class="responses">
            <input type="button" class="response" value="La réponse A">
            <input type="button" class="response" value="La réponse B">
            <input type="button" class="response" value="La réponse C">
            <input type="button" class="response" value="La réponse D">
        </div>
</section>
`
    },
    after_render: async () => {
    }
}
