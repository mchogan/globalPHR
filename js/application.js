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

function clickCounter()
{
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