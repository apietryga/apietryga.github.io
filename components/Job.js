class Job{
  constructor(object){
    for(const key in object){
      this[key] = object[key];
    }
    // this.href = this.parent != null ? this.parent + "/" + this.escapeSpecialChars(this.name): this.name.toLowerCase();
    this.href = this.parent != null ? this.parent + "/" + this.escapeSpecialChars(this.name): this.href;
    this.metaIMG = '/img/contents/'+this.img?.replace(/\.\w+/, ".png");
    // console.log(object)
  }
  escapeSpecialChars(string){
    return string.replace(/[. @ąźęłńóśźż]/gi, x => ({
      '.' : '', 
      ' ' : '', 
      '@' : 'a', 
      'ą' : 'a', 
      'ć' : 'c',
      'ę' : 'e',
      'ł' : 'l',
      'ń' : 'n',
      'ó' : 'o',
      'ś' : 's',
      'ź' : 'z',
      'ż' : 'z',
      'Ą' : 'A', 
      'Ć' : 'C',
      'Ę' : 'E',
      'Ł' : 'L',
      'Ń' : 'N',
      'Ó' : 'O',
      'Ś' : 'S',
      'Ź' : 'Z',
      'Ż' : 'Z',
    })[x])
  }
  getContent(lang = 'en'){
    const content = [];
    const fieldsLength = Math.max(this.lang[lang].content?.length || 0, this.media?.length || 0);
    for(let i = 0; i <= fieldsLength - 1; i++){
      content.push({
        header: this.lang?.[lang]?.content[i],
        article: this.fillArticle(this.media?.[i])
      })
    }
    return content
  }
  fillArticle(url){
    if(url == null){return 0;}
    if(["jpg","webp"].includes(url.split(".")[url.split(".").length-1])){
      return `<img src='/img/contents/${url}' />`;
    }
    if(url.includes("youtube.com")){
      return `<iframe src='${url}'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' 
              allowfullscreen></iframe>`;
    }
    return
  }
}
module.exports = Job;