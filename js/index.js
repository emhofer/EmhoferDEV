function toggleDarkLight() {
  let element = document.body;
  element.classList.toggle("mode-dark");
}

function isLight() {
  return localStorage.getItem("light-mode");
}

function toggleRootClass() {
  document.querySelector(":root").classList.toggle("light");
}

function toggleLocalStorageItem() {
  if (isLight()) {
    localStorage.removeItem("light-mode");
  } else {
    localStorage.setItem("light-mode", "set");
  }
}

if (isLight()) {
  toggleRootClass();
}

addEventListener("DOMContentLoaded", () => {
  // Change display mode
  document.querySelector(".btn-mode").addEventListener("click", () => {
    toggleLocalStorageItem();
    toggleRootClass();
  });
});
