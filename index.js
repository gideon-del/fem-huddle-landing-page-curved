"use strict";
const regex = /[a-zA-z]@[^#!@$%^&*()]*/g;
const btn = document.querySelector(".footer__btn");
const input = document.querySelector(".footer__input");
const error = document.querySelector(".label");
const form = document.querySelector(".footer__form");
let result;
console.log(form);
input.addEventListener("input", function (e) {
  input.classList.remove("red");
  error.classList.add("hidden");
});
form.addEventListener("submit", function (e) {
  e.preventDefault();
  result = input.value.match(regex) ? true : false;
  if (!result) {
    error.classList.remove("hidden");
    input.classList.add("red");
  }
});
