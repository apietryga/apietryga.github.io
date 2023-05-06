<template>
  <div class="outerWrapper">
    <div class="logoWrapper" ref="logoWrapper">
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
      return{
        height: 100,
        width: 100,
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
        const ambientLight = new THREE.HemisphereLight(0xaaaaaa, 0xaaaaaa, 0.7);
        ambientLight.position.set(0, 0, 150);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(10, 0, 0);

        const pointLight = new THREE.PointLight(0x000000, 2, 1000, 2);
        pointLight.position.set(200, -100, 50);

        this.scene.add(ambientLight, directionalLight, pointLight);
      },
      createScene(){
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 80, this.width / this.height, 1, 10000); // fieldOfView. aspectRadio, nearPlane, farPlane
        this.camera.position.z = 3

        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        this.renderer.setSize(this.width, this.height);
        // this.renderer.shadowMap.enabled = true;
        let loader = new GLTFLoader();

        this.controls = new OrbitControls( this.camera, this.renderer.domElement );
        this.controls.enableZoom = false;
        this.controls.touches = { ONE: THREE.TOUCH.ROTATE }
        
        loader.load( "/img/frontPage/logo_white.glb", gltf => {
          this.rocket = gltf.scene;
          this.rocket.rotation.x = 90 * Math.PI / 180
          this.scene.add(this.rocket);
          this.$refs.container.append(this.renderer.domElement);
        })
      },
      handleWindowResize() {
        if(!this.$refs.logoWrapper){ return }
        this.setCanvasDimensions()
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
      setCanvasDimensions(){
        const { offsetWidth, offsetHeight } = this.$refs.logoWrapper
        return this.width = this.height = offsetWidth > offsetHeight ? offsetWidth : offsetHeight
      },
    },
    async mounted(){
      this.setCanvasDimensions()
      if(this.$refs.logoWrapper.offsetWidth == 0){
        await new Promise((res, rej) => {
          let i = 0
          const tryToSetSize = setInterval(() => {
            this.setCanvasDimensions()
  
            if(++i > 30){  
              clearInterval(tryToSetSize); 
              rej({ error: 'waiting too long'}) 
            }
            
            if(this.$refs.logoWrapper.offsetWidth == 0){ return }
  
            clearInterval(tryToSetSize); 
            res({ error: null })
  
          }, 100);
        })
      }
      this.init()
    },
  }
</script>

<style lang="scss">
.outerWrapper{
  flex:1;
  height:100%;
  display:flex;
  align-items: center;
  .logoWrapper{
    position:relative;
    width:100%;
    height:70%;
    display:flex;
    justify-content: center;
    place-items:center;
    #logo{
      position:absolute;
      max-width: 100%;
      display: flex;
      align-items: center;
      canvas{
        height: fit-content !important;
        max-width:100%;
      }
    }
  }
}

@media (max-width: 768px){
  .outerWrapper .logoWrapper #logo{
    height:150%;
    bottom:-55%;
  }
}
</style>
