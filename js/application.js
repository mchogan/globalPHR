/*
  Global Personal Health Record
  
  Copyright (c) 2012-2013 Michael C. Hogan
  
  URL: http://www.globalphr.com/
  
  License: Coming soon. For now, all rights reserved.
  
  // The word "QR Code" is registered trademark of 
  // DENSO WAVE INCORPORATED
  // http://www.denso-wave.com/qrcode/faqpatent-e.html
  
*/

// Initialize application
$(document).on("pageinit", function(event) {
  // custom code goes here
  // Disable inputs until user chooses to edit page
  //$("input,textarea,select,button").prop('disabled', true);
});

// Initialize #share feature page
$(document).delegate("#share", "pageinit", function() {
  //alert('A page with an id of "share" was just created by jQuery Mobile!');
  //shareRecord();
});


function setUpThisPage() {
  //Find the last slash character, return the string following the slash
  var thisFile = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);

  if (thisFile === 'share.html') {
    shareRecord();
  }
}

// Get page

function whatIsThisFile() {
  //Find the last slash character, return the string following the slash
  var filename = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
  return filename;
}

// ----------------------------------------------------------------------
/* clickCounter */
// ----------------------------------------------------------------------

function clickCounter() {

  sessionStorage.healthRecordJSONtext = JSON.stringify(healthRecord);

  if (typeof(Storage) !== "undefined") {
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
    } else {
      sessionStorage.clickcount = 1;
    }

    document.getElementById("result").innerHTML = "You have clicked the button " + sessionStorage.clickcount + " time(s) in this session.";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }

}

// ----------------------------------------------------------------------
/* healthRecord data type */
//
// limited to a maximum of 520 bytes (characters)
//
// ----------------------------------------------------------------------
var healthRecord = {
  "userNumber": 11111111,
  "userName": "John Doe",
  "birthdate": 11111,
  "bloodType": "A",
  "occupation": "Engineer",
  "vaccines": {
    "tetanus": "11111",
    "hepA": "11111",
    "hepB": "11111",
    "hepC": 11111,
    "tb": 11111,
    "polio": 11111,
    "vacA": 11111,
    "vacB": 11111
  },
  "allergens": "aaaaaaaa",
  "conditions": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "meds": "aaa"
}

// A QR code can hold 520 bytes (ascii characters)
var loremIpsumDummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida, dolor a tincidunt commodo, nibh neque fringilla erat, in mollis lorem est scelerisque augue. Fusce pretium elementum nibh, sit amet bibendum lacus egestas a. Donec nisl metus, auctor placerat dapibus dapibus, sodales vitae purus. Nullam vehicula, sem in fermentum lacinia, justo justo dapibus ipsum, nec blandit quam erat non est. Duis facilisis urna diam, quis adipiscing nulla. Pellentesque ligula turpis, sodales at malesuada non, adipiscings.";


// ----------------------------------------------------------------------
/* shareRecord() */
// ----------------------------------------------------------------------

function shareRecord() {

  if (typeof(Storage) !== "undefined") {
    if (sessionStorage.healthRecordJSONtext) {
      if (qrToShow) {
        // Do nothing
      } else {
        var qrToShow = sessionStorage.healthRecordJSONtext;
        // var qrToShow = loremIpsumDummyText;
        $('#result').append(showQRCode(qrToShow));
      }
    } else {
      document.getElementById("result").innerHTML = "Sorry, no record is available";
    }
  }

}
