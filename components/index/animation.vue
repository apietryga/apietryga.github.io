<template>
  <div class="scene">
    <canvas id="bg"></canvas>
    SCENE
  </div>

</template>

<script setup>

  import * as THREE from 'three';
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

  const clock = new THREE.Clock()
  let scene, camera, mixer, renderer, char, sitting, hands_crossing_idle
  let camera_pose = 'start'

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
    const aspect = 1
    const near = 1
    const far = 1000

    camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    camera.position.set(...camera_poses[camera_pose].position)
    camera.rotation.set(...camera_poses[camera_pose].rotation)

  }

  function applyAnimation(){
    
    mixer = new THREE.AnimationMixer(char.scene)
    const clips = char.animations
    console.log('clips', clips)

    const clip = THREE.AnimationClip.findByName(clips, 'Hands Crossing Idle')
    // const action = mixer.clipAction(clip)
    hands_crossing_idle = mixer.clipAction(clip)
    
    const sitting_clip = THREE.AnimationClip.findByName(clips, 'From cross hands to sitting')
    sitting = mixer.clipAction(sitting_clip)
    sitting.setLoop(THREE.LoopOnce);
    // sitting.setLoop(THREE.LoopPingPong);
    // sitting.repetitions = 1;
    // sitting.loop = 1;
    sitting.clampWhenFinished = true;

    hands_crossing_idle.play()
    // hands_crossing_idle.

  }

  function animation(){
    mixer.update(clock.getDelta())
    renderer.render(scene, camera)
  }

  function setRendererSize(){
    const size = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth
    renderer.setSize(size, size)
  }

  function wheelAnimation(){
    setTimeout(() => {
      
      
          // console.log('wheel update', window.scrollY)
          // console.log('mixer', mixer)
          console.log('scroll00', window.scrollY, window)
          if(window.scrollY < 50){
      
            // sitting.timeScale = -1
            // sitting.reset().setEffectiveTimeScale(-1).play().setEffectiveTimeScale(1)
            // sitting.timeScale = 1
            // hands_crossing_idle.play()
      
            // console.log("HERE")
            
            // sitting.timeScale = -1
            sitting.stop()
            hands_crossing_idle.play()
      
            return
          }
      
          // sitting.timeScale = 1
      
          // sitting.timeScale = 1
          hands_crossing_idle.stop()
          sitting.play()
          // sitting.addEventListener( 'finished', function( e ) {console.log('sitting end')} )
    }, 100)

    


  }

  // function onAnimationDone(e){
  //   console.log('animation done', e.action._clip.name)

  //   if('Hands Crossing Idle' == e.action._clip.name){
  //     console.log("ANIMATION SITTING DONE")
  //     sitting.stop()
  //   }

  // }

  // mixer.dispatchEvent({
  //   type: 'finished', action: this,
  //   direction: deltaTime < 0 ? -1 : 1
  // })

  onMounted(() => {

    const canvas = document.querySelector('#bg')
    scene = new THREE.Scene()
    applyCamera()

    renderer = new THREE.WebGLRenderer({ canvas })
    renderer.setPixelRatio(window.devicePixelRatio)
    setRendererSize()

    const loader = new GLTFLoader();
    loader.load( "/3d_models/character.glb", character => {

      char = character

      char.scene.rotation.x = 0
      char.scene.rotation.y = 3.1
      char.scene.rotation.z = 0
      char.scene.traverse( child => child.material ? child.material.metalness = 0 : '')
      
      applyLights()
      applyAnimation(char)
      
      scene.add(char.scene);
      console.log({scene, camera, char})
      renderer.setAnimationLoop(animation)
      document.addEventListener('wheel', wheelAnimation)
      window.addEventListener('resize', setRendererSize)
      // mixer.addEventListener('loop', onAnimationDone)

    })

  })

  onUnmounted(() => {
    renderer.setAnimationLoop(null)
    document.removeEventListener('wheel', wheelAnimation)
    window.removeEventListener('resize', setRendererSize)
    // mixer.addEventListener('loop', onAnimationDone)
  })

</script>

<style lang="scss" scoped>
  .scene{
    border:2px dashed yellow;
    #bg{
      border:5px double red;
      position:fixed;
      inset:0;
      left:unset;
      background: blue;
      z-index:-1;
      aspect-ratio: 1;
    }
  }
</style>