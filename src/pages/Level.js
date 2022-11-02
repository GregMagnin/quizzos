export default {
  render: async() => {
    return `
<section class="level-page">
  <div class="green-circle-top-left"></div>
  <div class="green-circle-right"></div>
  <div class="green-circle-bottom-left"></div>

  <div class="title-box-level">
    <h2>Choose your level</h2>
  </div>
  <input type="button" class="level-box" value="Easy" />
  <input type="button" class="level-box" value="Medium" />
  <input type="button" class="level-box" value="Hard" />
  <input type="button" class="level-box level-box-4" value="Legend" />
</section>
`
},
after_render: async () => {
}
  }
