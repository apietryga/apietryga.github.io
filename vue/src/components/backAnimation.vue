<template>
  <div class="backAnimation">
    <picture>
      <img src="/img/frontPage/projects_footer.webp" alt="MYIMAGE" />
    </picture>
    <header>
      <h2> {{ lang.en.content[0] + " " + lang.en.content[1] }} </h2>
      <p> WEBDEV </p>
    </header>
  </div>
</template>

<script lang="ts">
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