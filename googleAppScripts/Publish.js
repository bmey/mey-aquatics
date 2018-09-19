// AUTO FIRING FUNCTION
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Publish to Database")
    .addItem("Publish to database", "publish")
    .addItem("Test publish", "testPublish")
    .addToUi();
}

function buildJsonOutput() {
  var speciesSettings = initSettings_("species settings");
  var stockSettings = initSettings_("stock settings");
  var pictureSettings = initSettings_("pictures settings");
  var species = JSON.parse(getJsonFromSheet(speciesSettings));
  var stock = JSON.parse(getJsonFromSheet(stockSettings));
  var pictures = JSON.parse(getJsonFromSheet(pictureSettings));
  var model = {
    fish: filterAndCombineLists(species, stock, pictures),
    postDate: new Date().toUTCString(),
  };

  if (speciesSettings.options) {
    model.options = JSON.parse(speciesSettings.options);
  }

  return model;
}

// https://github.com/Spencer-Easton/Apps-Script-GSApp-Library/blob/master/example.gs
function getOAuthToken() {
  var serviceAccount = JSON.parse(PropertiesService.getScriptProperties().getProperty("service_account"));
  var privateRsaKey = serviceAccount.private_key;
  var clientEmail = serviceAccount.client_email;
  var scopesToAuthenticate = [
    "https://www.googleapis.com/auth/firebase.database",
    "https://www.googleapis.com/auth/userinfo.email",
  ];
  var serverToken = new GSApp.init(privateRsaKey, scopesToAuthenticate, clientEmail);

  serverToken.addUser(clientEmail).requestToken();
  return serverToken.getToken(clientEmail).token;
}

function testPublish() {
  var output = buildJsonOutput();
  SpreadsheetApp.getUi().alert(JSON.stringify(output));
}

function publish() {
  var token = getOAuthToken();
  var data = buildJsonOutput();
  var options = {
    method: "PUT",
    payload: JSON.stringify(data),
  };
  var url = "https://mey-aquatics.firebaseio.com/data.json?access_token=" + token;
  UrlFetchApp.fetch(url, options).getContentText();
}

function validateAndTranslateHeader(headerSettings, headerValue) {
  if (!!headerSettings) {
    return headerSettings[headerValue];
  }

  return headerValue;
}

function getJsonFromSheet(settings) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(settings.cmsSheetName);

  return buildJSON_(sheet, settings);
}

function buildJSON_(sheet, settings) {
  var lastColumn = sheet.getLastColumn(),
    lastRow = sheet.getLastRow(),
    firstHeaderRow = settings.firstHeaderRow,
    firstContentRow = firstHeaderRow + 1,
    numberOfHeaders = sheet.getLastColumn(),
    headerRange = sheet.getRange(firstHeaderRow, 1, 1, numberOfHeaders),
    headerValues = headerRange.getValues()[0];

  var data = [];
  for (var row = firstContentRow; row <= lastRow; row++) {
    var rowRange = sheet.getRange(row, 1, 1, lastColumn),
      rowValues = rowRange.getValues()[0];

    var dataObj = new Object();
    for (var i = 0; i < rowValues.length; i++) {
      var currentHeader = headerValues[i],
        currentColumnValue = rowValues[i] || "",
        validHeader = validateAndTranslateHeader(settings.headers, currentHeader);

      if (!!validHeader) {
        dataObj[validHeader] = currentColumnValue;
      }
    }

    data.push(dataObj);
  }

  return JSON.stringify(data);
}

function initSettings_(sheetName) {
  /**
      Build the settings object from the "SETTINGS" sheet
      */
  // Create an empty settings object
  var s = new Object();

  // Get the SETTINGS sheet
  var settingsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);

  // A nasty hard coded value for where to look for custom settings
  var settingsA1Notation = "A5:C";

  // Get the values of the range of cells containing settings
  var settingsValues = settingsSheet.getRange(settingsA1Notation).getValues();

  for (var i = 0; i < settingsValues.length; i++) {
    // For each row in the settings, create a key in our settings object (s) using
    // the first value in the row (e.g. endpoint) with a value of the third in the row (e.g. "http://myendpoint.com")
    var sv = settingsValues[i];
    // If there is a key name in the settings row...
    if (!!sv[0]) {
      // Custom header settings need to be handled slightly different
      if (sv[0] === "headers" && !!sv[2]) {
        sv[2] = JSON.parse(sv[2]);
      }
      // ... create a key with that value in the settings object
      s[sv[0]] = sv[2];
    }
  }

  return s;
}
