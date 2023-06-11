import { execa } from "execa";
const folderName = ".output/public";
(async () => {
  try {
    await execa(`git checkout --orphan gh-pages`);

    console.log("Building started...");

    await execa(`npm run generate`);
    await execa(`git --work-tree ${ folderName } add --all`);
    await execa(`git --work-tree ${ folderName } commit -m gh-pages`);

    console.log("Pushing to gh-pages...");

    await execa(`git push origin HEAD:gh-pages --force`);
    await execa(`git checkout -f master`);
    await execa(`git branch -D gh-pages`);
 
    console.log("Successfully deployed, check your settings");
 
  } catch (e) { console.log({ e }); process.exit(1) }
})();