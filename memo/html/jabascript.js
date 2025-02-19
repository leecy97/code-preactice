자바스크립트
*<script> 태그는 </body>태그가 끝나기 직전에 사용하는 위치
*내부/외부 스크립트는 동시 사용이 안됨

[내부 스크립트]
<script>document.write('HTML같은 파일 내부에 입력');</script>

[외부 스크립트]
js파일을 생성하고 src를 통해 파일 연결해주기
<script src="파일명.js"></script>

[기본 함수식]
const sum = (num1, num2) => {
  return;
  console.log('num1 + num2');
};
상수(변하지 않는 값) 함수이름 = (인자1, 인자2) => {
  반환;
  함수이름.함수('인자1 + 인자2');
};
예시
const multiple = (num1, num2, num3) => {
  return num1 * num2 - num3; }
  multiple(3, 4, 5);
  7