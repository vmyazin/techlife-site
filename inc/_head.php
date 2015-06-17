<?php

  if($meta_description == '') {
    $meta_description = "Интернет радио-программа про современные технологии, их влияние на нашу жизнь, и прочие мысли.";
  }
  if($page_title == '') {
    $page_title = "Технологии и жизнь";
  }

  include('inc/base_url.php');
?>


<!DOCTYPE html>
<html lang="en" ng-app="techlifeApp">

  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="description" content="<?php echo $meta_description ?>">

    <title><?php echo $page_title ?></title>

  	<link href='http://fonts.googleapis.com/css?family=Play&subset=latin,cyrillic' rel='stylesheet' type='text/css'>

  	<link rel="stylesheet" href="<?php echo $base_url; ?>css/reset.css" media="screen" type='text/css' charset="utf-8">
  	<link rel="stylesheet" href="<?php echo $base_url; ?>css/styles.css" media="screen" type='text/css' charset="utf-8">

    <base href="/">

    <script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular-route.min.js"></script>
    <script src="//code.jquery.com/jquery-2.1.4.min.js"></script>
    <script src="<?php echo $base_url; ?>js/vendor/soundmanager2-jsmin.js"></script>
    <script src="<?php echo $base_url; ?>js/sitedata.js"></script>
    <script src="<?php echo $base_url; ?>js/app.js"></script>

  </head>

  <body>
