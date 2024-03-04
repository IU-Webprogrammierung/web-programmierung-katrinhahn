const hamburgerEvent = (navigation, open, close) => {
  navigationItems.style.display = navigation;
  openHam.style.display = open;
  closeHam.style.display = close;
};

openHam.addEventListener('click', () => hamburgerEvent("flex", "none", "none"));

document.querySelector('#closeHam').addEventListener('click', () => hamburgerEvent("none", "block", "block"));