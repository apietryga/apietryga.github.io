<template>
  <div class="logoWrapper">
    <div id="logo" ref="container"></div>
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
        }
        loader.load( "/img/frontPage/logo_white.glb", gltf => {
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
      this.init()
    },
  }
</script>

<style lang="scss" scoped>
.logoWrapper{
  width:100%;
  height:100%;
  display:flex;
  justify-content: center;
  place-items:center;
  #logo{
    max-width: 100%;
    display: flex;
    align-items: center;
    canvas{
      height: fit-content !important;
      max-width:100%;
    }
  }
}
</style>
