/* login page - JS */
document.addEventListener("DOMContentLoaded", function () {
  const userIdInput = document.getElementById("user-id");
  const userPassInput = document.getElementById("user-pass");
  const loginBtn = document.querySelector(".submit-btn");

  function updateLoginButtonState() {
    const isIdFilled = userIdInput.value.trim() !== "";
    const isPassFilled = userPassInput.value.trim() !== "";

    if (isIdFilled && isPassFilled) {
      loginBtn.disabled = false;
      loginBtn.style.backgroundColor = "#5e0080";
      loginBtn.style.color = "#ffffff";
      loginBtn.style.cursor = "pointer";
    } else {
      loginBtn.disabled = true;
      loginBtn.style.backgroundColor = "#e2e2e2";
      loginBtn.style.color = "#999999";
      loginBtn.style.cursor = "default";
    }
  }

  userIdInput.addEventListener("input", updateLoginButtonState);
  userPassInput.addEventListener("input", updateLoginButtonState);

  updateLoginButtonState();
});
