const closeBtn = document.querySelector(".close-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const modalBtn = document.querySelector(".modal-btn");

modalBtn.addEventListener("click", function(){
   modalOverlay.classList.toggle("open-modal");
})

closeBtn.addEventListener("click", function(){
   modalOverlay.classList.toggle("open-modal");
})