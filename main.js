const eyeContainerEl = document.querySelector(".eye-container");
const eyebrowEl = document.querySelector(".eyebrows");

document.querySelector("body").addEventListener("mousemove", eyeball);

function eyeball() {
  const eye = document.querySelector(".eye");

  let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
  let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

  let radian = Math.atan2(event.pageX - x, event.pageY - y);
  let rotate = radian * (180 / Math.PI) * -1 + 180;
  eye.style.transform = "rotate(" + rotate + "deg)";
}

eyeContainerEl.addEventListener("mouseover", () => {
  eyebrowEl.style.visibility = "visible";
});
eyeContainerEl.addEventListener("mouseout", () => {
  eyebrowEl.style.visibility = "hidden";
});
