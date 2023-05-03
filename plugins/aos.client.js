// Read up more here: https://github.com/michalsnik/aos
import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) =>{
  nuxtApp.AOS = new AOS.init({ 
    duration: 300,
    // easing: 'ease-in-out-cubic',
    // once: true
  })
})