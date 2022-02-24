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
      let imgURL = url.replace("www","img").replace("embed","vi") + "/hqdefault.jpg";
      return /*html*/`
        <iframe
          width="560"
          height="315"
          src="${url}&autoplay=1"
          srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style>
          <a href=${url}?autoplay=1>
          <img src='${imgURL}' alt='${this.name}'>
          <span class='ytbutton'>▶</span></a>"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="${this.name}"
        ></iframe>
      `;

      // return `<div class='lazyload'>
      //         <iframe src='${url}' class='lazyframe'
      //         frameborder='0'
      //         allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' 
      //         allowfullscreen></iframe>
      //         </div>`;
    }
    return
  }
}
module.exports = Job;