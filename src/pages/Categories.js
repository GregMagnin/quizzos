export default {
render: async() => {
  return `
<section class="category-page">
  <div class="rect right"></div>
  <div class="rect left"></div>
  <div class="separator"></div>
  <div class="title-categories">What’s your favorite category ?</div>
  <div class="categories">
    <span type="text" class="category" value="Linux">Linux</span>
    <span type="text" class="category" value="DevOps">DevOps</span>
    <span type="text" class="category" value="Networking">Networking</span>
    <span type="text" class="category" value="Programming">Programming</span>
    <span type="text" class="category" value="Cloud">Cloud</span>
    <span type="text" class="category" value="Docker">Docker</span>
    <span type="text" class="category" value="Kubernetes">Kubernetes</span>
    <span type="text" class="category" value="CMS">CMS</span>
  </div>
</section>
`
},
after_render: async () => {
}
}
