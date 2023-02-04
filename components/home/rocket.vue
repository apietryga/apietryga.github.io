<template>
  <div class="rocket__wrapper">
    <div id="rocket" ref="container"></div>
  </div>
</template>

<script>
  import * as THREE from 'three';
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
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
        // const targetRocketPosition = 0.5;
        // const animationDuration = 2000;
        // const t = (Date.now() % animationDuration) / animationDuration;
        // const delta = targetRocketPosition * Math.sin(Math.PI * 2 * t);
        // if (this.rocket) {
        //   this.rocket.position.y = delta;
        // }
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.animation);
      },
      createLights(){
        // const ambientLight = new THREE.HemisphereLight(0x404040, 0x404040, 1);
        const ambientLight = new THREE.HemisphereLight(0x104054, 0x49F8F1, 1);

        // const directionalLight = new THREE.DirectionalLight(0xdfebff, 1);
        const directionalLight = new THREE.DirectionalLight(0x41F4EE, 1);
        directionalLight.position.set(250, 0, 0);

        // const pointLight = new THREE.PointLight(0xa11148, 2, 1000, 2);
        const pointLight = new THREE.PointLight(0xB06B63, 2, 1000, 2);
        // pointLight.position.set(200, -100, 50);
        pointLight.position.set(-150, 10, 0);

        this.scene.add(ambientLight, directionalLight, pointLight);
      },
      createScene(){
        this.scene = new THREE.Scene();
        // this.scene.fog = new THREE.Fog(0x5d0361, 10, 1500);
        this.camera = new THREE.PerspectiveCamera( 60, this.width / this.height, 1, 10000); // fieldOfView. aspectRadio, nearPlane, farPlane
        // Object.assign(this.camera.position, {x: 0, z: 30, y: 4})
        Object.assign(this.camera.position, {
          x: 0, 
          z: 30, 
          y: 12
        })
        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        this.renderer.setSize(this.width, this.height);
        this.renderer.shadowMap.enabled = true;
        let loader = new GLTFLoader();
        loader.load( "/models/rocket2.glb", gltf => {
          this.rocket = gltf.scene;
          this.rocket.position.y = 0;
          this.rocket.rotation.x = -0.3;
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
  .rocket__wrapper{
    // ai_bg.png
    // border:2px dashed blue;
    // background: red;
    position:relative;
    // z-index:10;

    position:fixed;
    z-index:1;
    top:0;
    left:0;

    #rocket{
      canvas{
        max-width:100%;
        max-height:100%;
      }
    }
  }
</style>
