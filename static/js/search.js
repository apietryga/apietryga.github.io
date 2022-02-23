const scraper = {
  init(){
    this.scrapedContent = {};
    this.suggestDOM = document.querySelector(".searchContainer .suggestions");
    this.searchInput = document.querySelector(".searchContainer input");
    this.searchInput.addEventListener("click", this.firstClick);
    this.lang = document.documentElement.lang;
    document.addEventListener("keyup", e => {
      if(e.key == "s"){
        scraper.searchInput.focus();
        if(Object.keys(this.scrapedContent).length < 1){
          scraper.firstClick();
        }
      }
    })
  },
  firstClick(){
    scraper.searchInput.removeEventListener("click",scraper.firstClick)
    scraper.getContent();
    scraper.setElementBehavior();
  },
  setElementBehavior(){
    this.searchInput.addEventListener("keyup", () => {
      this.displaySuggestions(searchByKey(this.searchInput.value, this.scrapedContent, this.lang));
    });
    this.searchInput.addEventListener("focusout", () => {
      setTimeout(() => {
        if(!document.activeElement.parentElement.classList.contains("suggestions")){
          this.displaySuggestions(false)
        }
      },1);
    });
    document.querySelector(".searchContainer .abort").addEventListener('click', (e) => {
      scraper.searchInput.value = '';
      this.displaySuggestions(false)
    })
  },
  getContent(){
    fetch('/searchPages')
    .then(j => j.json())
    .then(response => {
      this.scrapedContent = response;
    })
  },
  displaySuggestions(matchingContentArr){
    if(this.searchInput.value.length < 1){this.suggestDOM.style.display = "none"; return}
    this.suggestDOM.innerHTML = "";
    if(matchingContentArr){
      this.suggestDOM.style.display = "flex";
      for(const matchingPage of matchingContentArr){
        // CREATE DOM'S
        const aContainer = /*html*/`
          <a href="/${matchingPage.href}">
            <img src="/img/contents/${matchingPage.img}" alt="${matchingPage.name} logo" />
            <div class="wrapper">
              <h5>${matchingPage.name}</h5>
              <p>${matchingPage.lang[this.lang].desc}</p>
              <u>${matchingPage.lang[this.lang].category?.join(", ")}</u>
            </div>
          </a>
        `;
        // const aContainer = /*html*/`
        //   <a href="/${matchingPage.href}">
        //     <img src="/img/contents/${matchingPage.img}" alt="${matchingPage.name} logo" />
        //     <div class="wrapper">
        //       <h5>${matchingPage.name}</h5>
        //       <p>${matchingPage.desc}</p>
        //       <u>${matchingPage.category}</u>
        //     </div>
        //   </a>
        // `;
        this.suggestDOM.insertAdjacentHTML( 'beforeend', aContainer);
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
