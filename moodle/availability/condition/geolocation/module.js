M.availability_geolocation = {};

M.availability_geolocation.allowed = false;
M.availability_geolocation.allowed_time = 0;
    
M.availability_geolocation.init_geolocation_params = function(Y, session_allowed, session_allowed_time) {
    M.availability_geolocation.allowed = session_allowed;
    if (M.availability_geolocation.allowed) {
        M.availability_geolocation.allowed_time = session_allowed_time;
    } else {
        M.availability_geolocation.allowed_time = 0;
    }
};

var branchesLocations = [

	//TEL-AVIV
	{lat:32.06966, lon:34.79576}, //Check Point Building ground floor (Web branch) – הסוללים 5 תל אביב
	{lat:32.06898, lon:34.79332}, //Google Campus – יגאל אלון 98 קומה 34
	{lat:32.06582, lon:34.78287}, //qSpark – Rubinstein Building menachem begin 37 and lincoln 20 , Tel Aviv
	{lat:32.06898, lon:34.79332}, //Klarna  – יגאל אלון 98 קומה 13
	{lat:32.11149, lon:34.80644}, //University –  orenstein building , Tel Aviv
	{lat:32.11337, lon:34.80671}, //University –  חיים לבנון 55 בניין שרייבר חדר 309
	{lat:32.110445, lon:34.804253}, //University –  (עודכן על ידי שירת ב15 לינואר 2018) אולם

	{lat:32.116100, lon:34.805975}, //University –  אולם לולה פקולטה לרפואה
	{lat:32.07545, lon:34.79495}, //IBM Trusteer –  ben yehuda and noh mozes 13 agish ravad building , Tel Aviv
	{lat:32.097233, lon:34.773854}, //Wix - ביתן 27, נמל תל אביב
	{lat:32.100759, lon:34.775041}, //Wix - זמני - ביתן 26, נמל תל אביב
	{lat:32.080214, lon:34.799483}, //IBM Trusteer –  שפע טל 1, תל אביב

        {lat:32.0639722, lon:34.7764387},//Soloto -רוטשילד 39 תל אביב

      

        //Dalit el Carmel
        {lat:32.6977572, lon:35.0471776},//Dalit el Carmel
	
	
	//RAMAT-GAN
	{lat:32.0729701, lon:34.8494046}, //Bar Ilan University - building 1105
	{lat:32.0884200, lon:34.8023060}, //Shenkar College of Engineering and Design - Habonim St 14, Ramat Gan, Israel
	
	//JERUSALEM
	{lat:31.77378, lon:35.21938}, //American Center – קרן היסוד 19
	{lat:31.80195, lon:35.20786}, //Cisco – קריית המדע 11 הר חוצבים
	{lat:31.77659, lon:35.19786}, //Hebrew University – העברית - גבעת רם
	{lat:31.79298, lon:35.24287}, //Hebrew University – העברית - ספרייה
	{lat:31.7858530, lon:35.1893090}, //הדפוס 9, ירושלים
	{lat:31.7856810, lon:35.1896400}, //הדפוס 7, ירושלים
	{lat:31.7928280, lon:35.2101410}, //מנחת יצחק 25 ירושלים - סניף חרדיות
	
	//BEER-SHEVA
	{lat:31.24869, lon:34.78942}, //SCE – רחוב ביאליק באר שבע
	{lat:30.85688, lon:34.78007}, //Ben Gurion University – בניין 35 חדר 1
	{lat:31.2526120, lon:31.2526120}, //Ben Gurion University – BEER SHEVA
	{lat:31.2617280, lon:34.8040304}, //Ben Gurion University – BEER SHEVA
	{lat:31.26172, lon:34.80420}, //Ben Gurion University – BEER SHEVA
	{lat:31.26072, lon:34.80359}, //Ben Gurion University – BEER SHEVA
	{lat:31.262250, lon:34.804361}, //Ben Gurion University – BEER SHEVA
	{lat:31.249806, lon:34.788278}, // SCE – רחוב ביאליק באר שבע- מיקום 2 
	{lat:31.264303, lon:34.812754}, // wework beer sheva
		
	
	//HAIFA
	{lat:32.77612, lon:35.02455}, //Technion - הפקולטה להנדסת חשמל בניין פישבך חדר 405-404
	{lat:32.7613648﻿, lon:35.0188130}, //Haifa University  בניין גייקובס חדר 506

	//MODIIN
	{lat:31.92055, lon:34.971}, //צלע ההר 1 
	{lat:31.912694, lon:35.011539}, // רחוב גינת האלה 13, מודיעין 

	
	//KFAR-SABA
	{lat:32.16301, lon:34.93094}, //עתיר ידע 8, כפר סבא - SanDisk
	
	//EILAT
	{lat:29.56905, lon:34.96097}, //Hub Eilat eltam park 3 , Eilat
	
	//HERZELIA
	{lat:32.17533, lon:34.83557}, //IDC –  נתן אלתרמן הרצליה בניין זלרטור
	{lat:32.15778, lon:34.80801}, //Microsoft Ventures –  שנקר 13 קומת קרקע
	{lat:32.1608307, lon:34.8080165}, //Akershtein Building - המנופים 9, הרצליה
	
	//REHOVOT
	{lat:31.90939, lon:34.80929}, //Weizmann Institute - de picciotto building
	{lat:31.912395, lon:34.809167}, //פרופ' הלל וחנן אופנהיימר 9, רחובות
	
	//SystemAdmins
 	{lat:31.8906630, lon:34.8281060}, //shirat's home
 	{lat:32.83793, lon:35.08969}, //sapir's home
 	{lat:32.09442, lon:34.80898}, //rony's home
 	{lat:31.68047, lon:35.14364}, //meir's home
	{lat:32.12120, lon:34.81551}, //lea's home
	{lat:32.179271, lon:34.910587}, //Sharon David's home


];


var defs = {
	minAccuarcy:0.002,
	metersMult:0.00001,
	digitsAfterComma:5
};

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

require(['jquery', 'jqueryui'], function($, jqui) {
    

    $(function () {
        var run_geocheck = function() {
            console.log('M.availability_geolocation.allowed: '+M.availability_geolocation.allowed+' M.availability_geolocation.allowed_time: '+M.availability_geolocation.allowed_time);
            checkPosition(function(isAllowed) {
                if (isAllowed) {
                    $.ajax({
                        //url: M.cfg.wwwroot + "/availability/condition/geolocation/get_geolocation.php?allowed=" + isAllowed
                        url: M.cfg.wwwroot + "/availability/condition/geolocation/set_session.php?allowed=" + isAllowed
                    }).done(function() {
                        location.reload();
                    });
                }
            });
        };
        
        if (!M.availability_geolocation.allowed || M.availability_geolocation.allowed_time < ($.now()/1000 - (3 * 60 * 60))) {
            run_geocheck();
            if (!M.availability_geolocation.allowed) {
                setInterval(run_geocheck, 60000);
            }
        }
    });
});
