<?php
/**
 * @file
 * Returns the HTML for the basic html structure of a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728208
 */
?><!DOCTYPE html>
<!--[if IEMobile 7]>
<html class="html iem7" <?php print $html_attributes; ?>><![endif]-->
<!--[if lte IE 6]>
<html class="html lt-ie9 lt-ie8 lt-ie7" <?php print $html_attributes; ?>><![endif]-->
<!--[if (IE 7)&(!IEMobile)]>
<html class="html lt-ie9 lt-ie8" <?php print $html_attributes; ?>><![endif]-->
<!--[if IE 8]>
<html class="html lt-ie9" <?php print $html_attributes; ?>><![endif]-->
<!--[if (gte IE 9)|(gt IEMobile 7)]><!-->
<html class="html" <?php print $html_attributes . $rdf_namespaces; ?>><!--<![endif]-->
<head>
    <?php print $head; ?>
    <title><?php print $head_title; ?></title>

    <meta http-equiv="cleartype" content="on">

    <?php print $styles; ?>


    <script type="text/javascript">
        if (typeof Muse == "undefined") window.Muse = {};
        window.Muse.assets = {
            "required": ["jquery-1.8.3.min.js", "museutils.js", "webpro.js", "musewpslideshow.js", "jquery.museoverlay.js", "touchswipe.js", "jquery.scrolleffects.js", "jquery.musepolyfill.bgsize.js", "jquery.watch.js", "jquery.musemenu.js", "museredirect.js", "index.css"],
            "outOfDate": []
        };
    </script>

    <!--script src="/sites/all/themes/custom/hokins/tpl/js/contrib/museredirect.js?17485671" type="text/javascript"></script-->

    <script type="text/javascript">
        //Muse.Redirect.redirect('desktop', 'tablet/index.php', 'phone/index.php', '');
    </script>

    <meta http-equiv="Content-type" content="text/html;charset=UTF-8"/>
    <meta name="description" content="EP Release promo website"/>
    <meta name="keywords" content="Hokins, rock, punk, website, music, track, single, landing, one page"/>
    <meta name="generator" content="2014.2.1.284"/>

    <link rel="shortcut icon" href="/sites/all/themes/custom/hokins/tpl/img/home-favicon.ico?424855497"/>

    <title>HOKINS &#45; EP Release</title>

    <!--link media="only screen and (max-device-width: 370px)" rel="alternate" href="http://www.tools4dj.ru/phone/index.php"/>
    <link media="only screen and (max-device-width: 960px)" rel="alternate" href="http://www.tools4dj.ru/tablet/index.php"/-->

    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="/sites/all/themes/custom/hokins/tpl/css/site_global.css?3968235388"/>
    <link rel="stylesheet" type="text/css" href="/sites/all/themes/custom/hokins/tpl/css/index.css?314114930" id="pagesheet"/>

    <!--[if lt IE 9]>
    <link rel="stylesheet" type="text/css" href="/sites/all/themes/custom/hokins/tpl/css/iefonts_index.css?379738519"/>
    <![endif]-->
    <!-- Other scripts -->
    <script type="text/javascript">
        document.documentElement.className += ' js';
        var __adobewebfontsappname__ = "muse";
    </script>
    <!-- JS includes -->
    <script type="text/javascript">
        document.write('\x3Cscript src="' + (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//webfonts.creativecloud.com/montserrat:n4:all;raleway:n4,n7,n6:all.js" type="text/javascript">\x3C/script>');
    </script>
    <!--[if lt IE 9]>
    <script src="/sites/all/themes/custom/hokins/tpl/js/contrib/html5shiv.js?4241844378"
            type="text/javascript"></script>
    <![endif]-->
    <!--custom head HTML-->
    <!--script type="text/javascript" src="/sites/all/themes/custom/hokins/tpl/js/contrib/gumroad.js"></script-->
</head>

<body class="museBGSize">
    <?php print $page; ?>

    <!-- JS includes -->
    <script type="text/javascript">
        if (document.location.protocol != 'https:') document.write('\x3Cscript src="http://musecdn.businesscatalyst.com/scripts/4.0/jquery-1.8.3.min.js" type="text/javascript">\x3C/script>');
    </script>
    <script type="text/javascript">
        window.jQuery || document.write('\x3Cscript src="./tpl/js/contrib/jquery-1.8.3.min.js" type="text/javascript">\x3C/script>');
    </script>
    <script src="/sites/all/themes/custom/hokins/tpl/js/contrib/museutils.js" type="text/javascript"></script>
    <script src="/sites/all/themes/custom/hokins/tpl/js/contrib/jquery.musepolyfill.bgsize.js" type="text/javascript"></script>
    <script src="/sites/all/themes/custom/hokins/tpl/js/contrib/jquery.scrolleffects.js" type="text/javascript"></script>
    <script src="/sites/all/themes/custom/hokins/tpl/js/contrib/webpro.js?474087315" type="text/javascript"></script>
    <script src="/sites/all/themes/custom/hokins/tpl/js/contrib/musewpslideshow.js" type="text/javascript"></script>
    <script src="/sites/all/themes/custom/hokins/tpl/js/contrib/jquery.museoverlay.js" type="text/javascript"></script>
    <script src="/sites/all/themes/custom/hokins/tpl/js/contrib/touchswipe.js" type="text/javascript"></script>
    <script src="/sites/all/themes/custom/hokins/tpl/js/contrib/jquery.musemenu.js" type="text/javascript"></script>
    <script src="/sites/all/themes/custom/hokins/tpl/js/contrib/jquery.watch.js" type="text/javascript"></script>
    <!-- Other scripts -->
    <script src="/sites/all/themes/custom/hokins/tpl/js/custom/common.js" type="text/javascript"></script>
    <script type="text/javascript">
        /*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
         * Licensed under the MIT License (LICENSE.txt).
         *
         * Version: 3.1.12
         *
         * Requires: jQuery 1.2.2+
         */
        !function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
    </script>
    <script type="text/javascript">
        !function(){function t(t){return t.replace(/([A-Z])/g,function(t,e){return e.toLowerCase()})}function e(){if("horiz"==a)var t=$(window).scrollLeft(),e="left";else var t=$(window).scrollTop(),e="top";var o=0;return f.each(function(r,n){return $(n).offset()[e]>t?!1:void(o=r)}),o}function o(t){var e=document.createElement("a");return e.href="#"+t.id,e.className="anim_swing",Muse.Utils.processHyperlink(e),!1}function r(){var t=e()+1;return t<f.length?o(f[t]):void 0}function n(){var t=e()-1;return t>=0?o(f[t]):void 0}var f=$("a:not([href])"),i="Contactsm".split(/\s*,\s*/),a="vert";if(i&&i.length&&(1!=i.length||""!=i[0])){for(var l in i)i[l]=t(i[l]);f=f.filter(function(t,e){return i.indexOf(e.id)<0?e:null})}var s;switch(a){case"vert":s=function(t,e){return $(t).offset().top-$(e).offset().top};break;case"horiz":s=function(t,e){return $(t).offset().left-$(e).offset().left};break;default:s=function(t,e){return $(t).offset().top==$(e).offset().top?$(t).offset().left-$(e).offset().left:$(t).offset().top-$(e).offset().top}}f.sort(s);var u=!1;$(document).mousewheel(function(t){t.originalEvent||t;if(u||(t.metaKey||t.ctrlKey||t.altKey||t.shiftKey)){if(u)return!1}else{if(t.deltaY<0||t.deltaX>0){{var o=e();f[o+1],"horiz"==a?$(window).scollLeft():$(window).scrollTop(),"horiz"==a?window.innerWidth:window.innerHeight,t.deltaY<0?t.deltaY*t.deltaFactor*-1:t.deltaX*t.deltaFactor}return u=true,setTimeout(function(){u=!1},1000),r()}if(t.deltaY>0||t.deltaX<0){{var o=e();f[o],"horiz"==a?$(window).scollLeft():$(window).scrollTop(),t.deltaY>0?t.deltaY*t.deltaFactor*-1:t.deltaX*t.deltaFactor}return u=true,setTimeout(function(){u=!1},1000),n()}}})}();
    </script>
</body>
</html>