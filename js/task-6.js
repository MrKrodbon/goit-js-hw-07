function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const boxesList = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const fragment = document.createDocumentFragment();

function createBoxes(amount) {
  if (input.value >= 1 && input.value <= 100) {
    boxesList.innerHTML = "";
    for (let index = 0, increase = 30; index < amount; index++) {
      let box = document.createElement("div");
      box.style.width = `${increase}px`;
      box.style.height = `${increase}px`;
      box.style.backgroundColor = getRandomHexColor();
      fragment.appendChild(box);
      increase += 10;
    }
    boxesList.appendChild(fragment);
  }
  input.value = "";
}
createBtn.addEventListener("click", () => createBoxes(input.value));

destroyBtn.addEventListener("click", () => (boxesList.innerHTML = ""));
