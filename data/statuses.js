// Central status registry — the lifecycle stage of a project.
// Projects reference a status by key; resolve a label with `statuses[key]`.
/** @satisfies {Record<string, string>} */
export default {
  live: "Live",                    // online — up and running
  development: "In Development",    // actively being built
  completed: "Completed",          // shipped / wrapped up
  archived: "Archived",            // shelved, no longer maintained
}
