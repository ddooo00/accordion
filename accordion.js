// HTML에서 스크립트 아래로 안내리고 하는 방법
window.onload = () => {
  const panelFaqContainer = document.querySelectorAll(".panel-faq-container");
  console.log(panelFaqContainer);
  //nodeList객체로 받아옴

  // FAQ 정의하기
  let panelFaqAnswer = document.querySelectorAll(".panel-faq-answer");
  console.log(panelFaqAnswer);

  //   btn-all-close 정의하기
  const btnAllClose = document.getElementById("btn-all-close");
  console.log(btnAllClose);

  // 반복문 순회하면서 해당 FAQ 제목 클릭 시 콜백처리
  for (let i = 0; i < panelFaqContainer.length; i++) {
    panelFaqContainer[i].addEventListener("click", function () {
      //클릭 시 처리 할 일(콜백함수)
      console.log("나 클릭.." + i);

      //   FAQ 제목 클릭시 --> 본문이 보이게끔 --> active 클래스 추가
      // this.classList.add('active') 로 하면 this = container에 액티브를 주는 꼴이 됨
      panelFaqAnswer[i].classList.add("active");
    });
  }
  //   버튼 누르면 본문 다 닫힘 -> active 제거
  btnAllClose.addEventListener("click", function () {
    console.log("모두 닫기 버튼 클릭");
    //버튼 클릭 시 처리할 일
    for (let i = 0; i < panelFaqAnswer.length; i++) {
      panelFaqAnswer[i].classList.remove("active");
    }
  });
};
