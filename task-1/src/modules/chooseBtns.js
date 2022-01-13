"use strict";

export const chooseButtonsForTable = (table, className) => {
  let elements = table.getElementsByClassName(className);
  return elements;
};

export const chooseButtonsForRow = (table, index) => {
  let row = table.rows.item(index);

  let editBtn = row.getElementsByClassName("btn editbtn")[0];
  let archiveBtn = row.getElementsByClassName("btn archivebtn")[0];
  let deleteBtn = row.getElementsByClassName("btn deletebtn")[0];

  return [row, editBtn, archiveBtn, deleteBtn];
};
