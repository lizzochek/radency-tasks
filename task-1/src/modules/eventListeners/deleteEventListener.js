"use strict";

import { deleteAllRows } from "../helpers.js";
import { fillCountTable } from "../fillCountTable.js";

export const deleteEventListener = (e, row, tableFrom) => {
  e.preventDefault();

  if (row.rowIndex === 0) {
    deleteAllRows(tableFrom);
  } else {
    tableFrom.deleteRow(row.rowIndex);
  }

  fillCountTable();
};
