const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const fs = require('fs');
const func = require('./static/js/functions');
nunjucks.configure('views', {
  autoescape: true,
  express   : app,
  watch : true,
  variableStart: '<$',
  variableEnd: '$>',
});
// let data = ;
// let data = require('./static/js/data').init();
// let data = require('./static/js/data').data;
let Data = require('./static/js/data');
let data = new Data().data;

const viewScraper = (options = {}) => {
  // REFRESH CONTENT ON DEVELOPMENT
  // if(options.hardrefresh){delete require.cache[require.resolve('./static/js/data')];data = require('./static/js/data').data;}
  if(options.hardrefresh){delete require.cache[require.resolve('./static/js/data')];Data = require('./static/js/data');data = new Data().data;}
  // MAKE PAGES FROM TEMPLATE
  const allPages = {};
  for(const page in data){
    if(typeof data[page] != "object"){
      allPages[page] = data[page];
    }else{
      const allItems = [];
      for(const subpage of data[page]){
        subpage.href = `${page}/${subpage.name}`;
        allPages[page+"/"+subpage.name] = subpage;
        allItems.push(subpage);
      }
      allPages[page] = allItems;
    }
  }
  return allPages;
}
// SCRAPE CONTENT ONCE
let scrapedContent = viewScraper();
scrapedContent.projects = "hi then";
app.use(express.static('static'));
app.get('*', (req, res) => {
  // REFRESH CONTENT ON DEVELOPMENT
  if(req.get('host') == 'localhost'){scrapedContent = viewScraper({hardrefresh:true});}

    // MAKE NEW PAGE TO SCREEN
    const page = {};
    page.origin = req.originalUrl == "/" ? 'index.html' : req.originalUrl.replace("/","");
    page.origin = page.origin.split(".")[0];

    const content = scrapedContent[page.origin] != null ? scrapedContent[page.origin] : scrapedContent["404"];

    if(page.origin.includes("/")){
    for( const key in scrapedContent[page.origin]){
      page[key] = scrapedContent[page.origin][key];
    }  
  }else{
    page.content = content;
  }

  const template = ['projects','exps'].includes(page.origin) ? 'list.html' : page.origin.includes("/") ? 'details.html':'basic.html';
  page.title = page.title != "index" ? page.title =  page.origin : page.title;
  page.title = page.title.replace("/", " - ");

  // MAKE FOOTER
  page.footer = []; const cols = {};
  for(const footPage in scrapedContent){
    const [path, name] = footPage.split("/").length == 1 ? ["", footPage.split("/")[0]] : footPage.split("/");
    const emptyPath = path == "" ? "nav" : path;
    if(typeof cols[emptyPath] == 'undefined'){cols[emptyPath] = [];}
    if((cols[path] == null || cols[path].length < 3 || ["nav"].includes(path)) && (!["404"].includes(name))){
      cols[emptyPath].push({name, href : path+"/"+name})
    }
  }
  page.footer = cols;
  res.render(template, page);
});
app.listen(process.env.PORT || 80, () => { console.log('SERWER STARTED') });
