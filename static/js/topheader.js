let cloudsIntevalWorks = false;
const cloudsDOM = document.querySelector(".clouds");
const cloudsIntervalTime = 200;
const cloudsInterval = () => {
  cloudsDOM.style.backgroundPosition = cloudsDOM.style.backgroundPosition == '' ? '0vw bottom' : ( cloudsDOM.style.backgroundPosition.split("vw")[0] - .1 ) + 'vw bottom';
  cloudsIntevalWorks = true;
};
let intervalControler = setInterval(cloudsInterval, cloudsIntervalTime);
document.addEventListener('scroll', e => {
  const vh = Math.round( (window.scrollY * 100)/window.innerHeight );
  if(vh < 100){
    if(!cloudsIntevalWorks){
      cloudsIntevalWorks = true;
      intervalControler = setInterval(cloudsInterval, cloudsIntervalTime);
    }
    document.querySelectorAll(".topHeader >*").forEach(e => {
      if(['next', 'mask photo'].includes(e.className)){
        return;
      }else if(e.classList.contains("mountains")){
        e.style.marginTop = (window.scrollY/2) + "px";return;
      // }else if(e.classList.contains("stars")){
      //   e.style.marginTop = (window.scrollY/1.1) + "px";return;
      }else if(e.classList.contains("moon")){
        e.style.marginTop = (window.scrollY*1.7) + "px";return;
      }else if(e.classList.contains("clouds")){
        e.style.marginTop = -(window.scrollY*2) + "px";return;
      }else if(e.classList.contains("title")){
        e.style.marginTop = (window.scrollY/1.8) + "px";return;
      }else if(e.classList.contains("background")){
        e.style.backgroundColor = 'rgba(0,0,0, '+((vh/2 + 70)/100)+')';return;
      }
    })
  }else{
    if(cloudsIntevalWorks){
      clearInterval(intervalControler);
      cloudsIntevalWorks = false;
    }

  }
})