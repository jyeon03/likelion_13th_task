/* signup page - JS */

document.addEventListener("DOMContentLoaded", function () {
  const usernameInput = document.getElementById("user-id");
  const passwordInput = document.getElementById("user-pass");
  const password2Input = document.getElementById("user-confirm-pass");
  const submitBtn = document.querySelector(".submit-btn");
  const passwordError = document.getElementById("password-error");

  // 비밀번호 유효성 검사 정규표현식
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!?_-])[A-Za-z\d@!?_-]{8,}$/;

  function validateForm() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const password2 = password2Input.value.trim();

    const isUsernameFilled = username !== "";
    const isPasswordValid = passwordPattern.test(password);
    const isPasswordMatched = password === password2 && password !== "";

    if (password !== password2 && password2 !== "") {
      passwordError.style.display = "block";
    } else {
      passwordError.style.display = "none";
    }

    if (isUsernameFilled && isPasswordValid && isPasswordMatched) {
      submitBtn.disabled = false;
      submitBtn.style.backgroundColor = "#5E0080";
      submitBtn.style.color = "#ffffff";
    } else {
      submitBtn.disabled = true;
      submitBtn.style.backgroundColor = "#e2e2e2";
      submitBtn.style.color = "#999999";
    }
  }

  usernameInput.addEventListener("input", validateForm);
  passwordInput.addEventListener("input", validateForm);
  password2Input.addEventListener("input", validateForm);
});
