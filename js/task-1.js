let itemList = document.querySelectorAll(".item");
let categoriesCount = itemList.length;
let h2ElementsList;
let elementOfcategoriesCount;
console.log(`Number of categories: ${categoriesCount}`);

itemList.forEach((item) => {
  h2ElementsList = item.querySelectorAll("h2");
  h2ElementsList.forEach((h2Elem) => {
    console.log(h2Elem.textContent);
  });

  elementOfcategoriesCount = item.querySelectorAll("ul li").length;
  console.log(`Elements: ${elementOfcategoriesCount}`);
});
