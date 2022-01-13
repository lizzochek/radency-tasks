"use strict";

//Helpers
import { addRowToActive } from "./modules/addRowToActive.js";
import { addOnloadListeners } from "./modules/onloadListeners.js";
import {
  getDataFromList,
  getDatesFromString,
  toggleTable,
} from "./modules/helpers.js";

//Tables

const activeTable = document.querySelector(".tableActive");
const archivedTable = document.querySelector(".tableArchived");
const countTable = document.querySelector(".tableCount");
const select = document.querySelector(".list");

//Buttons under first table
const createNote = document.querySelector(".createNote");
const seeArchived = document.querySelector(".seeArchived");

//Modal window
const taskDescription = document.querySelector(".taskDescription");
const taskDescriptionForm = document.querySelector(".taskDescriptionForm");
const input = document.querySelectorAll("input");
const addTaskBtn = document.querySelector(".addTask");
const addEditBtn = document.querySelector(".addEdit");
const overlay = document.querySelector(".overlay");

//Event listeners
archivedTable.style.display = "none";
activeTable.style.display = "";

createNote.addEventListener("click", (e) => {
  e.preventDefault();
  taskDescription.classList.remove("hidden");
  overlay.classList.remove("hidden");

  addTaskBtn.style.display = "block";
  addEditBtn.style.display = "none";
});

addTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addRowToActive(activeTable, archivedTable, input, activeTable.rows.length);

  taskDescriptionForm.reset();
  taskDescription.classList.add("hidden");
  overlay.classList.add("hidden");
});

addOnloadListeners(activeTable, archivedTable);

addEditBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let activeRow = document.getElementsByClassName("active")[0];

  let cells = activeRow.getElementsByTagName("td");
  let datesFromContent = getDatesFromString(input[1].value);
  cells[0].textContent = input[0].value;
  cells[2].textContent = getDataFromList(select);
  cells[3].textContent = input[1].value;
  cells[4].textContent = datesFromContent;

  activeRow.classList.remove("active");
  taskDescriptionForm.reset();
  taskDescription.classList.add("hidden");
  overlay.classList.add("hidden");
});

seeArchived.addEventListener("click", (e) => {
  e.preventDefault();

  toggleTable(activeTable, archivedTable, seeArchived);
});
