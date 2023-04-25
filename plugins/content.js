export default defineNuxtPlugin((/* nuxtApp */) => {
  const lang = 'en'

  const content = {
    en: {
      home: {
        title: "hello! <br> im apietryga",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellendus quibusdam perspiciatis eum deserunt similique, omnis minima veritatis. Alias esse possimus consequuntur perspiciatis veritatis. Aliquam nostrum eaque magnam nam enim?",
      },
    },
    pl: {}
  }
  return { provide: { c: content[lang] } }
})