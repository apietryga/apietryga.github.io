// @ts-nocheck
const fs = require('fs')
const rimraf = require("rimraf");

const router = fs.readFileSync(__dirname + "/router/index.ts", { encoding: "utf-8" })
const outDir = __dirname + '/../html/'
const htmlTemplate = fs.readFileSync("../index.html")

let routes = []
for( const [index, part] of router.split("path:").entries() ){
  if(index == 0){ continue }
  routes.push({
    path: part.split(",")[0].replace(/[' ]+/g, ''),
    name: part.split("name:")[1].split(",")[0].replace(/[' ]+/g, '')
  })
}
if( fs.existsSync( outDir ) ){
  rimraf.sync( outDir );
}
fs.mkdirSync( outDir )

for( const route of routes ){
  route.path = route.path == "/" ? "/index" : route.path;
  fs.writeFileSync(outDir + route.path + ".html", htmlTemplate)
}
fs.writeFileSync(outDir + "/.htaccess", "smthin htacsess things")

export { }