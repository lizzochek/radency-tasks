"use strict";

//Buttons in rows code
const buttonInRow =
  '<button class="editbtn">  <i class="far fa-edit"></i></button><button class="btn archivebtn"><i class="fas fa-archive"></i></button><button class="btn deletebtn"><i class="far fa-trash-alt"></i></button>';
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

export const addRow = (table, input) => {
  let newRow = table.insertRow(-1);

  let datesFromContent = getDatesFromString(input[1].value);

  newRow.insertCell(0).innerHTML = input[0].value;
  newRow.insertCell(1).innerHTML = getDate();
  newRow.insertCell(2).innerHTML = getDataFromList(select);
  newRow.insertCell(3).innerHTML = input[1].value;
  newRow.insertCell(4).innerHTML = datesFromContent;

  newRow.insertCell(5).insertAdjacentHTML("afterbegin", buttonInRow);
};
