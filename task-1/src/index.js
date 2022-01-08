"use strict";

//Helpers
import { addRow, deleteAllRows } from "./helpers.js";

//Tables

const activeTable = document.querySelector(".tableActive");
const archivedTable = document.querySelector(".tableArchived");
const countTable = document.querySelector(".tableCount");

//Buttons under first table
const createNote = document.querySelector(".createNote");
const seeArchived = document.querySelector(".seeArchived");

//Buttons on tasks
const archiveNote = document.querySelectorAll(".archivebtn");
const deleteNotes = document.querySelectorAll(".deletebtn");

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
  addRow(activeTable, archivedTable, input);

  taskDescriptionForm.reset();
  taskDescription.classList.add("hidden");
  overlay.classList.add("hidden");
});

deleteNotes.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (index === 0) {
      deleteAllRows(activeTable);
    } else {
      activeTable.deleteRow(index);
    }
  });
});

archiveNote.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let el = activeTable.rows;

    if (index === 0) {
      for (let i = 1; i < el.length; i++) {
        archivedTable.appendChild(el[i].cloneNode(true));
      }
      deleteAllRows(activeTable);
    } else {
      archivedTable.appendChild(el[index].cloneNode(true));
      activeTable.deleteRow(index);
    }
  });
});
