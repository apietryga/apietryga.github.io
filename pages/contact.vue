<template>
  <main class="contact">
    <h1>{{lang[language].desc}}</h1>
      <h3>{{fullName}}</h3>
      <p>{{phone}}</p>
      <p>{{mail}}</p>
      <h2>{{lang[language].content[0]}}</h2>
      <section class="socials">
        <a class="single github" :href="github" target="_blank"></a>
        <a class="single phone" :href="'tel:' + phone"></a>
        <a class="single mail" :href="'mailto:' + mail"></a>
        <a class="single messenger" :href="messenger" target="_blank"></a>
        <a class="single insta" :href="ig" target="_blank"></a>
        <a class="single yt" :href="yt" target="_blank"></a>
        <a class="single fb" :href="fb" target="_blank"></a>
      </section>
  </main>
</template>

<script>
  export default {
    // setup(){
    //   useHead({
    //     title: 'Contact Me!',
    //     meta: [
    //       { name: "description", content: "Get contact to me" },
    //     ]
    //   })
    // },
    data(){
      const { contact, language } = this.$appData
      return { ...contact, language }
    },
  }
</script>

<style lang="scss">
  .contact{
    margin-top:var(--navHeaderHeight);
    // min-height: calc(70vh - #{var(--navHeaderHeight)});
    // min-height: calc(70vh - var(--navHeaderHeight));
    // min-height: calc(100vh - var(--navHeaderHeight));
    min-height: calc( 100vh - ( var(--navfooterHeight) + var(--navHeaderHeight)));
    
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top:1.5rem;
    h3,p{
      margin:.5rem;
    }
    h2{margin:1rem;}
    .socials{
      padding:.5rem 1rem 2rem 1rem;
      display: grid;
      grid-template-areas:
      'gh ph ml'
      'mg ig fb'
      '.  yt .';
      @media (min-width : 350px){
        gap:1rem;

      }
      @media (min-width : 720px){
        grid-template-areas:
        'gh ph ml mg'
        '.  ig fb yt';
      }
      .single{
        width:100px;
        height:100px;
        border-radius:25px;
        background-size:100%;
        background-repeat:no-repeat;
        background-position: center;
      }
      .github{
        grid-area:gh;
        background-image:
        url("/img/page/contact/github.svg"),
        linear-gradient(#fff,rgb(221, 215, 215));
      }
      .phone{
        grid-area:ph;
        background-image:
        url("/img/page/contact/phone.svg"),
        linear-gradient(#5EF979,#09BB26);
      }
      .mail{
        grid-area:ml;
        background-image:
        url("/img/page/contact/mail.svg"),
        linear-gradient(#1E52EE,#19E4FF);
      }
      .messenger{
        grid-area:mg;
        background-image:
        url("/img/page/contact/messenger.svg"),
        linear-gradient(#00C6FF,#006EFF);
      }
      .insta{
        grid-area:ig;
        background-image:
        url("/img/page/contact/instagram.svg"),
        radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
      }
      .fb{
        grid-area:fb;
        background-image:
        url("/img/page/contact/facebook.svg"),
        linear-gradient(#18AAFD,#0066E2);
      }
      .yt{
        grid-area:yt;
        background-image:
        url("/img/page/contact/youtube.svg"),
        linear-gradient(#DB2824,#760700);
      }
    }
  }
</style>