<template>
  <div class="media" v-if="media">
    <img
      v-if="detectType() === 'img'" 
      :src="'/img/contents/'+media"
      :alt="generateAlt()"
    />

    <div 
      class="yt"
      v-else-if="detectType() === 'youtube'"
    >
      YOUTUBE: 
    </div>

    <pre v-else>
      {{ media }}
    </pre>

  </div>
</template>

<script lang="ts">
export default{
  props : {
    media: {
      type : String,
      required: true
    }
  },
  methods: {
    detectType(){
      const images = ['webp']
      if(images.includes(this.media.split(".")[this.media.split(".").length - 1 ])){ return "img" }

      // if()
      for( const parts of this.media.split(".") ){
        console.log(parts)
        if(parts == 'youtube'){

          return "youtube"
        }
      }


      
      // return "img"
    },
    generateAlt(){
      return this.media.split("_").join(" ").split(".")[0]
    }
  },
  mounted() {
    console.log( this.media )
  },
}
</script>

<style lang="scss" scoped>
.media{
  border:2px dashed rgb(38, 0, 255);
  img{
    max-width: 100%;
  }
}

</style>