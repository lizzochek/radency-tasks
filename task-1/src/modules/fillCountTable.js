"use strict";

const activeTable = document.querySelector(".tableActive");
const archivedTable = document.querySelector(".tableArchived");
const countTable = document.querySelector(".tableCount");

export const fillCountTable = () => {
  let activeTasks = countNotesCategories(activeTable);
  let archivedTasks = countNotesCategories(archivedTable);

  for (let i = 1; i < countTable.rows.length; i++) {
    let row = countTable.rows[i];
    let cells = row.getElementsByTagName("td");
    cells[1].textContent = activeTasks[i - 1];
    cells[2].textContent = archivedTasks[i - 1];
  }
};

const countNotesCategories = (table) => {
  let array = Array(3).fill(0);
  for (let i = 1; i < table.rows.length; i++) {
    let row = table.rows[i];
    let content = row.getElementsByTagName("td")[2].textContent;
    switch (content) {
      case "Task":
        array[0]++;
        break;
      case "Idea":
        array[1]++;
        break;
      case "Random thought":
        array[2]++;
        break;
    }
  }

  return array;
};
