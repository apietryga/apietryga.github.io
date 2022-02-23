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
  // DYNAMICALLY CHANGE WEBP FORMAT TO PNG (FOR META IMAGES)
  for (const imgPath of allPages.getArrayByKey('img')){
    if('/img/contents/'+imgPath?.replace(/\.\w+/, ".png") == req.originalUrl){
      res.type(`image/png`)
      func.reformatImg(__dirname+'/static/img/contents/'+imgPath,'png').pipe(res)
      return
    }
  }
  // REFRESH DATA DEVELOPMENT
  if(req.get('host') == 'localhost'){
    delete require.cache[require.resolve('./static/js/data')]; data = require('./static/js/data').data;
    delete require.cache[require.resolve('./components/Pages')]; Pages = require('./components/Pages'); allPages = new Pages(data);
    // // delete require.cache[require.resolve('./static/js/functions')]; func = require('./static/js/functions');
  }
  // SET UP PAGE
  let page = {
    host : req.hostname,
    // origin: req.originalUrl == "/" ? 'index' : req.originalUrl.replace("/","").split(/\.|\?/g)[0],
    origin: req.originalUrl.split(/[\.\?]/g)[0] == "/" ? 'index' : req.originalUrl.replace("/","").split(/[\.\?]/g)[0],
    language: req.headers["accept-language"]?.split(/,|-/)[0] != 'pl' ? 'en' : 'pl',
    pageBuild: data.pageBuild,
    // fullHref: req.protocol + '://' + req.get('host') + req.originalUrl,
    fullHref: 'https://' + req.get('host') + req.originalUrl,
  };
  console.log('protocol:');
  console.log(req.protocol);
  console.log(req.get('x-forwarded-proto'));
  // const searchPages = allPages.getSearchPages(page.language);
  const searchPages = allPages.jobs;
  if(page.origin == "searchPages"){ res.json(searchPages); return }
  // MAKE PAGE CONTENT
  if(allPages.getArrayByKey("href").includes(page.origin)){
   const thisWork = allPages.getByKey( 'href', page.origin );
    for( const key in thisWork ){
      page[key] = thisWork[key];
    }
    page.content = thisWork.getContent(page.language)
    if(['index','contact','404'].includes(page.origin)){
      page.template = page.origin
    }else{
      page.template = "details";
    }

  }else if(allPages.lists.includes(page.origin)){
    page.template = "list";
    if(page.origin == "search"){
      const url = new URL(page.fullHref.replace(/[`~!@#\$%\^\*\(\)\+]/g,""));
      page.query = url.searchParams.get('q');
      let isPage = false;
      allPages.getArrayByKey('name').forEach( e =>{ e.toLowerCase() == page.query.toLowerCase() ? isPage = e : ''; })
      // if exact match
      if(isPage){
        res.redirect("/"+allPages.getByKey('name',isPage).href);return
      }else{
        // or display list of potential pages
        page.content = page.query.length > 0 ? func.searchByKey(page.query, searchPages, page.language) : [];
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