const scraper = {
  init(){
    this.suggestDOM = document.querySelector(".searchContainer .suggestions");
    this.getContent();

    // configure form buttons
    this.searchInput = document.querySelector(".searchContainer input");
    this.searchInput.addEventListener("keyup", () => {this.searchByKey()});
    this.searchInput.addEventListener("focusout", () => {
      setTimeout(() => {
        if(!document.activeElement.parentElement.classList.contains("suggestions")){
          this.displaySuggestions(false)
        }
      },1);
    });
    this.searchInput.addEventListener("focusin", () => {
      this.searchByKey();
    });
    for(const searchIMG of document.querySelectorAll(".searchContainer img")){
      if(searchIMG.alt == "SEARCH"){
        searchIMG.addEventListener('click', (e) => {
          e.target.nextElementSibling.focus()
        })
      }else if(searchIMG.alt == "ABORT SEARCHING"){
        searchIMG.addEventListener('click', (e) => {
          this.displaySuggestions(false)
          e.target.previousElementSibling.value='';
        })
      }
    }

    // // 4 devs
    // this.searchInput.value = "ana";
    // this.searchByKey();
    // this.searchInput.focus();
  },
  getContent(){
    // this.content = `{{searchPages}}`;
    this.content = searchPages;
    this.content = this.content.replace(/\r?\n|\r/g, "");
    this.content = this.content.replace(/&(lt|gt|quot|#39);/g, (a,b) => {
        return {
            lt    : '<',
            gt    : '>',
            quot  : '"',
            "#39": "'"
        }[b];
    })
    this.scrapedContent = JSON.parse(this.content);
  },
  searchByKey(){
    const matchingContent = [];
    const matchingNames = [];
    if(this.searchInput.value.length < 1){this.displaySuggestions(matchingContent);return;}
    for(const obj of this.scrapedContent){
      for(const key in obj){
        if(["name"].includes(key)
          && obj[key].toLowerCase().includes(this.searchInput.value.toLowerCase())
          && !matchingNames.includes(obj.name)
        ){
          matchingNames.push(obj.name);
          matchingContent.push({match:key, el: obj});
        }
        if(["lang".includes(key)]){
          for(const langContent in obj?.lang?.[lang]){
            if(langContent == "content"){
              const contents = obj.lang[lang][langContent];
              for(const content of contents){
                if(content.toLowerCase().includes(this.searchInput.value.toLowerCase())
                && !matchingNames.includes(obj.name)){
                  matchingNames.push(obj.name);
                  matchingContent.push({match:key, el: obj});
                }
              }
            }else if(langContent == "category"){
              const cats = obj.lang[lang][langContent];
              for(const cat of cats){
                if(cat.toLowerCase().includes(this.searchInput.value.toLowerCase())
                && !matchingNames.includes(obj.name)){
                  matchingNames.push(obj.name);
                  matchingContent.push({match:key, el: obj});
                }  
              }
            }else if(langContent == "desc"){
              const paragraph = obj.lang[lang][langContent].toLowerCase();
              if(paragraph.includes(this.searchInput.value.toLowerCase())
              && !matchingNames.includes(obj.name)){
                matchingNames.push(obj.name);
                matchingContent.push({match:key, el: obj});
              }
            }
          }
        }
      }
    }
    this.displaySuggestions(matchingContent);
  },
  displaySuggestions(matchingContentArr){
    this.suggestDOM.innerHTML = "";
    if(matchingContentArr){
      this.suggestDOM.style.display = "flex";
      // sort matchingContent from most important
      matchingContentArr.sort((a, b) => {
        const sortingOrder = ['name', 'category', 'desc', 'content'];
        for(const key of sortingOrder){
          if(a.match == key){return -1;}
          if(b.match == key){return 1;}  
        }
      })
      for(const matchingPage of matchingContentArr){
        // CREATE DOM'S
        // const aContainer = /*html*/`
        //   <a href="${matchingPage.el.href}">
        //     <img src="/img/contents/${matchingPage.el.img}" alt="${matchingPage.el.name} logo" />
        //     <div class="wrapper">
        //       <h5>${matchingPage.el.name}</h5>
        //       <p>${matchingPage.el[matchingPage.match]}</p>
        //     </div>
        //   </a>
        // `;
        // this.suggestDOM.insertAdjacentHTML( 'beforeend', aContainer);

        const aContainer = document.createElement("a");
        aContainer.href = "/"+matchingPage.el.href;

        const img = document.createElement("img");
        img.src = "/img/contents/"+matchingPage.el.img;

        const wrapper = document.createElement("div");
        aContainer.append(img, wrapper);

        const title = document.createElement("h5");
        title.innerHTML = matchingPage.el.name;
        
        const matchingSentence = document.createElement("p");
        matchingSentence.innerHTML += "<span>"+this.searchInput.value+"</span>";

        wrapper.append(title, matchingSentence);
        this.suggestDOM.append(aContainer);
      }
      if(this.suggestDOM.innerHTML == ""){
        this.suggestDOM.innerHTML = "Brak wyników.";
      }
    }else{
      this.suggestDOM.style.display = "none";
    }
  }
}
scraper.init();