const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const fs = require('fs');
const func = require('./static/js/functions');
nunjucks.configure('views', {
  autoescape: true,
  express   : app,
  watch : true
});

const pathURL = "localhost";
const data = require('./static/js/data')
console.log(data);

const contentScraper = () => {
  const content = new Map();
  // const content = [];
  const path = __dirname+"/content/";
  const files = fs.readdirSync(path);
  for(const file of files){
    if(file.split(".")[1] == "html"){
      content.set(file,fs.readFileSync(path+file,'utf8'))
      // content.push({[file]:fs.readFileSync(path+file,'utf8')})
    }else{
      if(typeof content.get(file) == 'undefined'){
        content.set(file,[]);
        // content.push({[file]:fs.readFileSync(path+file,'utf8')})
      }
      const filesInside = fs.readdirSync(path+file);
      for(const fileInside of filesInside){
        if(fileInside.split(".")[1] == "html"){
          const readed = fs.readFileSync(path+file+"/"+fileInside,'utf8');

          // const getPageInfo = (readedFile) => {
          //   const result = {
          //     name: readed.split("</h1>")[0].split("<h1>")[1],
          //     desc : readed.split("</h2>")[0].split("<h2>")[1],
          //     cat : readed.split("</u>")[0].split("<u>")[1],
          //     img : readed.split("\" alt")[0].split("img src=\"")[1],
          //     href: "/"+file+"/"+fileInside
          //   };
          //   return result;
          // }
          // content.get(file).push(getPageInfo(readed));
          content.get(file).push(func.getPageInfo(readed,{file:file,fileInside:fileInside}));

          // content.get(file).push({
          //   name: readed.split("</h1>")[0].split("<h1>")[1],
          //   desc : readed.split("</h2>")[0].split("<h2>")[1],
          //   cat : readed.split("</u>")[0].split("<u>")[1],
          //   img : readed.split("\" alt")[0].split("img src=\"")[1],
          //   href: "/"+file+"/"+fileInside
          // });
          content.set(file+"/"+fileInside,readed)
        }
      }
    }
  }
  return content;
}
// SCRAPE CONTENT ONCE
let scrapedContent = contentScraper();
let scrapedContentString;
for(const [key,value] of scrapedContent.entries()){
  scrapedContentString += (key+"||"+value+"|||");
}
app.use(express.static('static'));
app.get('*', (req, res) => {
  // Refresh content on development
  if(req.get('host') == 'localhost'){
    scrapedContent = contentScraper();
  }
  const page = req.originalUrl == "/" ? 'index.html' : req.originalUrl.replace("/","");
  const template = ['projects','exps'].includes(page) ? 'list.html' : page.includes("/") ? 'details.html':'basic.html';
  const content = typeof scrapedContent.get(page) == 'undefined' ? scrapedContent.get("404.html") : scrapedContent.get(page) ;
  res.render(template, {
    title: 'APIETRYGA',
    content : content,
    scrapedContentString:JSON.stringify(scrapedContentString)
  });
});
app.listen(process.env.PORT || 80, () => { console.log('SERWER STARTED') });
