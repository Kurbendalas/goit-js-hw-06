const categories = document.querySelector("#categories");
const items = categories.querySelectorAll(".item");

// кількість категорій
console.log(`Number of categories: ${items.length}`);

// для кожного елемента li.item
items.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("li").length;

  // виведення заголовку та кількості елементів в категорії
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
});
