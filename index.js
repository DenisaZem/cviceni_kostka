let side = 1;
document.addEventListener("keydown", () => {
    side = (side%6)+1
  const a = document.querySelector(".dice");
  a.src = `img/side${side}.svg`;
});
