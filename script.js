document.addEventListener("DOMContentLoaded", () => {
  console.info("DOM fully loaded and parsed");

  const { form, card, successMessage } = getDomElements();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    card.classList.add("d_none");
    successMessage.classList.remove("d_none");
  });
});
function getDomElements() {
  const card = document.querySelector(".card");
  const form = document.querySelector(".subcribe-form");
  const successMessage = document.querySelector(".success-message");
  return { form, card, successMessage };
}
