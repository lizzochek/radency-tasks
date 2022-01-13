"use strict";

// import { addEventListeners, chooseButtonsForRow } from "./helpers.js";
import { addEventListeners } from "./addEventListeners.js";
import { chooseButtonsForRow } from "./chooseBtns.js";

export const addOnloadListeners = (activeTable, archivedTable) => {
  for (let i = 0; i < activeTable.rows.length; i++) {
    let [row, editBtn, archiveBtn, deleteBtn] = chooseButtonsForRow(
      activeTable,
      i
    );
    addEventListeners(
      activeTable,
      archivedTable,
      row,
      editBtn,
      archiveBtn,
      deleteBtn
    );
  }

  let [rowArchive, editBtnArchive, archiveBtnArchive, deleteBtnArchive] =
    chooseButtonsForRow(archivedTable, 0);

  addEventListeners(
    archivedTable,
    activeTable,
    rowArchive,
    editBtnArchive,
    archiveBtnArchive,
    deleteBtnArchive
  );
};
