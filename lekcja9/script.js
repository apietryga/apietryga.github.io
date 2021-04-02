  // TWORZENIE TABLICY OBIEKTÓW (PUNKT 1)
  const views = [
    {
      title : "Zachód słońca pod palmami",
      src : "1.jpg"
    },
    {
      title : "Miasto z góry po horyzont",
      src : "2.jpg"
    },
    {
      title : "Warszawa w budowie",
      src : "3.jpg"
    }
  ];

  // FUNKCJA WYŚWIETLAJĄCA KONKRETNY ELEMENT (PUNKT 2)
  function displayView(index){
    const titleField = document.querySelector("h2");
    titleField.innerHTML = views[index].title;
    
    const imgField = document.querySelector(".content");
    imgField.innerHTML = "";
    
    const img = document.createElement("img");
    img.src = "img/" + views[index].src;
    imgField.append(img);
  }
  
  // ZMIENNA ZMIENIAJĄCA NUMERY SLAJDÓW (PUNKT 3)
  let currentSlide = 0;

  // WYWOŁANIE FUNKCJI Z PUNKTU 2 Z DOMYŚLNĄ WARTOŚCIĄ
  //  (robimy to po to, żeby po załadowaniu strony wyświetlił
  //  się jakiś obrazek)
  displayView(currentSlide);

  // PRZEŁĄCZANIE SLAJDÓW (PUNKT 4)
  function changeSlide(direction){
    if(direction == "left"){
      currentSlide--;
      if(currentSlide < 0){
        currentSlide = views.length-1;
      }
    }else{
      currentSlide++;
      if(currentSlide > views.length-1){
        currentSlide = 0;
      }

    }
    console.log(currentSlide);
    displayView(currentSlide);
  }

  //  POBIERAMY HTML'OWE STRZAŁKI (PUNKT 5)
  const leftArr = document.querySelector(".left");
  // I DOPISUJEMY DO NICH FUNKCJĘ PO KLIKNIĘCIU
  leftArr.onclick = () => {changeSlide("left")};
  const rightArr = document.querySelector(".right");
  rightArr.onclick = () => {changeSlide("right")};


