
// PHOTO GALLERY
const photoGallery = {
  images : document.querySelectorAll(".content article >img"),
  init(){
    this.images.forEach(img => {
      img.style.cursor = "pointer";
      img.addEventListener("click", e => {
        this.renderGallery(e.target);
      })
    })
  },
  renderGallery(img){
    const galleryDOM = document.createElement("div");
    galleryDOM.className = "photoGALLERY";
    galleryDOM.innerHTML = /*html*/`
      <style>
        .photoGALLERY{
          position:fixed;
          z-index:1;
          left:0;
          top:0;
          width:100%;
          height:100%;
          background-color:rgba(0,0,0,0.8);
          color:#fff;
          display:flex;
          flex-direction:column;
        }
        .photoGALLERY .wrapper{
          display:flex;
          flex:1;
          height:10vh;
          justify-content:space-between;
        }
        .photoGALLERY .wrapper >*{
          display:flex;
          justify-content:center;
          align-items:center;
        }
        .photoGALLERY .wrapper .left,
        .photoGALLERY .wrapper .right{
          padding:1rem;
          font-size:2rem;
        }
        .photoGALLERY .wrapper .left span,
        .photoGALLERY .wrapper .right span{
          cursor:pointer;
        }
        .photoGALLERY .wrapper .imgContainer{
          flex:1;
        }
        .photoGALLERY .wrapper .imgContainer img{
          max-width:100%;
          max-height:100%;
        }
        .photoGALLERY .closer{
          text-align:right;
          padding:1rem;
        }
        .photoGALLERY .closer span{
          font-size:2rem;
          cursor:pointer;
        }
        .photoGALLERY .thumbnails{
          display:flex;
          padding:1rem 0;
          overflow-x:auto;
          overflow-y:hidden;
        }
        .photoGALLERY .thumbnails img{
          height:5rem;
          margin:.5rem;
          cursor:pointer;
          border:5px solid transparent;
        }
        .photoGALLERY .thumbnails img.active{
          border:5px solid red;
        }
      </style>
      <div class="closer">
        <span>❌</span>
      </div>
      <div class="wrapper">
        <div class="left">
          <span>⬅️</span>
        </div>
        <div class="imgContainer">
          <img src="${img.src}" alt="${img.alt}" />
        </div>
        <div class="right">
          <span>➡️</span>
        </div>
      </div>
      <div class="thumbnails"></div>
    `;
    document.body.append(galleryDOM);
    const displayedIMG = document.querySelector(".photoGALLERY .imgContainer img");
    displayedIMG.addEventListener("click", e => { e.stopPropagation(); })
    galleryDOM.addEventListener("click", () => { galleryDOM.remove() })

    const changeImageTo = () => {
      displayedIMG.src = photoGallery.images[currentImage].src;
      displayedIMG.alt = photoGallery.images[currentImage].alt;
      thumbnails.childNodes.forEach((thumb, i) => {
        thumb.classList.remove("active");
        if(i == currentImage){ thumb.classList.add("active") }
      })
    }

    let currentImage;

    const thumbnails = galleryDOM.querySelector(".photoGALLERY .thumbnails");
    this.images.forEach((thumbnail, i) => {
      const thumb = document.createElement("img");
      thumb.src = thumbnail.src;
      thumb.alt = thumbnail.alt;
      if(thumbnail.src == img.src){
        thumb.className = "active";
        currentImage = i;
      }
      thumb.addEventListener("click", e => {
        currentImage = i;
        changeImageTo();
        e.stopPropagation();
      })
      thumbnails.append(thumb);
    })

    const rightButton = galleryDOM.querySelector(".photoGALLERY .right span");
    rightButton.addEventListener("click", e => {
      currentImage = currentImage >= photoGallery.images.length - 1 ? 0 : currentImage+1;
      changeImageTo();
      e.stopPropagation();
    })

    const leftButton = galleryDOM.querySelector(".photoGALLERY .left span");
    leftButton.addEventListener("click", e => {
      currentImage = currentImage <= 0 ? photoGallery.images.length - 1 : currentImage-1;
      changeImageTo();
      e.stopPropagation();
    })

    // keyarrows
    document.addEventListener("keydown", e => {
      if(e.key == "ArrowLeft"){
        currentImage = currentImage <= 0 ? photoGallery.images.length - 1 : currentImage-1;
        changeImageTo();
      }
      if(e.key == "ArrowRight"){
        currentImage = currentImage >= photoGallery.images.length - 1 ? 0 : currentImage+1;
        changeImageTo();
      }
      if(e.key == "Escape"){
        galleryDOM.remove() 
      }
    })
  }
}
photoGallery.init();



// // STYLING IFRAMES
// for(let i = 0; i < frames.length; i++){
//   if(!frames[i].frameElement.classList.contains("ytvideo")){
//   //   const cssLink = document.createElement("link");
//   //   cssLink.href = "/style/iframes.min.css";
//   //   cssLink.rel = "stylesheet";
//   //   cssLink.type = "text/css";
//   //   console.log(frames[i].frameElement)
//   //   frames[i].document.body.appendChild(cssLink)
//     // frames[i].height = frames[i].contentWindow.document.body.scrollHeight + "px";
//   }
//   // else{
//   //   console.log("YTVID")  
//   // }
// }

// document.querySelectorAll("iframe").forEach(iframe => {
//   if(!iframe.classList.contains("ytvideo")){
//     console.log(iframe.classList)
//     iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
//     console.log(iframe.contentWindow.document.body.scrollHeight)
//     // console.log(getComputedStyle(iframe.contentWindow.document.body.scrollHeight).height)

//     // console.dir(iframe.contentWindow.document.body)
//   }
// })