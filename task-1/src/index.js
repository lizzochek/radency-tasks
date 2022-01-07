"use strict";

const createNote = document.querySelector(".createNote");
const seeArchived = document.querySelector(".seeArchived");

const archiveNote = document.querySelectorAll(".archivebtn");
const deleteNoteNote = document.querySelectorAll(".deletebtn");

const taskDescription = document.querySelector(".taskDescription");
const overlay = document.querySelector(".overlay");

createNote.addEventListener("click", (e) => {
  e.preventDefault();
  taskDescription.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
