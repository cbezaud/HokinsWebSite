<?php
/**
 * @file
 * Returns the HTML for the basic html structure of a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728208
 */
?><!DOCTYPE html>
<!--[if IEMobile 7]><html class="iem7" <?php print $html_attributes; ?> lang="en-GB"><![endif]-->
<!--[if lte IE 6]><html class="lt-ie9 lt-ie8 lt-ie7" <?php print $html_attributes; ?> lang="en-GB"><![endif]-->
<!--[if (IE 7)&(!IEMobile)]><html class="lt-ie9 lt-ie8" <?php print $html_attributes; ?> lang="en-GB"><![endif]-->
<!--[if IE 8]><html class="lt-ie9" <?php print $html_attributes; ?>><![endif]-->
<!--[if (gte IE 9)|(gt IEMobile 7)]><!--><html <?php print $html_attributes . $rdf_namespaces; ?> lang="en-GB"><!--<![endif]-->

<head>
  <?php print $head; ?>

  <script type="text/javascript">
    if(typeof Muse == "undefined") {
      window.Muse = {};
    }
    window.Muse.assets = {
      "required":[
        "jquery-1.8.3.min.js",
        "museutils.js",
        "webpro.js",
        "musewpslideshow.js",
        "jquery.museoverlay.js",
        "touchswipe.js",
        "jquery.scrolleffects.js",
        "jquery.musepolyfill.bgsize.js",
        "jquery.watch.js",
        "jquery.musemenu.js",
        "museredirect.js",
        "index.css"
      ],
      "outOfDate":[]
    };
  </script>

  <!--script src="/<?php echo path_to_theme(); ?>/tpl/js/contrib/museredirect.js" type="text/javascript"></script-->
  <script type="text/javascript">
    //Muse.Redirect.redirect('desktop', 'tablet/index.html', 'phone/index.html', '');
  </script>

  <meta http-equiv="Content-type" content="text/html;charset=UTF-8"/>
  <meta name="description" content="EP Release promo website"/>
  <meta name="keywords" content="Hokins, rock, punk, website, music, track, single, landing, one page"/>
  <meta name="generator" content="2014.2.1.284"/>

  <link rel="shortcut icon" href="/<?php echo path_to_theme(); ?>/tpl/img/home-favicon.ico"/>

  <title><?php //print $head_title; ?>HOKINS &#45; EP Release</title>

  <?php if ($default_mobile_metatags): ?>
    <meta name="MobileOptimized" content="width">
    <meta name="HandheldFriendly" content="true">
    <meta name="viewport" content="width=device-width">
  <?php endif; ?>
  <meta http-equiv="cleartype" content="on">

  <!-- CSS -->
  <?php print $styles; ?>
  <!--[if lt IE 9]>
  <link rel="stylesheet"
        type="text/css"
        href="/<?php echo path_to_theme(); ?>/tpl/css/iefonts_index"/>
  <![endif]-->



  <?php if ($add_html5_shim and !$add_respond_js): ?>
    <!--[if lt IE 9]>
    <script src="<?php print $base_path . $path_to_zen; ?>/js/html5.js"></script>
    <![endif]-->
  <?php elseif ($add_html5_shim and $add_respond_js): ?>
    <!--[if lt IE 9]>
    <script src="<?php print $base_path . $path_to_zen; ?>/js/html5-respond.js"></script>
    <![endif]-->
  <?php elseif ($add_respond_js): ?>
    <!--[if lt IE 9]>
    <script src="<?php print $base_path . $path_to_zen; ?>/js/respond.js"></script>
    <![endif]-->
  <?php endif; ?>

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
  <script src="/<?php echo path_to_theme(); ?>/tpl/js/contrib/html5shiv.js" type="text/javascript"></script>
  <![endif]-->

  <!--custom head HTML-->
  <!--script type="text/javascript" src="/<?php echo path_to_theme(); ?>/tpl/js/contrib/gumroad.js"></script-->
  <?php //print $scripts; ?>
  <script src="/<?php echo path_to_theme(); ?>/tpl/js/contrib/jquery-1.8.3.min.js" type="text/javascript"></script>
  <script type="text/javascript">jQuery.noConflict();</script>
  <script type="text/javascript">var $ = jQuery</script>

  <script src="/<?php echo path_to_theme(); ?>/tpl/js/contrib/museutils.js" type="text/javascript"></script>
  <script src="/<?php echo path_to_theme(); ?>/tpl/js/contrib/jquery.musepolyfill.bgsize.js" type="text/javascript"></script>
  <script src="/<?php echo path_to_theme(); ?>/tpl/js/contrib/jquery.scrolleffects.js" type="text/javascript"></script>
  <script src="/<?php echo path_to_theme(); ?>/tpl/js/contrib/webpro.js?474087315" type="text/javascript"></script>
  <script src="/<?php echo path_to_theme(); ?>/tpl/js/contrib/musewpslideshow.js" type="text/javascript"></script>
  <script src="/<?php echo path_to_theme(); ?>/tpl/js/contrib/jquery.museoverlay.js" type="text/javascript"></script>
  <script src="/<?php echo path_to_theme(); ?>/tpl/js/contrib/touchswipe.js" type="text/javascript"></script>
  <script src="/<?php echo path_to_theme(); ?>/tpl/js/contrib/jquery.musemenu.js" type="text/javascript"></script>
  <script src="/<?php echo path_to_theme(); ?>/tpl/js/contrib/jquery.mousewheel.min.js" type="text/javascript"></script>
  <script src="/<?php echo path_to_theme(); ?>/tpl/js/contrib/jquery.watch.js" type="text/javascript"></script>
  <!-- Other scripts -->
  <script src="/<?php echo path_to_theme(); ?>/tpl/js/custom/common.js" type="text/javascript"></script>

</head>
<body class="<?php print $classes; ?>" <?php print $attributes;?>>

  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>

  <script type="text/javascript">
    !function(){
      function t(t){
        return t.replace(/([A-Z])/g,function(t,e){
          //return e.toLowerCase()
        })
      }
      function e(){
        if("horiz"==a)
          var t=$(window).scrollLeft(),e="left";
        else
          var t=$(window).scrollTop(),e="top";
        var o=0;
        return f.each(function(r,n){
          return $(n).offset()[e]>t?!1:void(o=r)
        }),o
      }
      function o(t){
        var e=document.createElement("a");
        return e.href="#"+t.id,e.className="anim_swing",Muse.Utils.processHyperlink(e),!1
      }
      function r(){
        var t=e()+1;
        return t<f.length?o(f[t]):void 0
      }
      function n(){
        var t=e()-1;
        return t>=0?o(f[t]):void 0
      }
      var f=$("a:not([href])"),i="Contactsm".split(/\s*,\s*/),a="vert";
      if(i&&i.length&&(1!=i.length||""!=i[0])){
        for(var l in i)i[l]=t(i[l]);
        f=f.filter(function(t,e){
          return i.indexOf(e.id)<0?e:null
        })
      }
      var s;
      switch(a){
        case"vert":s=function(t,e){return $(t).offset().top-$(e).offset().top};
          break;
        case"horiz":s=function(t,e){return $(t).offset().left-$(e).offset().left};
          break;
        default:s=function(t,e){return $(t).offset().top==$(e).offset().top?$(t).offset().left-$(e).offset().left:$(t).offset().top-$(e).offset().top}
      }
      f.sort(s);
      var u=!1;
      $(document).mousewheel(function(t){
        t.originalEvent||t;
        if(u||(t.metaKey||t.ctrlKey||t.altKey||t.shiftKey)) {
          if(u)return!1
        }
        else{
          if(t.deltaY<0||t.deltaX>0){
            {
              var o=e();
              f[o+1],"horiz"==a?$(window).scollLeft():$(window).scrollTop(), "horiz"==a?window.innerWidth:window.innerHeight,t.deltaY<0?t.deltaY*t.deltaFactor*-1:t.deltaX*t.deltaFactor
            }
            return u=true,setTimeout(function(){u=!1},1000),r()
          }
          if(t.deltaY>0||t.deltaX<0){
            {
              var o=e();
              f[o],
                "horiz"==a?$(window).scollLeft():$(window).scrollTop(),t.deltaY>0?t.deltaY*t.deltaFactor*-1:t.deltaX*t.deltaFactor
            }
            return u=true,
              setTimeout(function(){u=!1},1000),n()
          }
        }
      })
    }();
  </script>

</body>
</html>
