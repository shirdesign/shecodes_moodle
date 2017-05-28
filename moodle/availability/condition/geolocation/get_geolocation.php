<?php


require_once(dirname(__FILE__) . '/../../../config.php');

//require_login();

$PAGE->set_context(context_system::instance());
$PAGE->set_url('/availability/condition/geolocation/get_geolocation.php');

$allowed = optional_param('allowed', false, PARAM_BOOL);

if (!$allowed) {
    $PAGE->requires->js('/availability/condition/geolocation/geoCheck2.js');
    
} else {
    file_put_contents('hello',dirname(__FILE__) . '/curl.log');
    $SESSION->geolocation_allowed = $allowed;
    $SESSION->geolocation_time = time();
}

echo $OUTPUT->header();
echo "geolocation_allowed: ".$SESSION->geolocation_allowed."<br>";
echo "geolocation_time: ".$SESSION->geolocation_time."<br>";
echo $OUTPUT->footer();