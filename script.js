//your JS code here. If required.
window.onload=function(){getTime();}  
function getTime(){  
var today=new Date(); 
var date=today.getDate();
var month=today.getMonth();
var year=today.getFullYear();
var hours=today.getHours();
var minutes=today.getMinutes();
var seconds=today.getSeconds();
var version="AM";
	if(hours>=12)
	{
		version="PM"
	}
document.getElementById('timer').innerHTML=(month+"/"+date+"/"+year+", "+hours+":"+minutes+":"+seconds+" "+version) ;
setTimeout(function(){getTime()},1000);  
}  
//setInterval("getTime()",1000);//another way  
function checkTime(i){  
if (i<10){  
  i="0" + i;  
 }  
return i;  
}  