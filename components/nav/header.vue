<template>
  <header class='navHeader'>
    <div class="searchAndMenu">
      <div class="menu">
        <input type="checkbox" id="toggler" v-model="toggler">
        <label for="toggler" class="toggler">
          <div></div>
          <div></div>
          <div></div>
        </label>
        <nav> 
          <NuxtLink to="/">
            <svg width="1.5rem" height="1.5rem" version="1.1" viewBox="0 0 6.031 6.031">
              <path d="m0 2.9826h6.0312l-3.0575-2.9626zm0.79284 2e-3v3.022h1.5978v-1.4066h1.2392v1.4066h1.5286v-3.022z" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".11559" fill="var(--font-primary-color)"/>
            </svg>
            <span>{{ pageBuild[language].nav.home }}</span>
          </NuxtLink>
          <NuxtLink to="/projects">
            <svg width="1.5rem" height="1.5rem" version="1.1" viewBox="0 0 7.476 7.476">
              <path d="m0.00496 1.3496-0.0040162-0.89572c0.043515-0.25255 0.18469-0.41558 0.46192-0.45388h3.4744c0.20556 0.012296 0.43234 0.15777 0.46995 0.44183v0.90777z" fill="var(--font-primary-color)"/>
              <path d="m7.8738e-6 1.5698v5.399c-0.0014764 0.24134 0.20483 0.44241 0.47956 0.44235h6.4988c0.2905 5.423e-4 0.49807-0.2021 0.49713-0.50229v-4.8357c0.00508-0.30561-0.25317-0.5015-0.55811-0.50023z" fill="var(--font-primary-color)"/>
            </svg>
            <span>{{ pageBuild[language].nav.projects }}</span>
          </NuxtLink>
          <NuxtLink to="/contact">
            <svg width="1.5rem" height="1.5rem" version="1.1" viewBox="0 0 7.899 7.899">
              <path d="m4.5916e-6 0.14748v7.5169c-9.25e-4 0.14767 0.13805 0.28619 0.28384 0.28619h7.3205c0.17243-6.71e-4 0.29333-0.13744 0.29436-0.29106v-7.499l-3.96 4.8137s-3.8684-4.8401-3.9387-4.8267z" fill="var(--font-primary-color)" style="paint-order:normal"/>
              <path d="m0.033107 0 3.8891 4.716 3.9468-4.7z" fill="var(--font-primary-color)"/>
            </svg>
            <span>{{ pageBuild[language].nav.contact }}</span>
          </NuxtLink>
          <select name="language">
            <option value="pl">🇵🇱</option>
            <option value="en">🇺🇸</option>
          </select>
        </nav>
        <div class="navShadow"></div>
      </div>
      <div class="searchContainer">
        <form action="/projects" method="get">
          <label for="search">
            <svg width="1.5rem" height="1.5rem" version="1.1" viewBox="0 0 13.425 13.229">
              <g transform="translate(48.371 -75.481)" stroke="var(--font-primary-color)" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="-42.914" cy="81.458" r="2.9783" fill="none" style="paint-order:normal"/>
                <rect transform="rotate(-52.957)" x="-91.356" y="17.877" width=".15743" height="4.127" fill="var(--font-primary-color)" style="paint-order:normal"/>
              </g>
            </svg>
          </label>
          <input type="text" name="q" id="search" list="suggest" placeholder="Search" />
          <div class="bg"></div>
          <div class="abort">
            <svg width="1.5rem" height="1.5rem" version="1.1" viewBox="0 0 13.425 13.229">
              <g transform="translate(48.371 -75.481)" fill="none" stroke="var(--font-primary-color)" stroke-linecap="round" stroke-linejoin="round">
                <path d="m-45.655 78.137 7.9677 7.841"/>
                <path d="m-37.699 78.09-7.9446 7.8871"/>
              </g>
            </svg>
          </div>          
        </form>
        <div class="suggestions"></div>
      </div>
    </div>
    <NuxtLink class="linkLogo" to="/">
      <navLogo />
    </NuxtLink>
  </header>
</template>

<script>
  export default {
    data(){ 
      return {
        ...this.$appData,
        toggler: 'off',
      } 
    },
    watch:{
      '$route.fullPath'(newValue){
        this.toggler = 'off'
      }
    },
  }
</script>

<style lang="scss">
  .navHeader{
    position:fixed;
    background-color:var(--dark-primary);
    top:0;
    width:100%;
    height: var(--navHeaderHeight);
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
        align-items: center;
        display:flex;
        height:var(--navHeaderHeight);
        justify-content: center;
        padding:.5rem 1rem .5rem .5rem;
        right:0;
        .navShadow{
          transition:.5s;
          position:absolute;
          width:100%;
          height:var(--navHeaderHeight);
          left:0;
          top:0;
          background-color:var(--dark-primary);
        }
        .toggler{
          align-items: center;
          border:1px dashed transparent;
          cursor:pointer;
          display:flex;
          flex-direction: column;
          height: 1.5rem;
          justify-content: center;
          position:relative;
          width: 1.5rem;
          z-index:2;
          div{
            
            background:var(--font-primary-color);
            border-radius:2px;
            height:2px;
            margin:.1rem;
            position:absolute;
            transition:.5s;
            width: 80%;
            &:nth-child(1){
              animation:togglerEl1_reverse .4s;
              top:2px;
            }
            &:nth-child(3){
              animation:togglerEl3_reverse .4s;
              bottom:2px;
            }
          }
        }
        #toggler{
          display:none;
          &:checked ~ .toggler{
            div{
              &:nth-child(1){
                animation:togglerEl1 .4s;
                transform:rotate(135deg);
                top:calc( 50% - 3px );
              }
              &:nth-child(2){
                opacity:0;
                transition: .1s;
              }
              &:nth-child(3){
                animation:togglerEl3 .4s;
                transform:rotate(-135deg);
                bottom:calc( 50% - 3px );
              }
            }
          }
          &:checked ~ nav{
            top:var(--navHeaderHeight);
            height:calc(100vh - #{var(--navHeaderHeight)});
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
          top:var(--navHeaderHeight);
          transition:1s;
          position:absolute;
          width:100%;
          left:0;
          top:-100vh;
          display:flex;
          flex-direction:column;
          padding:.5rem .5rem .5rem 0;
          color:#fff;
          background-color: #040003;
          >*{
            animation: hideMenu 1s ease;
          }
          a{
            @extend %actionColors;
            align-items: center;
            border-radius:1rem;
            color: var(--font-primary-color);
            display:flex;
            font-size:.8rem;
            line-height: .7rem;
            margin-left:1rem;
            svg{
              padding:5px;
            }
          }
          select{
            animation: none;
            background-color: transparent;
            border:none;
            color:var(--font-primary-color);
            cursor:pointer;
            margin:0 1rem;
            max-width:fit-content;
            outline: none;
            padding:.5rem;
            white-space: normal;
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
            background: var(--hover-color);
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
            align-items:center;
            position:relative;
            z-index:1;
            width:1.8rem;
            padding:0 .3rem;
          }
          .abort{
            opacity:0;
            transition: .5s;
            width:0;
            padding:0;
          }
          input:focus{
            width:7rem;
          }
          input:focus ~ .abort{
            opacity:1;
            left:0;
            padding:0 .3rem;
            width:1.8rem;
          }
          input:focus ~ .bg{
            background:var(--hover-color);
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
              font-weight: 500;
              span, &select{
                padding:0;
                margin:0 .5rem;
              }
              svg{
                display:none;
              }
            }
          }
        }
      }
    }
    .linkLogo {
      align-items: center;
      display:flex;
      padding:.5rem 0 .5rem 1rem;
      position:relative;
      img{
        height:var(--navHeaderHeight) - 1;
        width:var(--navHeaderHeight) - 1;
      }
    }    
  }
</style>