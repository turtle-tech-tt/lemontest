// panic-key.js
let panicKey = localStorage.getItem("panicKey") || "[";
let panicActive = true; // always active, unless you add a toggle

document.addEventListener("keydown", (event) => {
  if (panicActive && event.key === panicKey) {
    window.location.href = "https://www.google.com";
  }
});
