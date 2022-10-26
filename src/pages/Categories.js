export default {
render: async() => {
  return `
<section class="category-page">
  <div class="rect right"></div>
  <div class="rect left"></div>
  <div class="separator"></div>
  <div class="title-categories">What’s your favorite category ?</div>
  <div class="categories">
    <input type="button" class="category" value="Linux">
    <input type="button" class="category" value="DevOps">
    <input type="button" class="category" value="Networking">
    <input type="button" class="category" value="Programming">
    <input type="button" class="category" value="Cloud">
    <input type="button" class="category" value="Docker">
    <input type="button" class="category" value="Kubernetes">
    <input type="button" class="category" value="CMS">
  </div>
</section>
`
},
after_render: async () => {
}
}
