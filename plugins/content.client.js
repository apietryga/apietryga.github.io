export default defineNuxtPlugin((/* nuxtApp */) => {
  const lang = 'en'

  const content = {
    en: {
      home: {
        title: "hello!",
        name: "apietryga",
        description: "I'm a software engineer, currently working at linkhouse.",
      
      },
    },
    pl: {}
  }
  return { provide: { c: content[lang] } }
  // return {  c: content[lang] }
})