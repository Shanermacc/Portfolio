//MODAL
var modal = document.getElementById("myModal");
var span = $(".close");

// span.onclick = function() {
//   modal.style.display = "none";
// };

span.on("click", function() {
    modal.style.display = "none";
});

// Get all images and insert the clicked image inside the modal
// Get the content of the image description and insert it inside the modal image caption
var images = document.getElementsByTagName("img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var i;
for (i = 0; i < images.length; i++) { // looping through all image tag names in document. on click of image, run function of displaying modal with source URL, alt text, and caption
  images[i].onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
  };
}

//opacity of image on hover is changing in modal

//SWIPER
let swiper = new Swiper(".mySwiper", {   
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
});