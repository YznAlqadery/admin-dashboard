const menuButton = document.querySelector("#menu-btn");
const sidebar = document.querySelector("aside");
const closeButton = document.querySelector("#close-btn");
const themeButton = document.querySelector(".theme-toggle");
menuButton.addEventListener("click", () => {
  sidebar.style.display = "block";
  closeButton.style.display = "block";
});

closeButton.addEventListener("click", () => {
  sidebar.style.display = "none";
});

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeButton.querySelectorAll("span").forEach((span) => {
    span.classList.toggle("active");
  });
});
