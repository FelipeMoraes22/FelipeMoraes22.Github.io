function openModal(imageIndex) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const caption = document.getElementById("caption");
  
    const images = [
      { src: "../img/monte-robson2.jpg", caption: "MONTE ROBSON" },
      { src: "../img/niagara2.jpg", caption: "NIAGARA FALLS" },
      { src: "../img/aurora-boreal-2.jpg", caption: "AURORA BOREAL" },
      { src: "../img/nahanni-park.jpg", caption: "nahanni-park" },
      { src: "../img/jasper-national-park.webp", caption: "jasper-national-park" },
      { src: "../img/lake-louise.jpg", caption: "Lake Louise" },
    ];
  
    modal.style.display = "block";
    modalImg.src = images[imageIndex - 1].src;
    caption.innerHTML = images[imageIndex - 1].caption;
  }
  
  function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
  }
  