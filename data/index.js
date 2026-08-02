// Unified data entry point — shared by the Nuxt site and the topbar-app.
import projects from './projects.js'
import categories from './categories.js'
import tech from './tech.js'
import statuses from './statuses.js'
import stack from './stack.js'
import en from './i18n/en.js'
import pl from './i18n/pl.js'
import common from './i18n/common.js'

export const i18n = { en, pl }
export { stack, common, projects, categories, tech, statuses }

// Resolve a list of keys into their labels from a registry.
// Unknown keys fall back to the key itself so nothing silently disappears.
function resolveWith(registry, keys) {
  return (keys || []).map(k => registry[k] ?? k)
}

// Resolve a project's category keys into their labels (./categories.js).
export function resolveCategories(keys) {
  return resolveWith(categories, keys)
}

// Resolve a project's technology keys into their labels (./tech.js).
export function resolveTech(keys) {
  return resolveWith(tech, keys)
}

// Merge shared project fields with the requested language's i18n block,
// returning the flat project shape the components expect (name, desc, content, ...).
// Lifecycle is expressed by `status` (see ./statuses.js); callers filter on it.
export function localizedProjects(lang) {
  return projects
    .map(({ i18n: perLang, ...shared }) => {
      const flat = { ...shared, ...(perLang?.[lang] || {}) }
      if (flat.category) flat.category = resolveCategories(flat.category)
      if (flat.tech) flat.tech = resolveTech(flat.tech)
      // Keep `status` as the key (used for styling); expose the label separately.
      if (flat.status) flat.statusLabel = statuses[flat.status] ?? flat.status
      return flat
    })
}
