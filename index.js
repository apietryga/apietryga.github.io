const express = require('express');
const app = express();
const func = require('./static/js/functions');
let data = require('./static/js/data').data;
let Pages = require('./components/Pages')
let allPages = new Pages(data);
const nunjucks = require('nunjucks');
nunjucks.configure('views', {
  autoescape: true,
  express   : app,
  watch : true
});

app.use(express.static('static'));
app.use(func.forceHTTPS);
app.get('*', (req, res) => {
  // REFRESH DATA DEVELOPMENT
  if(req.get('host') == 'localhost'){
    delete require.cache[require.resolve('./static/js/data')]; data = require('./static/js/data').data;
    delete require.cache[require.resolve('./components/Pages')]; Pages = require('./components/Pages'); allPages = new Pages(data);
    // delete require.cache[require.resolve('./static/js/functions')]; func = require('./static/js/functions');
  }
  // MAKE NEW PAGE TO SCREEN
  // console.log(req)
  const page = {
    host : req.hostname,
    origin: req.originalUrl == "/" ? 'index' : req.originalUrl.replace("/","").split(".")[0],
    language: req.headers["accept-language"].split(/,|-/)[0] != 'pl' ? 'en' : 'pl',
    footer:[],
  };
  page.searchPages = JSON.stringify(allPages.getSearchPages(page.language));

  // MAKE PAGE CONTENT
  if(allPages.getArrayByKey("href").includes(page.origin)){
    const thisWork = allPages.getByKey('href',page.origin);
    for( const key in thisWork ){
      page[key] = thisWork[key];
    }
    page.content = thisWork.getContent(page.language)
  }else if(allPages.lists.includes(page.origin)){
    page.content = allPages.getArrayOfWorksByKey('parent', page.origin)
  }else{
    page.content = allPages.getByKey('href',page.origin) != null ? allPages.getByKey('href',page.origin).getContent(page.language) : allPages.getByKey('href','404').getContent(page.language);
  }

  page.pageBuild = data.pageBuild;

  page.title = page.title != "index" ? page.origin.replace("/", " - ") : page.title.replace("/", " - ");


  // MAKE FOOTER
  // const cols = {};
  // for(const footPage in scrapedContent){
  //   const [path, name] = footPage.split("/").length == 1 ? ["", footPage.split("/")[0]] : footPage.split("/");
  //   const emptyPath = path == "" ? "nav" : path;
  //   if(typeof cols[emptyPath] == 'undefined'){cols[emptyPath] = [];}
  //   if((cols[path] == null || cols[path].length < 3 || ["nav"].includes(path)) && (!["404"].includes(name))){
  //     cols[emptyPath].push({name, href : path+"/"+name})
  //   }
  // }
  // page.footer = cols;
  // res.render(page.origin == "index" ? "index.html" : ['projects','exps'].includes(page.origin) ? 'list.html' : page.origin.includes("/") ? 'details.html':'basic.html', page);
  // 
  res.render(page.origin == "index" ? "index.html" : allPages.lists.includes(page.origin) ? 'list.html' : page.origin.includes("/") ? 'details.html':'basic.html', page);
});
app.listen(process.env.PORT || 80, () => { console.log('SERWER STARTED') });
