
document.documentElement.setAttribute("data-bs-theme", "dark");

const desktopSwitch = document.getElementById("themeSwitchDesktop");
const mobileSwitch = document.getElementById("themeSwitchMobile");


desktopSwitch.checked = false;
mobileSwitch.checked = false;

function setTheme(isLight) {
  document.documentElement.setAttribute("data-bs-theme", isLight ? "light" : "dark");
  desktopSwitch.checked = isLight;
  mobileSwitch.checked = isLight;
}

desktopSwitch.addEventListener("change", () => setTheme(desktopSwitch.checked));
mobileSwitch.addEventListener("change", () => setTheme(mobileSwitch.checked));


/*
//window.addEventListener('scroll', function () {
  let navbar = this.document.getElementById('mainNav');
    if (this.window.scrollY > 50) {
      navbar.classList.add('shrink');
    } else {
      navbar.classList.remove('shrink'); 
    }
});
*/


document.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll(".img-popUp");
  const modalImage = document.getElementById("modalImage");

  thumbnails.forEach(img => {
    img.addEventListener("click", () => {
      const src = img.getAttribute("data-bs-img");
      console.log("Loading image:", src); // 🔎 debug
      modalImage.src = src;
    });
  });
});
