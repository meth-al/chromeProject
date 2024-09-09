const loginInput = document.querySelector("#login-input");
const loginButton = document.querySelector("#login-button");

function onLoginBtnClick() {
  const username = loginInput.value;
  console.dir(loginInput.value);
}
loginButton.addEventListener("click", onLoginBtnClick);