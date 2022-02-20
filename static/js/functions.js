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

