export default {
  render: async() => {
    return `
<section class="number-question-page">
   <div class="background-blue-rectangle"></div>
   <div class="background-pink-rectangle"></div>
   <div class="title-box">
   <h2>How many questions do you want ?</h2>
 </div>
 <input type="button" class="questions-box" value="5">
 <input type="button" class="questions-box" value="10">
 <input type="button" class="questions-box" value="15">
 <input type="button" class="questions-box question-box-4" value="20">
</section>
`
  },
  after_render: async () => {
  }
}