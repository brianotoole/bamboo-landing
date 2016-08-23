<?php
/**
 * Header.php
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 * @package bamboo
 */

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<div id="fakeloader"></div>
<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'bamboo' ); ?></a>

<header id="masthead" class="site-header" role="banner">
  <div class="container">
    <a href="#" class="site-branding">
	  <!--<img class="logo" src="#">-->
	  <span class="logo graident1">Bamboo Landing</span>
	</a><!--/.branding-->
	<nav class="main">
	  <ul>
	    <li><a href="#">Nav Link 1</a></li>
	    <li><a href="#">Nav Link 2</a></li>
	    <li><a href="#">Nav Link 3</a></li>
	  </ul>
	</nav><!--/.main-->
  </div><!--/.container-->
</header><!--/.site-->
<div id="content" class="site-content">
