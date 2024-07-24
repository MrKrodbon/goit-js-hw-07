function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const spanColorName = document.querySelector(".color");
const bodyElement = document.querySelector("body");

const changeColor = (event) => {
  let specColor = getRandomHexColor();
  event.preventDefault();
  bodyElement.style.backgroundColor = specColor;
  spanColorName.textContent = specColor;
};

changeColorBtn.addEventListener("click", changeColor);

changeColorBtn.addEventListener("mouseover", () => {
  changeColorBtn.style.backgroundColor = "#6C8CFF";
  changeColorBtn.style.cursor = "pointer";
  changeColorBtn.style.transition =
    " background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)";
});

changeColorBtn.addEventListener("mouseleave", () => {
  changeColorBtn.style.backgroundColor = "#4E75FF";
});
