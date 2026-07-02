
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDate = document.getElementById("modal-date");
const modalDescription = document.getElementById("modal-description");


function openNews(title, date, description, image) {

    modalTitle.textContent = title;
    modalDate.textContent = date;
    modalDescription.textContent = description;

    modalImage.src = image;
    modalImage.alt = title;

    
    modal.style.display = "flex";

   
    document.body.style.overflow = "hidden";
}


function closeNews() {

    modal.style.display = "none";

    document.body.style.overflow = "auto";
}


window.onclick = function (e) {

    if (e.target === modal) {
        closeNews();
    }

}

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {
        closeNews();
    }

});