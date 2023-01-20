<style lang="scss">
  .navHeader{
    position:fixed;
    background-color:$darkColor;
    top:0;
    width:100%;
    height: $navHeaderHeight;
    z-index:2;
    display:flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    .searchAndMenu{
      flex:1;
      display:flex;
      flex-direction: row-reverse;
      align-items: center;
      .menu{
        right:0;
        height:$navHeaderHeight;
        padding:.5rem;
        display:flex;
        justify-content: center;
        align-items: center;
        .navShadow{
          transition:.5s;
          position:absolute;
          width:100%;
          height:$navHeaderHeight;
          left:0;
          top:0;
          background-color:$darkColor;
        }
        .toggler{
          z-index:2;
          cursor:pointer;
          width: $navHeaderHeight - 1;
          height: $navHeaderHeight - 1;
          border-radius:50%;
          display:flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          @extend %actionColors;
          position:relative;
          div{
            position:absolute;
            transition:.5s;
            border-radius:5px;
            background-color:$buttonsColor;
            height:.1rem;
            width:1rem;
            margin:.1rem;
            &:nth-child(1){
              top:.5rem;
            }
            &:nth-child(3){
              bottom:.5rem;
            }
          }
        }
        #toggler{
          @keyframes showMenu {
            0%{
              opacity:0;
              padding:0 .5rem;
            }
            20%{
              opacity:0;
            //   padding:0 .5rem;
            }
            100%{
              opacity:1;
              padding:.5rem .5rem;
            }        
          }  
          display:none;
          &:checked ~ .toggler{
            div{
              &:nth-child(1){
                transform:rotate(135deg);
                top:auto;
              }
              &:nth-child(2){
                opacity:0;
                transition: .1s;
              }
              &:nth-child(3){
                transform:rotate(-135deg);
                bottom:auto;
              }
            }
          }
          &:checked ~ nav{
            top:$navHeaderHeight;
            height:calc(100vh - #{$navHeaderHeight});
            >*{
              animation: showMenu 1s ease;
            }
            transition:.5s;
          }
          &:checked ~ .navShadow{
            background-color:rgb(0, 0, 0);
          }
        }
        nav{
          @keyframes hideMenu {
            0%{
              opacity:1;
              padding:.5rem .5rem;
            }
            30%{
              opacity:0;
              padding:0 .5rem;
            }
            100%{
              opacity:0;
              padding:0 .5rem;
            }        
          }  
          top:$navHeaderHeight;
          transition:1s;
          position:absolute;
          width:100%;
          left:0;
          top:-100vh;
          display:flex;
          flex-direction:column;
          padding:.5rem;
          color:#fff;
          background-color: #040003;
          >*{
            animation: hideMenu 1s ease;
          }
          a{
            @extend %actionColors;
            display:flex;
            align-items: center;
            border-radius:3em;
            img{
              @include svgIcon(20%);
            }
            span{
              padding-right:1.5rem;
            }
          }
          select{
            padding:.5rem;
            cursor:pointer;
            margin:0 1rem;
            max-width:fit-content;
            animation: none;
            color:inherit;
            background-color: transparent;
            white-space: normal;
            outline: none;
            border:none;
            option{
              padding:0;
              color:#000;
            }
          }
        }  
      }
      .searchContainer{
        flex:1;
        display:flex;
        justify-content: flex-end;
        align-items: center;
        position:relative;
        form{
          display:flex;
          position:relative;
          border-radius: 2rem;
          transition: .5s;
          &:hover{
            background-color: $hoverColor;
          }
          input{
            transition: .5s;
            position:relative;
            z-index:1;
            padding:0;
            background-color: transparent;
            border:none;
            outline:none;
            font-size:1rem;
            transition: .5s;
            width:0;
            flex:1;
            color:rgba(255, 255, 255, 0.8);
          }
          .bg{
            border-radius: 2rem;
            position:absolute;
            width:100%;
            height:100%;
            z-index:0;
          }
          label,.abort{
            cursor:pointer;
            display:flex;
            position:relative;
            z-index:1;
          }
          img{
            @include svgIcon(0%);
            transform: scale(0.6);
            margin:0;
            cursor:pointer;
          }
          .abort{
            opacity:0;
            left:(-$iconSize);
            transition: .5s;
            width:0;
            img{
              width:0;
            }
          }
          input:focus{
            width:7rem;
          }
          input:focus ~ .abort{
            opacity:1;
            left:0;
            width:$iconSize;
            img{
              width:$iconSize;
            }
          }
          input:focus ~ .bg{
            background-color: $hoverColor;
          }
        }
        .suggestions{
          display:none;
          flex-direction: column;
          top:100%;
          position:absolute;
          background-color: $backgroundColor;
          right:1rem;
          max-height:60vh;
          width:40vw;
          overflow-y:auto;
          border-radius:.5rem;
          padding:.5rem;
          border:1px solid rgba(0, 0, 0, 0.356);
          box-shadow: 0 0 .2rem #000;
          a{
            padding:.5rem;
            display:flex;
            flex-direction: column;
            &:not(a:nth-child(1)){
              border-top:1px solid rgba(0, 0, 0, 0.356);
            }
            &:hover,&.selected{
              background-color: #04000325;
            }
            h5{
              margin:0;
              text-align: left;
              width: 100%;
            }
            .wrapper{
              display:flex;
              align-items: center;
              justify-content: flex-start;
              gap:5px;
              width:100%;
              p{
                margin:0;
                flex:1;
              }
            }
            span{
              background-color:yellow;
            }
          }
        }
      }
      @media (min-width:749px){
        flex-direction: row;
        padding-right: .5rem;
        justify-content: space-between;
        .menu{
          .toggler{display:none!important;}
          nav{
            position:relative;
            top:0;
            flex-direction: row;
            z-index:1;
            background-color: transparent;
            a,select{
              animation:none;
              transition:none;
              span, &select{
                padding:0 .5rem;
              }
              img{
                display:none;
              }
            }
          }
        }
      }
    }
    a{
      position:relative;
      display:flex;
      align-items: center;
      padding:.5rem;
      img{
        height:$navHeaderHeight - 1;
        width:$navHeaderHeight - 1;
      }
    }    
  }
</style>

<template>
  <header class='navHeader'>
    <div class="searchAndMenu">
      <div class="menu">
        <input type="checkbox" id="toggler">
        <label for="toggler" class="toggler">
          <div></div>
          <div></div>
          <div></div>
        </label>
        <nav> 
          <RouterLink to="/">
            <img src="/img/page/nav_home.svg" alt="{{ pageBuild[language].nav.home }}">
            <span>{{ pageBuild[language].nav.home }}</span>
          </RouterLink>
          <RouterLink to="/projects">
            <img src="/img/page/nav_projects.svg" alt="{{ pageBuild[language].nav.projects }}">
            <span>{{ pageBuild[language].nav.projects }}</span>
          </RouterLink>
          <RouterLink to="/contact">
            <img src="/img/page/nav_contact.svg" alt="{{ pageBuild[language].nav.contact }}">
            <span>{{ pageBuild[language].nav.contact }}</span>
          </RouterLink>
          <select name="language">
            <option value="pl">🇵🇱</option>
            <option value="en">🇺🇸</option>
          </select>
        </nav>
        <div class="navShadow"></div>
      </div>
      <div class="searchContainer">
        <form action="/search" method="get">
          <label for="search">
            <img src="/img/page/nav_lupa.svg" alt="SEARCH" />
          </label>
          <input type="text" name="q" id="search" list="suggest" placeholder="Search" />
          <div class="bg"></div>
          <div class="abort">
            <img src="/img/page/nav_x.svg" alt="ABORT SEARCHING" />
          </div>          
        </form>
        <div class="suggestions"></div>
      </div>
    </div>
    <RouterLink to="/">
      <img src="/img/icons/logo128.webp" alt="{{title}} Logo">
    </RouterLink>
  </header>
</template>


<script lang="ts">
  import { useDataStore } from '@/stores'
  import { RouterLink } from 'vue-router'
  export default {
    data(){
      return useDataStore()
    },
  }
</script>