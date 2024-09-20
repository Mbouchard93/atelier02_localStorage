/**
 * @type {Storage}
 */
const monStockage = localStorage;

/**
 * @type {HTMLElement}
 */
const containerDialog = document.querySelector("[data-dialog]");
/**
 * @type {string}
 */
const diallogId = containerDialog.getAttribute("data-dialog");
/**
 * @type {HTMLElement}
 */
const dialog = document.querySelector(".dialog");

if (localStorage.getItem("visited")) {
  dialog.setAttribute("closing", "");
  dialog.removeAttribute("open");
} else {
  localStorage.setItem("visited", "true");
  dialog.setAttribute("open", "");
  dialog.removeAttribute("closing");
}

/**
 * @type {HTMLElement}
 */
const btnClose = document.querySelector(".btn--close");

btnClose.addEventListener("click", (e) => {
  /**
   * @type {HTMLElement}
   */
  const dialog = e.target.closest(".dialog");
  dialog.setAttribute("closing", "");
  dialog.removeAttribute("open");
});
