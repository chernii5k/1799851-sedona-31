const link = document.querySelector(".button-search");
const popup = document.querySelector(".modal");


link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-close");
});





