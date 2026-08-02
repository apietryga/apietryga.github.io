// Central technology registry — the single source of technology tags
// (languages, frameworks, tools a project was built with).
// Domain tags live separately in ./categories.js.
// Projects reference technologies by key; resolve a label with `tech[key]`.
// One key per technology — no `js`/`javascript`/`javasript` duplicates.
/** @satisfies {Record<string, string>} */
export default {
  html: "HTML",
  css: "CSS",
  scss: "SCSS",
  javascript: "JavaScript",
  nodejs: "Node.js",
  jquery: "jQuery",
  vue: "Vue",
  nuxt: "Nuxt",
  twig: "Twig",
  php: "PHP",
  mysql: "MySQL",
  redis: "Redis",
  python: "Python",
  django: "Django",
  java: "Java",
  spring: "Spring",
  cpp: "C++",
  arduino: "Arduino",
  android: "Android",
  docker: "Docker",
  kubernetes: "Kubernetes",
  wordpress: "WordPress",
  excel: "Excel",
  csv: "CSV",
}
