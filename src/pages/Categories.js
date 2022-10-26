export default {
render: async() => {
  return `
<section class="category-page">
  <div class="rect right"></div>
  <div class="rect left"></div>
  <div class="separator"></div>
  <div class="title-categories">What’s your favorite category ?</div>
  <div class="categories">
    <input type="text" class="category" value="Linux">
    <input type="text" class="category" value="DevOps">
    <input type="text" class="category" value="Networking">
    <input type="text" class="category" value="Programming">
    <input type="text" class="category" value="Cloud">
    <input type="text" class="category" value="Docker">
    <input type="text" class="category" value="Kubernetes">
    <input type="text" class="category" value="CMS">
  </div>
</section>
`
}
}