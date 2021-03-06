var branchesLocations = [
	//TEL-AVIV
	{lat:32.06966, lon:34.79576}, //Check Point Building ground floor (Web branch) – הסוללים 5 תל אביב
	{lat:32.06898, lon:34.79332}, //Google Campus – יגאל אלון 98 קומה 34
	{lat:32.06582, lon:34.78287}, //qSpark – Rubinstein Building menachem begin 37 and lincoln 20 , Tel Aviv
	{lat:32.06898, lon:34.79332}, //Klarna  – יגאל אלון 98 קומה 13
	{lat:32.11149, lon:34.80644}, //University –  orenstein building , Tel Aviv
	{lat:32.11337, lon:34.80671}, //University –  חיים לבנון 55 בניין שרייבר חדר 309
	{lat:32.07545, lon:34.79495}, //IBM Trusteer –  ben yehuda and noh mozes 13 agish ravad building , Tel Aviv
	
	//JERUSALEM
	{lat:31.77378, lon:35.21938}, //American Center – קרן היסוד 19
	{lat:31.80195, lon:35.20786}, //Cisco – קריית המדע 11 הר חוצבים
	{lat:31.79279, lon:35.24613}, //Hebrew University – העברית - גבעת רם
	{lat:31.79298, lon:35.24287}, //Hebrew University – העברית - ספרייה
	
	//BEER-SHEVA
	{lat:31.24869, lon:34.78942}, //SCE – רחוב ביאליק באר שבע
	{lat:30.85688, lon:34.78007}, //Ben Gurion University – בניין 35 חדר 1
	{lat:31.2526120, lon:31.2526120}, //Ben Gurion University – BEER SHEVA
	{lat:31.2617280, lon:34.8040304}, //Ben Gurion University – BEER SHEVA
	{lat:31.2615977, lon:34.8039708}, //Ben Gurion University – BEER SHEVA
	{lat:31.26172, lon:34.80414}, //Ben Gurion University – BEER SHEVA
	
	
	//HAIFA
	{lat:32.77612, lon:35.02455}, //Technion - הפקולטה להנדסת חשמל בניין פישבך חדר 405-404
	{lat:32.7613648﻿, lon:35.0188130}, //Haifa University  בניין גייקובס חדר 506

	//MODIIN
	{lat:31.92055, lon:34.971}, //צלע ההר 1 
	
	//EILAT
	{lat:29.56905, lon:34.96097}, //Hub Eilat eltam park 3 , Eilat
	
	//HERZELIA
	{lat:32.17533, lon:34.83557}, //IDC –  נתן אלתרמן הרצליה בניין זלרטור
	{lat:32.15778, lon:34.80801}, //Microsoft Ventures –  שנקר 13 קומת קרקע
	
	//REHOVOT
	{lat:31.90939, lon:34.80929}, //Weizmann Institute - de picciotto bilding
	
	//SystemAdmins
 	{lat:31.8906630, lon:34.8281060}, //??
 	{lat:32.83793, lon:35.08969}, //sapirs home
 	{lat:32.07017, lon:34.82832}, //tamis home
 	{lat:32.09442, lon:34.80898}, //ronys home
	
];


var defs = {
	minAccuarcy:0.002,
	metersMult:0.00001,
	digitsAfterComma:5
};


$(function(){
	restrictTopicsCallback(false);
	checkPosition(restrictTopicsCallback);
	navigator.permissions.query({name:'geolocation'}).then(function(permissionStatus) {
  		permissionStatus.onchange = function() {
    			checkPosition(restrictTopicsCallback);
  		};
	});
}); 

function checkPosition(callback) {
    navigator.geolocation.getCurrentPosition(
		function (position) {
			var lat = parseFloat(position.coords.latitude.toFixed(defs.digitsAfterComma));
			var lon = parseFloat(position.coords.longitude.toFixed(defs.digitsAfterComma));
			var accuracy = position.coords.accuracy * defs.metersMult;
			var isAllowed = false;
			if(accuracy < defs.minAccuarcy)
			{
				accuracy += defs.minAccuarcy;
			}
			for(var i = 0; i < branchesLocations.length; i++)
			{
				if(addAccuracy(branchesLocations[i].lat,lat,accuracy) && addAccuracy(branchesLocations[i].lon,lon,accuracy)){
					isAllowed =  true;
					break;
				}

			}
			callback(isAllowed);
		},
function (error) { 
	console.log("error.code= " + error.code);	
  if (error.code == error.PERMISSION_DENIED)
		var topics = $('.topics').children();
		var currSection;
		for(var i = 1; i < topics.length; i++)
		{
			disableTopicLink(i);			
		}
});
	
}

function addAccuracy(branchPoint,userPoint,accuracy){
		return ((branchPoint <= userPoint + accuracy)&&(branchPoint >= userPoint - accuracy));
}

function restrictTopicsCallback(isAllowed){
	var topics = $('.topics').children();
	
	if(!isAllowed)
	{
		console.log('wrong');

		for(var i = 1; i < topics.length; i++)
		{
			disableTopicLink(i);			
		}

	}
	else{
		
		for(var i = 1; i < topics.length; i++)
		{
			currSection = $('#section-'+i+' .section .activityinstance');
		        currSection.find("a").css("pointer-events", "auto");
			currSection.parent().find('.unavailableLocation').remove();
		}

	}

}

function disableTopicLink(linkID){
	var currSection;
	currSection = $('#section-'+linkID+' .section .activityinstance');
	currSection.find("a").css("pointer-events", "none");
	if(currSection.parent().find('.unavailableLocation').length == 0)
	{
	    currSection.parent().append('<div class="unavailableLocation" style="color:red">Unavailable outside your branch</div>');		
	}

}

