document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const modalDate = document.getElementById("modal-date");
  const modalDescription = document.getElementById("modal-description");
  const closeModalBtn = document.getElementById("close-modal");

  if (
    !modal ||
    !modalImage ||
    !modalDate ||
    !modalDescription ||
    !closeModalBtn
  ) {
    console.error("We couldnt find the elements");
    return;
  }

  function openModal(card) {
    const img = card.querySelector(".card-image-placeholder img");
    if (!img) {
      console.error("we cant find the image :(");
      return;
    }

    const date = card.dataset.date || "unavailable date";
    const description = card.dataset.desc || "unavailable description";

    modalImage.src = img.src;
    modalImage.alt = img.alt || "galery image";
    modalDate.textContent = date;
    modalDescription.textContent = description;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }

  cards.forEach((card) => {
    card.addEventListener("click", function (e) {
      if (
        e.target.closest(".btn-view-more") ||
        e.target.closest(".custom-footer")
      ) {
        return;
      }
      openModal(this);
    });
  });

  closeModalBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.style.display === "flex") {
      closeModal();
    }
  });

  console.log("Gallery script loaded successfullyyy");
});
