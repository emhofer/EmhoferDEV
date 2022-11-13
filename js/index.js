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
  // Change language

  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
  function openDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  document.querySelector(".dropbtn").addEventListener("click", () => {
    openDropdown();
  });

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
});
