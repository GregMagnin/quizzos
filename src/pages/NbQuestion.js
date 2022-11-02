export default {
  render: async() => {
    return `
<section class="number-question-page">
   <div class="background-blue-rectangle"></div>
   <div class="background-pink-rectangle"></div>
   <div class="title-box">
   <h2>How many questions do you want ?</h2>
 </div>
 <div id="nbquestion">
 <input type="button" class="questions-box" id="5" value="5">
 <input type="button" class="questions-box" id="10" value="10">
 <input type="button" class="questions-box" id="15" value="15">
 <input type="button" class="questions-box id="20" question-box-4" value="20">
</div>
 </section>
`
  },
  after_render: async () => {
    await import("../scripts/nb-questions-fetch");
  }
}