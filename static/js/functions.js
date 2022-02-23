this.getPageInfo = (readedFile, opt = {file:'',fileInside:''}) => {
  const result = {
    name: readedFile.split("</h1>")[0].split("<h1>")[1],
    desc : readedFile.split("</h2>")[0].split("<h2>")[1],
    cat : readedFile.split("</u>")[0].split("<u>")[1],
    img : readedFile.split("\" alt")[0].split("img src=\"")[1],
    href: "/"+opt.file+"/"+opt.fileInside
  };
  // client side
  if(typeof result.img == 'undefined'){
    result.img = readedFile.split("\' alt")[0].split("img src=\'")[1];
  }
  return result;
}
this.forceHTTPS = (req, res, next) => {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== "development" && req.get('host') != 'localhost') {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}
this.setMatchingEl = (searchingIn, searchingKey) => {
  const indexes = [];
  for (let i = 0; i < searchingIn.length; i++) {
    if(searchingIn.slice(i, i + searchingKey.length).toLowerCase() == searchingKey){
      indexes.push(i);
    }
  }
  let result = '';
  let lastIndex = 0;
  for(const startAt of indexes){
    result += searchingIn.slice(lastIndex, startAt);
    lastIndex = startAt + searchingKey.length; 
    result += "<span>"+searchingIn.slice(startAt, lastIndex)+"</span>";
  }
  result += searchingIn.slice(lastIndex, searchingIn.length);
  return result;
}
this.searchByKey = (query, scrapedContent) =>{
  const matchingContent = [];
  const searchingKey = query.toLowerCase();
  for(const obj of scrapedContent){
    obj.category = obj.category.constructor == Array ? obj.category.join(', ').toString() : obj.category;
    const matchObj = {
      img : obj.img,
      href : obj.href,
      name: obj.name,
      desc: obj.desc,
      category: obj.category,
      color: obj.color,
      date: obj.date,
    };
    const matchFields = [];
    let isMatch = false;
    for(const key in obj){
      if(['img','href'].includes(key)){continue}
      if(obj[key].constructor == String && obj[key].toLowerCase()?.includes(searchingKey)){
        isMatch = true;
        matchFields.push(key);
        matchObj[key] = this.setMatchingEl(obj[key],searchingKey);
      }
      if(obj[key].constructor == Array){
        for(const arrVal of obj[key]){            
          if(arrVal.toLowerCase()?.includes(searchingKey)){
            isMatch = true;
            matchFields.push(key);
            matchObj[key] = this.setMatchingEl(arrVal,searchingKey);
          }
        }
      }
    }
    if(isMatch){
      matchingContent.push({match: matchFields, el: matchObj});
    }
  }

  // sort matchingContent from most important
  matchingContent.sort((a, b) => {
    const sortingOrder = ['name', 'category', 'desc', 'content'];
    for(const key of sortingOrder){
      if(a.match.includes(key)){return -1;}
      if(b.match.includes(key)){return 1;}  
    }
  })
  const filteredMatchingContent = [];
  matchingContent.forEach(e => { filteredMatchingContent.push(e.el) })
  return filteredMatchingContent;
}
this.fillPage = (allPages, page, keyvalue) => {
  const thisWork = allPages.getByKey( keyvalue[0], keyvalue[1] );
  for( const key in thisWork ){
    page[key] = thisWork[key];
  }
  page.content = thisWork.getContent(page.language)
  if(['index','contact','404'].includes(page.origin)){
    page.template = page.origin
  }else{
    page.template = "details";
  }
  return page;
}