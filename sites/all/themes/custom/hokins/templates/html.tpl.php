<?php
/**
 * @file
 * Returns the HTML for the basic html structure of a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728208
 */
?><!DOCTYPE html>
<!--[if IEMobile 7]><html class="iem7" <?php print $html_attributes; ?>><![endif]-->
<!--[if lte IE 6]><html class="lt-ie9 lt-ie8 lt-ie7" <?php print $html_attributes; ?>><![endif]-->
<!--[if (IE 7)&(!IEMobile)]><html class="lt-ie9 lt-ie8" <?php print $html_attributes; ?>><![endif]-->
<!--[if IE 8]><html class="lt-ie9" <?php print $html_attributes; ?>><![endif]-->
<!--[if (gte IE 9)|(gt IEMobile 7)]><!--><html <?php print $html_attributes . $rdf_namespaces; ?>><!--<![endif]-->

<head>
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>

  <meta charset="utf-8">

  <!--[if IE]>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <![endif]-->

  <title>Bienvenue sur le site officiel des Hokins</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="/favicon.ico?v=1" />
  <link rel="shortcut icon" href="/favicon.ico?v=1" />
  <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico?v=1" />

  <?php print $styles; ?>

  <script src="/sites/all/themes/custom/hokins/tpl2/js/libs/modernizr-2.8.3.min.js"></script>
  <!--[if lt IE 9]>
  <script src="../tpl2/js/libs/respond.min.js"></script>
  <![endif]-->
</head>


<body class="<?php print $classes; ?>" <?php print $attributes;?>>

  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>

  <?php print $scripts; ?>

</body>
</html>
