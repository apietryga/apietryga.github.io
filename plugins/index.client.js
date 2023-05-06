import VueGtag from 'vue-gtag-next'
import AOS from "aos" 
import "aos/dist/aos.css"

export default defineNuxtPlugin((nuxtApp) =>{
  nuxtApp.vueApp.use(VueGtag, { property: { id: 'G-GNVSMRLKQ3' } })
  nuxtApp.AOS = new AOS.init({ duration: 300 })
})