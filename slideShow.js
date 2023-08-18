const images = document.querySelectorAll(".image");
const buttons = document.querySelectorAll(".button");
let currentIndex = 0;
const slideInterval = 3000; // 이미지가 넘어가는 간격 (밀리초)
function changeImage(index) {
  images.forEach((image) => image.classList.remove("selected"));
  buttons.forEach((button) => button.classList.remove("selected"));
  images[index].classList.add("selected");
  buttons[index].classList.add("selected");

  const imageWidth = images[0].clientWidth;
  const translateX = index === 0 ? 0 : index === 1 ? -390: -780;
  document.querySelector(
    ".image-wrapper"
  ).style.transform = `translateX(${translateX}px)`;
  currentIndex = index;
}
function autoSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  changeImage(currentIndex);
}
// 초기 이미지 표시
changeImage(0);
// 일정 시간 간격으로 자동 슬라이딩
setInterval(autoSlide, slideInterval);