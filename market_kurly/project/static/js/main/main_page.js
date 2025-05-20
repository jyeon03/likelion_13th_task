// 카테고리 데이터
const categories = [
  { name: "스킨케어·메이크업", count: 68 },
  { name: "럭셔리뷰티", count: 24 },
  { name: "간식·과자·떡", count: 28 },
];

const categoryList = document.getElementById("categories");

categories.forEach((category) => {
  const list = document.createElement("div");
  list.className = "category";

  list.innerHTML = `
      <div class="custom-checkbox"></div>
      <p class="category-item">${category.name}</p>
      <p class="category-count">${category.count}</p>
    `;
  list.dataset.name = category.name;
  categoryList.appendChild(list);
});

const product = document.getElementById("product");
const selectedBox = document.createElement("div");
selectedBox.id = "selected-categories";
product.before(selectedBox);

selectedBox.style.display = "none";// 처음에는 안보이게

let selectedCategories = [];

function updateSelectedCategoriesDisplay() {
  selectedBox.innerHTML = "";

  if (selectedCategories.length === 0) {
    selectedBox.style.display = "none"; 
    return;
  }

  selectedBox.style.display = "flex"; 

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

// 총 상품 수 표시 업데이트 함수
function updateTotalCount() {
  let total = 0;
  selectedCategories.forEach((name) => {
    const c = categories.find((cat) => cat.name === name);
    if (c) total += c.count;
  });

  const totalText = document.querySelector(".product-bar .text");
  totalText.textContent = `총 ${total}건`;
}

// 선택된 카테고리 박스에서 X 버튼 클릭 시 선택 해제
selectedBox.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    const name = e.target.dataset.name;

    // 선택된 항목에서 제거
    selectedCategories = selectedCategories.filter((n) => n !== name);

    // 카테고리 리스트에서 해당 항목의 체크 해제
    const categoryDiv = [...categoryList.children].find(
      (div) => div.dataset.name === name
    );
    if (categoryDiv) {
      const checkbox = categoryDiv.querySelector(".custom-checkbox");
      checkbox.classList.remove("checked");
    }

    updateSelectedCategoriesDisplay();
    updateTotalCount();
  }
});

// 필터 리셋 버튼 클릭 시 모든 선택 초기화
document.querySelector(".filter-reset").addEventListener("click", () => {
  selectedCategories = [];

  document.querySelectorAll(".custom-checkbox").forEach((checkbox) => {
    checkbox.classList.remove("checked");
  });

  updateSelectedCategoriesDisplay();
  updateTotalCount();
});

// 카테고리 클릭 시 체크 상태 토글
categoryList.addEventListener("click", (e) => {
  const categoryDiv = e.target.closest(".category");
  if (!categoryDiv) return;

  const name = categoryDiv.dataset.name;
  const checkbox = categoryDiv.querySelector(".custom-checkbox");

  if (selectedCategories.includes(name)) {
    selectedCategories = selectedCategories.filter((n) => n !== name);
    checkbox.classList.remove("checked");
  } else {
    selectedCategories.push(name);
    checkbox.classList.add("checked");
  }

  updateSelectedCategoriesDisplay();
  updateTotalCount();
});
