"use strict";

import { chooseButtonsForRow } from "../chooseBtns.js";
import { deleteAllRows } from "../helpers.js";
import { addEventListeners } from "../addEventListeners.js";
import { fillCountTable } from "../fillCountTable.js";

export const archiveEventListener = (e, tableFrom, tableTo, row) => {
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

    fillCountTable();
  }
};
