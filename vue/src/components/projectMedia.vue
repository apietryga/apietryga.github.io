<template>
  <div class="media" v-if="media">
    <img
      v-if="type === 'img'" 
      :src="'/img/contents/'+media"
      :alt="alt"
    />

    <div 
      class="yt"
      v-else-if="type === 'youtube'"
    >
      YOUTUBE: {{ yt_id }}
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
    },
  },
  data(){
    return {
      type: "",
      alt: "",
      yt_id: "",
    }
  },
  methods: {
    detectType(){
      // detect image
      if(['webp'].includes(this.media.split(".")[this.media.split(".").length - 1 ])){ 
        this.alt = this.media.split("_").join(" ").split(".")[0]
        return this.type = "img" 
      }

      // detect youtube video
      for( const parts of this.media.split(".") ){
        if(parts == 'youtube'){
          this.yt_id = this.media.split("/")[ this.media.split("/").length - 1 ]
          return this.type = "youtube"
        }
      }

    },
  },
  mounted() {
    this.detectType();
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