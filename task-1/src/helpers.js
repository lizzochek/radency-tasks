"use strict";

//Buttons in rows code

const buttonInRow = `<button class="editbtn">  <i class="far fa-edit"></i></button><button class="btn archivebtn"><i class="fas fa-archive"></i></button><button class="btn deletebtn"><i class="far fa-trash-alt"></i></button>`;
const select = document.querySelector(".list");

const getDate = () => {
  let today = new Date();
  const month = today.toLocaleString("default", { month: "long" });
  return `${today.getDate()} ${month}, ${today.getFullYear()}`;
};

const getDatesFromString = (str) => {
  let datesArr = str.match(/\d{2}([\/.-])\d{2}\1\d{4}/g);
  if (!datesArr) return [];

  let resArr = datesArr.map((el) => el.replace(/-/g, "/"));
  return resArr.join(", ");
};

const getDataFromList = (listEl) => {
  return listEl.options[listEl.selectedIndex].text;
};

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

export const addRowToActive = (activeTable, archivedTable, input) => {
  let newRow = activeTable.insertRow(-1);

  let datesFromContent = getDatesFromString(input[1].value);

  newRow.insertCell(0).innerHTML = input[0].value;
  newRow.insertCell(1).innerHTML = getDate();
  newRow.insertCell(2).innerHTML = getDataFromList(select);
  newRow.insertCell(3).innerHTML = input[1].value;
  newRow.insertCell(4).innerHTML = datesFromContent;
  newRow.insertCell(5).insertAdjacentHTML("afterbegin", buttonInRow);

  let [rowActive, editBtnActive, archiveBtnActive, deleteBtnActive] =
    chooseButtonsForRow(activeTable, activeTable.rows.length - 1);

  addEventListeners(
    activeTable,
    archivedTable,
    rowActive,
    editBtnActive,
    archiveBtnActive,
    deleteBtnActive
  );
};

export const deleteAllRows = (activeTable) => {
  let rowCount = activeTable.rows.length;
  for (let i = rowCount - 1; i > 0; i--) {
    activeTable.deleteRow(i);
  }
};
