document.addEventListener("DOMContentLoaded", function () {
  // Hamburgermeny
  const hamburger = document.querySelector(".hamburger-menu");
  const navContainer = document.querySelector(".nav-container");

  if (hamburger && navContainer) {
    hamburger.addEventListener("click", function () {
      navContainer.classList.toggle("active");
    });
  }

  // FAQ-sektion
  document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
      const faqItem = question.parentElement;

      // Stäng andra öppna FAQ-objekt
      document.querySelectorAll(".faq-item").forEach((item) => {
        if (item !== faqItem) {
          item.classList.remove("active");
        }
      });

      // Växla aktiv status för den valda frågan (FAQ-objektet)
      faqItem.classList.toggle("active");
    });
  });

  // Utfällbara knappar för resor
  document.querySelectorAll(".trip-header").forEach((header) => {
    header.addEventListener("click", () => {
      const parent = header.parentElement;

      // Hantera aktiv status
      if (parent.classList.contains("active")) {
        parent.classList.remove("active");
      } else {
        // Stäng alla andra öppna
        document.querySelectorAll(".trip").forEach((trip) => {
          trip.classList.remove("active");
        });
        parent.classList.add("active");
      }
    });
  });

  // Popup för avbokning
  const cancelButtons = document.querySelectorAll(".cancel-trip");
  const popup = document.getElementById("popup");
  const closePopupButton = document.getElementById("close-popup");

  if (popup && closePopupButton) {
    cancelButtons.forEach((button) => {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        popup.style.display = "flex";
      });
    });

    closePopupButton.addEventListener("click", function () {
      popup.style.display = "none";
    });

    window.addEventListener("click", function (event) {
      if (event.target === popup) {
        popup.style.display = "none";
      }
    });
  }

  // Hantera returresa-knappen
  const addReturnButton = document.getElementById("add-return");
  const returnFields = document.getElementById("return-fields");

  if (addReturnButton && returnFields) {
    addReturnButton.addEventListener("click", function (e) {
      e.preventDefault();
      returnFields.classList.toggle("hidden");
    });
  }
});
