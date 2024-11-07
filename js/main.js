(() => {

    const model = document.querySelector("#model");
    const hotspots = document.querySelectorAll(".Hotspot");
  
  
  const infoBoxes = [ 
    {
      title: "Heart-Shaped Housing",
      text: "Unique heart-shaped design for a stylish, standout look that fits comfortably and securely",
      image: "images/hotspot.svg"
    },
    {
        title: "Long Battery Life",
        text: "Enjoy hours of uninterrupted playback on a single charge",
        image: "images/hotspot.svg"
      },
      {
        title: "Ear Pins for Active Comfort",
        text: "These ear pins provide a stable, comfortable fit, keeping your earbuds securely in place, even during intense movement",
        image: "images/hotspot.svg"
      },
      {
        title: "LoveBeats Logo",
        text: " Featuring the LoveBeats logo, these earbuds bring a touch of personality and flair to your listening experience, merging style with high-quality sound",
        image: "images/hotspot.svg"
      },
      {
        title: "Automatic Ear Detection ",
        text: "Playback pauses when you remove the earbuds",
        image: "images/hotspot.svg"
      },
  ]
  
  function loadInfo() {
    infoBoxes.forEach((infoBox, index)=>{
  
      let selected = document.querySelector(`#hotspot-${index+1}`);

      const img = document.createElement("img");
      img.src = infoBox.image;
  
      const title = document.createElement("h2");
      title.textContent= infoBox.title;
  
      const text = document.createElement("p");
      text.textContent = infoBox.text;
  
      selected.appendChild(img);
      selected.appendChild(title);
      selected.appendChild(text);
    })
  }
  
  loadInfo();
  
    function showInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 1 });
    }
  
    function hideInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 0 });
    }
  
    hotspots.forEach(function (hotspot) {
      hotspot.addEventListener("mouseenter", showInfo);
      hotspot.addEventListener("mouseleave", hideInfo);
    });
  
  })();
  
  