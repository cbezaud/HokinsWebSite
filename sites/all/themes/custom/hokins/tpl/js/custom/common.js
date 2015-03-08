jQuery(document).ready(function () {
    try {
        (function () {
            var a = {}, b = function (a) {
                if (a.match(/^rgb/))return a = a.replace(/\s+/g, "").match(/([\d\,]+)/gi)[0].split(","), (parseInt(a[0]) << 16) + (parseInt(a[1]) << 8) + parseInt(a[2]);
                if (a.match(/^\#/))return parseInt(a.substr(1), 16);
                return 0
            };
            (function () {
                jQuery('link[type="text/css"]').each(function () {
                    var b = (jQuery(this).attr("href") || "").match(/\/?css\/([\w\-]+\.css)\?(\d+)/);
                    b && b[1] && b[2] && (a[b[1]] = b[2])
                })
            })();
            (function () {
                jQuery("body").append('<div class="version" style="display:none; width:1px; height:1px;"></div>');
                for (var c = jQuery(".version"), d = 0; d < Muse.assets.required.length;) {
                    var f = Muse.assets.required[d], g = f.match(/([\w\-\.]+)\.(\w+)jQuery/), k = g && g[1] ? g[1] : null, g = g && g[2] ? g[2] : null;
                    switch (g.toLowerCase()) {
                        case "css":
                            k = k.replace(/\W/gi, "_").replace(/^([^a-z])/gi, "_$1");
                            c.addClass(k);
                            var g = b(c.css("color")), h = b(c.css("background-color"));
                            g != 0 || h != 0 ? (Muse.assets.required.splice(d, 1), "undefined" != typeof a[f] && (g != a[f] >>> 24 || h != (a[f] & 16777215)) && Muse.assets.outOfDate.push(f)) : d++;
                            c.removeClass(k);
                            break;
                        case "js":
                            k.match(/^jquery-[\d\.]+/gi) &&
                                typeof jQuery != "undefined" ? Muse.assets.required.splice(d, 1) : d++;
                            break;
                        default:
                            throw Error("Unsupported file type: " + g);
                    }
                }
                c.remove();
                //if (Muse.assets.outOfDate.length || Muse.assets.required.length)
                //   c = "Some files on the server may be missing or incorrect. Clear browser cache and try again. If the problem persists please contact website author.", (d = location && location.search && location.search.match && location.search.match(/muse_debug/gi)) && Muse.assets.outOfDate.length && (c += "\nOut of date: " + Muse.assets.outOfDate.join(",")), d && Muse.assets.required.length && (c += "\nMissing: " + Muse.assets.required.join(",")), alert(c)
            })()
        })();


    /* body */
        Muse.Utils.transformMarkupToFixBrowserProblemsPreInit();

        /* body */
        Muse.Utils.prepHyperlinks(true);
        jQuery('#u93-4').registerPositionScrollEffect([{"in":[-Infinity,0],"speed":[0,0]},{"in":[0,Infinity],"speed":[0,0.3]}]);
        jQuery('#u81-4').registerPositionScrollEffect([{"in":[-Infinity,0],"speed":[0,0]},{"in":[0,Infinity],"speed":[0,0.3]}]);
        jQuery('#u96').registerPositionScrollEffect([{"in":[-Infinity,0],"speed":[0,0]},{"in":[0,Infinity],"speed":[0,0.3]}]);

        /* #pamphletu1447 TOP */
        Muse.Utils.initWidget('#pamphletu1447', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'stack',event:'mouseover',deactivationEvent:'mouseout_both',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:true,shuffle:false,enableSwipe:false,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false}); });

        /* unifiedNavBar Navigation vertical */
        Muse.Utils.initWidget('.MenuBar', function(elem) { return jQuery(elem).museMenu(); });

        /* #pamphletu1459 Album */
        Muse.Utils.initWidget('#pamphletu1459', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'stack',event:'mouseover',deactivationEvent:'mouseout_both',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:true,shuffle:false,enableSwipe:false,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false}); });

        /* #pamphletu1471 Listen */
        Muse.Utils.initWidget('#pamphletu1471', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'stack',event:'mouseover',deactivationEvent:'mouseout_both',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:true,shuffle:false,enableSwipe:false,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false}); });
        /* #u185-17 Menu top left */
        jQuery('#u185-17').registerPositionScrollEffect([{"in":[-Infinity,0],"speed":[0,0]},{"in":[0,Infinity],"speed":[0,0.2]}]);
        /* #u185-17 Menu top right */
        jQuery('#u187-17').registerPositionScrollEffect([{"in":[-Infinity,0],"speed":[0,0]},{"in":[0,Infinity],"speed":[0,0.2]}]);

        /* #pamphletu1483 Video */
        Muse.Utils.initWidget('#pamphletu1483', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'stack',event:'mouseover',deactivationEvent:'mouseout_both',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:true,shuffle:false,enableSwipe:false,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false}); });
        /* #pamphletu1495 Reviews */
        Muse.Utils.initWidget('#pamphletu1495', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'stack',event:'mouseover',deactivationEvent:'mouseout_both',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:true,shuffle:false,enableSwipe:false,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false}); });
        /* #pamphletu1507 preorder */
        //Muse.Utils.initWidget('#pamphletu1507', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'stack',event:'mouseover',deactivationEvent:'mouseout_both',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:true,shuffle:false,enableSwipe:false,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false}); });
        /* #pamphletu1519 about */
        Muse.Utils.initWidget('#pamphletu1519', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'stack',event:'mouseover',deactivationEvent:'mouseout_both',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:true,shuffle:false,enableSwipe:false,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false}); });
        /* #pamphletu1555 photos */
        Muse.Utils.initWidget('#pamphletu1555', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'stack',event:'mouseover',deactivationEvent:'mouseout_both',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:true,shuffle:false,enableSwipe:false,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false}); });
        /* #pamphletu1543 tourdates */
        Muse.Utils.initWidget('#pamphletu1543', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'stack',event:'mouseover',deactivationEvent:'mouseout_both',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:true,shuffle:false,enableSwipe:false,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false}); });
        /* #pamphletu1531 booking */
        //Muse.Utils.initWidget('#pamphletu1531', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'stack',event:'mouseover',deactivationEvent:'mouseout_both',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:true,shuffle:false,enableSwipe:false,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false}); });
        /* #pamphletu1612 contacts */
        Muse.Utils.initWidget('#pamphletu1612', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'stack',event:'mouseover',deactivationEvent:'mouseout_both',autoPlay:false,displayInterval:3000,transitionStyle:'fading',transitionDuration:500,hideAllContentsFirst:true,shuffle:false,enableSwipe:false,resumeAutoplay:false,resumeAutoplayInterval:3000,playOnce:false}); });

        /* resize height */
        Muse.Utils.resizeHeight();

        /* Album */
        jQuery('#u207-4').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,480],"opacity":0},{"in":[480,480],"opacity":100},{"fade":50,"in":[480,Infinity],"opacity":100}]);
        jQuery('#u209-4').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,530],"opacity":0},{"in":[530,530],"opacity":100},{"fade":50,"in":[530,Infinity],"opacity":100}]);
        jQuery('#u292-4').registerOpacityScrollEffect([{"fade":100,"in":[-Infinity,930],"opacity":0},{"in":[930,930],"opacity":100},{"fade":50,"in":[930,Infinity],"opacity":100}]);
        jQuery('#u313').registerOpacityScrollEffect([{"fade":100,"in":[-Infinity,1270],"opacity":0},{"in":[1270,1270],"opacity":100},{"fade":50,"in":[1270,Infinity],"opacity":100}]);

        // Listen
        jQuery('#u330-4').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,1460],"opacity":0},{"in":[1460,1460],"opacity":100},{"fade":50,"in":[1460,Infinity],"opacity":100}]);
        jQuery('#u329-4').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,1510],"opacity":0},{"in":[1510,1510],"opacity":100},{"fade":50,"in":[1510,Infinity],"opacity":100}]);
        // SoundCloud
        jQuery('#u331').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,1610],"opacity":0},{"in":[1610,1610],"opacity":100},{"fade":50,"in":[1610,Infinity],"opacity":100}]);
        jQuery('#u630').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,1796.95],"opacity":0},{"in":[1796.95,1796.95],"opacity":100},{"fade":50,"in":[1796.95,Infinity],"opacity":100}]);
        jQuery('#u634').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,1984.95],"opacity":0},{"in":[1984.95,1984.95],"opacity":100},{"fade":50,"in":[1984.95,Infinity],"opacity":100}]);

        // Video
        jQuery('#u355-4').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,2486.02],"opacity":0},{"in":[2486.02,2486.02],"opacity":100},{"fade":50,"in":[2486.02,Infinity],"opacity":100}]);
        jQuery('#u920').registerOpacityScrollEffect([{"fade":100,"in":[-Infinity,580],"opacity":0},{"in":[580,580],"opacity":100},{"fade":50,"in":[580,Infinity],"opacity":100}]);
        jQuery('#u922').registerOpacityScrollEffect([{"fade":100,"in":[-Infinity,580],"opacity":0},{"in":[580,580],"opacity":100},{"fade":50,"in":[580,Infinity],"opacity":100}]);
        jQuery('#u283').registerOpacityScrollEffect([{"fade":100,"in":[-Infinity,580],"opacity":0},{"in":[580,580],"opacity":100},{"fade":50,"in":[580,Infinity],"opacity":100}]);

        // Icones a coté de l'album
        //jQuery('#u1008').registerOpacityScrollEffect([{"fade":100,"in":[-Infinity,580],"opacity":0},{"in":[580,580],"opacity":100},{"fade":50,"in":[580,Infinity],"opacity":100}]);
        //jQuery('#u1016').registerOpacityScrollEffect([{"fade":100,"in":[-Infinity,580],"opacity":0},{"in":[580,580],"opacity":100},{"fade":50,"in":[580,Infinity],"opacity":100}]);
        jQuery('#u354-4').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,2536.02],"opacity":0},{"in":[2536.02,2536.02],"opacity":100},{"fade":50,"in":[2536.02,Infinity],"opacity":100}]);

        // Review
        jQuery('#u369-4').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,3468.02],"opacity":0},{"in":[3468.02,3468.02],"opacity":100},{"fade":50,"in":[3468.02,Infinity],"opacity":100}]);
        jQuery('#u368-4').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,3518.02],"opacity":0},{"in":[3518.02,3518.02],"opacity":100},{"fade":50,"in":[3518.02,Infinity],"opacity":100}]);
        jQuery('#u467').registerOpacityScrollEffect([{"fade":100,"in":[-Infinity,4073.92],"opacity":0},{"in":[4073.92,4073.92],"opacity":100},{"fade":50,"in":[4073.92,Infinity],"opacity":100}]);

        // Preorder
        //jQuery('#u489-4').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,4263.92],"opacity":0},{"in":[4263.92,4263.92],"opacity":100},{"fade":50,"in":[4263.92,Infinity],"opacity":100}]);
        //jQuery('#u488-4').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,4313.93],"opacity":0},{"in":[4313.93,4313.93],"opacity":100},{"fade":50,"in":[4313.93,Infinity],"opacity":100}]);

        // Video
        jQuery('#u360').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,2644],"opacity":0},{"in":[2644,2644],"opacity":100},{"fade":50,"in":[2644,Infinity],"opacity":100}]);

        /* #pamphletu383 LE groupe */
        Muse.Utils.initWidget('#pamphletu383', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'stack',event:'click',deactivationEvent:'none',autoPlay:false,displayInterval:3000,transitionStyle:'horizontal',transitionDuration:500,hideAllContentsFirst:false,shuffle:false,enableSwipe:true,resumeAutoplay:true,resumeAutoplayInterval:3000,playOnce:false}); });
        // Titre
        jQuery('#u555-4').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,5244.03],"opacity":0},{"in":[5244.03,5244.03],"opacity":100},{"fade":50,"in":[5244.03,Infinity],"opacity":100}]);
        // Presse Kit
        jQuery('#u554-4').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,5294.03],"opacity":0},{"in":[5294.03,5294.03],"opacity":100},{"fade":50,"in":[5294.03,Infinity],"opacity":100}]);

        // PREorder
        //jQuery('#u903').registerPositionScrollEffect([{"in":[-Infinity,4564],"speed":[3,1]},{"in":[4564,Infinity],"speed":[0,1]}]);
        //jQuery('#u901').registerPositionScrollEffect([{"in":[-Infinity,4564],"speed":[0,3]},{"in":[4564,Infinity],"speed":[0,1]}]);
        //jQuery('#u902').registerPositionScrollEffect([{"in":[-Infinity,4564],"speed":[-3,1]},{"in":[4564,Infinity],"speed":[0,1]}]);

        // Album release
        jQuery('#u556-4').registerOpacityScrollEffect([{"fade":100,"in":[-Infinity,5495],"opacity":0},{"in":[5495,5495],"opacity":100},{"fade":50,"in":[5495,Infinity],"opacity":100}]);

        // Vide entre presse kit et photo
        jQuery('#u557').registerOpacityScrollEffect([{"fade":100,"in":[-Infinity,5502],"opacity":0},{"in":[5502,5502],"opacity":100},{"fade":50,"in":[5502,Infinity],"opacity":100}]);

        // Photos
        jQuery('#u560-4').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,5653.03],"opacity":0},{"in":[5653.03,5653.03],"opacity":100},{"fade":50,"in":[5653.03,Infinity],"opacity":100}]);
        jQuery('#u561-4').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,5703.03],"opacity":0},{"in":[5703.03,5703.03],"opacity":100},{"fade":50,"in":[5703.03,Infinity],"opacity":100}]);

        /* #pamphletu562 Photos */
        Muse.Utils.initWidget('#pamphletu562', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'stack',event:'click',deactivationEvent:'none',autoPlay:false,displayInterval:3000,transitionStyle:'horizontal',transitionDuration:500,hideAllContentsFirst:false,shuffle:false,enableSwipe:true,resumeAutoplay:true,resumeAutoplayInterval:3000,playOnce:false}); });

        // Tour Date
        jQuery('#u598-4').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,6668.02],"opacity":0},{"in":[6668.02,6668.02],"opacity":100},{"fade":50,"in":[6668.02,Infinity],"opacity":100}]);
        jQuery('#u597-4').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,6718.03],"opacity":0},{"in":[6718.03,6718.03],"opacity":100},{"fade":50,"in":[6718.03,Infinity],"opacity":100}]);
        jQuery('#u725').registerOpacityScrollEffect([{"fade":100,"in":[-Infinity,7446.88],"opacity":0},{"in":[7446.88,7446.88],"opacity":100},{"fade":50,"in":[7446.88,Infinity],"opacity":100}]);

        // Booking Artist
        //jQuery('#u727-4').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,7636.88],"opacity":0},{"in":[7636.88,7636.88],"opacity":100},{"fade":50,"in":[7636.88,Infinity],"opacity":100}]);
        //jQuery('#u726-4').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,7686.88],"opacity":0},{"in":[7686.88,7686.88],"opacity":100},{"fade":50,"in":[7686.88,Infinity],"opacity":100}]);

        // Contact
        jQuery('#u753').registerOpacityScrollEffect([{"fade":100,"in":[-Infinity,8174.4],"opacity":0},{"in":[8174.4,8174.4],"opacity":100},{"fade":50,"in":[8174.4,Infinity],"opacity":100}]);
        jQuery('#u756-4').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,8362.03],"opacity":0},{"in":[8362.03,8362.03],"opacity":100},{"fade":50,"in":[8362.03,Infinity],"opacity":100}]);
        jQuery('#u757-4').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,8412.03],"opacity":0},{"in":[8412.03,8412.03],"opacity":100},{"fade":50,"in":[8412.03,Infinity],"opacity":100}]);
        jQuery('#u832-8').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,8419],"opacity":0},{"in":[8419,8419],"opacity":100},{"fade":50,"in":[8419,Infinity],"opacity":100}]);
        jQuery('#u765').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,8419],"opacity":0},{"in":[8419,8419],"opacity":100},{"fade":50,"in":[8419,Infinity],"opacity":100}]);
        jQuery('#u766').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,8419],"opacity":0},{"in":[8419,8419],"opacity":100},{"fade":50,"in":[8419,Infinity],"opacity":100}]);
        jQuery('#u890-8').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,8419],"opacity":0},{"in":[8419,8419],"opacity":100},{"fade":50,"in":[8419,Infinity],"opacity":100}]);
        //jQuery('#u767').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,8419],"opacity":0},{"in":[8419,8419],"opacity":100},{"fade":50,"in":[8419,Infinity],"opacity":100}]);
        jQuery('#u780').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,8419],"opacity":0},{"in":[8419,8419],"opacity":100},{"fade":50,"in":[8419,Infinity],"opacity":100}]);
        jQuery('#u783').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,8419],"opacity":0},{"in":[8419,8419],"opacity":100},{"fade":50,"in":[8419,Infinity],"opacity":100}]);
        jQuery('#u781').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,8419],"opacity":0},{"in":[8419,8419],"opacity":100},{"fade":50,"in":[8419,Infinity],"opacity":100}]);
        jQuery('#u782').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,8419],"opacity":0},{"in":[8419,8419],"opacity":100},{"fade":50,"in":[8419,Infinity],"opacity":100}]);

        // Tour Date
        jQuery('#u881').registerPositionScrollEffect([{"in":[-Infinity,6826],"speed":[0,3]},{"in":[6826,Infinity],"speed":[0,1]}]);
        //jQuery('#u865').registerPositionScrollEffect([{"in":[-Infinity,6846],"speed":[0,3]},{"in":[6846,Infinity],"speed":[0,1]}]);
        //jQuery('#u849').registerPositionScrollEffect([{"in":[-Infinity,6966],"speed":[0,3]},{"in":[6966,Infinity],"speed":[0,1]}]);
        //jQuery('#u833').registerPositionScrollEffect([{"in":[-Infinity,7086],"speed":[0,3]},{"in":[7086,Infinity],"speed":[0,1]}]);
        //jQuery('#u717').registerPositionScrollEffect([{"in":[-Infinity,7206],"speed":[0,3]},{"in":[7206,Infinity],"speed":[0,1]}]);

        /* #widgetu735 Formulaire de contact */
        ////Muse.Utils.initWidget('#widgetu735', function(elem) { new WebPro.Widget.Form(elem, {validationEvent:'submit',errorStateSensitivity:'high',fieldWrapperClass:'fld-grp',formSubmittedClass:'frm-sub-st',formErrorClass:'frm-subm-err-st',formDeliveredClass:'frm-subm-ok-st',notEmptyClass:'non-empty-st',focusClass:'focus-st',invalidClass:'fld-err-st',requiredClass:'fld-err-st',ajaxSubmit:true}); });
        ////jQuery('#widgetu735').registerPositionScrollEffect([{"in":[-Infinity,7730],"speed":[0,3]},{"in":[7730,Infinity],"speed":[0,1]}]);

        /* Autres */
        Muse.Utils.fullPage('#page');
        Muse.Utils.showWidgetsWhenReady();
        Muse.Utils.transformMarkupToFixBrowserProblems();
    } catch(e) {
        if (e && 'function' == typeof e.notify) {
            e.notify();
        }
        else {
            Muse.Assert.fail('Error calling selector function:' + e);
        }
    }
});