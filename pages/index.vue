<template>
  <div class="wrapper">

    <index-animation />
    
    <!-- <div class="snake">
      <div class="part_1"></div>
      <div class="part_2"></div>
      <div class="part_3"></div>
      <div class="part_4"></div>
    </div> -->

    <div class="section hero">
      <div class="head">
        <h1>Antoni Pietryga</h1>
        <p>Techhead</p>
        <p>scroll down to see my story</p>
      </div>
      <div class="body">
        <div class="picture_wrapper">
          <picture>
            <img src="/img/index/small_cutted.webp" 
              alt="Antoni Pietryga business photo">
          </picture>
        </div>

      </div>
    </div>

    <div class="section">
      <div class="head">
        <h2>Początek</h2>
        <p>Nauczyłem się podstaw i pisałem proste appki</p>
        <p>Pozwoliło mi to na zrealizowanie kilku prostych projektów</p>
      </div>
      <div class="body">
        <p>zdjęcie jak robiłem</p>
        <p>w tym czasie też zrobiłem kilka projektów</p>
        <div class="projects">
          <div class="project">
            Projekt 1 
          </div>
          <div class="project">
            Projekt 2
          </div>
          <div class="project">
            Projekt 3
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="head">
        <h2>Szkolenia</h2>
        <p>Zacząłem robić szkolenia z seniorami, bo było fajnie</p>
        <p>Potem robiłem szkolenia z frontu</p>
        <p>Nauczyłem się tam skillsów</p>
        <div class="skills">
          <div class="skill">PHP</div>
          <div class="skill">Vue</div>
        </div>
      </div>
      <div class="body">
        zdjęcie jak robiłem
      </div>
    </div>

    <div class="section">
      <div class="head">
        <h2>Programowanie</h2>
        <p>Zacząłem profesjonalnie kodować</p>
        <p>I se kodze</p>
        <div class="skills">
          <div class="skill">Docker</div>
          <div class="skill">Linux</div>
        </div>
      </div>
      <div class="body">
        zdjęcie jak robie
      </div>
    </div>

  </div>
</template>

<style lang="scss">
  .wrapper{
    border:2px dashed red;
    
    .section{
      border:2px dashed green;
      min-height:80vh;
      display: flex;
      align-items: center;
      justify-content: center;


      &.hero{
        // border:5px dashed green;
        align-items: stretch;

        .head{
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .body {
          flex:1;
          // height:100%;
  
  
          .picture_wrapper{
            // border:5px dashed red;
            height:80%;
            position:relative;

            picture{
              // border:5px dashed blue;
              display:inline-flex;
              // fle;
              justify-content: center;
              align-items: center;
              position:absolute;
              inset:0;
      
              // border:2px dashed green;
              img{
                max-width: 100%;
                max-height: 100%;
                // display:none;
                // position: absolute;
              }
      
            }
          }
        }
      }

    }

    // .snake{
    //   border:2px dashed red;
    //   position:relative;

    //   > div{
    //     position: absolute;
    //     min-width: 5px;
    //     min-height: 5px;
    //     border:5px solid yellow;
    //   }

    //   .part_1{
    //     top:50vh;
    //     left: calc(50% - 2.5px);
    //     height:30vh;
    //     width:calc(50%);
    //     border-top: none;
    //     border-right: none;
    //   }

    //   .part_2{
    //     top:80vh;
    //     height:80vh;
    //     width:100%;
    //     border-left:none;
    //     border-top:none;
    //   }

    //   .part_3{
    //     top:160vh;
    //     height:80vh;
    //     width:100%;
    //     border-right:none;
    //     border-top:none;
    //     border-bottom:none;
    //   }

    //   .part_4{
    //     top:240vh;
    //     height:30vh;
    //     width:calc(50%);
    //     border-left: none;
    //     border-bottom: none;
    //   }
    // }
  }
</style>