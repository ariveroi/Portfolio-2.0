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

// show contact info
const showContactInfoButton = document.querySelector(".show-contact-info");
const contactInfo = document.querySelector(".contact-info");
// showContactInfoButton.addEventListener("click", () => {
//   contactInfo.classList.toggle("active");
// });

//close contact info
const closeContactInfoButton = document.querySelector(".close-contact-info");
closeContactInfoButton.addEventListener("click", () => {
  contactInfo.classList.toggle("active");
});

const sidebarToggler = document.querySelector(".sidebar-toggler");
sidebarToggler.addEventListener("click", () => {
  document.querySelector(".toggle-sidebar").classList.toggle("close");
  document.querySelector(".aside").classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    document.querySelector(".aside").classList.remove("active");
    document.querySelector(".toggle-sidebar").classList.toggle("close");
  });
});
