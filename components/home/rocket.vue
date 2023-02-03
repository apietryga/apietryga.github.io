<template>
  <div>
    <div id="rocket" ref="container"></div>
  </div>
</template>

<script>
  import * as THREE from 'three';
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
  export default {
    methods:{
      init(){
        let scene,
          camera,
          fieldOfView,
          aspectRatio,
          nearPlane,
          farPlane,
          renderer,
          rocket,
          HEIGHT,
          WIDTH;

        const targetRocketPosition = 40;
        const animationDuration = 2000;

        const createScene = () => {
          HEIGHT = window.innerHeight;
          WIDTH = window.innerWidth;

          scene = new THREE.Scene();

          scene.fog = new THREE.Fog(0x5d0361, 10, 1500);

          aspectRatio = WIDTH / HEIGHT;
          fieldOfView = 60;
          nearPlane = 1;
          farPlane = 10000;
          camera = new THREE.PerspectiveCamera(
            fieldOfView,
            aspectRatio,
            nearPlane,
            farPlane
          );

          camera.position.x = 0;
          camera.position.z = 500;
          camera.position.y = -10;

          renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
          });
          renderer.setSize(WIDTH, HEIGHT);

          renderer.shadowMap.enabled = true;

          this.$refs.container.append(renderer.domElement);

          window.addEventListener("resize", handleWindowResize, false);

          let loader = new GLTFLoader();
          loader.load( "/models/rocket.gltf", gltf => {
              rocket = gltf.scene;
              rocket.position.y = 50;
              scene.add(rocket);
            }
          );
        };
        const handleWindowResize = () => {
          HEIGHT = window.innerHeight;
          WIDTH = window.innerWidth;
          renderer.setSize(WIDTH, HEIGHT);
          camera.aspect = WIDTH / HEIGHT;
          camera.updateProjectionMatrix();
        };
        const createLights = () => {
          const ambientLight = new THREE.HemisphereLight(0x404040, 0x404040, 1);

          const directionalLight = new THREE.DirectionalLight(0xdfebff, 1);
          directionalLight.position.set(-300, 0, 600);

          const pointLight = new THREE.PointLight(0xa11148, 2, 1000, 2);
          pointLight.position.set(200, -100, 50);

          scene.add(ambientLight, directionalLight, pointLight);
        };
        const loop = () => {
          const t = (Date.now() % animationDuration) / animationDuration;

          renderer.render(scene, camera);

          const delta = targetRocketPosition * Math.sin(Math.PI * 2 * t);
          if (rocket) {
            rocket.rotation.y += 0.1;
            rocket.position.y = delta;
          }

          requestAnimationFrame(loop);
        };
        const main = () => {
          createScene();
          createLights();

          renderer.render(scene, camera);
          loop();
        };

        main();
      },
    },
    mounted(){
      this.init();
    },
  }
</script>

<style lang="scss">
  #rocket{
    border:2px dashed blue;
    position:fixed;
    z-index:10;
    top:0;
    left:0;
    canvas{
      max-width:100%;
      max-height:100%;
    }
  }
</style>

<!-- 
<template>
  <div>
    <div id="rocket" ref="container"></div>
  </div>
</template>

<script>
  import * as THREE from 'three';
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
  export default {
    data(){
      return{
        animationDuration: 2000,
        aspectRatio:'',
        camera:'',
        farPlane:'',
        fieldOfView:'',
        HEIGHT:'',
        nearPlane:'',
        renderer:'',
        rocket:'',
        scene:'',
        targetRocketPosition: 40,
        WIDTH:'',
      }
    },
    mounted(){
      this.main();
    },
    methods: {
      createLights(){
        const ambientLight = new THREE.HemisphereLight(0x404040, 0x404040, 1);
        const directionalLight = new THREE.DirectionalLight(0xdfebff, 1);
        directionalLight.position.set(-300, 0, 600);

        const pointLight = new THREE.PointLight(0xa11148, 2, 1000, 2);
        pointLight.position.set(200, -100, 50);

        this.scene.add(ambientLight, directionalLight, pointLight);
      },
      createScene(){
        this.HEIGHT = window?.innerHeight;
        this.WIDTH = window?.innerWidth;

        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.Fog(0x5d0361, 10, 1500);

        this.aspectRatio = this.WIDTH / this.HEIGHT;
        this.fieldOfView = 60;
        this.nearPlane = 1;
        this.farPlane = 10000;
        this.camera = new THREE.PerspectiveCamera(
          this.fieldOfView,
          this.aspectRatio,
          this.nearPlane,
          this.farPlane
        );

        this.camera.position.x = 0;
        this.camera.position.z = 500;
        this.camera.position.y = -10;

        this.renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true
        });
        this.renderer.setSize(this.WIDTH, this.HEIGHT);

        this.renderer.shadowMap.enabled = true;

        this.$refs.container.append(this.renderer.domElement);

        window?.addEventListener("resize", this.handleWindowResize, false);

        let loader = new GLTFLoader();
        loader.load( "/models/rocket.gltf", gltf => {
            this.rocket = gltf.scene;
            this.rocket.position.y = 50;
            this.scene.add(this.rocket);
          }
        );
      },
      handleWindowResize(){
        this.HEIGHT = window?.innerHeight;
        this.WIDTH = window?.innerWidth;
        this.renderer.setSize(this.WIDTH, this.HEIGHT);
        this.camera.aspect = this.WIDTH / this.HEIGHT;
        this.camera.updateProjectionMatrix();
      },
      loop(){
        const t = (Date.now() % this.animationDuration) / this.animationDuration;

        console.log({})

        console.log('------------------------------------------')
        console.log('renderen1', this.renderer)
        console.log('renderen2', {...this.renderer})
        console.log('------------------------------------------')

        const render = {...this.renderer}
        // render.render(this.scene, this.camera);
        // render.render({...this.scene}, this.camera);
        const scene = {...this.scene}
        const camera = {...this.camera}
        console.log({scene, camera, cam: {...this.camera}})
        // render.render(scene, {...this.camera});
        render.render(this.scene, camera);

        // this.renderer.render(this.scene, this.camera);

        const delta = this.targetRocketPosition * Math.sin(Math.PI * 2 * t);
        if (this.rocket) {
          this.rocket.rotation.y += 0.1;
          this.rocket.position.y = delta;
        }

        window?.requestAnimationFrame(this.loop);
      },
      main(){
        this.createScene();
        this.createLights();
        this.renderer.render(this.scene, this.camera);
        this.loop();
      },

    },

  }
</script>

<style lang="scss">
  #rocket{
    border:2px dashed blue;
    canvas{
      max-width:100%;
    }
  }
</style> 
-->