<template>
  <main class="contact">
    <h1>{{ $c.contact.title }}</h1>
    <div class="socials">
      <iconCustom 
        v-for="[index, icon] in icons.entries()"
        data-aos="zoom-out"
        :type="icon"
        :data-aos-delay="100*index"
      />
    </div>
  </main>
</template>

<script>
  export default{
    data(){
      return{
        icons: [
          'github', 
          'linkedin',
          'stackoverflow',
          'instagram',
          'facebook',
          'youtube',
          'phone',
          'messenger',
          'mail',
        ],
      }
    }
  }
</script>

<style lang="scss">
  .contact{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top:1rem;
    h3,p{
      margin:.5rem;
    }
    h1{margin-bottom:1em;}
    .socials{
      padding:.5rem 1rem 2rem 1rem;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      // grid-template-areas:
      // 'gh in so'
      // 'ig fb yt'
      // 'ph mg ml';
      // @media (min-width : 350px){
        gap:1rem;
      // }
    }
  }
</style>