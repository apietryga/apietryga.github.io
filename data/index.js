// Unified data entry point — shared by the Nuxt site and the topbar-app.
import projects from './projects.js'
import stack from './stack.js'
import en from './i18n/en.js'
import pl from './i18n/pl.js'
import common from './i18n/common.js'

export const i18n = { en, pl }
export { stack, common, projects }

// Merge shared project fields with the requested language's i18n block,
// returning the flat project shape the components expect (name, desc, content, ...).
// Projects flagged `active: false` are drafts — hidden in production, shown only
// when `includeInactive` is true (callers pass their dev/local flag).
export function localizedProjects(lang, { includeInactive = false } = {}) {
  return projects
    .filter(p => includeInactive || p.active !== false)
    .map(({ i18n: perLang, ...shared }) => ({
      ...shared,
      ...(perLang?.[lang] || {}),
    }))
}
