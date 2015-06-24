function OjODB()
{
waJSQuery(".wa-comp").each(function(i)
{
var liPqL=waJSQuery(this)
var nrFQs=liPqL.attr("style")
var uWOqS=liPqL.data("ms-opacity")
var KtpAm=waExtractCssStyle(nrFQs,"-moz-transform")
if(KtpAm.length>0)
{
var FwXwY=KtpAm.indexOf("(")
if(FwXwY>-1)
{
KtpAm=KtpAm.substring(FwXwY+1)
FwXwY=KtpAm.indexOf("deg")
if(FwXwY>-1)
{
KtpAm=KtpAm.substring(0,FwXwY)
}
}
KtpAm=parseInt(KtpAm)
var wCUtv=0;
var eJPnw=0;
var IUAlt=waExtractCssStyle(nrFQs,"-ms-transform-offset") 
var serkd=IUAlt.split(" ")
if(serkd.length==2)
{
wCUtv=parseInt(serkd[0])
eJPnw=parseInt(serkd[1])
}
var rad_rot=KtpAm*2*Math.PI/360;
var costheta=Math.cos(rad_rot);
var sintheta=Math.sin(rad_rot);
var M11=costheta;
var M12=-sintheta;
var M21=sintheta;
var M22=costheta;
liPqL.css({"left":liPqL.position().left+wCUtv,"top":liPqL.position().top+eJPnw})
var HXCII="progid:DXImageTransform.Microsoft.Matrix(M11="+M11+",M12="+M12+",M21="+M21+",M22="+M22+",SizingMethod='auto expand') ";
if((isNaN(uWOqS)==false)&&(uWOqS>=0)&&(uWOqS<1))
{
HXCII+="Alpha(opacity="+Math.floor(uWOqS*100)+")"
}
liPqL.css("filter",HXCII) 
}
});
}
function UNHRb(liPqL,HFlAx,KCZUL)
{
if(KCZUL==undefined)KCZUL=""
if(HFlAx&&(HFlAx!="#")&&(HFlAx!="javascript:void(0)")&&(HFlAx.indexOf("javascript:")==-1))
{
liPqL.css("cursor","pointer")
liPqL.data("href_ie8",HFlAx)
liPqL.data("target_ie8",KCZUL)
liPqL.attr("href","javascript:void(0)")
liPqL.attr("target","")
liPqL.click(function(){
var liPqL=waJSQuery(this)
var HFlAx=liPqL.data("href_ie8")
var KCZUL=liPqL.data("target_ie8")
return waOnClick(HFlAx,{"targ":KCZUL})
});
}
}
function KodCM()
{

waJSQuery(".wa-comp").each(function(i)
{
var liPqL=waJSQuery(this)
var nrFQs=liPqL.attr("style")
var uWOqS=waExtractCssStyle(nrFQs,"opacity")
var uWOqS=parseFloat(uWOqS)
if((isNaN(uWOqS)==false)&&(uWOqS>=0)&&(uWOqS<1))
{
liPqL.css("filter","Alpha(opacity="+Math.floor(uWOqS*100)+")")
liPqL.data("ms-opacity",uWOqS)
}
});
waJSQuery(".wa-button").each(function(i)
{
var liPqL=waJSQuery(this)
var nwCgo=liPqL.find(".wa-but-txt")
var VHVpD=nwCgo.parent("div")
VHVpD.css("width",nwCgo.width())
if(liPqL.height()<VHVpD.height())
{
var KeRUq=(liPqL.width()-VHVpD.width())/2
var teifU=(liPqL.height()-VHVpD.height())/2 
VHVpD.css({"position":"absolute","left":KeRUq,"top":teifU})
}

});

{
waJSQuery(".wa-dynmenu").each(function(i)
{
var liPqL=waJSQuery(this)
var scfdn=waGetJsonCss(liPqL,"config");
if(scfdn.vertical)
{
var vGMZG=liPqL.find("TD")
vGMZG.each(function(i)
{
var ZmQGJ=waJSQuery(this)
var AmOfF=ZmQGJ.height()
AmOfF=AmOfF-2
ZmQGJ.css({"line-height":AmOfF+"px","height":AmOfF+"px"})
})
}
});
}
OjODB()
}
function waPatchIE()
{
if(isMSIE()==false)
{
return;
}
if(isMSIE_lower_than_ie9())
{
KodCM()
}

}
