"use strict";

import { deleteEventListener } from "./eventListeners/deleteEventListener.js";
import { archiveEventListener } from "./eventListeners/archiveEventListener.js";

export const addEventListeners = (
  tableFrom,
  tableTo,
  row,
  editBtn,
  archiveBtn,
  deleteBtn
) => {
  archiveBtn.addEventListener("click", (e) =>
    archiveEventListener(e, tableFrom, tableTo, row)
  );

  deleteBtn.addEventListener("click", (e) =>
    deleteEventListener(e, row, tableFrom)
  );
};
