document.addEventListener("DOMContentLoaded", () => {
  console.info("DOM fully loaded and parsed");

  const { cardElement, formElement, successMessageElement, errorMessageElement, dismissButton } = getDOMElements();

  formElement.addEventListener("submit", (e) => {
    e.preventDefault();

    const isValid = validateForm(formElement);
    if (isValid) {
      successMessageElement.classList.remove("d_none");
      cardElement.classList.add("d_none");
    } else errorMessageElement.classList.remove("hidden");
  });

  dismissButton.addEventListener("click", () => {
    successMessageElement.classList.add("d_none");
    cardElement.classList.remove("d_none");
  });
});

function validateForm(form) {
  const formData = new FormData(form);
  const email = formData.get("email");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.reset();
  return emailPattern.test(email);
}
function getDOMElements() {
  const cardElement = document.querySelector(".card");
  const formElement = document.querySelector(".subcribe-form");
  const successMessageElement = document.querySelector(".success-message");
  const errorMessageElement = document.querySelector(".error-message");
  const dismissButton = document.querySelector("#dismiss");

  return {
    cardElement,
    formElement,
    successMessageElement,
    errorMessageElement,
    dismissButton,
  };
}
