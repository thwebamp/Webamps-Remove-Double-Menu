<?php
/**
* Plugin Name: Webamps Remove Double Menu
* Plugin URI: ww.webamp.dk/seo
* Description: Removes the double menu on yootheme pro pages	
* Version: 1.0
* Author: Webamp
* Author URI: https://www.webamp.dk/
**/


function webamp_remove_double_menu() {
   // register your script location, dependencies and version
   wp_register_script('custom_script',
   plugin_dir_url( __FILE__ ) . 'js/doublemenuscript.js',
       array('jquery'),
       '1.0',
       true);
   // enqueue the script
   wp_enqueue_script('custom_script');
}
add_action('wp_enqueue_scripts', 'webamp_remove_double_menu');
?>