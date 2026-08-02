// Translation + project accessor, ported from the old Nuxt plugin.
// Exposes `t()` / `p()` and installs them as global `$t` / `$p` so the
// existing templates keep working unchanged.
import { i18n, common, stack, localizedProjects } from '../data/index.js'

const lang = 'en'
// const lang = 'pl'
const all = { stack }
const projects = localizedProjects(lang)
const content = { en: i18n.en, pl: i18n.pl, all, common }

export function t(trans_key) {
  if (typeof trans_key !== 'string') { return }
  let a = trans_key.replace(/\[(\w+)\]/g, '.$1').replace(/^\./, '').split('.')
  let o = { ...content[lang], ...content.all, ...content.common, projects }
  for (let i = 0, n = a.length; i < n; ++i) {
    if (a[i] in o) { o = o[a[i]] } else { return }
  }
  return o
}

export function p(url, selector) {
  const project = projects.find(pr => pr.url == url)
  if (!project) { return console.error(`Project "${url}" does not exists`) }
  if (project[selector] !== undefined) { return project[selector] }
  return console.error(`Selector "${selector}" does not exist on project "${url}"`)
}

// Vue plugin: expose $t / $p on every component instance.
export default {
  install(app) {
    app.config.globalProperties.$t = t
    app.config.globalProperties.$p = p
  },
}
