const categories = [
  { name: "스킨케어·메이크업", count: 68 },
  { name: "럭셔리뷰티", count: 24 },
  { name: "간식·과자·떡", count: 28 },
];

const categoryList = document.getElementById("categories"); // 또는 "category"

categories.forEach((category) => {
  const list = document.createElement("div");
  list.className = "category";

  list.innerHTML = `
      <input class="category-input" type="checkbox" />
      <p class="category-item">${category.name}</p>
      <p class="category-count">${category.count}</p>
    `;
  categoryList.appendChild(list);
});

const product = document.getElementById("product");
const selectedBox = document.createElement("div");
selectedBox.id = "selected-categories";
product.before(selectedBox);

let selectedCategories = [];

function updateSelectedCategoriesDisplay() {
  selectedBox.innerHTML = "";
  selectedCategories.forEach((categoryName) => {
    const item = document.createElement("div");
    item.className = "selected-item";
    item.innerHTML = `
      <span class="select-name">${categoryName.trim()}</span>
      <img src="/static/assets/icons/close.svg" alt="close" class="remove-btn" data-name="${categoryName.trim()}"/>
    `;
    selectedBox.appendChild(item);
  });
}

function updateTotalCount() {
  let total = 0;
  selectedCategories.forEach((name) => {
    const c = categories.find((cat) => cat.name === name);
    if (c) total += c.count;
  });

  const totalText = document.querySelector(".product-bar .text");
  totalText.textContent = `총 ${total}건`;
}

function handleCategoryChange(event) {
  const checkbox = event.target;
  const categoryName = checkbox.nextElementSibling.textContent.trim();

  if (checkbox.checked) {
    if (!selectedCategories.includes(categoryName)) {
      selectedCategories.push(categoryName);
    }
  } else {
    selectedCategories = selectedCategories.filter(
      (name) => name !== categoryName
    );
  }

  updateSelectedCategoriesDisplay();
  updateTotalCount();
}

categoryList.querySelectorAll(".category-input").forEach((input) => {
  input.addEventListener("change", handleCategoryChange);
});

document.querySelector(".filter-reset").addEventListener("click", () => {
  selectedCategories = [];

  document.querySelectorAll(".category-input").forEach((input) => {
    input.checked = false;
  });

  updateSelectedCategoriesDisplay();
  updateTotalCount();
});

selectedBox.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    const name = e.target.dataset.name.trim();

    selectedCategories = selectedCategories.filter((n) => n !== name);

    document.querySelectorAll(".category").forEach((catDiv) => {
      const textElement = catDiv.querySelector(".category-item");
      const checkbox = catDiv.querySelector(".category-input");

      if (!textElement || !checkbox) {
        console.warn("요소를 못 찾음:", catDiv);
        return;
      }

      const text = textElement.textContent.trim();
      console.log("비교 중:", text, "<->", name);

      if (text === name) {
        checkbox.checked = false;
        console.log("체크박스 해제 완료:", name);
      }
    });

    updateSelectedCategoriesDisplay();
    updateTotalCount();
  }
});
