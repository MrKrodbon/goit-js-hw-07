const input = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
const h1Element = document.querySelector("h1");

input.addEventListener("input", (event) => {
  let trimmedValue = (outputName.textContent =
    event.currentTarget.value.trim());

  if (trimmedValue === "") {
    outputName.textContent = "Anonymous";
  }
});
