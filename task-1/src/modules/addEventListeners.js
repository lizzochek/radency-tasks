"use strict";

import { chooseButtonsForRow } from "./chooseBtns.js";
import { deleteAllRows } from "./helpers.js";

export const addEventListeners = (
  tableFrom,
  tableTo,
  row,
  editBtn,
  archiveBtn,
  deleteBtn
) => {
  archiveBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (row.rowIndex === 0) {
      for (let i = 1; i < tableFrom.rows.length; i++) {
        tableTo.appendChild(tableFrom.rows[i].cloneNode(true));

        let [rowArchive, editBtnArchive, archiveBtnArchive, deleteBtnArchive] =
          chooseButtonsForRow(tableTo, tableTo.rows.length - 1);

        addEventListeners(
          tableTo,
          tableFrom,
          rowArchive,
          editBtnArchive,
          archiveBtnArchive,
          deleteBtnArchive
        );
      }
      deleteAllRows(tableFrom);
    } else {
      tableTo.appendChild(row.cloneNode(true));
      tableFrom.deleteRow(row.rowIndex);

      let [rowArchive, editBtnArchive, archiveBtnArchive, deleteBtnArchive] =
        chooseButtonsForRow(tableTo, tableTo.rows.length - 1);

      addEventListeners(
        tableTo,
        tableFrom,
        rowArchive,
        editBtnArchive,
        archiveBtnArchive,
        deleteBtnArchive
      );
    }
  });

  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (row.rowIndex === 0) {
      deleteAllRows(tableFrom);
    } else {
      tableFrom.deleteRow(row.rowIndex);
    }
  });
};
