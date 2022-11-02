export default {
  render: async() => {
    return `
<section class="lobby-page">
    <div class="square"></div>
    <div class="circle"></div>
    <ul>
      <li><a href="#categories">CATEGORY</a></li>
      <li><a href="#level">DIFFICULTY</a></li>
      <li><a href="#nbquestion">NUMBERS OF QUESTIONS</a></li>
      <li id="start">>START</li>
    </ul>
</section>
`
},
after_render: async () => {
  await import("../scripts/start-quiz");
}
  }