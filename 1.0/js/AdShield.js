jQuery(document).ready(function ($) {
// Edit here for AdsShield COnfiguration
var ASVarCookie = 'adsShield'; // Cookie Name for Ads Shield
var ASBlock  = 1; // How long ads will be hidden (in days)
var ASClick  = 3; // Max Click Number before hiding
var ASTag   = '.adsShield'; // DIV Tag Class name
 
// Edit should stop here unless you know what you're doing
var ASHoverAds=false;if(ASMaxClick(ASVarCookie,ASClick)){$(ASTag).hide('fast');};$(ASTag).bind('mouseover',function(){ASHoverAds=true;}).bind('mouseout',function(){ASHoverAds=false;});$(window).on('beforeunload',function(){if(ASHoverAds){if(ASMaxClick(ASVarCookie,ASClick)){$(ASTag).hide('fast');}else{ASSetCookieAds(ASVarCookie,ASBlock);};};});});function ASSetCookie(ASCName,value,exdays){var exdate=new Date();exdate.setDate(exdate.getDate()+exdays);var c_value=escape(value)+((exdays==0)?";path=/":"; expires="+exdate.toUTCString())+";path=/";document.cookie=ASCName+"="+c_value;};function ASGetCookie(ASCName){var i,x,y,ASCookies=document.cookie.split(";");for(i=0;i<ASCookies.length;i++){x=ASCookies[i].substr(0,ASCookies[i].indexOf("="));y=ASCookies[i].substr(ASCookies[i].indexOf("=")+1);x=x.replace(/^\s+|\s+$/g,"");if(x==ASCName){return unescape(y);};};};function ASSetCookieAds(ASCookieName,ASDays){var ASTheCookie=ASGetCookie(ASCookieName);if((ASTheCookie!=undefined)&&(ASTheCookie!='')){ASTheCookieInt=parseInt(ASTheCookie)+1;ASSetCookie(ASCookieName,ASTheCookieInt.toString(),0);}else{ASSetCookie(ASCookieName,'1',ASDays);};};function ASMaxClick(ASCookieName,bK){var ASTheCookie=ASGetCookie(ASCookieName);if((ASTheCookie!=undefined)&&(parseInt(ASTheCookie)>=bK)){return true;}else{return false;};};
