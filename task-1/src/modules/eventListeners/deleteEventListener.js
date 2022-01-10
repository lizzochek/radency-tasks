"use strict";

import { deleteAllRows } from "../helpers.js";

export const deleteEventListener = (e, row, tableFrom) => {
  e.preventDefault();

  if (row.rowIndex === 0) {
    deleteAllRows(tableFrom);
  } else {
    tableFrom.deleteRow(row.rowIndex);
  }
};
