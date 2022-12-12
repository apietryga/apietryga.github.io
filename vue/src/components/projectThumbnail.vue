<template>
  <RouterLink 
    class="projectThumbnail"
    :to="('/projects/' + project.url)"
    :style="`background:${project.color}; color:${getFontColor(project.color)}`"
  >
    <img :src="'/img/contents/'+project.img" alt="">
    <div class="info">
      <div class="label">{{ project.date }}</div>
      <h3>{{ project.name }}</h3>
    </div>
  </RouterLink>
</template>

<script lang="ts">
export default{
  props : {
    project: {
      type : Object,
      required: true
    }
  },
  methods: {
    getFontColor( c : string ){
      c = c.substring(1);      // strip #
      const rgb = parseInt(c, 16);   // convert rrggbb to decimal
      const r = (rgb >> 16) & 0xff;  // extract red
      const g = (rgb >>  8) & 0xff;  // extract green
      const b = (rgb >>  0) & 0xff;  // extract blue
      const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
      return luma < 40 ? '#fff' : '#000'
    }
  },
}
</script>

<style lang="scss" scoped>
  .projectThumbnail{
    @include border(2px);
    align-items: center;
    border-radius:5px;
    box-shadow: 2px 2px 0 #000;
    color:#000;
    display:flex;
    height:100%;
    width:100%;
    position:relative;
    &:active{
      box-shadow: none;
      left:2px;
      top:2px;
    }
    img{
      height:4rem;
      margin:.5rem .25rem .5rem .5rem;
      width:4rem;
    }
    .info{
      flex:1;
      padding:.25rem;
      h3{
        font-size:clamp(.8rem, 2vw, 2rem);
        font-weight: bold;
        line-height:.7rem;
      }
      .label{
        @include border(1px);
        border-radius:5px;
        background:var(--c-primary);
        color:var(--fc-primary);
        font-size:clamp(.6rem, 1vw, 1rem);
        font-weight: 900;
        padding:0 .25rem;
        position:absolute;
        left:-.5rem;
        top:-.5rem;
      }
    }
  }
</style>