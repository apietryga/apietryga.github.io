// Central category registry — the single source of *domain* tags
// (what a project is about: an app, a video, a game, education…).
// Technologies live separately in ./tech.js.
// Projects reference categories by key; resolve a label with `categories[key]`.
/** @satisfies {Record<string, string>} */
export default {
  game: "game",
  app: "app",
  education: "education",
  video: "video",
}
