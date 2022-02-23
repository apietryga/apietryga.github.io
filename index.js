const express = require('express');
const app = express();
let func = require('./static/js/functions');
let data = require('./static/js/data').data;
let Pages = require('./components/Pages')
let allPages = new Pages(data);
const nunjucks = require('nunjucks');
nunjucks.configure('views', {
  autoescape: true,
  express   : app,
  watch : true
});
const mainTitle = data.index.name;
app.use(express.static('static'));
app.use(func.forceHTTPS);
app.get('*', (req, res) => {
  // REFRESH DATA DEVELOPMENT
  if(req.get('host') == 'localhost'){
    delete require.cache[require.resolve('./static/js/data')]; data = require('./static/js/data').data;
    delete require.cache[require.resolve('./components/Pages')]; Pages = require('./components/Pages'); allPages = new Pages(data);
    // // delete require.cache[require.resolve('./static/js/functions')]; func = require('./static/js/functions');
  }
  // SET UP PAGE
  let page = {
    host : req.hostname,
    origin: req.originalUrl == "/" ? 'index' : req.originalUrl.replace("/","").split(/\.|\?/g)[0],
    language: req.headers["accept-language"].split(/,|-/)[0] != 'pl' ? 'en' : 'pl',
    pageBuild: data.pageBuild,
    fullHref: req.protocol + '://' + req.get('host') + req.originalUrl,
  };
  const searchPages = allPages.getSearchPages(page.language);
  if(page.origin == "searchPages"){ res.json(searchPages); return }

  // MAKE PAGE CONTENT
  if(allPages.getArrayByKey("href").includes(page.origin)){
    page = func.fillPage(allPages, page, ['href', page.origin]);
  }else if(allPages.lists.includes(page.origin)){
    page.template = "list";
    if(page.origin == "search"){
      const url = new URL(page.href.replace(/[`~!@#\$%\^\*\(\)\+]/g,""));
      page.query = url.searchParams.get('q');
      let isPage = false;
      allPages.getArrayByKey('name').forEach( e=>{ e.toLowerCase() == page.query.toLowerCase() ? isPage = e : ''; })
      if(isPage){
        page = func.fillPage(allPages, page, ['name', isPage]);
        page.origin = page.href;
      }else{
        // or display list of potential pages
        page.content = func.searchByKey(page.query, searchPages);
      }
    }else{
      page.content = allPages.getArrayOfWorksByKey('parent', page.origin)  
    }
  }else{
    page.template = "404";
    page.lang = allPages.getByKey('href','404').lang;
  }

  
  // MAKE TITLE
  page.title = page.name;
  if(page.origin == 'search'){
    page.title = page.query + " - " + mainTitle + " search";
  }else if(page.title != mainTitle){
    page.title += " - " + mainTitle;
  }
  for( const pageBuild in data.pageBuild[page.language].nav ){
    if(page.origin == pageBuild){
      page.title = data.pageBuild[page.language].nav[pageBuild] + " - " + mainTitle;
    }
  }
  res.render(page.template+".html", page);
});
app.listen(process.env.PORT || 80, () => { console.log('SERWER STARTED') });
