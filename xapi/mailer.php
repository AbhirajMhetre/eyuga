<?php

ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");

if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    echo "Bad request";
    die();
}

// define('api_key', '1C9ashRQDxTl1Lcu3eZc');

// if ($_POST['key'] !== api_key) {
//     echo "Bad request";
//     die();
// }

if(!isset($_POST['name']) || !isset($_POST['email']) || !isset($_POST['msg'])){
	echo "Bad request";
    die();
}

$error = false;
$response['message'] = "Email sent. We will get back to you soon!";
$response['error'] = $error;

echo(json_encode($response));

?>