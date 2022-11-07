export default {
    render: async () => {
        return `
      <section class="timer" id="timer">
    <div class="square-top"></div>
    <div class="square-bottom"></div>

        <div class="counter" data-animation>
  <svg id="tracker">
    <circle id="outer_circle" class="st0" cx="50%" cy="50%"  fill="none"  />
    <circle id="circle" class="circle_animation" cx="50%" cy="50%"  stroke="black" fill="none" />
    <circle id="inner_circle" class="st0" cx="50%" cy="50%"  fill="none" stroke="black" />
  </svg>
  <span data-repetition=""></span>
</div>
</section>
   `
            ;

    },
    after_render: async () => {
        await import('../animations/timer.js');
    }
}
