<?php

require_once(dirname(__FILE__) . '/../../../config.php');

$allowed = required_param('allowed', PARAM_BOOL);

$SESSION->geolocation_allowed = $allowed;
$SESSION->geolocation_time = time();

echo "geolocation_allowed: ".$SESSION->geolocation_allowed."<br>";
echo "geolocation_time: ".$SESSION->geolocation_time."<br>";
