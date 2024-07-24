const inputForm = document.querySelector(".login-form");
const input = document.querySelectorAll("input");
const submitBtn = document.querySelector("button");
const formLabel = document.querySelectorAll("label");

const onFormSubmit = (event) => {
  let inputEmail = inputForm.elements.email.value;
  let inputPassword = inputForm.elements.password.value;

  event.preventDefault();
  if (inputPassword === "" || inputEmail === "") {
    alert("All form fields must be filled in");
  } else {
    const form = {
      email: inputEmail.trim(),
      password: inputPassword.trim(),
    };
    console.log(form);
    inputForm.reset();
  }
};

inputForm.addEventListener("submit", onFormSubmit);

submitBtn.addEventListener("mouseover", () => {
  submitBtn.style.backgroundColor = "#6C8CFF";
  submitBtn.style.cursor = "pointer";
  submitBtn.style.transition =
    " background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)";
});

submitBtn.addEventListener("mouseleave", () => {
  submitBtn.style.backgroundColor = "#4E75FF";
});
