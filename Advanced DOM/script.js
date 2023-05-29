"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
//////////////////////////////////////////
//////////////////////////////////////

/// Creating and inserting element
const header = document.querySelector(".header");

const message = document.createElement("div");
message.classList.add("cookie-message");
message.textContent =
  "We use cookies for improved functionality and analytics.";
message.innerHTML =
  'We use cookies for improved funtionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);

// header.before(message);
// header.after(message)

// Delete elements
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", () => message.remove());

// Styles, Attributes And Classes
// Styles
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(message.style.color); // Cannot get computed style
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + "px";

// Change custom property
document.documentElement.style.setProperty("--color-primary", "blue");

// Attributes src, href, id, class of an element
const logo = document.querySelector(".nav__logo");
console.log(logo.src);
console.log(logo.alt);
console.log(logo.className);

// Set attribute
logo.alt = "Beautiful minmalist logo";

// Non-standard
console.log(logo.designer); // Undefined
console.log(logo.getAttribute("designer"));
logo.setAttribute("company", "Bankist");

console.log(logo.src);
console.log(logo.getAttribute("src"));

const link = document.querySelector(".nav__link--btn");
console.log(link.href);
console.log(link.getAttribute("href"));

// Data Attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add("c", "j");
logo.classList.remove("c", "j");
logo.classList.toggle("c");
logo.classList.contains("c");
