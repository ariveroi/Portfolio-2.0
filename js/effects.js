// tears effect

const button = document.querySelector(".btn");
button.addEventListener("mouseover", () => {
  const divLake = document.createElement("div");
  divLake.classList.add("tears-lake");
  button.appendChild(divLake);
  const div = document.createElement("div");
  div.classList.add("tear");
  button.appendChild(div);
});
button.addEventListener("mouseout", () => {
  const tears = document.querySelectorAll(".tear");
  tears.forEach((tear) => {
    tear.remove();
  });
  const tearsLake = document.querySelector(".tears-lake");
  tearsLake.remove();
});
