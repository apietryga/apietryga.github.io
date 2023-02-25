<template>
  <div class="headerWrapper">
    <!-- <header class="titleWrapper">
      <div class="title">
        <h1>apietryga</h1>
        <h2>FullStack.</h2>
      </div>

    </header> -->
    <div class="logoWrapper">
      <div id="logo" ref="container"></div>
    </div>
  </div>
</template>

<script>
  import * as THREE from 'three';
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
  export default {
    data(){
      let width = 100, height = 100;
      if(typeof window != 'undefined'){
        height = window.innerHeight;
        width = window.innerWidth;
      }
      return{
        height,
        width,
      }
    },
    methods:{
      animation(){
        if (this.rocket) {
          this.rocket.rotation.z -= 0.0025;
        }

        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.animation);
      },
      createLights(){
        // const ambientLight = new THREE.HemisphereLight(0x404040, 0x404040, 1000);
        const ambientLight = new THREE.PointLight(0xa11148, 2, 1000, 2);
        ambientLight.position.set(0, 0, 150);

        const directionalLight = new THREE.DirectionalLight(0xdfebff, 1);
        directionalLight.position.set(10, 0, 0);

        const pointLight = new THREE.PointLight(0xa11148, 2, 1000, 2);
        pointLight.position.set(200, -100, 50);

        this.scene.add(ambientLight, directionalLight, pointLight);
      },
      createScene(){
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 80, this.width / this.height, 1, 10000); // fieldOfView. aspectRadio, nearPlane, farPlane
        this.camera.position.z = 3

        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        this.renderer.setSize(this.width, this.height);
        this.renderer.shadowMap.enabled = true;
        let loader = new GLTFLoader();

        this.controls = new OrbitControls( this.camera, this.renderer.domElement );
        this.controls.enableZoom = false;
        this.controls.touches = {
          ONE: THREE.TOUCH.ROTATE,
          // TWO: THREE.TOUCH.DOLLY_PAN
        }

        loader.load( "/rocketcomcept/models/logo.glb", gltf => {
          this.rocket = gltf.scene;
          this.rocket.rotation.x = 90 * Math.PI / 180
          this.scene.add(this.rocket);
          this.$refs.container.append(this.renderer.domElement);
        })
      },
      handleWindowResize() {
        console.log("RESIZE")
        
        this.height = window.innerHeight;
        this.width = window.innerWidth;

        this.renderer.setSize(this.width, this.height);
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
      },
      async init(){
        this.createScene();
        this.createLights();
        this.renderer.render(this.scene, this.camera);
        this.animation();
        if(typeof window != 'undefined'){
          window.addEventListener("resize", this.handleWindowResize, false);
        }
      },
    },
    mounted(){
      this.init();
      // if(typeof window != 'undefined'){
      //   window.addEventListener('scroll', e => {
      //     // window.scrollY
      //     // console.log(e)
      //     // console.log('Y : ',window.scrollY)
      //     // window.innerHeight
      //     // wI - 100 %
      //     // ws - x
      //     // wI * x = 100 ws
      //     // x = (100 ws)/wI
      //     const percentScrolling = (100 * window.innerHeight) / window.innerHeight;
      //     // if(percentScrolling){}
      //     // this.rocket.position += percentScrolling
      //     this.rocket.position.y = percentScrolling/100
      //   })
      // }
    },
  }
</script>

<style lang="scss">
.headerWrapper{
  background: var(--primary-color);
  background: linear-gradient(
    var(--dark-primary),
    var(--dark-primary),
    var(--dark-primary),
    var(--bright-primary));
  // border:20px dashed blue;
  background: transparent;
  display:flex;
  position:relative;
  z-index:2;
  top:0;
  left:0;
  height:100vh;
  width:100vw;

  .titleWrapper{
    // flex:1;
    // border:2px dashed red;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width:50%;
    .title{
      color:var(--bright-primary) !important;
      // border:2px dashed red;
      padding:2rem;
      line-height: 3rem;
      h1{
        font-size:clamp(3rem, 2vw, 4rem);
        font-weight: 900;
        font-family: var(--font-family);
      }
      h2{
        text-align: end;
      }
    }
  }
  .logoWrapper{
    // border:2px dashed green;
    width:100%;
    height:100%;
    display:flex;
    justify-content: center;
    place-items:center;

  // }
  // .rocket__wrapper{

    #logo{
      // border:10px dashed red;
      // position:absolute;
      // right:5rem;
      // position:relative;
      // max-width: 50vw;
      max-width: 100%;
      display: flex;
      align-items: center;

      canvas{
        // border:2px dashed yellow;
        // max-width: 100%;
        // position:absolute;
        // left:-50vw;
        // top:-50vh;
        // bottom:0;
        // right:0;
        // width:50vw;
        // transform: scale(3);
        // max-width:50%;
        height: fit-content !important;
        max-width:100%;
        // height:auto;
        // max-height:50%;
      }
    }
  }
}

@media (max-width:768px){
  .headerWrapper{
    flex-direction: column;
    // border:2px dashed blue;
    .titleWrapper{
      // border:2px dashed red;
      flex:1;
      width: 100%;
      display:flex;
      justify-content: flex-start;
      .title{
        margin-top:8rem;
        padding:2rem;
        font-size:0.5rem;
      }
    }
    .logoWrapper{
      // border:2px dashed blue;
      width:200%;
      left:-50%;
      transform:scale(0.5);
      position:absolute;
    }
  }

}
</style>
