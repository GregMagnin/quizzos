export default {
render: async() => {
  return `
<section class="category-page">
  <div class="rect right"></div>
  <div class="rect left"></div>
  <div class="separator"></div>
  <div class="title-categories">What’s your favorite category ?</div>
  <div class="categories" id="categories">
    <input type="button" class="category" id="Linux" value="Linux">
    <input type="button" class="category" id="DevOps" value="DevOps">
    <input type="button" class="category" id="Networking" value="Networking">
    <input type="button" class="category" id="Programming" value="Programming">
    <input type="button" class="category" id="Cloud" value="Cloud">
    <input type="button" class="category" id="Docker" value="Docker">
    <input type="button" class="category" id="Kubernetes" value="Kubernetes">
    <input type="button" class="category" id="CMS" value="CMS">
  </div>
</section>
`
},
after_render: async () => {
  await import("../scripts/categories-fetch");
}}
