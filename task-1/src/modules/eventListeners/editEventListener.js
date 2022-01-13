"use strict";

//Modal window
const taskDescription = document.querySelector(".taskDescription");
const taskDescriptionForm = document.querySelector(".taskDescriptionForm");

const addTaskBtn = document.querySelector(".addTask");
const addEditBtn = document.querySelector(".addEdit");
const overlay = document.querySelector(".overlay");

export const editEventListener = (e, row) => {
  e.preventDefault();
  taskDescription.classList.remove("hidden");
  overlay.classList.remove("hidden");

  addTaskBtn.style.display = "none";
  addEditBtn.style.display = "block";

  row.classList.add("active");

  let fields = row.getElementsByTagName("td");
  taskDescriptionForm.elements[0].value = fields[0].textContent;
  taskDescriptionForm.elements[2].value = fields[3].textContent;
};
