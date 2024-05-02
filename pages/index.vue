<template>
  <div class="wrapper">

    <div class="section">
      <div class="head">
        <h1>Antoni Pietryga</h1>
        <p>Techhead</p>
        <p>scroll down to see my story</p>
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
    }
  }
</style>