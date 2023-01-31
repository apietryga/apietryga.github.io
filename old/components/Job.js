const data = require('../static/js/data').data;
class Job{
  constructor(object){
    for(const key in object){
      this[key] = object[key];
    }
    this.href = this.generateHref(this.parent, this.name);
    this.metaIMG = '/img/contents/'+this.img?.replace(/\.\w+/, ".png");
  }
  generateHref(parent, name){
    return parent != null ? parent + "/" + this.escapeSpecialChars(name): this.href;
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
        article: this.fillArticle(this.media?.[i], lang)
      })
    }
    return content
  }
  fillArticle(url, lang){
    if(url?.constructor == Object){
      let result;
      if(url.type == "fbgroup"){
        result = /*html*/`
          <a href="${url?.href}" target="_blank" class="fbgroup">
            <img src="${url?.img}" alt="${url?.name}" />
          </a>`;
      }
      if(url.type == "fbpost"){
        result = /*html*/`
        <div class="fbpost">
          <iframe 
              class='fbpost'
              width="500"
              height="300"
              src="https://www.facebook.com/plugins/post.php?href=${url.href}&show_text=true&width=500" 
              style="border:none;overflow:hidden" 
              scrolling="no" frameborder="0" allowfullscreen="true" 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
            </iframe>
          </div>`
      }
      if(["projects", "exps"].includes(url.type)){
        for(const el of data[url.type]){
          if(el.name == url.name){
            el.href = "/"+this.generateHref(url.type, url.name);
            return /*html*/`
            <a href="${el.href}" class="externalJob">
              <img src="/img/contents/${el.img}" alt="${el.name} Logo" />
              <h3>${el.name}</h3>
              <p>${el.lang[lang].desc}</p>
            </a>`;
          }
        }
      }
      if(url.type == "igpost"){
        result = /*html*/`
          <blockquote 
            class="instagram-media" 
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/p/${url?.id}/?utm_source=ig_embed&amp;utm_campaign=loading" 
            data-instgrm-version="14" 
            style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
            <div style="padding:16px;"> 
              <a href="https://www.instagram.com/p/${url?.id}/?utm_source=ig_embed&amp;utm_campaign=loading" 
                style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> 
                <div style=" display: flex; flex-direction: row; align-items: center;"> 
                  <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> 
                  <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> 
                    <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> 
                    <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div>
                  </div>
                </div>
                <div style="padding: 19% 0;"></div> 
                <div style="display:block; height:50px; margin:0 auto 12px; width:50px;">
                  <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                        <g>
                          <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631">
                          </path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div style="padding-top: 8px;"> 
                  <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div>
                </div>
              </a>
            </div>
          </blockquote>
          <script async src="//www.instagram.com/embed.js"></script>
        `
      }
      if(url.type == "fbvideo"){
        result = /*html*/`
        <iframe 
          src="https://www.facebook.com/plugins/video.php?href=${url.href}" 
          style="border:none;overflow:hidden" 
          scrolling="no" 
          frameborder="0" 
          allowfullscreen="true" 
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
          allowFullScreen="true">
        </iframe>
        `;
      }
      if(url.type == "github"){
        const title = url.href.split("/")[url.href.split("/").length -1]
        return /*html*/`
          <a href="${url.href}" target="_blank" class="githubContainer">
            <div class="github"></div>
            <p>${title.toUpperCase()}</p>
          </a>
        `;

      }
      return result;
    }
    if(url == null){return 0;}
    if(["jpg","webp"].includes(url.split(".")[url.split(".").length-1])){
      return `<img src='/img/contents/${url}' alt='${this.name}' />`;
    }
    if(url.includes("youtube.com")){
      let imgURL = url.replace("www","img").replace("embed","vi") + "/hqdefault.jpg";
      return /*html*/`
        <iframe
          class="ytvideo"
          src="${url}&autoplay=1"
          srcdoc="<style>*{box-sizing:border-box;overflow:hidden;padding:0;margin:0}.ytImgLink .ytbuttonContainer{position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center}.ytImgLink .ytbuttonContainer:hover .ytbutton{background-color:red}.ytImgLink .ytbuttonContainer .ytbutton{transition:.2s;display:flex;justify-content:center;align-items:center;color:#fff;background-color:#474747;border-radius:50%/10%;font-size:1.5rem;height:3rem;width:4.5rem;position:relative}.ytImgLink img{position:absolute;width:100%;top:0;bottom:0;margin:auto}</style>
          <a class='ytImgLink' href=${url}?autoplay=1>
            <img src='${imgURL}' alt='${this.name}'>
            <div class='ytbuttonContainer'>
              <span class='ytbutton'>▶</span>
            </div>
          </a>"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="${this.name}"
        ></iframe>
      `;
    }
    if(url.includes("facebook.com")){
      let result = "";
      if(url.split('/').includes("videos")){
        result = /*html*/`
          <iframe 
            src="https://www.facebook.com/plugins/video.php?href=${url}" 
            style="border:none;overflow:hidden" 
            scrolling="no" 
            frameborder="0" 
            allowfullscreen="true" 
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
            allowFullScreen="true">
          </iframe>`;
      }
      return result;
    }
    return
  }
  categoryURLize(arr){
    let result = "";
    for(const a of arr){
      result += /*html*/`<a href="/search?q=${a}">#${a}</a> `;
    }
    return result;
  }
  makePrevNext(lang){
    const languages = {
      pl:{
        prev: "Poprzedni",
        next: "Następny"
      },
      en:{
        prev: "Previous",
        next: "Next"
      }
    }

    if(this.parent == null){return}
    // find current index
    let thisIndex = 0;
    for(const [index, jb] of data[this.parent].entries()){
      if(jb.name == this.name){
        thisIndex = index;
        break;
      }
    }

    if(thisIndex > 0){
      this.prev = /*html*/`
        <a href="/${this.generateHref(this.parent, data[this.parent][thisIndex-1].name)}">
          <p>${languages[lang].prev}</p>
          <h4>${data[this.parent][thisIndex-1].name}</h4>
          <img src="/img/contents/${data[this.parent][thisIndex-1].img}" alt="${data[this.parent][thisIndex-1].name} Logo" />
          <p>${data[this.parent][thisIndex-1].lang[lang].desc}</p>
          <p>${this.categoryURLize(data[this.parent][thisIndex-1].lang[lang].category)}</p>
        </a>
      `;
    }
    if(thisIndex < data[this.parent].length-1){
      this.next = /*html*/`
        <a href="/${this.generateHref(this.parent, data[this.parent][thisIndex+1].name)}">
          <p>${languages[lang].next}</p>
          <h4>${data[this.parent][thisIndex+1].name}</h4>
          <img src="/img/contents/${data[this.parent][thisIndex+1].img}" alt="${data[this.parent][thisIndex+1].name} Logo" />
          <p>${data[this.parent][thisIndex+1].lang[lang].desc}</p>
          <p>${this.categoryURLize(data[this.parent][thisIndex+1].lang[lang].category)}</p>
        </a>
      `;
    }
  }
}
module.exports = Job;