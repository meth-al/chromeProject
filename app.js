const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault(); // 기본 동작인 폼 제출을 막음
  loginForm.classList.add(HIDDEN_CLASSNAME); // 폼 숨김. 왜 숨겼다 보이는거지?
  const username = loginInput.value; // 입력된 이름 저장
  console.log(username);
  greeting.innerText = `Hello ${username}`; // 환영 메시지 표시
  greeting.classList.remove(HIDDEN_CLASSNAME); // 환영 메시지 보이기
}

loginForm.addEventListener("submit", onLoginSubmit); // 폼 제출 이벤트 리스너 추가
