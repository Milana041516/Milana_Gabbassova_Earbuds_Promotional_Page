(() => {

  //BurgerMenu

  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })



  //Model Viewer
    const model = document.querySelector("#model");
    const hotspots = document.querySelectorAll(".Hotspot");
    const hotspotsMobile = document.querySelector('.hotspot-mobile-container');
  
  
    const infoBoxes = [ 
    {
      title: "Heart-Shaped Housing",
      text: "Unique heart-shaped design for a stylish, standout look that fits comfortably and securely",
      image: "images/earbud-housing.png"
    },
    {
        title: "Long Battery Life",
        text: "Enjoy hours of uninterrupted playback on a single charge",
        image: "images/battery.png"
      },
      {
        title: "Ear Tips for Active Comfort",
        text: "These ear pins provide a stable, comfortable fit, keeping your earbuds securely in place, even during intense movement",
        image: "images/earbud-tip.png"
      },
      {
        title: "LoveBeats Logo",
        text: " Featuring the LoveBeats logo, these earbuds bring a touch of personality and flair to your listening experience, merging style with high-quality sound",
        image: "images/lovebeats-logo.png"
      },
      {
        title: "Automatic Ear Detection ",
        text: "Playback pauses when you remove the earbuds",
        image: "images/ear-detection.png"
      },
  ] 
  
  function loadInfo() {
    infoBoxes.forEach((infoBox, index)=>{
  
      let selected = document.querySelector(`#hotspot-${index+1}`);

      const img = document.createElement("img");
      img.src = infoBox.image;
      img.style.width = "300px";

      const title = document.createElement("h2");
      title.textContent= infoBox.title;
  
      const text = document.createElement("p");
      text.textContent = infoBox.text;
  
      selected.appendChild(img);
      selected.appendChild(title);
      selected.appendChild(text);
    })
    }

    function hotspotsMobileInfo() {
      infoBoxes.forEach(({title, text, image})=> {
        const hotspotCard = document.createElement('div');
        hotspotCard.classList.add('hotspot-mobile');

        const hotspotMobileImageCont = document.createElement('div');
        hotspotMobileImageCont.classList.add('hotspot-mobile-image');

        const hotspotMobileTextCont = document.createElement('div');
        hotspotMobileTextCont.classList.add('hotspot-mobile-text');

        const hotspotMobileImage = document.createElement('img');
        hotspotMobileImage.src = image;
        hotspotMobileImage.classList.add('hotspot-mobile-image');

        const hotspotMobileTitle = document.createElement('p');
        hotspotMobileTitle.textContent = title;
        hotspotMobileTitle.classList.add('hotspot-mobile-text-title');

        const hotspotMobileText = document.createElement('p');
        hotspotMobileText.textContent = text;
        hotspotMobileText.classList.add('hotspot-mobile-text-basic');

        hotspotMobileImageCont.appendChild(hotspotMobileImage);
        hotspotMobileTextCont.appendChild(hotspotMobileTitle);
        hotspotMobileTextCont.appendChild(hotspotMobileText);

        hotspotCard.appendChild(hotspotMobileImageCont);
        hotspotCard.appendChild(hotspotMobileTextCont);

        hotspotsMobile.appendChild(hotspotCard);

      })
    }
  
  function modelLoaded() {
    loadInfo();
    }
  
    function showInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 1 });
    }
  
    function hideInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 0 });
    }
  
   model.addEventListener("load", modelLoaded);

    hotspots.forEach(function (hotspot) {
      hotspot.addEventListener("mouseenter", showInfo);
      hotspot.addEventListener("mouseleave", hideInfo);
    });

    hotspotsMobileInfo();
  })();
  
  