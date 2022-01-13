"use strict";

export const getDate = () => {
  let today = new Date();
  const month = today.toLocaleString("default", { month: "long" });
  return `${today.getDate()} ${month}, ${today.getFullYear()}`;
};

export const getDatesFromString = (str) => {
  let datesArr = str.match(/\d{2}([\/.-])\d{2}\1\d{4}/g);
  if (!datesArr) return [];

  let resArr = datesArr.map((el) => el.replace(/-/g, "/"));
  return resArr.join(", ");
};

export const getDataFromList = (listEl) => {
  return listEl.options[listEl.selectedIndex].text;
};

export const deleteAllRows = (activeTable) => {
  let rowCount = activeTable.rows.length;
  for (let i = rowCount - 1; i > 0; i--) {
    activeTable.deleteRow(i);
  }
};

export const toggleTable = (tableOne, tableTwo, button) => {
  if (tableOne.style.display === "none") {
    tableOne.style.display = "";
    tableTwo.style.display = "none";
    button.innerText = "See archived tasks";
  } else {
    tableTwo.style.display = "";
    tableOne.style.display = "none";
    button.innerText = "See unarchived tasks";
  }
};
