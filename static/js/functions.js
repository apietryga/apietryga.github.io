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
    return res.redirect(301, 'https://' + req.get('host') + req.url);
  }
  next();
}
this.highlightMatchingElement = (searchingIn, searchingKey) => {
  let wasArray = false;
  if(searchingIn.constructor == Array){
    wasArray = true;
    searchingIn = searchingIn.join("|");
  }
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
  return wasArray ? result.split("|") : result;
}
this.searchByKey = (query, scrapedContent, lang) =>{
  const matchingContent = [];
  const searchingKey = query.toLowerCase();
  
  // FIND SEARCHING KEY IN ALL DATA
  for(const obj of scrapedContent){
    if(['index','contact','404'].includes(obj.href)){continue}
    const matchObj = {...obj}
    const matchFields = [];
    let isMatch = false;
    for(const key in obj){
      if(['img','href','recomended'].includes(key)){continue}
      // GET THE VALUE FROM NESTED DATA
      let value;
      if(key == "lang"){
        for(const objKey in obj[key][lang]){
          value = obj[key][lang][objKey].constructor == Array ? obj[key][lang][objKey].toString() : obj[key][lang][objKey];
          if(value.toLowerCase()?.includes(searchingKey)){
            isMatch = true;
            matchFields.push(objKey);
            // matchObj[key][lang][objKey] = ['name','desc','category'].includes(objKey) ? this.highlightMatchingElement(obj[key][lang][objKey], searchingKey) : obj[key][lang][objKey];
            matchObj[key][lang][objKey] =  obj[key][lang][objKey];
          }
        }
      }else if(obj[key].constructor == Array){
        value = obj[key].toString()
      }else{
        value = obj[key];
      }

      // TRY TO FIND SEARCHING KEY IN GETTED VALUE
      if(value.toLowerCase()?.includes(searchingKey)){
        isMatch = true;
        matchFields.push(key);
        // matchObj[key] = ['name','desc','category'].includes(key) ? this.highlightMatchingElement(obj[key],searchingKey) : obj[key]; 
        matchObj[key] = obj[key]; 
      }      
    }
    if(isMatch){ 
      matchingContent.push({match: matchFields, el: matchObj}) 
    }
  }

  // SORT MATCHING CONTENT IN ORDER FROM MOST IMPORTANT
  const sortingOrder = ['name', 'category', 'desc', 'content'];
  matchingContent.sort((a, b) => {
    for(const key of sortingOrder){
      if(a.match.includes(key)){return -1;}
      if(b.match.includes(key)){return 1;}  
    }
  })

  // FILTER SORTED DATA TO MINIMUM NEEDED
  const filteredMatchingContent = [];
  matchingContent.forEach(e => { filteredMatchingContent.push(e.el) })
  return filteredMatchingContent;
}