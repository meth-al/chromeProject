# chromeProject

li.remove(); 클릭 된 것은 동글이 리스트에 해당하는 li임
-> console.dir(event.target)를 통해 알 수 있었음
-> <li>가 아니라 .target만 삭제할 경우 <span>도 남아버림

localStorage는 문자열만 저장 가능 받은 배열을 .stringify

const toDos = [];
// 요소 추가해도 value는 still array라 오류 없음
// object & arr: reference type 