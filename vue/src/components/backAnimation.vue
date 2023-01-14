<template>
  <div class="backAnimation">
    <div class="box b">b</div>
    <div class="box c">c</div>

    <picture>
      <img src="/img/frontPage/projects_footer.webp" alt="MYIMAGE" />
    </picture>
    <header>
      <h2> {{ lang.en.content[0] + " " + lang.en.content[1] }} </h2>
      <p> WEBDEV </p>
    </header>
  </div>
</template>

<!-- <script lang="ts"> -->
<script lang="ts">
// import { gsap, ScrollTrigger} from "gsap/all";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.to(".backAnimation", {
//   scrollTrigger: ".backAnimation", // start the animation when ".box" enters the viewport (once)
//   x: 500
// });

gsap.registerPlugin(ScrollTrigger);

// You can use a ScrollTrigger in a tween or timeline
gsap.to(".b", {
  x: 400,
  rotation: 360,
  scrollTrigger: {
    trigger: ".c",
    start: "top center",
    end: "top 100px",
    scrub: true,
    // scrub: 1,
    markers: true,
    id: "scrub"
  }
});

// ScrollTrigger.create({
//   trigger: ".c",
//   animation: gsap.to(".c", {
//     x: 400,
//     rotation: 360,
//     duration: 3
//   })


// })

// const anim = gsap.to(".c", {
//   x: 400,
//   rotation: 360,
//   duration: 3
// });
// ScrollTrigger.create({
//   trigger: ".c",
//   animation: anim,
//   // Uncomment these to see how they affect the ScrollTrigger
//   // markers: true,
//   // start: "top center",
//   // end: "top 100px",
//   // toggleClass: "active",
//   // pin: true,
//   // scrub: 1,
//   // onUpdate: self => {
//   //   console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
//   // }
// });

// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".backAnimation",
//     start: "center bottom",
//     end: "center top",
//     scrub: true,
//     markers: true
//   }
// });
// tl.to(".box", {yPercent: 350, duration: 1})
// tl.to(".box", {rotation: 360, duration: 3})
// tl.to(".box", {xPercent: 350, duration: 1})

export default {
  props: {
    lang: {
      type : Object,
      required: true,
    }
  }
}
</script>

<style lang="scss">

.box {
  width: 100px;
  height: 100px;
  background-color: #28a92b;
  position: absolute;
  left: 100px;
  z-index: 100;
  line-height: 100px;
  font-size: 50px;
  text-align: center;
}

.b {
  top: 600px;
}











:root{
  --borders-size: 2px;
}

@mixin background() {
  align-items: center;
  background-color: var(--c-primary);
  border: var(--borders-size) solid var(--c-quaternary);
  border-color: var(--c-quaternary);
  border-radius: 10rem;
  border-style: solid;
  border-width: 0 calc(var(--borders-size) * 2) var(--borders-size) 0 ;
  display:flex;
  justify-content: center;
  position:relative;
  &::after {
    border-color: var(--c-primary);
    border-style: solid;
    border-width: 0 calc(var(--borders-size) * 2) var(--borders-size) 0;
    background-color: var(--c-secondary);
    border-radius:10rem;
    content: '';
    height:100%;
    left:.5rem;
    position:absolute;
    top:1rem;
    width: 100%;
    z-index:-1;
  }
}

.backAnimation{
  @include background();
  picture{
    @include background();
    height:15rem;
    position:absolute;
    top:-10rem;
    width:15rem;
    img{
      border-radius:50%;
      height:100%;
      position:absolute;
      width:100%;
      z-index:1;
    }
  }
  header{
    display:flex;
    justify-content: center;
    h2{
      font-size:clamp(1rem, 10vw, 10rem);
      font-weight: 900;
      line-height: 80%;
      margin:5rem 2rem .25rem 2rem;
      padding:2rem;
      position:relative;
    }
    p{
      @include background();
      border-radius: 0 0 5rem 5rem;
      bottom:calc(-4.5rem + 1px);
      height:3rem;
      padding:1rem 2rem 3rem 2rem;
      position: absolute;
      width:20rem;
      &::after{
        border-radius: 0 0 5rem 5rem;
        top:.5rem;
      }
    }
  }
}
</style>