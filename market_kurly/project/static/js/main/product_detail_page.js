document.addEventListener("DOMContentLoaded", function () {
  const controlsDiv = document.getElementById("quantity-controls");
  const payPrice = document.querySelector(".pay");
  const unitPrice = parseInt(payPrice.textContent.replace(/[^0-9]/g, ""));
  let quantity = 1;

  controlsDiv.innerHTML = `
    <div class="quantity-controls">
      <button type="button" class="minus-btn">-</button>
      <p class="quantity-count">1</p>
      <button type="button" class="plus-btn">+</button>
    </div>
  `;

  const minusBtn = document.querySelector(".minus-btn");
  const plusBtn = document.querySelector(".plus-btn");
  const quantityCount = document.querySelector(".quantity-count");

  function updatePay() {
    payPrice.textContent = `${(unitPrice * quantity).toLocaleString()} 원`;
  }

  minusBtn.addEventListener("click", function () {
    if (quantity > 1) {
      quantity--;
      quantityCount.textContent = quantity;
      updatePay();
    }
  });

  plusBtn.addEventListener("click", function () {
    quantity++;
    quantityCount.textContent = quantity;
    updatePay();
  });
});
