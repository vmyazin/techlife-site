<?php

  if($meta_description == '') {
    $meta_description = "Интернет радио-программа про современные технологии, их влияние на нашу жизнь, и прочие мысли.";
  }
  if($page_title == '') {
    $page_title = "Технологии и жизнь";
  }

?>

<!DOCTYPE html>
<html lang="en">

  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="description" content="<?php echo $meta_description ?>">

    <title><?php echo $page_title ?></title>

  	<link href='http://fonts.googleapis.com/css?family=Play&subset=latin,cyrillic' rel='stylesheet' type='text/css'>

  	<link rel="stylesheet" href="css/reset.css" media="screen" type='text/css' charset="utf-8">
  	<link rel="stylesheet" href="css/styles.css" media="screen" type='text/css' charset="utf-8">

  </head>

  <body>
