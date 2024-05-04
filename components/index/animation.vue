<template>
  <div class="scene">
    <canvas id="bg"></canvas>
    SCENE
  </div>

</template>

<script setup>

  import * as THREE from 'three';
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

  let scene, camera, mixer, renderer;

  let camera_pose = 'start'
  // camera_pose = 'default'
  const camera_poses = {
    default: {
      position: [0, 1, 10],
      rotation: [0, 0, 0],
    },
    start: {
      position: [-5, 1.4, -3.8],
      rotation: [0, -2.1, 0],
    },
  }

  function applyLights(){

    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.1)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);

    scene.add(ambientLight, directionalLight)

  }

  function applyCamera(){
    const fov = 30
    const aspect =  window.innerWidth / window.innerHeight
    const near = 1
    const far = 1000

    camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    // camera.position.setZ(5)
    // camera.position.set(0, 1, 10)
    // camera.rotation.set(0, 0, 0)
    camera.position.set(...camera_poses[camera_pose].position)
    camera.rotation.set(...camera_poses[camera_pose].rotation)

  }

  function applyAnimation(char){
    
    mixer = new THREE.AnimationMixer(char.scene)
    const clips = char.animations
    // console.log({ clips })
    const clip = THREE.AnimationClip.findByName(clips, 'Hands Crossing Idle')
    const action = mixer.clipAction(clip)
    // console.log({ clip, action })
    action.play()


  }

  const clock = new THREE.Clock()
  function animation(){
    mixer.update(clock.getDelta())
    renderer.render(scene, camera)
    // console.log('animation loop')
  }

  onMounted(() => {

    const canvas = document.querySelector('#bg')
    scene = new THREE.Scene()
    applyCamera()
    // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    renderer = new THREE.WebGLRenderer({ canvas })

    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
  
    const loader = new GLTFLoader();

    loader.load( "/3d_models/character.glb", char => {


      char.scene.traverse( child => child.material ? child.material.metalness = 0 : '')
      // char.scene.rotation.set(0, 0, 0)
      // char.scene.rotation.set(90, 0, 0, 0)
      char.scene.rotation.x = 0
      char.scene.rotation.y = 3.1
      char.scene.rotation.z = 0
      // console.log('rotation', char.scene.rotation.set())
      
      scene.add(char.scene);
      // mixer = new THREE.AnimationMixer(char.scene)

      applyLights()
      applyAnimation(char)

      // renderer.render(scene, camera)
      renderer.setAnimationLoop(animation)


      // document.addEventListener('wheel', () => {
      //   console.log('mixer update')
      //   mixer.update()
      //   renderer.render(scene, camera)
      // })

      console.log({scene, camera, char})
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
      z-index:-1;
    }
  }
</style>