import { execSync } from "node:child_process";

const folderName = "dist";

try {
  execSync("git checkout --orphan gh-pages", { stdio: "inherit" });

  console.log("Building started...");

  execSync("npm run build", { stdio: "inherit" });
  execSync(`git --work-tree ${folderName} add --all`, { stdio: "inherit" });
  execSync('git --work-tree dist commit -m "gh-pages"', { stdio: "inherit" });

  console.log("Pushing to gh-pages...");

  execSync("git push origin HEAD:gh-pages --force", { stdio: "inherit" });
  execSync("git checkout -f master", { stdio: "inherit" });
  execSync("git branch -D gh-pages", { stdio: "inherit" });

  console.log("Successfully deployed, check your settings");
} catch (e) {
  console.log({ e });
  process.exit(1);
}
