"use strict";

import { chooseButtonsForRow } from "./chooseBtns.js";
import { addEventListeners } from "./addEventListeners.js";
import { getDate, getDatesFromString, getDataFromList } from "./helpers.js";

const buttonInRow = `<button class="btn editbtn">  <i class="far fa-edit"></i></button><button class="btn archivebtn"><i class="fas fa-archive"></i></button><button class="btn deletebtn"><i class="far fa-trash-alt"></i></button>`;
const select = document.querySelector(".list");

export const addRowToActive = (activeTable, archivedTable, input, rowIndex) => {
  let newRow = activeTable.insertRow(-1);

  let datesFromContent = getDatesFromString(input[1].value);

  newRow.insertCell(0).innerHTML = input[0].value;
  newRow.insertCell(1).innerHTML = getDate();
  newRow.insertCell(2).innerHTML = getDataFromList(select);
  newRow.insertCell(3).innerHTML = input[1].value;
  newRow.insertCell(4).innerHTML = datesFromContent;
  newRow.insertCell(5).insertAdjacentHTML("afterbegin", buttonInRow);

  let [rowActive, editBtnActive, archiveBtnActive, deleteBtnActive] =
    chooseButtonsForRow(activeTable, rowIndex);

  addEventListeners(
    activeTable,
    archivedTable,
    rowActive,
    editBtnActive,
    archiveBtnActive,
    deleteBtnActive
  );
};
