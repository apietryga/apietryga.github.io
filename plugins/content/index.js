import en from './langs/en'
import pl from './langs/pl'
import common from './langs/common'

export default defineNuxtPlugin( app => {
  // const lang = 'en'
  const lang = 'pl'
  const all = {
    stack:[
      'HTML',
      'CSS',
      'SCSS',
      'PHP',
      'JavaScript',
      'Node.js',
      'jQuery',
      'CPP',
      'Arduino',
      'Python',
      'django',
      'Flask',
      'Java',
      'Spring',
      'MySQL',
      'iOT',
      'SEO',
      'ReactJS',
      // ---
      'Vue',
      'Nuxt',
      'Docker',
      'Kubernetes',
      'Linux',
      'Slim',
      'Twig'
    ],
  }
  const content = { en, pl, all, common }

  const t = trans_key => {
    let a = trans_key.replace(/\[(\w+)\]/g, '.$1').replace(/^\./, '').split('.')
    let o = {...content[lang], ...content.all, ...content.common }
    for (let i = 0, n = a.length; i < n; ++i) {
      if (a[i] in o){ o = o[a[i]] }else{ return }
    }
    return o;
  }
  const p = ( url, selector ) => {
    const project = content[lang].projects.find(p => p.url == url)
    if(!project){ return console.error(`Project "${url}" does not exists`) }
    if(project[selector]){ return project[selector] }
    if(project.lang[lang][selector]){ return project.lang[lang][selector] }
    return console.error(`Selector "${selector}" does not exist on project "${url}"`)
  }
  return { provide: { t, p } }
})