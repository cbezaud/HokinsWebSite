<!--
 
waJSQuery(function(){
waJSQuery.fn.extend({
disableSelection:function(){
this.each(function(){
this.onselectstart=function(){return false;};
this.unselectable="on";
waJSQuery(this).css('-moz-user-select','none');
waJSQuery(this).css('-webkit-user-select','none');
});
}
});
waJSQuery.fn.extend({everyTime:function(interval,label,fn,times,belay){return this.each(function(){waJSQuery.timer.add(this,interval,label,fn,times,belay);});},oneTime:function(interval,label,fn){return this.each(function(){waJSQuery.timer.add(this,interval,label,fn,1);});},stopTime:function(label,fn){return this.each(function(){waJSQuery.timer.remove(this,label,fn);});}});waJSQuery.extend({timer:{guid:1,global:{},regex:/^([0-9]+)\s*(.*s)?$/,powers:{
'ms':1,'cs':10,'ds':100,'s':1000,'das':10000,'hs':100000,'ks':1000000},timeParse:function(value){if(value==undefined||value==null) return null;var result=this.regex.exec(waJSQuery.trim(value.toString()));if(result[2]){var num=parseInt(result[1],10);var mult=this.powers[result[2]]||1;return num*mult;}else{return value;}},add:function(element,interval,label,fn,times,belay){var counter=0;if(waJSQuery.isFunction(label)){if(!times) times=fn;fn=label;label=interval;}interval=waJSQuery.timer.timeParse(interval);if(typeof interval!='number'||isNaN(interval)||interval<=0) return;if(times&&times.constructor!=Number){belay=!!times;times=0;}times=times||0;belay=belay||false;if(!element.$timers) element.$timers={};if(!element.$timers[label]) element.$timers[label]={};fn.$timerID=fn.$timerID||this.guid++;var handler=function(){if(belay&&this.inProgress) return;this.inProgress=true;if((++counter>times&&times!==0)||fn.call(element,counter)===false) waJSQuery.timer.remove(element,label,fn);this.inProgress=false;};handler.$timerID=fn.$timerID;if(!element.$timers[label][fn.$timerID]) element.$timers[label][fn.$timerID]=window.setInterval(handler,interval);if(!this.global[label]) this.global[label]=[];this.global[label].push(element);},remove:function(element,label,fn){var timers=element.$timers,ret;if(timers){if(!label){for(label in timers) this.remove(element,label,fn);}else if(timers[label]){if(fn){if(fn.$timerID){window.clearInterval(timers[label][fn.$timerID]);delete timers[label][fn.$timerID];}}else{for(var fn in timers[label]){window.clearInterval(timers[label][fn]);delete timers[label][fn];}}for(ret in timers[label]) break;if(!ret){ret=null;delete timers[label];}}for(ret in timers) break;if(!ret) element.$timers=null;}}}});if(waJSQuery.browser.msie) waJSQuery(window).one("unload",function(){var global=waJSQuery.timer.global;for(var label in global){var els=global[label],i=els.length;while(--i) waJSQuery.timer.remove(els[i],label);}});
if(document.internalPreview!=true)
{
waJSQuery(".wa-market-link").each(function()
{
var jXIBj=waJSQuery(this);
jXIBj.css("cursor","pointer") 
jXIBj.click(function()
{
javascript:WA_showMarketCart() 
});
});
}
});


function waParseCleanStringJSON(s)
{
var PxPbS="{"
var uYsRI="}"
var AiXsa=""
var c;
for(var i=0;i<s.length;i++)
{
c=s.charAt(i)
if(c=="\"")
{
do
{
i++;
c=s.charAt(i)
}
while(c!="\"")
}
if(c==PxPbS)
{
var WRGUT=0;
var cVaVK=true;
var mMvFR=false;
do
{
cVaVK=true;
i++;
c=s.charAt(i)
if((mMvFR==false)&&(c=="\""))
{
mMvFR=true;
}
else
if((mMvFR==true)&&(c=="\""))
{
mMvFR=false;
}
if(mMvFR==false)
{
if(c==PxPbS)
{
WRGUT++;
}
if((c!=uYsRI)||(WRGUT!=0))
{
AiXsa+=c;
}
if(WRGUT>0)
if(c==uYsRI)
{
WRGUT--;
cVaVK=false
}
}
else
{
AiXsa+=c;
}
}
while((cVaVK==false)||(c!=uYsRI)||(WRGUT!=0))
break;
}
}
AiXsa=PxPbS+AiXsa+uYsRI 
try{
return waJSQuery.parseJSON(AiXsa);
}
catch(e){
}
return null;
}
function waLoadGoogleFonts()
{
var wf=document.createElement('script');
wf.src=('https:'==document.location.protocol?'https':'http')+'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
wf.type='text/javascript';
wf.async='true';
var s=document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(wf,s);
}
var BrowserDetect={
init:function(){
this.browser=this.searchString(this.dataBrowser)||"An unknown browser";
this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";
this.OS=this.searchString(this.dataOS)||"an unknown OS";
},searchString:function(data){
for(var i=0;i<data.length;i++){
var dataString=data[i].string;
var dataProp=data[i].prop;
this.versionSearchString=data[i].versionSearch||data[i].identity;
if(dataString){
if(dataString.indexOf(data[i].subString)!=-1)
return data[i].identity;
}
else if(dataProp)
return data[i].identity;
}
},searchVersion:function(dataString){
var index=dataString.indexOf(this.versionSearchString);
if(index==-1) return;
return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
},dataBrowser:[
{
string:navigator.userAgent,subString:"Chrome",identity:"Chrome"
},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"
},{
string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"
},{
prop:window.opera,identity:"Opera",versionSearch:"Version"
},{
string:navigator.vendor,subString:"iCab",identity:"iCab"
},{
string:navigator.vendor,subString:"KDE",identity:"Konqueror"
},{
string:navigator.userAgent,subString:"Firefox",identity:"Firefox"
},{
string:navigator.vendor,subString:"Camino",identity:"Camino"
},{
string:navigator.userAgent,subString:"Netscape",identity:"Netscape"
},{
string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"
},{
string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"
},{
string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"
}
],dataOS:[
{
string:navigator.platform,subString:"Win",identity:"Windows"
},{
string:navigator.platform,subString:"Mac",identity:"Mac"
},{
string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"
},{
string:navigator.platform,subString:"Linux",identity:"Linux"
}
]
};
BrowserDetect.init();
function RGBColor(vAWtm)
{
this.ok=false;this.a=1.0;
if(vAWtm.charAt(0)=='#'){vAWtm=vAWtm.substr(1);}
vAWtm=vAWtm.replace(/ /g,'');
vAWtm=vAWtm.toLowerCase();
var jYJtj=[
{re:/^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,2}\.*\d{0,2})\)$/,_process:function(bits){return [ parseInt(bits[1]),parseInt(bits[2]),parseInt(bits[3]),parseFloat(""+bits[4]) ];}},{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,_process:function(bits){return [ parseInt(bits[1]),parseInt(bits[2]),parseInt(bits[3])];}},{re:/^(\w{2})(\w{2})(\w{2})(\w{2})$/,_process:function(bits){return [ parseInt(bits[1],16),parseInt(bits[2],16),parseInt(bits[3],16),Math.round(parseInt(bits[4],16)*100/255)/100 ];}},{re:/^(\w{2})(\w{2})(\w{2})$/,_process:function(bits){return [ parseInt(bits[1],16),parseInt(bits[2],16),parseInt(bits[3],16) ];}}
];
for(var i=0;i<jYJtj.length;i++){
var oRgFa=jYJtj[i].re;
var IFbWL=jYJtj[i]._process;
var tSDCO=oRgFa.exec(vAWtm);
if(tSDCO){
var xqtvD=IFbWL(tSDCO);
this.r=xqtvD[0];this.g=xqtvD[1];this.b=xqtvD[2];this.a=xqtvD[3];
this.ok=true;
}
}
this.r=(this.r<0||isNaN(this.r))?0:((this.r>255)?255:this.r);
this.g=(this.g<0||isNaN(this.g))?0:((this.g>255)?255:this.g);
this.b=(this.b<0||isNaN(this.b))?0:((this.b>255)?255:this.b);
this.a=(this.a>1||isNaN(this.a))?1:((this.a<0)?0:this.a);
this.toRGB=function()
{
if(this.a==1)return 'rgb('+this.r+', '+this.g+', '+this.b+')';
return 'rgba('+this.r+', '+this.g+', '+this.b+','+this.a+')';
}
this.toRGB_opaque=function()
{
return 'rgb('+this.r+', '+this.g+', '+this.b+')';
}
this.eNVBF=function(ilRtQ)
{
if(ilRtQ.length==1)ilRtQ="0"+ilRtQ
return ilRtQ
}
this.toHexaOpaqueColor=function()
{
return  "#"+this.eNVBF(this.r.toString(16))+this.eNVBF(this.g.toString(16))+this.eNVBF(this.b.toString(16));
}
}
function compliantColor(wiOPV)
{
if(isMSIE_lower_than_ie9())
{
if(wiOPV=="") return "";
if(wiOPV=="transparent") return "";
var PVvES=new RGBColor(wiOPV)
if(PVvES.a==0) return ""
return PVvES.toHexaOpaqueColor();
}
return wiOPV;
}
function isProbablyRobot()
{
return BrowserDetect.browser.length==0
}
function isMSIE()
{
return BrowserDetect.browser=="Explorer"
}
function isFirefox()
{
return BrowserDetect.browser=="Firefox" 
}
function isChrome()
{
return BrowserDetect.browser=="Chrome"
}
function isWindowsOS()
{
if(BrowserDetect.OS.match(/windows/i)) return true;
return false;
}
function isMSIE8()
{
if((BrowserDetect.browser=="Explorer")&&(BrowserDetect.version==8))
{
return true;
}
return false;
}
function isMSIE_lower_than_ie9()
{
if(isMSIE())
{
if(document.documentMode)
{
if(document.documentMode>=9)
{
return false;
}
}
return true;
}
return false;
}
function isMSIE_higher_than_ie8()
{
if(isMSIE())
{
if(document.documentMode)
{
if(document.documentMode>=9)
{
return true;
}
}
return false;
}
return false;
}
function isWebKit()
{
if(navigator.userAgent.match(/webkit/i)) return true;
return false;
}
function isAndroidMobile()
{
if(navigator.userAgent.match(/android/i)) return true;
return false;
}
function isMobileBrowser()
{
return isAppleMobile()||isAndroidMobile();
}
function isChrome()
{
if(navigator.userAgent.match(/Chrome/i))
return true;
return false;
}
function isAppleMobile()
{
return isIPhone()||isIPad()
}
function isIPad()
{
if(navigator.userAgent.match(/iPad/i))
return true;
return false;
}
function isIPhone()
{
if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i))
return true;
return false;
}
function extractNum(st)
{
var len=st.length
if((len>0)&&(st.substring(len-2,len)=="px"))
{
return wa_evaluate(st.substring(0,len-2))
}
return 0;
}
function waJSONLinkToHref(jXIBj)
{
var ilRtQ=""
var ltmcT=jXIBj.url
var kqZmB=Translator.m_lang_for_filename
if(kqZmB.length>0)kqZmB="_"+kqZmB
ltmcT=ltmcT.replace(/@lng@/g,kqZmB)
var mUVCd=jXIBj.js
if(mUVCd==undefined)mUVCd=""
ilRtQ+="href=\""+ltmcT+"\" "
if(jXIBj.open==1)
{
ilRtQ+="target="
ilRtQ+="_blank "
}
if(mUVCd.length>0)
{
ilRtQ+="onclick=waLaunchFunction(function(){"+mUVCd+"}) "
}
return ilRtQ;
}
function waJSONLinkToOnClick(jXIBj)
{
var ilRtQ=""
var ltmcT=jXIBj.url
var kqZmB=Translator.m_lang_for_filename
if(kqZmB.length>0)kqZmB="_"+kqZmB
ltmcT=ltmcT.replace(/@lng@/g,kqZmB)
var KCZUL="";
if(jXIBj.open==1)
{
KCZUL="_blank"
}
var mUVCd=jXIBj.js
if(mUVCd==undefined)mUVCd=""
mUVCd=mUVCd.replace(/\"/g,"&quot;")
ilRtQ+="onclick=\"waOnClick('"+ltmcT+"',{'targ':'"+KCZUL+"'";
if(mUVCd.length>0)
{
ilRtQ+=",'js':function(){"+mUVCd+"}"
}
ilRtQ+="});return false;\" "
return ilRtQ;
}
function waLaunchFunction(oiPPo)
{
oiPPo()
}
function waOnClick(ltmcT,WGPvS)
{
if(WGPvS.js!=undefined)
{
try
{
WGPvS.js()
}
catch(e)
{
alert('ERROR: javascript link '+WGPvS.js)
}
}
if((ltmcT==undefined)||(ltmcT.length==0)) return;
var KCZUL=WGPvS.targ;
if(KCZUL&&KCZUL.length>0)
{
if((KCZUL.length>0)&&(KCZUL!="_blank"))
{
window.frames[KCZUL].location.href=(ltmcT)
}
else
{
window.open(ltmcT,KCZUL)
}
}
else
{
window.location.href=(ltmcT)
}
return false;
}


function waActivateDynamicLoader(McwLm,qrFrM)
{
var AioYM=McwLm.find(".wa-dyn-loader")
if(AioYM.data('timer_animation_initialized')==true)
{
return;
}
AioYM.data('timer_animation_initialized',true) 
if(qrFrM)
{
AioYM.css({"width":McwLm.width(),"height":McwLm.height()})
}
var GPwwO=65
var gUgdF=500;
var iDwbr=AioYM.children("img")
AioYM.everyTime(GPwwO,function(i)
{
var xWljA=waJSQuery(this).data("anim_delay_img")
if(xWljA==undefined)xWljA=GPwwO;
if(xWljA>=gUgdF)
{
iDwbr.show()
}
var gFkPM=AioYM.data("anim_frm")
if(gFkPM==undefined)gFkPM=0;
var sLqKL=40
var CheOG=0;
var dwIZC=gFkPM*sLqKL
var bDUfw=CheOG+sLqKL;
var BqjCi=dwIZC+sLqKL;;
var ksUqt=(waJSQuery(this).width()-sLqKL)/2
var toofk=(waJSQuery(this).height()-sLqKL)/2
iDwbr.css({"left":ksUqt,"top":-dwIZC+toofk})
iDwbr.css({"clip":"rect("+dwIZC+"px,"+bDUfw+"px,"+BqjCi+"px,"+CheOG+"px)"})
gFkPM=(gFkPM+1)%12
waJSQuery(this).data("anim_frm",gFkPM)
xWljA+=GPwwO
waJSQuery(this).data("anim_delay_img",xWljA)
});
}
function htmlDynamicLoader(Vfgag,VGhJs,HACho)
{
var ilRtQ=""
ilRtQ+="<div class='wa-dyn-loader' style=\"";
if(Vfgag)
{
ilRtQ+="position:absolute;left:0px;top:0px;"
}
else
{
ilRtQ+="position:relative;left:0px;top:0px;"
}
ilRtQ+="width:"+VGhJs+"px;height:"+HACho+"px;"
ilRtQ+="overflow:hidden;" 
var n=0
var sLqKL=40
var CheOG=0;
var dwIZC=n*sLqKL
var bDUfw=CheOG+sLqKL;
var BqjCi=dwIZC+sLqKL;;
ilRtQ+=";\">"
ilRtQ+="<img style=\"position:absolute;border:none;left:0px;top:0px;";
ilRtQ+="display:none;"
ilRtQ+="clip:rect("+dwIZC+"px,"+bDUfw+"px,"+BqjCi+"px,"+CheOG+"px);"
ilRtQ+="\" ";
ilRtQ+="src=\"wa_loading.png\" />"
ilRtQ+="</div>"
return ilRtQ;
}
function Size(lx,ly)
{
this.VGhJs=lx;this.HACho=ly;
this.width=function(){return this.VGhJs}
this.height=function(){return this.HACho}
this.clone=function(){return new Size(this.VGhJs,this.HACho)}
this.greaterThan=function(ilRtQ){if(ilRtQ==undefined) return null;return(this.VGhJs>ilRtQ.VGhJs)&&(this.HACho>ilRtQ.HACho)}
this.toString=function()
{
return this.width()+"x"+this.height()
}
this.scale=function(oSQiC,OLExc)
{
if(!OLExc)OLExc=false
var sLqKL=this;
var ZGTUU=sLqKL.width()
var pFbHi=sLqKL.height()
var p1=ZGTUU*oSQiC.height();
var p2=oSQiC.width()*pFbHi;
var r1=ZGTUU/pFbHi;
var r2=pFbHi/ZGTUU;
var newSize1=new Size(oSQiC.height()*r1,oSQiC.height());
var newSize2=new Size(oSQiC.width(),oSQiC.width()*r2);
if(p2>p1)
{
if((OLExc==true)||((newSize1.width()<=sLqKL.width())&&(newSize1.height()<=sLqKL.height())))
{
sLqKL.VGhJs=Math.round(newSize1.width());
sLqKL.HACho=Math.round(newSize1.height());
}
}
else
{
if((OLExc==true)||((newSize2.width()<=sLqKL.width())&&(newSize2.height()<=sLqKL.height())))
{
sLqKL.VGhJs=Math.round(newSize2.width());
sLqKL.HACho=Math.round(newSize2.height());
}
}
this.VGhJs=sLqKL.width();
this.HACho=sLqKL.height();
return true;
}
this.scaleByExpanding=function(oSQiC)
{
var sLqKL=this;
var ZGTUU=sLqKL.width()
var pFbHi=sLqKL.height()
var p1=ZGTUU*oSQiC.height();
var p2=oSQiC.width()*pFbHi;
var r1=ZGTUU/pFbHi;
var r2=pFbHi/ZGTUU;
var newSize1=new Size(oSQiC.height()*r1,oSQiC.height());
var newSize2=new Size(oSQiC.width(),oSQiC.width()*r2);
if(p2<p1)
{
if((newSize1.width()<=sLqKL.width())&&(newSize1.height()<=sLqKL.height()))
{
sLqKL.VGhJs=Math.round(newSize1.width());
sLqKL.HACho=Math.round(newSize1.height());
}
}
else
{
if((newSize2.width()<=sLqKL.width())&&(newSize2.height()<=sLqKL.height()))
{
sLqKL.VGhJs=Math.round(newSize2.width());
sLqKL.HACho=Math.round(newSize2.height());
}
}
this.VGhJs=sLqKL.width();
this.HACho=sLqKL.height();
return true;
}
}
function Point(p_x,p_y){this.x=p_x;this.y=p_y;
this.translate=function(KLxpr,FHGCB){this.x+=KLxpr;this.y+=FHGCB;}
this.clone=function(){return new Point(this.x,this.y)}
}
function Rect(p_x,p_y,lx,ly)
{
this.x=p_x;this.y=p_y;this.width=lx;this.height=ly;
this.clone=function(){return new Rect(this.x,this.y,this.width,this.height)}
this.equals=function(liPqL){return(this.x==liPqL.x)&&(this.y==liPqL.y)&&(this.width==liPqL.width)&&(this.height==liPqL.height);}
this.copy=function(liPqL){this.x=liPqL.x;this.y=liPqL.y;this.width=liPqL.width;this.height=liPqL.height;}
this.translate=function(KLxpr,FHGCB){this.x+=KLxpr;this.y+=FHGCB;}
this.isValid=function(){return(this.width>0)&&(this.height>0);}
}
var xLpXA=[
{acc:"e",l:["é","è","ë"]},{acc:"a",l:["à","ä","â","ã"]},{acc:"u",l:["ü","û"]},{acc:"c",l:["ç"]},{acc:"o",l:["ö","ô"]}
];
function removeAccentsFromString(s)
{
var res=s.toLowerCase();
for(var i=0;i<xLpXA.length;i++)
{
var array2=xLpXA[i].l;
for(var i2=0;i2<array2.length;i2++)
{
var reg=new RegExp(array2[i2],"g");
res=res.replace(reg,xLpXA[i].acc)
}
}
return res;
}
function IsNumeric(cKBTJ)
{
var SPKNC="0123456789.";var fNRRZ=true;var TIVWX;
for(EWHWG=0;EWHWG<cKBTJ.length&&fNRRZ==true;EWHWG++){TIVWX=cKBTJ.charAt(EWHWG);if(SPKNC.indexOf(TIVWX)==-1) fNRRZ=false;}
return fNRRZ;
}
function getDocumentSize()
{
return new Size(waJSQuery(document).width(),waJSQuery(document).height());
}
function getWindowSize()
{
if(isAppleMobile())
{
return new Size(window.innerWidth,window.innerHeight);
}
return new Size(waJSQuery(window).width(),waJSQuery(window).height());
}
function urlSuffixe(GPwwO_minuts)
{
var GeDMt=GPwwO_minuts*60;
var kHbhI=new Date();
var fWXEc=0;
fWXEc+=kHbhI.getYear()*12*31*24*60*60;
fWXEc+=kHbhI.getMonth()*31*24*60*60;
fWXEc+=kHbhI.getDate()*24*60*60;
fWXEc+=kHbhI.getHours()*60*60;
fWXEc+=kHbhI.getMinutes()*60;
fWXEc+=kHbhI.getSeconds();
if(GeDMt!=0)
{
fWXEc=Math.floor(fWXEc/GeDMt)*GeDMt
}
return "-"+fWXEc;
}
function urlAntiCacheForPreview()
{
if(document.webaca_is_preview) return urlSuffixe(0);
return "";
}
function uHtgL()
{
var TnjTs=document.getElementsByTagName("A");
for(var EWHWG=0;EWHWG<TnjTs.length;EWHWG++)
{
var liPqL=TnjTs[EWHWG];
if(liPqL.onmouseover)liPqL.onmouseover=null;
if(liPqL.onmouseout)liPqL.onmouseout=null;
}
}
function xVGVj()
{
for(var FwXwY in document.wa_global_list_element)
{
var hpgYG=document.wa_global_list_element[FwXwY]
var DeKhU=document.getElementById(hpgYG)
DeKhU.onclick=function()
{
WA_focus(this)
}
}
}
function WA_declare(hpgYG)
{
if(!document.wa_global_list_element)
{
document.wa_global_list_element=new Array();;
}
document.wa_global_list_element.push(hpgYG)
}
function HxeGj()
{
var ltmcT=window.location.search;
if(ltmcT.substr(0,1)=="?")ltmcT=ltmcT.substr(1);
if(ltmcT.length==0)return;
var HiCbD=new Array();
var vpQWr=ltmcT.split("&");
for(var i=0;i<vpQWr.length;i++)
{
var WKAml=vpQWr[i].split("=");HiCbD[WKAml[0]]=WKAml[1];
}
var ilRtQ_info=HiCbD["wa_key"];
if(!ilRtQ_info)return;
var mxYpF=new Array();
mxYpF.m_unid=ilRtQ_info;
mxYpF.m_index_item=-1;
var uvNqT_sep_info=ilRtQ_info.indexOf("-");
if(uvNqT_sep_info!=-1)
{
mxYpF.m_unid=ilRtQ_info.substring(0,uvNqT_sep_info);
mxYpF.m_index_item=parseInt(ilRtQ_info.substring(uvNqT_sep_info+1));
}
document.wa_global_query_info=mxYpF;
}
function IS_onload_WA()
{
if(isAppleMobile())
{
uHtgL()
}
else
{
xVGVj()
}
HxeGj();

dMXQm()
}
function dMXQm()
{
var mZOka=0;
var kqbEC=document.webaca_banner_height;
var bZkJc=document.webaca_page_option_background
if(document.webaca_page_is_centered)
{
var cfule=getDocumentSize().width() 

var kbQTj=document.webaca_width_page
if((bZkJc==0)||(bZkJc==1))
{
if(cfule>kbQTj)mZOka=(cfule-kbQTj)/2;
}
else
if(bZkJc==2)
{
}
else
if(bZkJc==3) 
{
mZOka=cfule/2-(document.webaca_page_background_img_size[0]/2);
}
}
if(document.body&&document.body.style)
document.body.style.backgroundPosition=mZOka+"px "+kqbEC+"px";
}
waJSQuery(window).resize(function(){
dMXQm()
});


function WA_loadMessages()
{
for(var k in CONST_WA_TR)
{
var key=CONST_WA_TR[k]
Translator.m_tr[key[0]]=key[1]
}
for(var n=0;n<CONST_WA_COUNTRIES.codes.length;n++)
{
var Qmjgm=CONST_WA_COUNTRIES.codes[n]
var DfOPb=CONST_WA_COUNTRIES.labels[n]
Translator.m_countries[Qmjgm]=DfOPb
}
}
function Translator()
{
}
Translator.m_tr=new Array();
Translator.m_countries=new Array();
Translator.tr=function(k,bEncodeBr)
{
try
{
var v=Translator.m_tr[k]
if((v==undefined)||(v.length==0))return "@"+k;
if(bEncodeBr!=false)
{
v=v.replace(/\n/g,"<br>")
}
return v
}
catch(e){}
return k;
}
Translator.country=function(k)
{
try
{
var v=Translator.m_countries[k]
if((v==undefined)||(v.length==0))return "@"+k;
return v
}
catch(e){}
return k;
}

function isOperaBrowser()
{
return(/opera/i.test(navigator.userAgent))
}
function WA_exec_callback_opera_compliant(jlfpP,tcACP)
{
tcACP.call(jlfpP)
}
function WA_exec_delayedCallback(jlfpP,tcACP)
{
wa_timeout(Delegate.create(jlfpP,tcACP),0);
}
function WA_loadScript(url,callback,params)
{
var e=document.createElement("script");
e.src=url;
e.type="text/javascript";
e.onerror=function(){callback(params,false);}
if(/msie/i.test(navigator.userAgent)&&!/opera/i.test(navigator.userAgent)){
e.onreadystatechange=function(){
if((this.readyState=='complete')||(this.readyState=='loaded')){
callback(params,true);
}
}
}else
{
e.onload=function(){
if(/opera/i.test(navigator.userAgent))
wa_timeout(callback,0,params,true);
else
callback(params,true);
}
}
document.getElementsByTagName("head")[0].appendChild(e);
}
function WA_onSearch(hpgYG_input)
{
var ZDxiL=document.getElementById(hpgYG_input);
if(document.wa_search_js_loaded==true)
{
WA_openSearchDialog(ZDxiL,document.const_wa_search_index_js)
}
else
{
WA_Dialog.progress();
jUjAC(ZDxiL)
}
}
function jETsK(pBESE)
{
document.wa_search_js_loaded=true
WA_openSearchDialog(pBESE[0],document.const_wa_search_index_js)
}
function jUjAC(ZDxiL_field)
{
WA_loadScript(document.const_wa_search_js,jETsK,[ZDxiL_field])
}
function gALYS(offset){
var endstr=document.cookie.indexOf(";",offset);
if(endstr==-1)
endstr=document.cookie.length;
return unescape(document.cookie.substring(offset,endstr));
}
function WA_GetCookie(name)
{
var arg=name+"=";
var alen=arg.length;
var clen=document.cookie.length;
var i=0;
while(i<clen)
{
var j=i+alen;
if(document.cookie.substring(i,j)==arg)
return gALYS(j);
i=document.cookie.indexOf(" ",i)+1;
if(i==0) break;
}
return "";
}
function WA_SetCookie(name,value){
var argv=WA_SetCookie.arguments;
var argc=WA_SetCookie.arguments.length;
var expires=(argc>2)?argv[2]:null;
var path=(argc>3)?argv[3]:null;
var domain=(argc>4)?argv[4]:null;
var secure=(argc>5)?argv[5]:false;
document.cookie=name+"="+escape(value)+((expires==null)?"":("; expires="+expires.toGMTString()))+((path==null)?"":("; path="+path))+((domain==null)?"":("; domain="+domain))+((secure==true)?"; secure":"");
}

function MD5(string){
function RotateLeft(lValue,iShiftBits){
return(lValue<<iShiftBits)|(lValue>>>(32-iShiftBits));
}
function AddUnsigned(lX,lY){
var lX4,lY4,lX8,lY8,lResult;
lX8=(lX&0x80000000);
lY8=(lY&0x80000000);
lX4=(lX&0x40000000);
lY4=(lY&0x40000000);
lResult=(lX&0x3FFFFFFF)+(lY&0x3FFFFFFF);
if(lX4&lY4){
return(lResult^0x80000000^lX8^lY8);
}
if(lX4|lY4){
if(lResult&0x40000000){
return(lResult^0xC0000000^lX8^lY8);
}else{
return(lResult^0x40000000^lX8^lY8);
}
}else{
return(lResult^lX8^lY8);
}
}
function F(x,y,z){return(x&y)|((~x)&z);}
function G(x,y,z){return(x&z)|(y&(~z));}
function H(x,y,z){return(x^y^z);}
function I(x,y,z){return(y^(x|(~z)));}
function FF(a,b,c,d,x,s,ac){
a=AddUnsigned(a,AddUnsigned(AddUnsigned(F(b,c,d),x),ac));
return AddUnsigned(RotateLeft(a,s),b);
};
function GG(a,b,c,d,x,s,ac){
a=AddUnsigned(a,AddUnsigned(AddUnsigned(G(b,c,d),x),ac));
return AddUnsigned(RotateLeft(a,s),b);
};
function HH(a,b,c,d,x,s,ac){
a=AddUnsigned(a,AddUnsigned(AddUnsigned(H(b,c,d),x),ac));
return AddUnsigned(RotateLeft(a,s),b);
};
function II(a,b,c,d,x,s,ac){
a=AddUnsigned(a,AddUnsigned(AddUnsigned(I(b,c,d),x),ac));
return AddUnsigned(RotateLeft(a,s),b);
};
function ConvertToWordArray(string){
var lWordCount;
var lMessageLength=string.length;
var lNumberOfWords_temp1=lMessageLength+8;
var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1%64))/64;
var lNumberOfWords=(lNumberOfWords_temp2+1)*16;
var lWordArray=Array(lNumberOfWords-1);
var lBytePosition=0;
var lByteCount=0;
while(lByteCount<lMessageLength){
lWordCount=(lByteCount-(lByteCount%4))/4;
lBytePosition=(lByteCount%4)*8;
lWordArray[lWordCount]=(lWordArray[lWordCount]|(string.charCodeAt(lByteCount)<<lBytePosition));
lByteCount++;
}
lWordCount=(lByteCount-(lByteCount%4))/4;
lBytePosition=(lByteCount%4)*8;
lWordArray[lWordCount]=lWordArray[lWordCount]|(0x80<<lBytePosition);
lWordArray[lNumberOfWords-2]=lMessageLength<<3;
lWordArray[lNumberOfWords-1]=lMessageLength>>>29;
return lWordArray;
};
function WordToHex(lValue){
var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
for(lCount=0;lCount<=3;lCount++){
lByte=(lValue>>>(lCount*8))&255;
WordToHexValue_temp="0"+lByte.toString(16);
WordToHexValue=WordToHexValue+WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
}
return WordToHexValue;
};
function Utf8Encode(string){
string=string.replace(/\r\n/g,"\n");
var utftext="";
for(var n=0;n<string.length;n++){
var c=string.charCodeAt(n);
if(c<128){
utftext+=String.fromCharCode(c);
}
else if((c>127)&&(c<2048)){
utftext+=String.fromCharCode((c>>6)|192);
utftext+=String.fromCharCode((c&63)|128);
}
else{
utftext+=String.fromCharCode((c>>12)|224);
utftext+=String.fromCharCode(((c>>6)&63)|128);
utftext+=String.fromCharCode((c&63)|128);
}
}
return utftext;
};
var x=Array();
var k,AA,BB,CC,DD,a,b,c,d;
var S11=7,S12=12,S13=17,S14=22;
var S21=5,S22=9,S23=14,S24=20;
var S31=4,S32=11,S33=16,S34=23;
var S41=6,S42=10,S43=15,S44=21;
string=Utf8Encode(string);
x=ConvertToWordArray(string);
a=0x67452301;b=0xEFCDAB89;c=0x98BADCFE;d=0x10325476;
for(k=0;k<x.length;k+=16){
AA=a;BB=b;CC=c;DD=d;
a=FF(a,b,c,d,x[k+0],S11,0xD76AA478);
d=FF(d,a,b,c,x[k+1],S12,0xE8C7B756);
c=FF(c,d,a,b,x[k+2],S13,0x242070DB);
b=FF(b,c,d,a,x[k+3],S14,0xC1BDCEEE);
a=FF(a,b,c,d,x[k+4],S11,0xF57C0FAF);
d=FF(d,a,b,c,x[k+5],S12,0x4787C62A);
c=FF(c,d,a,b,x[k+6],S13,0xA8304613);
b=FF(b,c,d,a,x[k+7],S14,0xFD469501);
a=FF(a,b,c,d,x[k+8],S11,0x698098D8);
d=FF(d,a,b,c,x[k+9],S12,0x8B44F7AF);
c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
a=GG(a,b,c,d,x[k+1],S21,0xF61E2562);
d=GG(d,a,b,c,x[k+6],S22,0xC040B340);
c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
b=GG(b,c,d,a,x[k+0],S24,0xE9B6C7AA);
a=GG(a,b,c,d,x[k+5],S21,0xD62F105D);
d=GG(d,a,b,c,x[k+10],S22,0x2441453);
c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
b=GG(b,c,d,a,x[k+4],S24,0xE7D3FBC8);
a=GG(a,b,c,d,x[k+9],S21,0x21E1CDE6);
d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
c=GG(c,d,a,b,x[k+3],S23,0xF4D50D87);
b=GG(b,c,d,a,x[k+8],S24,0x455A14ED);
a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
d=GG(d,a,b,c,x[k+2],S22,0xFCEFA3F8);
c=GG(c,d,a,b,x[k+7],S23,0x676F02D9);
b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
a=HH(a,b,c,d,x[k+5],S31,0xFFFA3942);
d=HH(d,a,b,c,x[k+8],S32,0x8771F681);
c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
a=HH(a,b,c,d,x[k+1],S31,0xA4BEEA44);
d=HH(d,a,b,c,x[k+4],S32,0x4BDECFA9);
c=HH(c,d,a,b,x[k+7],S33,0xF6BB4B60);
b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
d=HH(d,a,b,c,x[k+0],S32,0xEAA127FA);
c=HH(c,d,a,b,x[k+3],S33,0xD4EF3085);
b=HH(b,c,d,a,x[k+6],S34,0x4881D05);
a=HH(a,b,c,d,x[k+9],S31,0xD9D4D039);
d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
b=HH(b,c,d,a,x[k+2],S34,0xC4AC5665);
a=II(a,b,c,d,x[k+0],S41,0xF4292244);
d=II(d,a,b,c,x[k+7],S42,0x432AFF97);
c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
b=II(b,c,d,a,x[k+5],S44,0xFC93A039);
a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
d=II(d,a,b,c,x[k+3],S42,0x8F0CCC92);
c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
b=II(b,c,d,a,x[k+1],S44,0x85845DD1);
a=II(a,b,c,d,x[k+8],S41,0x6FA87E4F);
d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
c=II(c,d,a,b,x[k+6],S43,0xA3014314);
b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
a=II(a,b,c,d,x[k+4],S41,0xF7537E82);
d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
c=II(c,d,a,b,x[k+2],S43,0x2AD7D2BB);
b=II(b,c,d,a,x[k+9],S44,0xEB86D391);
a=AddUnsigned(a,AA);
b=AddUnsigned(b,BB);
c=AddUnsigned(c,CC);
d=AddUnsigned(d,DD);
}
var temp=WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);
return temp.toLowerCase();
}
function centerTextContent(liPqL)
{
var DfOPb=liPqL.html()
liPqL.html("<div class='inner-content' style='position:absolute;'></div>")
var kRrLh=liPqL.find(".inner-content")
kRrLh.html(DfOPb)
kRrLh.css({top:(liPqL.height()-kRrLh.height())/2,left:(liPqL.width()-kRrLh.width())/2})
}
function centerElement(sMEuv,HHjPk)
{
var iDwbr=sMEuv.children(HHjPk)
iDwbr.css("left",(sMEuv.width()-iDwbr.width())/2)
iDwbr.css("top",(sMEuv.height()-iDwbr.height())/2)
}
function splitClassParameters(s,sep1,sep2)
{
s=jQuery.trim(s);
var arr=new Array()
var clName=""
var clParam=""
var c;
for(var i=0;i<s.length;i++)
{
c=s.charAt(i)
if((c==' ')||(c=='\n')||(c==sep2))
{
arr[clName]=clParam;
clName=""
clParam=""
}
else
if(c==sep1)
{
var WRGUT=0;
var cVaVK=true;
do
{
cVaVK=true;
i++;
c=s.charAt(i)
if(c==sep1)
{
WRGUT++;
}
if((c!=sep2)||(WRGUT!=0))
{
clParam+=c;
}
if(WRGUT>0)
if(c==sep2)
{
WRGUT--;
cVaVK=false
}
}
while((cVaVK==false)||(c!=sep2)||(WRGUT!=0)) 
}
else
{
clName+=c;
}
}
if(clName.length>0)
{
arr[clName]=clParam;
}
return arr;
}
function splitClass(s)
{
var arr=splitClassParameters(s,'[',']')
for(k in arr)
{
var v=arr[k];
if(v.length>0)
{
var arr2=splitClassParameters(v,'(',')')
for(k2 in arr2)
{
alert("#"+k+"  "+k2+" = "+arr2[k2])
}
}
}
}
function extractClassInfo(s,className)
{
var arr=splitClassParameters(s,'[',']')
for(k in arr)
{
var v=arr[k];
if(v.length>0)
{
if(k==className)
{
var arr2=splitClassParameters(v,'(',')') 

return arr2;
}
}
}
return null
}
function extractParamInfo(liPqL,kfLQV,GPIew)
{
if(GPIew==undefined)GPIew="param"
if(liPqL==undefined) return ""
var vfgcj=liPqL.attr("class");
if(vfgcj==undefined) return ""
var iqYwP=extractClassInfo(vfgcj,GPIew);
if(iqYwP==null) return ""
if(iqYwP==undefined) return ""
if(iqYwP[kfLQV]==undefined) return ""
if(kfLQV) return  iqYwP[kfLQV]
return iqYwP;
}


function getBrowserInfos()
{
var vDKli={
}
if(waJSQuery.browser.webkit)vDKli.engine="webkit"
if(waJSQuery.browser.mozilla)vDKli.engine="ff"
if(waJSQuery.browser.msie)vDKli.engine="ie"
return vDKli
}
function waSetVisibilityMainPageContenair(URasc)
{
if(URasc)
{
waJSQuery(".wa-video").show()
}
else
{
waJSQuery(".wa-video").hide()
}
}
function isValidEmailAddress(cabaC)
{
var EXGGI=new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
return EXGGI.test(cabaC);
}
function JEwWu(c,x,y,lx,ly)
{
c.beginPath();
c.moveTo(x,y);
c.lineTo(x+lx,y);
c.lineTo(x+lx,y+ly);
c.lineTo(x,y+ly);
c.lineTo(x,y);
c.closePath();
}
function nBClr(c,x,y,lx,ly,ODZTk,PXVok)
{
if(typeof(ODZTk)=="number")
{
ODZTk=[ODZTk,ODZTk,ODZTk,ODZTk]
}
if(PXVok)
{
c.moveTo(x+ODZTk[0],y);c.lineTo(x+lx-ODZTk[1],y);c.quadraticCurveTo(x+lx,y,x+lx,y+ODZTk[1]);c.lineTo(x+lx,y+ly-ODZTk[2]);c.quadraticCurveTo(x+lx,y+ly,x+lx-ODZTk[2],y+ly);c.lineTo(x+ODZTk[3],y+ly);c.quadraticCurveTo(x,y+ly,x,y+ly-ODZTk[3]);c.lineTo(x,y+ODZTk[0]);c.quadraticCurveTo(x,y,x+ODZTk[0],y);
return;
}
c.moveTo(x,y+ODZTk[0]);c.lineTo(x,y+ly-ODZTk[3]);c.quadraticCurveTo(x,y+ly,x+ODZTk[3],y+ly);c.lineTo(x+lx-ODZTk[2],y+ly);c.quadraticCurveTo(x+lx,y+ly,x+lx,y+ly-ODZTk[2]);c.lineTo(x+lx,y+ODZTk[1]);c.quadraticCurveTo(x+lx,y,x+lx-ODZTk[1],y);c.lineTo(x+ODZTk[0],y);c.quadraticCurveTo(x,y,x,y+ODZTk[0]);
}
function waExtractCssStyle(ilRtQ,Qmjgm)
{
return Tdqiu(ilRtQ,Qmjgm);
}
function Tdqiu(ilRtQ,Qmjgm)
{
if(ilRtQ==undefined) return ""
var TFiTj=ilRtQ.indexOf(Qmjgm);
if((TFiTj>-1)||((TFiTj>0)&&(ilRtQ.substring(TFiTj-1)==";")))
{
ilRtQ=ilRtQ.substring(TFiTj)
TFiTj=ilRtQ.indexOf(";");
if(TFiTj>-1)
{
ilRtQ=ilRtQ.substring(0,TFiTj) 
TFiTj=ilRtQ.indexOf(":");
if(TFiTj>-1)
{
ilRtQ=ilRtQ.substring(TFiTj+1)
}
return waJSQuery.trim(ilRtQ);
}
else
{
TFiTj=ilRtQ.indexOf(":");
if(TFiTj>-1)
{
ilRtQ=ilRtQ.substring(TFiTj+1)
}
return waJSQuery.trim(ilRtQ);
}
}
return "";
}
function waExtractRadiusFromCss(liPqL)
{
var NPscp=0;
var nrFQs=liPqL.attr("style");
var rCFlV="border-radius"
if(isMSIE_higher_than_ie8())
{
rCFlV="-moz-border-radius" 
}
var  veJvu=Tdqiu(nrFQs,rCFlV) 
if(veJvu.length==0)
{
var JwGLo=Tdqiu(nrFQs,"border-top-left-radius")
var LYTZo=Tdqiu(nrFQs,"border-top-right-radius")
var FKQhn=Tdqiu(nrFQs,"border-bottom-right-radius")
var YRqYm=Tdqiu(nrFQs,"border-bottom-left-radius") 
if(JwGLo.length==0)JwGLo="0px"
if(LYTZo.length==0)LYTZo="0px"
if(FKQhn.length==0)FKQhn="0px"
if(YRqYm.length==0)YRqYm="0px"
veJvu=JwGLo+" "+LYTZo+" "+FKQhn+" "+YRqYm 


}
var splitradiusStr=veJvu.split(" ") 

var LYTZo=Math.max(0,parseInt(splitradiusStr[0])-NPscp)
var FKQhn=Math.max(0,parseInt(splitradiusStr[1])-NPscp)
var YRqYm=Math.max(0,parseInt(splitradiusStr[2])-NPscp)
var MkwTD=Math.max(0,parseInt(splitradiusStr[3])-NPscp)
if(splitradiusStr.length==1)
{
FKQhn=LYTZo;YRqYm=LYTZo;MkwTD=LYTZo;
}
if(isNaN(LYTZo))LYTZo=0
if(isNaN(FKQhn))FKQhn=LYTZo
if(isNaN(YRqYm))YRqYm=FKQhn
if(isNaN(MkwTD))MkwTD=YRqYm
return new Array(LYTZo,FKQhn,YRqYm,MkwTD)
}
function waSoustractFromArrayRadius(auauJ,KqSgf)
{
for(var i=0;i<auauJ.length;i++)
{
if(isNaN(auauJ[i])||(auauJ[i].length==0))
{
auauJ[i]=0
}
else
{
auauJ[i]=Math.max(0,auauJ[i]-KqSgf)
}
}
return auauJ;
}
function waGenerateNewGradientID()
{
var skHOE=waJSQuery(document).data("curCanvasGradientId")
if(skHOE==undefined)skHOE=0;
waJSQuery(document).data("curCanvasGradientId",skHOE+1)
return "canvasGradientId"+skHOE;
}
function waGetDrawingSurface(liPqL,GqEsC,AmOfF)
{
var lUQqb="wa-div-bg-gradient" 
var XdGcV=null
var gZWNB=liPqL.find("."+lUQqb) 
if(gZWNB.length==0)
{

var EvLSO=-1;
liPqL.append("<div class='"+lUQqb+"' ></div>")
gZWNB=liPqL.find("."+lUQqb)
gZWNB.css({position:"absolute",top:0,left:0,width:GqEsC,height:AmOfF,zIndex:EvLSO})
var hcmBJ=waGenerateNewGradientID();
gZWNB.html("<canvas id='"+hcmBJ+"' width="+GqEsC+" height="+AmOfF+" style='z-index:"+EvLSO+"' ></canvas>")
gZWNB.data("waCanvasId",hcmBJ)
XdGcV=document.getElementById(hcmBJ);
if(isMSIE_lower_than_ie9())
{
if(window.G_vmlCanvasManager)
window.G_vmlCanvasManager.initElement(XdGcV);
}
}
else
{
var hcmBJ=gZWNB.data("waCanvasId")
XdGcV=document.getElementById(hcmBJ);
}
if(XdGcV==null)
{
if(isMSIE())
{
if(document.documentMode==8)
{
if(/MSIE 9/.test(navigator.userAgent))
{
if(document.warning_ie9_frame!=true)
{
document.warning_ie9_frame=true
alert(window.location+"\n"+Translator.tr("This site is probably in a frame,Display problems can occur with IE9 you have to enabled Force IE8 rendering in WA4 website properties",false));
}
}
}
}
return null;
}
var sXmIZ=XdGcV.getContext('2d');
return sXmIZ;
}
function CwwYJ(sXmIZ,vYHdB)
{
var xETGS=vYHdB.split(" ")
if(xETGS.length>1)
{
var swwdJ=parseInt(xETGS[0]);
var XmjYa=parseInt(xETGS[1]);;
var waTMB=parseInt(xETGS[2]);
var SZsLU=parseInt(xETGS[3]);
var TOGxP=xETGS[4]
var MpoKM="";
if(xETGS.length>5)
{
MpoKM=xETGS[5]
}
if(TOGxP=="undefined")TOGxP=""
if(MpoKM=="undefined")MpoKM="" 



if(MpoKM=="")MpoKM=TOGxP
if(isMSIE_lower_than_ie9())
{

var ApikM=new RGBColor(TOGxP)
var QQHrQ=new RGBColor(MpoKM)
if(TOGxP=="")
{
var hpbIo=new RGBColor(MpoKM)
hpbIo.a=0;
TOGxP=hpbIo.toRGB()
}
if(MpoKM=="")
{
var hpbIo=new RGBColor(TOGxP)
hpbIo.a=0;
MpoKM=hpbIo.toRGB()
}
}





var VIJFo=sXmIZ.createLinearGradient(swwdJ,XmjYa,waTMB,SZsLU);
VIJFo.addColorStop(0,TOGxP);
VIJFo.addColorStop(1,MpoKM);


return VIJFo
}
else
{
return vYHdB
}
}
function waDrawRoundedRectInSurface(sXmIZ,GqEsC,AmOfF,ODZTk,vYHdB,NPscp,DdWET)
{

if((DdWET==undefined)||(DdWET.length==0))
{
NPscp=0
}
if(NPscp==0)
{
DdWET=""
}
var efHJa=GqEsC-2*NPscp
var RGHDx=AmOfF-2*NPscp
var GmKAo=new Array(ODZTk[0],ODZTk[1],ODZTk[2],ODZTk[3])
GmKAo=waSoustractFromArrayRadius(GmKAo,NPscp)
if(vYHdB!=null)
{
{
sXmIZ.fillStyle=CwwYJ(sXmIZ,vYHdB) 
var KLxpr=NPscp
var FHGCB=NPscp
if(sXmIZ.fillStyle!="")
{
sXmIZ.beginPath();
nBClr(sXmIZ,KLxpr,FHGCB,efHJa,RGHDx,GmKAo)
sXmIZ.closePath();
sXmIZ.fill()
}
}
}
if((NPscp>0)&&(DdWET)&&(DdWET.length>0))
{
sXmIZ.fillStyle=DdWET;
sXmIZ.beginPath();
nBClr(sXmIZ,0,0,GqEsC,AmOfF,ODZTk)
nBClr(sXmIZ,NPscp,NPscp,efHJa,RGHDx,GmKAo,true)
sXmIZ.closePath();
sXmIZ.fill()
}
}
function waDrawRoundedRect(liPqL,GqEsC,AmOfF,ODZTk,vYHdB,NPscp,DdWET)
{
var sXmIZ=waGetDrawingSurface(liPqL,GqEsC,AmOfF)
waDrawRoundedRectInSurface(sXmIZ,GqEsC,AmOfF,ODZTk,vYHdB,NPscp,DdWET)
}
function waDrawButton(liPqL,vYHdB,DdWET,QBMIR,CKKaI)
{
var olhwx=liPqL.parent()
var vqVln=olhwx.find(".waButInner")
vqVln.hide()
var QWWIQ=olhwx.find(".waButGlossInner")
QWWIQ.hide()
liPqL.css("background","")
liPqL.css("border","none")
var NPscp=1;
if((DdWET==undefined)||(DdWET.length==0))
{
NPscp=0;
}
var LJGek=1;
var rWYrO=liPqL.outerWidth()
var cecoW=liPqL.outerHeight()
var GqEsC=rWYrO
var AmOfF=cecoW
var hDsph=(extractParamInfo(liPqL,"aqua")=="1")
var ODZTk=waExtractRadiusFromCss(liPqL)
var sXmIZ=waGetDrawingSurface(liPqL,GqEsC,AmOfF) 
if(isMSIE_lower_than_ie9())
{
liPqL.css("border","")
}
sXmIZ.clearRect(0,0,GqEsC,AmOfF)
var aEYRP=DdWET
if(isMSIE_lower_than_ie9())
{
var JoeHS=vYHdB.split(" ")
var TOGxP=""
var MpoKM="" 
if(JoeHS.length<=1)
{
TOGxP=vYHdB
MpoKM=vYHdB
}
else
{
TOGxP=JoeHS[4]
MpoKM=JoeHS[5]
}
if(TOGxP==MpoKM)
{
waDrawRoundedRectInSurface(sXmIZ,GqEsC,AmOfF,ODZTk,TOGxP,NPscp,aEYRP)
}
else
{
var kQAmG=40;
if(hDsph)
{
kQAmG=70;
}
var nkEwY=AmOfF-Math.round(AmOfF*kQAmG/100)
var LYTZo=[ODZTk[0],ODZTk[1],0,0]
waDrawRoundedRectInSurface(sXmIZ,GqEsC,AmOfF-nkEwY,LYTZo,TOGxP,NPscp,"")
var FKQhn=[0,0,ODZTk[2],ODZTk[3]]
var ncqKv="0 0 0 "+nkEwY+" "+TOGxP+" "+MpoKM
sXmIZ.fillStyle=CwwYJ(sXmIZ,ncqKv)
sXmIZ.beginPath();
var omWbA=AmOfF-nkEwY
nBClr(sXmIZ,0,omWbA,GqEsC,nkEwY,FKQhn)
sXmIZ.closePath();
sXmIZ.fill() 
if((aEYRP.length>0)&&(NPscp>0))
{
sXmIZ.fillStyle=""
sXmIZ.strokeStyle=aEYRP;
sXmIZ.beginPath();
nBClr(sXmIZ,0,0,GqEsC,AmOfF,ODZTk)
sXmIZ.closePath();
sXmIZ.stroke();
}
}
}
else
{

waDrawRoundedRectInSurface(sXmIZ,GqEsC,AmOfF,ODZTk,vYHdB,NPscp,aEYRP)
}
if(QBMIR&&(QBMIR.length>0))
{
sXmIZ.fillStyle=""
if(isMSIE_lower_than_ie9())
{
sXmIZ.strokeStyle=QBMIR;
}
else
{
sXmIZ.strokeStyle=CwwYJ(sXmIZ,"0 "+Math.round(AmOfF/2)+" 0 "+AmOfF+" "+QBMIR+" transparent") 
}
sXmIZ.beginPath();
nBClr(sXmIZ,1.5,1.5,GqEsC-3,AmOfF-3,ODZTk)
sXmIZ.closePath();
sXmIZ.stroke()
}
if(hDsph)
{
var TOGxP="rgba(255,255,255,0.5)"
var MpoKM="rgba(255,255,255,0.1)"
var nkEwY=Math.round(AmOfF*0.5);
var QUxCY=ODZTk[0]
var SElaY=QUxCY;
SElaY=Math.min(SElaY,nkEwY/2);
var QaYpV=QUxCY-SElaY;
QaYpV=Math.max(QaYpV,0);
var vYHdB="0 0 0 "+nkEwY+" "+TOGxP+" "+MpoKM 
sXmIZ.fillStyle=CwwYJ(sXmIZ,vYHdB)
sXmIZ.beginPath();
var omWbA=0
nBClr(sXmIZ,QaYpV,omWbA,GqEsC-2*QaYpV,omWbA+nkEwY,SElaY)
sXmIZ.closePath();
sXmIZ.fill()
}
}
function waHackGradient()
{
if(isWebKit()||isFirefox())
{
return false;
}
waJSQuery(".wa-bg-gradient").each(function()
{
var liPqL=waJSQuery(this)
var nrFQs=liPqL.attr("style");
var vYHdB=extractParamInfo(liPqL,"grad") 
var EojsJ_borderProps=extractParamInfo(liPqL,"border").split(" ")
var NPscp=0
var DdWET=""
if(EojsJ_borderProps.length>0)
{
NPscp=parseInt(EojsJ_borderProps[0])
if(isNaN(NPscp))NPscp=0;
}
if(EojsJ_borderProps.length>1)
{
DdWET=EojsJ_borderProps[1]
}
var uEQFP=liPqL.css("backgroundImage")
if((uEQFP.length>0)&&(uEQFP!="none"))
{
vYHdB=null
}
var GqEsC=liPqL.width()+2*NPscp
var AmOfF=liPqL.height()+2*NPscp
var ODZTk=waExtractRadiusFromCss(liPqL)
liPqL.css({border:"0px none",backgroundColor:"transparent"}) 
waDrawRoundedRect(liPqL,GqEsC,AmOfF,ODZTk,vYHdB,NPscp,DdWET)
if(isMSIE())
{
liPqL.css({width:GqEsC,height:AmOfF})
}
})
}
function waHasButtonHacking()
{
if(isWebKit()||isFirefox())
{
return false;
}
return true;
}
function waHackButtons()
{
if(waHasButtonHacking()==false)
{
return false;
}
waJSQuery(".wa-button").each(function()
{
var liPqL=waJSQuery(this)
waHackButton(liPqL)
})
}
function waPercentGradientButton(UDpwD)
{
var hDsph=(extractParamInfo(UDpwD,"aqua")=="1")
var bJkEc=40;
if(hDsph)
{
bJkEc=70;
}
return bJkEc;
}
function waHackButton(liPqL)
{
var olhwx=liPqL.parent()
var vqVln=olhwx.find(".waButInner") 
vqVln.show()
var QWWIQ=olhwx.find(".waButGlossInner")
QWWIQ.show()
if(waHasButtonHacking()==false)
{
return false;
}
var UdnnJ=liPqL.data("saved-background-image")
if(UdnnJ==null)
{
liPqL.data("saved-background-image",liPqL.css("background-image"))
}
var lXxix=liPqL.data("saved-background-image")
if((lXxix.indexOf("url(")>-1)&&(lXxix.indexOf("wa_transparent.gif")==-1))
{
return false;
}

liPqL.css("background-color","")
var vYHdB=extractParamInfo(liPqL,"grad")
var QBMIR=(extractParamInfo(liPqL,"inborder"))
var DdWET=(extractParamInfo(liPqL,"border"))
waDrawButton(liPqL,vYHdB,DdWET,QBMIR)
}
function waHackButtonOver(liPqL)
{
if(waHasButtonHacking()==false)
{
return false;
}
var UDpwD=waJSQuery(">button",liPqL);
var height=parseInt(liPqL.css("height"));
var cl=liPqL.attr("class")
var bg=extractParamInfo(liPqL,"bg")
var vYHdB=null;
var bJkEc=waPercentGradientButton(UDpwD)
if(bg&&(bg.length>0))
{
var nkEwY=Math.round(height*bJkEc/100)
var cols=bg.split(" ")
vYHdB="0 "+nkEwY+" 0 "+height+" "+cols[0]+" "+cols[1]
}
var bg_img=extractParamInfo(liPqL,"bg_img")
if(bg_img&&(bg_img.length>0))
{
return;
}
var DdWET=extractParamInfo(liPqL,"bord");
var QBMIR=extractParamInfo(liPqL,"inner_bord") 
waDrawButton(UDpwD,vYHdB,DdWET,QBMIR)
}
function waHackButtonOut(liPqL)
{
waHackButton(liPqL)
}
function waActivateOverButton(IidBO)
{
var VLANA=true;
var RLpxi=null
if(VLANA)
{
RLpxi=IidBO;
}
else
{
RLpxi=waJSQuery(">span",IidBO);
}
var o=RLpxi
var button=waJSQuery(">button",o);
var txtSpan=null
if(VLANA)
{
txtSpan=waJSQuery(">div",button);

}
else
{
txtSpan=waJSQuery(">span",button);
}
var JBTvP=IidBO.attr("onclick")
if(JBTvP=="javascript:void(0)")JBTvP=""
if(JBTvP==undefined)JBTvP=""
if(JBTvP=="#")JBTvP=""
if((o.hasClass('wa-js-action')==false)&&(JBTvP.length==0))
{
IidBO.css("cursor","default")
o.css("cursor","default")
button.css("cursor","default")
txtSpan.css("cursor","default")
}
else
{
IidBO.css("cursor","pointer")
o.css("cursor","pointer")
button.css("cursor","pointer")
txtSpan.css("cursor","pointer")
}

if(isMSIE())
{
var Dmdib=false;
var iDwbr=button.css("background-image")
if((iDwbr&&(iDwbr.length==0))||(iDwbr=="none"))
{
button.css("background-image","url(wa_transparent.gif)") 
RLpxi.append("<div style='position:absolute;top:0px;left:0px;width:100%;height:100%;;background-image:url(wa_transparent.gif)'></div>")
}
else
{
Dmdib=true;
button.css("background-size",button.width()+" px "+button.height()+" px ")
}
}
var vqVln=o.find(".waButInner")
var ksgUf=txtSpan.outerWidth()
ksgUf=Math.min(ksgUf,button.width())
var img=waJSQuery(">img",button);
var tsMeG=Math.round((button.width()-ksgUf)/2)
var cgQaV=Math.round((button.height()-txtSpan.outerHeight())/2) 
var bLskp=button.css("textAlign");
if(bLskp=="center")
{
tsMeG=Math.round((button.width()-ksgUf)/2)
}
if(bLskp=="left")
{
tsMeG=3
}
if(bLskp=="right")
{
tsMeG=button.width()-ksgUf-3
}
if((img.length==0)||(img.attr("src")==undefined))
{


}
var cl=o.attr("class")
var clParam=extractClassInfo(cl,"param")
vqVln.css("border-bottom","0px none")
var FLXrD=o
FLXrD=RLpxi 
FLXrD.data("link_data",o)
if(clParam!=null)
FLXrD.hover(function(){
var o=waJSQuery(this).data("link_data")
var button=waJSQuery(">button",o);
var kuAJB=button.data("waButState")
if(kuAJB==undefined) kuAJB=0;
if(kuAJB!=0) return;
button.data("waButState",1)
var height=button.outerHeight()
var hDsph=(extractParamInfo(button,"aqua")=="1")
var txtSpan=button.find(".wa-but-txt") 


var imgTag=waJSQuery(">img",button);
imgTag=button.find("img");
var innerSpan=waJSQuery(">.waButInner",o);
button.data('wa-style',button.attr('style'))
if(isMSIE_lower_than_ie9())
{
button.data('wa-style-bg-img',button.css('background-image'))
}
txtSpan.data('wa-style',txtSpan.attr('style'))
imgTag.data('wa-style',imgTag.attr('style'))
innerSpan.data('wa-style',innerSpan.attr('style'))
imgTag.data('wa-style-src',imgTag.attr('src')) 
{
var bg=extractParamInfo(o,"bg")
if(bg.length>0)
{
var cols=bg.split(" ")
var TOGxP=cols[0]
var MpoKM=TOGxP
if(cols.length>1)MpoKM=cols[1]
var hgRei=getBrowserInfos();
var bJkEc=waPercentGradientButton(button)
if(hgRei.engine=="webkit")
{
var nkEwY=Math.round(height*bJkEc/100) 
button.css("background","-webkit-gradient(linear,0 "+nkEwY+", 0 "+height+",from("+TOGxP+"),to("+MpoKM+"))")
}
if(hgRei.engine=="ff")
{
button.css("background","-moz-linear-gradient(top left -90deg,"+TOGxP+" "+bJkEc+"%, "+MpoKM+" 100%)")
}
}
var borderCol=extractParamInfo(button,"border");
var borderColOver=extractParamInfo(o,"bord");
var wqvLF=new RGBColor(borderColOver)
var HbQrk=wqvLF.a>0;
var PdsOu=new RGBColor(borderCol)
var YDfMt=PdsOu.a>0;
if(HbQrk)
{
button.css("border","1px solid "+borderColOver)
}
else
{
button.css("border","0px")
}
var bg_img=extractParamInfo(o,"bg_img");
if(bg_img&&(bg_img.length>0))
{

var spmeF=button.width();
var ZnVLv=button.height();
if((YDfMt))
{
spmeF+=2;
ZnVLv+=2;
}
button.css({"background-image":"url('"+bg_img+"')","background-size":""+spmeF+"px "+ZnVLv+"px"})
}
}
var inner_borderCol=extractParamInfo(o,"inner_bord");
if(inner_borderCol&&(inner_borderCol.length>0))
{
innerSpan.css("border-color",inner_borderCol)
}
var txtCol=extractParamInfo(o,"txt");
if(txtCol&&(txtCol.length>0))
{
txtSpan.css("color",txtCol)
button.css("color",txtCol)
}
var jiQYd=extractParamInfo(o,"u");
if(jiQYd&&(jiQYd.length>0))
{
if(jiQYd=="1")
{
txtSpan.css("textDecoration","underline")
if(isMSIE())
{
button.css("textDecoration","underline")
}
}
else
{
txtSpan.css("textDecoration","none")
if(isMSIE())
{
button.css("textDecoration","none")
}
}
}
var img=extractParamInfo(o,"img");
if(img!=undefined)
{
if(img.length==0)
{
imgTag.css("width",0)
}
else
{
var img_pars=img.split(" ")
imgTag.attr("src",img_pars[0])
imgTag.css("width",img_pars[1])
imgTag.css("height",img_pars[2])
}
}
{
waHackButtonOver(o)
}
},function(){
var o=waJSQuery(this).data("link_data") 
var button=waJSQuery(">button",o);
var kuAJB=button.data("waButState")
if(kuAJB==undefined)kuAJB=0;
if(kuAJB!=1) return;
button.data("waButState",0)
var txtSpan=button.find(".wa-but-txt")
var imgTag=waJSQuery(">img",button);
imgTag=button.find("img");
var innerSpan=waJSQuery(">.waButInner",o);
button.attr("style",button.data("wa-style"))
if(isMSIE_lower_than_ie9())
{
button.css("background-image",button.data("wa-style-bg-img"))
}
txtSpan.attr("style",txtSpan.data("wa-style"))
imgTag.attr("style",imgTag.data("wa-style"))
imgTag.attr("src",imgTag.data("wa-style-src"))
innerSpan.attr("style",innerSpan.data("wa-style"))
waHackButtonOut(button)
});
}
function waActivateOverButtons()
{
waJSQuery(".wa-button-link").each(function(i)
{
var liPqL=waJSQuery(this) 
waActivateOverButton(liPqL)
})
}
function JlEWs(liPqL)
{
wa_timeout(function(){JlEWs(liPqL)},1000)
var VHVpD=liPqL.find("div")
VHVpD.position().top
var pBESE=VHVpD.data("data-marquee")
var TJgeY=pBESE.orientation
var ZHcdR=pBESE.speed
}
function ostJH(VHVpD,now,fx)
{
if(isMSIE())
{
var pBESE=VHVpD.data("data-marquee")
var PqXLf=pBESE.size_cont;
var DIJvB=0;
var cSxUl=0;
if(pBESE.orientation!=0) 
{
DIJvB=-now;
}
else
{
cSxUl=-now;
}
var GqEsC=PqXLf.width()
var AmOfF=PqXLf.height()
var IUAlt=0;
var CheOG=IUAlt+DIJvB;
var dwIZC=IUAlt+cSxUl;
var bDUfw=GqEsC+DIJvB;;
var BqjCi=AmOfF+cSxUl
VHVpD.css("clip","rect("+dwIZC+"px,"+bDUfw+"px,"+BqjCi+"px,"+CheOG+"px)")
}
}
function sMQln(VHVpD,afFQX)
{
var pBESE=VHVpD.data("data-marquee")
var lAHbZ=pBESE.prop
var RDIRb=pBESE.size
var jZHoK=pBESE.innerSize
var SbvGe=pBESE.compSize
var iRmaZ=0;
var EAmxc=0;
var iGiDf={}
if(pBESE.orientation!=0) 
{
if(afFQX==false)
{
iRmaZ=VHVpD.position().left;;
VHVpD.css({"left":iRmaZ})
}
else
{
var bxKlw=VHVpD.data("first-pos-marquee")
if(bxKlw==undefined)
{
bxKlw=VHVpD.position().left;
VHVpD.data("first-pos-marquee",bxKlw)
}
else
{
VHVpD.css({"left":bxKlw})
}
iRmaZ=bxKlw;
}
if(iRmaZ<=-jZHoK)
{
iRmaZ=SbvGe
VHVpD.css(lAHbZ,iRmaZ)
}
EAmxc=-RDIRb;
iGiDf={"left":EAmxc}
}
else
{
if(afFQX==false)
{
iRmaZ=VHVpD.position().top;;
VHVpD.css({"top":iRmaZ})
}
else
{
var bxKlw=VHVpD.data("first-pos-marquee")
if(bxKlw==undefined)
{
bxKlw=VHVpD.position().top;
VHVpD.data("first-pos-marquee",bxKlw)
}
else
{
VHVpD.css({"top":bxKlw})
}
iRmaZ=bxKlw;
}
if(iRmaZ<=-jZHoK)
{
iRmaZ=SbvGe
VHVpD.css(lAHbZ,iRmaZ)
}
EAmxc=-RDIRb;
iGiDf={"top":EAmxc}
}
var aCLVk=((iRmaZ-EAmxc)*1000)/pBESE.speed
var kcWdx={
"duration":aCLVk,"easing":"linear","complete":function(){sMQln(waJSQuery(this),true);},"step":function(now,fx){ostJH(waJSQuery(this),now,fx);}
};
VHVpD.animate(iGiDf,kcWdx);
}
function kamuO(liPqL)
{
var TJgeY=parseInt(extractParamInfo(liPqL,"orientation","param_marquee"))
var ZHcdR=parseInt(extractParamInfo(liPqL,"speed","param_marquee")) 

var VHVpD=liPqL.find("div")
var lAHbZ="top"
var sLqKL=VHVpD.height()
var TfCag=VHVpD.innerHeight()
var SbvGe=liPqL.height();
if(TJgeY!=0) 
{
var LVTMC=VHVpD.find("div")
var BZTWf=LVTMC.html()
var jrpXZ=VHVpD.innerWidth();
var AmOfF=LVTMC.innerHeight();
var QsGmL=AmOfF
var HBJne=jrpXZ;
for(var GqEsC=jrpXZ;GqEsC<10000;GqEsC+=30)
{
VHVpD.css("width",GqEsC)
AmOfF=LVTMC.innerHeight();
if(AmOfF<QsGmL)
{
QsGmL=AmOfF
HBJne=GqEsC
}
}
VHVpD.css("width",HBJne+2)
}
if(TJgeY!=0) 
{
SbvGe=liPqL.width();
lAHbZ="left"
sLqKL=VHVpD.width()
TfCag=VHVpD.innerWidth() 
VHVpD.css(lAHbZ,SbvGe) 

}
else
{
SbvGe=liPqL.height();
lAHbZ="top"
sLqKL=VHVpD.height()
TfCag=VHVpD.innerHeight()
VHVpD.css(lAHbZ,SbvGe)
}
VHVpD.data("data-marquee",{"speed":ZHcdR,"orientation":TJgeY,"size":sLqKL,"innerSize":TfCag,"prop":lAHbZ,"compSize":SbvGe,"size_cont":new Size(liPqL.width(),liPqL.height())})
VHVpD.hover(function(){
waJSQuery(this).stop();
},function(){
sMQln(waJSQuery(this),false)
});
sMQln(VHVpD)
}
function initializeWA_JQuery()
{


if(isMSIE())
{
var ctrxT=new Array();
var ItloN=waWebFontDescription.families
for(var i=0;i<ItloN.length;i++)
{
var oUZhf=ItloN[i]
ctrxT.push(oUZhf+"::latin")
}
WebFontConfig={
google:{families:ctrxT}
};
if(ctrxT.length>0)
{
waLoadGoogleFonts()
}
}
IS_onload();




waJSQuery(".reflect").reflect();
waJSQuery(".wa-img").each(function()
{
var liPqL=waJSQuery(this)
var oOFUC=extractParamInfo(liPqL,"over");
if(isMobileBrowser()==false)
if(oOFUC.length>0)
{
liPqL.hover(function(){
var o=waJSQuery(this)
var img=o
var over=extractParamInfo(o,"over");
var xXhja=waJSQuery(this).data('src_out') 
if(xXhja==undefined)
{
waJSQuery(this).data('src_out',img.attr('src'))
}

img.attr("src",over)
},function(){
var o=waJSQuery(this)
var img=o
img.attr("src",waJSQuery(this).data("src_out")) 

});
}
}) 


waJSQuery(".wa-text").each(function()
{
if(isMSIE())
{
var GqEsC=waJSQuery(this).width()
var AmOfF=waJSQuery(this).height()
var JZlao=waJSQuery(this).children("div") 
var AlPgB=parseInt(JZlao.css("marginTop"))
if(isNaN(AlPgB))AlPgB=0;
var DnLsw=parseInt(extractParamInfo(waJSQuery(this),"border","param")) 
var IUAlt=DnLsw;
JZlao.css("margin",(AlPgB+IUAlt)+"px")
}
}) 


waJSQuery(".wa-textmarquee").each(function()
{
kamuO(waJSQuery(this))
}) 


waActivateOverButtons()
waHackGradient()
waHackButtons()
waGlobalPatchIE()
}
function waGlobalPatchIE()
{
if(isMSIE())
{
if(window.waPatchIE)
{
waPatchIE()
}
}
}(function(waJSQuery){
waJSQuery.fn.extend({
reflect:function(options){
var liPqL=waJSQuery(this)
var _radius=waExtractRadiusFromCss(liPqL) 
options=waJSQuery.extend({
height:1/3,opacity:0.5,borderRadius:_radius
},options);
return this.unreflect().each(function(){
var img=this;
if(/^img$/i.test(img.tagName)){
function doReflect(){
var imageWidth=img.width,imageHeight=img.height,reflection,reflectionHeight,wrapper,context,gradient;
reflectionHeight=Math.floor(imageHeight*options.height)
reflection=waJSQuery("<canvas />")[0];
if(reflection.getContext){
context=reflection.getContext("2d");
try{
waJSQuery(reflection).attr({width:imageWidth,height:imageHeight});
context.save();
context.translate(0,imageHeight-1);
context.scale(1,-1);
context.drawImage(img,0,0,imageWidth,imageHeight);
context.restore();
context.globalCompositeOperation="destination-out";
gradient=context.createLinearGradient(0,0,0,reflectionHeight);
gradient.addColorStop(0,"rgba(255, 255, 255, "+(1-options.opacity)+")");
gradient.addColorStop(1,"rgba(255, 255, 255, 1.0)");
context.fillStyle=gradient;
context.rect(0,0,imageWidth,imageHeight);
context.fill();
}catch(e){
return;
}
}else{
if(!waJSQuery.browser.msie) return;
reflection=waJSQuery("<img />").attr("src",img.src).css({
width:imageWidth,height:imageHeight,marginBottom:reflectionHeight-imageHeight,filter:"FlipV progid:DXImageTransform.Microsoft.Alpha(Opacity="+(options.opacity*100)+", FinishOpacity=0, Style=1, StartX=0, StartY=0, FinishX=0, FinishY="+(reflectionHeight/imageHeight*100)+")"
})[0];
}
var xZCWe=options.borderRadius 
var qQOiB=new Array(xZCWe[3],xZCWe[2],xZCWe[1],xZCWe[0])
var eUcWu=xZCWe.join("px ")+"px"
var YeRQZ=qQOiB.join("px ")+"px"
waJSQuery(reflection).css({display:"block",borderRadius:YeRQZ});
wrapper=waJSQuery(/^a$/i.test(img.parentNode.tagName)?"<span />":"<div />").insertAfter(img).append([img,reflection])[0];
wrapper.className=img.className;
waJSQuery.data(img,"reflected",wrapper.style.cssText=img.style.cssText);
waJSQuery(wrapper).css({width:imageWidth,height:imageHeight+reflectionHeight,overflow:"hidden"});
img.style.cssText="display: block;border:0px none;-webkit-border-radius:"+eUcWu+";-moz-border-radius:"+eUcWu+";border-radius:"+eUcWu+";width:"+imageWidth+"px;height:"+imageHeight+"px;" 

img.className="reflected";
}
if(img.complete) doReflect();
else waJSQuery(img).load(doReflect);
}
});
},unreflect:function(){
return this.unbind("load").each(function(){
var img=this,reflected=waJSQuery.data(this,"reflected"),wrapper;
if(reflected!==undefined){
wrapper=img.parentNode;
img.className=wrapper.className;
img.style.cssText=reflected;
waJSQuery.removeData(img,"reflected");
wrapper.parentNode.replaceChild(img,wrapper);
}
});
}
});
})(waJSQuery);(function(waJSQuery){
waJSQuery.fn.touchwipe=function(settings){
var config={
min_move_x:20,min_move_y:20,wipeLeft:function(){},wipeRight:function(){},wipeUp:function(){},wipeDown:function(){},preventDefaultEvents:true
};
if(settings) waJSQuery.extend(config,settings);
this.each(function(){
var startX;
var startY;
var isMoving=false;
function cancelTouch(){
this.removeEventListener('touchmove',onTouchMove);
startX=null;
isMoving=false;
}
function onTouchMove(e){
if(config.preventDefaultEvents){
e.preventDefault();
}
if(isMoving){
var x=e.touches[0].pageX;
var y=e.touches[0].pageY;
var dx=startX-x;
var dy=startY-y;
if(Math.abs(dx)>=config.min_move_x){
cancelTouch();
if(dx>0){
config.wipeLeft();
}
else{
config.wipeRight();
}
}
else if(Math.abs(dy)>=config.min_move_y){
cancelTouch();
if(dy>0){
config.wipeDown();
}
else{
config.wipeUp();
}
}
}
}
function onTouchStart(e)
{
if(e.touches.length==1){
startX=e.touches[0].pageX;
startY=e.touches[0].pageY;
isMoving=true;
this.addEventListener('touchmove',onTouchMove,false);
}
}
if('ontouchstart' in document.documentElement){
this.addEventListener('touchstart',onTouchStart,false);
}
});
return this;
};
})(waJSQuery);



function waChgtLanguage(kqZmB,XkoOM)
{
var TGxCb=Translator.m_languages;
var XBsLc=window.location.pathname;
var nFuEs=window.location.href;
var AdtYS=window.location.host
var FwXwY=XBsLc.lastIndexOf("/")
var dfrGS=""
var gAeLO=XBsLc
if(FwXwY>-1)
{
dfrGS=XBsLc.substring(0,FwXwY+1)
gAeLO=XBsLc.substring(FwXwY+1)
}
if(gAeLO.length==0)
{
gAeLO="index.html"
nFuEs+=gAeLO;
}
if(document.webaca_is_preview)
{
if(TGxCb!=undefined)
{
var AOoBU=TGxCb[kqZmB]
if(AOoBU)
{
window.location.replace(AOoBU)
return;
}
}
}
else
{
var HChUn=nFuEs
HChUn=HChUn.replace(AdtYS,XkoOM);
if(TGxCb!=undefined)
{
var AOoBU=TGxCb[kqZmB]
HChUn=HChUn.replace(gAeLO,AOoBU);

window.location.replace(HChUn)
}
}
}
function waAutoDetectAndRedirectLang(MoQZL)
{
if((MoQZL.enable_preview_redirect!=true)&&document.webaca_is_preview)
{
return;
}
if(isProbablyRobot())
{
return;
}
if((MoQZL.restricted_host!=undefined)&&(document.webaca_is_preview!=true))
{
var DZbVU=false;
for(var i=0;i<MoQZL.restricted_host.length;i++)
{
var XkoOM=MoQZL.restricted_host[i]
if(window.location.host==XkoOM)
{
DZbVU=true;
break;
}
}
if(DZbVU==false)
{
return;
}
}
var NKsil=navigator.language;
if(navigator.browserLanguage)
NKsil=navigator.browserLanguage;
var FwXwY=NKsil.indexOf("-")
if(FwXwY>0)
{
NKsil=NKsil.substr(0,FwXwY)
}
if(Translator.m_lang!=NKsil)
{
if(MoQZL.enabled_internal_redirect!=false)
{
var TGxCb=Translator.m_languages;
if(TGxCb)
{
var kqZmB=TGxCb[NKsil]
if(kqZmB)
{
window.location.replace(kqZmB)
return;
}
}
}
if(MoQZL.redirect!=undefined)
{
var XkoOM=MoQZL.redirect[NKsil]
if(XkoOM!=undefined)
{
waChgtLanguage(NKsil,XkoOM);

}
}
}
}

-->
