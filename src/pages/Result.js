export default {
    render: async() => {
        return `
        <section class="result">
          <div class="result__preview">
            <p>RESULT</p>
            <div class="result__circle-progress-bar" id="js-progress-bar">
              <div class="result__circle-progress-bar__value" id="js-value-progress-bar">
                75%
              </div>
            </div>
            <p class="result__nb-good-answer">4 out of 20</p>
          </div>
          <a href="#" class="result__btn">BACK TO HOME</a>
          <div class="result__oval-form"></div>
          <div class="result__rectangle-form-top"></div>
                <div class="result__rectangle-form-bottom"></div>
                <div class="result__teeth-form-down">
                    <img src="assets/teeth-down.svg" alt="teeth form at the bottom of the page">
                </div>
                <div class="result__teeth-form-up">
                    <img src="assets/teeth-up.svg" alt="teeth form at the top of the page">
                </div>
          <div class="result__img">
            <img src="assets/quizzosResult.svg" alt="quizzos mascot representing a brain">
          </div>
        </section>
        `
    },
    after_render: async () => {
        await import('../scripts/progressBar');
    }
}