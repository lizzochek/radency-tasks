"use strict";

//Helpers
import {
  addRowToActive,
  deleteAllRows,
  chooseButtonsForTable,
  chooseButtonsForRow,
  addEventListeners,
} from "./helpers.js";

import { addOnloadListeners } from "./onloadListeners.js";

//Tables

const activeTable = document.querySelector(".tableActive");
const archivedTable = document.querySelector(".tableArchived");
const countTable = document.querySelector(".tableCount");

//Buttons under first table
const createNote = document.querySelector(".createNote");
const seeArchived = document.querySelector(".seeArchived");

//Modal window
const taskDescription = document.querySelector(".taskDescription");
const taskDescriptionForm = document.querySelector(".taskDescriptionForm");
const input = document.querySelectorAll("input");
const addTaskBtn = document.querySelector(".addTask");
const overlay = document.querySelector(".overlay");

//Event listeners
createNote.addEventListener("click", (e) => {
  e.preventDefault();
  taskDescription.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

addTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addRowToActive(activeTable, archivedTable, input);

  taskDescriptionForm.reset();
  taskDescription.classList.add("hidden");
  overlay.classList.add("hidden");
});

addOnloadListeners(activeTable, archivedTable);
// for (let i = 0; i < activeTable.rows.length; i++) {
//   let [row, editBtn, archiveBtn, deleteBtn] = chooseButtonsForRow(
//     activeTable,
//     i
//   );
//   addEventListeners(
//     activeTable,
//     archivedTable,
//     row,
//     editBtn,
//     archiveBtn,
//     deleteBtn
//   );
// }
