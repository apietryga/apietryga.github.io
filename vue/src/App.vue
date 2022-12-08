<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <RouterLink to="/" class="logoWrapper">
        <img alt="apietryga Logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
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
  margin:0 .8rem 1rem .8rem;
  padding-top:1rem;
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
        font-size:.8rem;
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
        @include border(1px);
        display:block;
        height:1.4rem;
        margin-right:1.2rem;
        position:relative;
        width:1.4rem;
        z-index:3;
        div{
          height:1px;
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
            top:20%;
          }
          &:nth-child(2){
            animation:toggler2Hide .5s;
            top:50%;
          }
          &:nth-child(3){
            animation:toggler3Hide .5s;
            bottom:20%;
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
              top:50%;
              transform:rotate(45deg);
            }
            &:nth-child(2){
              animation:toggler2Show .5s ease;
              opacity:0;
            }
            &:nth-child(3){
              animation:toggler3Show .5s;
              bottom:50%;
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
