<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <RouterLink to="/" class="logoWrapper">

        <svg style="margin:.5rem" width="1.5rem" height="1.5rem" version="1.1" viewBox="0 0 143.01 143.01" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(-27.954 -21.108)">
            <path fill="var(--fc-primary)" d="m75.343 24.916-39.224 91.826 2.1751 2.7683 3.4313-7.3861h45.878l21.229 48.123 20.17-6.7231zm-10.321 32.275 21.534 51.457h-43.277z" />
            <circle cx="99.457" cy="92.611" r="69.003" fill="none" stroke="var(--fc-primary)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
          </g>
        </svg>

        <h1>apietryga</h1>
      </RouterLink>
      <nav>
        <div class="hider"></div>
        <input type="checkbox" id="toggler">
        <label for="toggler">
          <div></div>
          <div></div>
          <div></div>
        </label>
        <ul>
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/projects">Project</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style lang="scss" scoped>
header{
  position:sticky;
  margin:0 .8rem 1rem .8rem;
  top:1rem;
  z-index:2;
  // padding-top:1rem;
  .wrapper{
    align-items: center;
    display:flex;
    justify-content: space-between;
    position: relative;
    .logoWrapper{
      @include border(0 1px 0 0);
      display:flex;
      z-index:3;
      img{
        height:1rem;
        margin:.4rem .2rem .4rem 1.2rem;
        width:1rem;
      }
      h1{
        align-items: center;
        color: var(--fc-primary);
        display:flex;
        font-family: var(--f-primary);
        font-size:1rem;
        font-weight: 600;
        letter-spacing: 0.1rem;
        margin-right:1.2rem;
        text-transform: uppercase;
      }
    }
    nav{
      .hider{
        @include border(1px 0);
        background-color: var(--c-primary);
        height:100%;
        left:0;
        position:absolute;
        top:0;
        width:100%;
        z-index:2;
      }
      label {
        @include border(2px);
        display:block;
        height:1.4rem;
        margin-right:1.2rem;
        position:relative;
        width:1.4rem;
        z-index:3;
        div{
          height:2px;
          width:80%;
          left:10%;
          background-color: var(--b-primary);
          position:absolute;
          @keyframes toggler1Hide {
            0%{ top:50%;transform:rotate(45deg); }
            50%{ top:50%; transform:rotate(0deg);}
            100%{ top:20%;}
          }
          @keyframes toggler2Hide {
            0%{opacity:0;}
            50%{opacity:0;}
            51%{opacity:1;}
          }
          @keyframes toggler3Hide {
            0%{ bottom:50%;transform:rotate(-45deg); }
            50%{ bottom:50%; transform:rotate(0deg);}
            100%{ bottom:20%;}
          }
          &:nth-child(1){
            animation:toggler1Hide .5s;
            // top:20%;
            top:calc( 20% - 1px );
          }
          &:nth-child(2){
            animation:toggler2Hide .5s;
            // top:50%;
            top:calc( 50% - 1px );
          }
          &:nth-child(3){
            animation:toggler3Hide .5s;
            bottom:20%;
            // bottom:calc( 20% - 1px );
          }
        }
      }
      #toggler{ 
        display: none;
        &:checked ~ {
          label div{
            @keyframes toggler1Show {
              0%{ top:20%; transform:rotate(0deg);}
              50%{ top:50%; transform:rotate(0deg);}
              100%{ transform:rotate(45deg); }
            }
            @keyframes toggler2Show {
              0%{opacity:1;}
              50%{opacity:1;}
              51%{opacity:0;}
            }
            @keyframes toggler3Show {
              0%{ bottom:20%; transform:rotate(0deg);}
              50%{ bottom:50%; transform:rotate(0deg);}
              100%{ transform:rotate(-45deg); }
            }
            &:nth-child(1){
              animation:toggler1Show .5s;
              // top:50%;
              top:calc(50% - 1px);
              transform:rotate(45deg);
            }
            &:nth-child(2){
              animation:toggler2Show .5s ease;
              opacity:0;
            }
            &:nth-child(3){
              animation:toggler3Show .5s;
              // bottom:50%;
              bottom:calc(50% - 1px);
              transform:rotate(-45deg);
            }
          }
          ul{
            top:4rem;
          }
        }
      }
      ul{
        @include border(1px);
        background-color: var(--c-tertiary);
        border-radius:10px;
        box-shadow: 3px 3px #000;
        left:1.5rem;
        list-style: none;
        padding:2rem 2rem 4rem 2rem;
        position:fixed;
        right:0;
        top:-15rem;
        transition: .5s;
        width: calc( 100% - 3rem);
        z-index:1;
        li{
          margin-bottom:.5rem;
          a{
            @include border(1px);
            background-color: var(--c-primary);
            border-radius:10px;
            box-shadow: 3px 3px #000;
            color:var(--fc-primary);
            display:inline;
            font-family: var(--f-primary);
            justify-content: center;
            line-height:0;
            padding:.2rem 1rem;
            position:relative;
            text-transform: uppercase;
            &.router-link-active{
              box-shadow: none;
              left:3px;
              top:3px;
            }
          }
        }
      }
    }
  }
}


</style>
