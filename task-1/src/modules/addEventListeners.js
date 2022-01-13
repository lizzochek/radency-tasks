"use strict";

import { deleteEventListener } from "./eventListeners/deleteEventListener.js";
import { archiveEventListener } from "./eventListeners/archiveEventListener.js";
import { editEventListener } from "./eventListeners/editEventListener.js";

export const addEventListeners = (
  tableFrom,
  tableTo,
  row,
  editBtn,
  archiveBtn,
  deleteBtn
) => {
  if (editBtn) {
    editBtn.addEventListener("click", (e) => editEventListener(e, row));
  }
  archiveBtn.addEventListener("click", (e) =>
    archiveEventListener(e, tableFrom, tableTo, row)
  );

  deleteBtn.addEventListener("click", (e) =>
    deleteEventListener(e, row, tableFrom)
  );
};
