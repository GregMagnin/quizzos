export default {
    render: async () => {
        return `
        <section class="result" id="js-result-section">
          <div class="result__preview">
            <p>RESULT</p>
            <div class="result__circle-progress-bar" id="js-progress-bar">
              <div class="result__circle-progress-bar__value" id="js-value-progress-bar">
                75%
              </div>
            </div>
            <p class="result__nb-good-answer">4 out of 20</p>
          </div>
          <a class="result__btn">BACK TO HOME</a>
          <div class="result__oval-form"></div>

          <div class="result__img">
            <img src="assets/quizzosResult.svg" alt="quizzos mascot representing a brain">
          </div>
        </section>
        `;
    },
    after_render: async () => {
        let jaw = await import ("../components/jaw");
        let result_section = document.getElementById("js-result-section");
        result_section.innerHTML += jaw.default
        await import("../scripts/progressBar");
        await import("../scripts/closingPageAnimation");
    },
};
