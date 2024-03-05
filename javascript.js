document.addEventListener("scroll", (event) => {
  if (window.scrollY > 300) {
    document.getElementById('scroll-to-top-btn').style.display = 'block';
  } else {
    document.getElementById('scroll-to-top-btn').style.display = 'none';
  }
});
const hamburgerEvent = (navigation, open, close) => {
  document.getElementById('navigation-items').style.display = navigation;
  document.getElementById('openHam').style.display = open;
  document.getElementById('closeHam').style.display = close;
};
document.getElementById("openHam").addEventListener('click', () => hamburgerEvent("flex", "none", "block"));
document.getElementById('closeHam').addEventListener('click', () => hamburgerEvent("none", "block", "none"));
document.getElementById('scroll-to-top-btn').addEventListener('click', () => window.scrollTo({top: 0, behavior: "smooth"}));