const search = {
  init(){
    this.scrapedContent = {};
    this.suggestDOM = document.querySelector(".searchContainer .suggestions");
    this.searchInput = document.querySelector(".searchContainer input");
    this.searchInput.addEventListener("click", this.firstClick);
    this.lang = document.documentElement.lang;
    document.addEventListener("keyup", e => {
      if(e.key == "s"){
        search.searchInput.focus();
        if(Object.keys(this.scrapedContent).length < 1){
          search.firstClick();
        }
      }
    })
  },
  firstClick(){
    search.searchInput.removeEventListener("click",search.firstClick)
    search.getContent();
    search.setElementBehavior();
  },
  setElementBehavior(){
    this.searchInput.addEventListener("keyup", e => {
      if(!["ArrowUp", "ArrowDown", "Enter"].includes(e.key)){
        this.displaySuggestions(searchByKey(this.searchInput.value, this.scrapedContent, this.lang));
      }
    },true);

    this.searchInput.addEventListener("focusout", () => {
      setTimeout(() => {
        if(!document.activeElement.parentElement.classList.contains("suggestions")){
          this.displaySuggestions(false)
        }
      },1);
    });
    document.querySelector(".searchContainer .abort").addEventListener('click', (e) => {
      search.searchInput.value = '';
      this.displaySuggestions(false)
    })

    // ARROWS UP DOWN
    let selectedA = -1;
    document.addEventListener("keydown", e => {
      if(document.activeElement == this.searchInput){
        if(["ArrowUp", "ArrowDown"].includes(e.key)){
          e.preventDefault();
          e.stopPropagation();
          if(e.key == "ArrowDown"){ selectedA++ }
          if(e.key == "ArrowUp"){ selectedA-- }
          const suggestions = document.querySelectorAll(".suggestions a");
          if(selectedA < -1){selectedA = suggestions.length-1 }
          if(selectedA > suggestions.length-1){selectedA = -1 }

          suggestions.forEach( (a, i) =>{
            a.classList.remove("selected")
            if(selectedA == i){ a.classList.add("selected") }
          })
        }
        if("Enter" == e.key){
          document.querySelectorAll(".suggestions a").forEach( a =>{
            if(a.classList.contains("selected")){ 
              e.preventDefault();
              location.replace(a.href);
            }
          })
          console.log("ENTER")
        }  
      }
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
            <h5>${matchingPage.name}</h5>
            <div class="wrapper">
              <img src="/img/contents/${matchingPage.img}" alt="${matchingPage.name} logo" />
              <p>${matchingPage.lang[this.lang].desc}</p>
            </div>
          </a>
        `;
        // <u>${matchingPage.lang[this.lang].category?.join(", ")}</u>
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
search.init();

const langChager = {
  select : document.querySelector(".menu select"),
  lang: document.documentElement.lang,
  init(){
    // SET CURRENT LANGUAGE IN SELECT
    for(const o of this.select.children){
      o.selected = o.value == this.lang ? true : false;
    }
    this.select.addEventListener("change",this.onSelectChange)
  },
  onSelectChange(e){
    // SET COOKIES IF NEW
    if(e.target.value != this.lang){
      // clear serviceworker cache
      caches.keys().then(function(names) {
        for (let name of names)
            caches.delete(name);
      });
      
      // delete old cookie if isset
      if(parseCookies(document).lang != null){
        eraseCookie("lang")
      }

      // set new cookie
      document.cookie = setCookie("lang", e.target.value, 360);
      location.reload();
    }
  }
}
langChager.init();

const cookiePopUp = {
  init(){
    // DISPLAY COOKIE INFO IF NOT SET
    if(parseCookies(document).popup == null){
      this.renderPopUp();
    }
  },
  renderPopUp(){
    const cookieContent = {
      "pl": [
        "Ta strona używa plików cookies.",
        "Dowiedz się więcej",
      ],
      "en": [
        "This site use cookie files.",
        "Learn more",
      ]
    }
    const popUP = document.createElement("div");
    popUP.innerHTML = /*html*/`
      <style>
        .cookiePOPUP{
          z-index:2;
          position:fixed;
          right:0;
          bottom:0;
          box-shadow:0 0 1rem #000;
          border-radius:1rem;
          display:flex;
          flex-direction:column;
          align-items:center;
          /* background-color:#aaa; */
          background-color:#272727;
          color:#fff;
          text-align:center;
          margin:0 .5rem .5rem 0;
        }
        .cookiePOPUP p{
          padding:2rem 2rem 1rem 2rem;
        }
        .cookiePOPUP .buttonContainer{
          flex:1;
          display:flex;
          width:100%;
        }      
        .cookiePOPUP .buttonContainer a{
          margin:1rem;
          border-radius:.5em;
          flex:1;
          padding:1rem .5rem;
          display:flex;
          align-items:center;
          justify-content:center;
        }
        .cookiePOPUP .buttonContainer .ok{
          background:linear-gradient(#0f0, #0a0);
          margin-left:.3rem;
        }
        .cookiePOPUP .buttonContainer a:nth-child(1){
          background-color:rgba(255,255,255,.1);
          margin-right:.3rem;
        }
      </style>
      <div class="cookiePOPUP">
        <p>${cookieContent[document.documentElement.lang][0]}</p>
        <div class="buttonContainer">
          <a href='https://ec.europa.eu/info/cookies_en#whatarecookies' target='_blank'>
            ${cookieContent[document.documentElement.lang][1]}
          </a>
          <a href="#" class='ok'>
            OK
          </a>
        </div>

      </div>
    `;
    document.body.append(popUP);
    const okButton = document.querySelector(".cookiePOPUP .ok");
    okButton.addEventListener("click", e => {
      e.preventDefault();
      document.cookie = setCookie("popup", true, 360);
      popUP.remove();
    })
  }
}
cookiePopUp.init();