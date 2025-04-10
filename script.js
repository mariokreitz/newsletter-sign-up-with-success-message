document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");
  const form = document.querySelector(".subcribe-form");
  const successMessage = document.querySelector(".success-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    card.classList.add("d_none");
    successMessage.classList.remove("d_none");
  });
});
