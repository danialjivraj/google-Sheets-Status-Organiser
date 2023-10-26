let tabs = {'CALL BACK': 'CALL BACK', 'INTERESTED': 'INTERESTED', 'NOT INTERESTED': 'NOT INTERESTED', 'NEXT WEEK' : 'NEXT WEEK'};

function onOpen() {
  let ui = SpreadsheetApp.getUi();
  ui.createMenu('Script')
    .addItem('Move Rows', 'moveRows')
    .addItem('Move Rows in All Sheets', 'moveRowsInAllSheets')
    .addToUi();
}

function moveRows() {
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let currentSheet = ss.getActiveSheet();
  let currentSheetName = currentSheet.getName();
  let dataRange = currentSheet.getDataRange();
  let data = dataRange.getValues();

  let callBackSheet = ss.getSheetByName('CALL BACK') || ss.insertSheet('CALL BACK');
  let interestedSheet = ss.getSheetByName('INTERESTED') || ss.insertSheet('INTERESTED');
  let notInterestedSheet = ss.getSheetByName('NOT INTERESTED') || ss.insertSheet('NOT INTERESTED');
  let nextWeekSheet = ss.getSheetByName('NEXT WEEK') || ss.insertSheet('NEXT WEEK');

  let rowsToDelete = [];

  for (let i = 0; i < data.length; i++) {
    let status = data[i][0];
    let targetSheet = ss.getSheetByName(tabs[status]);

    if (targetSheet && currentSheetName !== targetSheet.getName()) {
      targetSheet.appendRow(data[i]);
      rowsToDelete.push(i + 1);
    }
  }

  // Delete rows in reverse order
  rowsToDelete.reverse();
  rowsToDelete.forEach(row => currentSheet.deleteRow(row));
}

function moveRowsInAllSheets() {
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheets = ss.getSheets();

  for (let sheet of sheets) {
    let currentSheetName = sheet.getName();
    let dataRange = sheet.getDataRange();
    let data = dataRange.getValues();

    let callBackSheet = ss.getSheetByName('CALL BACK') || ss.insertSheet('CALL BACK');
    let interestedSheet = ss.getSheetByName('INTERESTED') || ss.insertSheet('INTERESTED');
    let notInterestedSheet = ss.getSheetByName('NOT INTERESTED') || ss.insertSheet('NOT INTERESTED');
    let nextWeekSheet = ss.getSheetByName('NEXT WEEK') || ss.insertSheet('NEXT WEEK');

    let rowsToDelete = [];

    for (let i = 0; i < data.length; i++) {
      let status = data[i][0];
      let targetSheet = ss.getSheetByName(tabs[status]);

      if (targetSheet && currentSheetName !== targetSheet.getName()) {
        targetSheet.appendRow(data[i]);
        rowsToDelete.push(i + 1);
      }
    }

    // Delete rows in reverse order
    rowsToDelete.reverse();
    rowsToDelete.forEach(row => sheet.deleteRow(row));
  }
}
