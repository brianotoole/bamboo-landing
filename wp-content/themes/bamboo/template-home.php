<?php
/**
Template Name: Homepage
*/
get_header(); 
?>

<div id="primary" class="content-area">
<section id="main" class="site-main" role="main">

<?php
// Start the Loop
if ( have_posts() ) : while ( have_posts() ) : the_post();
  // get content-home
  get_template_part( 'template-parts/content', 'home' );

endwhile;
else :
  // get content-none
  get_template_part( 'template-parts/content', 'none' );

endif; 
?>

</section><!-- /.site-main-->
</div><!--.content-area-->

<?php
get_footer();
?>