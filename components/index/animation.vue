<template>
  <div class="scene">
    <canvas id="bg"></canvas>
    SCENE
  </div>

</template>

<script setup>

  import * as THREE from 'three';
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

  let scene, camera;

  function applyLights(){

    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.1)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);

    scene.add(ambientLight, directionalLight)

  }

  function applyCamera(){
    const fov = 100
    const aspect =  window.innerWidth / window.innerHeight
    const near = 1
    const far = 1000

    camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    // camera.position.setZ(5)
    camera.position.set(0, 1, 5)
    camera.rotation.set(0, 0, 0)

  }

  onMounted(() => {

    const canvas = document.querySelector('#bg')
    scene = new THREE.Scene()
    applyCamera()
    // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas })

    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
  
    
    
    const loader = new GLTFLoader();

    loader.load( "/3d_models/character.glb", gltf => {

      gltf.scene.traverse( child => child.material ? child.material.metalness = 0 : '')
      console.log(gltf)

      scene.add(gltf.scene);
      applyLights()

      renderer.render(scene, camera)

      console.log({scene, camera})

    })


  })


</script>

<style lang="scss" scoped>
  .scene{
    border:2px dashed yellow;
    #bg{
      position:fixed;
      inset:0;
      background: blue;
      z-index:1;
    }
  }
</style>