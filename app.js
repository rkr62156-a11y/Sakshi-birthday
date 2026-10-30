document.addEventListener("DOMContentLoaded", () => {
  const screens = document.querySelectorAll(".screen");
  const form = document.getElementById("unlock-form");
  const code = document.getElementById("code");
  const error = document.getElementById("error");

  function showScreen(id) {
    screens.forEach(screen => {
      screen.classList.toggle("active", screen.id === id);
    });
    window.scrollTo(0, 0);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (code.value.trim().replace(/\s+/g, " ").toUpperCase() === "BEAUTIFUL SUAR") {
      error.textContent = "";
      showScreen("reveal");
    } else {
      error.textContent = "Wrong code, suar! Try again. 🐷";
    }
  });

  document.querySelectorAll("[data-go]").forEach(button => {
    button.addEventListener("click", () => {
      showScreen(button.dataset.go);
    });
  });

  document.getElementById("replay").addEventListener("click", () => {
    code.value = "";
    error.textContent = "";
    showScreen("gate");
  });
});
