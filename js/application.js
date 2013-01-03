/*
	Global Personal Health Record
	
	Copyright (c) 2012-2013 Michael C. Hogan
	
	URL: http://www.globalphr.com/
	
	License: Coming soon. For now, all rights reserved.
	
	// The word "QR Code" is registered trademark of 
	// DENSO WAVE INCORPORATED
	// http://www.denso-wave.com/qrcode/faqpatent-e.html
	
*/
$(document).on("pageinit", function(event){
	// custom code goes here

});

function clickCounter() {
	
	sessionStorage.healthRecordJSONtext = JSON.stringify(healthRecord);
		
	if(typeof(Storage)!=="undefined")
	{
		if (sessionStorage.clickcount)
		{
			sessionStorage.clickcount=Number(sessionStorage.clickcount)+1;
		}
		else
		{
			sessionStorage.clickcount=1;
		}
		
		document.getElementById("result").innerHTML="You have clicked the button " + sessionStorage.clickcount + " time(s) in this session.";
	}
	else
	{
		document.getElementById("result").innerHTML="Sorry, your browser does not support web storage...";
	}
	
}

var healthRecord = {
 "userNumber": 11111111,
 "userName": "John Doe",
 "birthdate": 11111,
 "bloodType": "A",
 "occupation": "Engineer",
 "vaccines":{
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

function shareRecord() {
	
	if(typeof(Storage)!=="undefined")
	{
		if (sessionStorage.healthRecordJSONtext)
		{
			document.getElementById("result").innerHTML=sessionStorage.healthRecordJSONtext;
		}
		else
		{
			document.getElementById("result").innerHTML="Sorry, no record is available";
		}
	}
		
}