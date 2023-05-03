// Read up more here: https://github.com/michalsnik/aos

import AOS from "aos";
import "aos/dist/aos.css";

// export default ({ app }) => {
// export default defineNuxtPlugin(({ app }) => {
export default defineNuxtPlugin((nuxtApp) =>{
  // app.AOS = new AOS.init({ 
  nuxtApp.AOS = new AOS.init({ 
    // disable: window.innerWidth < 640,
    // offset: 200,
    duration: 600,
    easing: 'ease-in-out-cubic',
    once: true
  })
})