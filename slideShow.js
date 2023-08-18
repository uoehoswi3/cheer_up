const images = document.querySelectorAll(".image");
const buttons = document.querySelectorAll(".button");

function changeImage(index) {
  images.forEach((image) => image.classList.remove("selected"));
  buttons.forEach((button) => button.classList.remove("selected"));

  images[index].classList.add("selected");
  buttons[index].classList.add("selected");

  const translateX = index === 0 ? 0 : index === 1 ? -258 : -538;
  document.querySelector(
    ".image-wrapper"
  ).style.transform = `translateX(${translateX}px)`;
}
