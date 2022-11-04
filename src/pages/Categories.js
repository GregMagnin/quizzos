export default {
    render: async () => {
        return `
<section class="category-page">
  <div class="rect right"></div>
  <div class="rect left"></div>
  <div class="separator"></div>
  <div class="title-categories">What’s your favorite category ?</div>
  <div class="categories" id="categories">
    <input type="button" class="category" id="Linux" value="Linux">
    <input type="button" class="category" id="DevOps" value="DevOps">
    <input type="button" class="category" id="Code" value="Code">
    <input type="button" class="category" id="Bash" value="Bash">
    <input type="button" class="category" id="Uncategorized" value="Uncategorized">
    <input type="button" class="category" id="Docker" value="Docker">
    <input type="button" class="category" id="SQL" value="SQL">
    <input type="button" class="category" id="CMS" value="CMS">
  </div>
</section>
`
    },
    after_render: async () => {
        await import("../scripts/categories-fetch");

        let categories = document.getElementsByClassName("category");
        let scaleDownFromBottom = await import('../../src/animations/scaleDownFromBottom.js');
        Array.from(categories).forEach((categorie) => {
            categorie.addEventListener('click', async () => {
                console.log("ok")
                await (scaleDownFromBottom.default)('categories');
            });
        })

    }
}

