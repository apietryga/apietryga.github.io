const express = require('express');
const app = express();
let func = require('./static/js/functions');
let Pages = require('./components/Pages')
let data = require('./static/js/data').data;
let allPages = new Pages(data);
const mainTitle = data.index.name;
const package = require('./package.json')
const nunjucks = require('nunjucks');
nunjucks.configure('views', {
  autoescape: true,
  express   : app,
  watch : true
});
app.use(express.static('static'));

// app.use(func.forceHTTPS);

app.get('/robots.txt', (req, res) => {
  // DYNAMICALLY CREATE ROBOTS.TXT
  const protocol = req.get('x-forwarded-proto') || req.protocol;
  const host =  protocol+'://'+req.hostname;
  res.type(`text/plain`);
  res.send(`User-agent: *
  Allow: /
  
  Sitemap: ${host}/sitemap.xml
  `);
})
app.get("/sitemap.xml", (req, res) => {
  // DYNAMICALLY CREATE SITEMAP.XML
  const protocol = req.get('x-forwarded-proto') || req.protocol;
  const host =  protocol+'://'+req.hostname;
  const date = new Date();
  const yyyymmdd = date.getFullYear()+'-'+(date.getMonth()<10?'0'+date.getMonth():date.getMonth())+'-'+(date.getDay()<10?'0'+date.getDay():date.getDay());
    // res.type(`application/xml`);
    res.type('text/xml');
    let result = '<?xml version="1.0" encoding="UTF-8"?>\n';
    result += `<urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n`;
    for(const href of allPages.getArrayByKey('href')){
      if(['404', null].includes(href)){continue}
      result += "<url>\n";
      result += "  <loc>"+host+"/"+href+"</loc>\n";
      // result += "  <lastmod>"+yyyymmdd+"</lastmod>\n";
      result += "  <lastmod>2022-02-24T13:40:57+00:00</lastmod>\n";
      result += "  <priority>1.0</priority>\n";
      result += "</url>\n";
    }
    result += "\n</urlset>";
    res.send(result)
})

app.get('*', (req, res) => {
  // REFRESH DATA DEVELOPMENT
  if(req.get('host') == 'localhost'){
    delete require.cache[require.resolve('./static/js/data')]; data = require('./static/js/data').data;
    delete require.cache[require.resolve('./components/Pages')]; Pages = require('./components/Pages'); allPages = new Pages(data);
    // delete require.cache[require.resolve('./static/js/functions')]; func = require('./static/js/functions');
  }

  // DYNAMICALLY CHANGE WEBP FORMAT TO PNG (FOR META IMAGES)
  for (const imgPath of allPages.getArrayByKey('img')){
    if('/img/contents/'+imgPath?.replace(/\.\w+/, ".png") == req.originalUrl){
      res.type(`image/png`)
      func.reformatImg(__dirname+'/static/img/contents/'+imgPath,'png').pipe(res)
      return
    }
  }

  // SET UP PAGE
  let page = {
    version: package.version,
    origin: req.originalUrl.split(/[\.\?]/g)[0] == "/" ? 'index' : req.originalUrl.replace("/","").split(/[\.\?]/g)[0],
    pageBuild: data.pageBuild,
    protocol: req.get('x-forwarded-proto') || req.protocol,
  };
  page.host =  page.protocol+'://'+req.hostname;
  page.fullHref = page.protocol+'://' + req.get('host') + req.originalUrl;
  const langField = func.parseCookies(req).lang != null ? func.parseCookies(req).lang : req.headers["accept-language"];
  page.language = langField?.split(/,|-/)[0] != 'pl' ? 'en' : 'pl';

  const searchPages = allPages.jobs;
  if(page.origin == "searchPages"){ res.json(searchPages); return }
  // MAKE PAGE CONTENT
  if(allPages.getArrayByKey("href").includes(page.origin)){
    const thisWork = allPages.getByKey('href', page.origin);
    // const thisWork = allPages.getByKey('name', page.name);
    thisWork.makePrevNext(page.language);
    for( const key in thisWork ){
      page[key] = thisWork[key];
      if(key == 'lang'){
        page.desc = thisWork.lang[page.language].desc;
      }
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

  // FILL PAGE CONTENT WITH DEFAULTS IF NOT SET
  page.desc = page.desc || data.index.lang[page.language].desc; 
  page.keywords = page.lang?.[page.language].category || data.index.lang[page.language].category;
  page.metaIMG = page.metaIMG || "/"+data.index.img;

  res.render(page.template+".html", page);
});
app.listen(process.env.PORT || 80, () => { console.log('SERWER STARTED') });