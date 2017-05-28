<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Condition main class.
 *
 * @package availability_geolocation
 * @copyright 2014 The Open University
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

namespace availability_geolocation;

defined('MOODLE_INTERNAL') || die();

/**
 * Condition main class.
 *
 * @package availability_geolocation
 * @copyright 2014 The Open University
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class condition extends \core_availability\condition {
    
    
    /**
     * Constructor.
     *
     * @param \stdClass $structure Data structure from JSON decode
     * @throws \coding_exception If invalid data structure.
     */
    public function __construct($structure) {
        // Get geolocation id.
        return json_encode(array());
    }

  /* public function save() {
        $result = (object)array('type' => 'geolocation');
        if ($this->geolocationid) {
            $result->id = $this->geolocationid;
        } else {
            $result->activity = true;
        }
        return $result;
    }
*/

    public function save() {
    
    }

    public function is_available($not, \core_availability\info $info, $grabthelot, $userid) {
        //$context = \context_course::instance($info->get_course()->id);
        global $CFG, $SESSION, $PAGE;
        if (isset($SESSION->geolocation_allowed) && isset($SESSION->geolocation_time)) {
            $params = array($SESSION->geolocation_allowed, $SESSION->geolocation_time);
        } else {
            $params = array(false, 0);
        }
        $PAGE->requires->js_init_call('M.availability_geolocation.init_geolocation_params', $params, false, array('name' => 'availability_geolocation', 'fullpath' => '/availability/condition/geolocation/module.js'));
        
        if (isset($SESSION->geolocation_allowed) && $SESSION->geolocation_allowed && isset($SESSION->geolocation_time) && $SESSION->geolocation_time > time() - (10*60)) {
        //if (isset($SESSION->geolocation_allowed) && $SESSION->geolocation_allowed && isset($SESSION->geolocation_time) && $SESSION->geolocation_time > time() - 1) {
            $allow = true;
        } else {
            $allow = false;
        }
        //echo "geolocation_allowed: ".$SESSION->geolocation_allowed."<br>";
        //echo "geolocation_time: ".$SESSION->geolocation_time."<br>";
        return $allow;
    }

    /**
     * Gets the actual geolocation id for the condition. This is either a specified
     * id, or a special flag indicating that we use the one for the current cm.
     *
     * @param \core_availability\info $info Info about context cm
     * @return int geolocation id
     * @throws \coding_exception If it's set to use a cm but there isn't geolocation
     */


    public function get_description($full, $not, \core_availability\info $info) {
        global $DB;
        $course = $info->get_course();
        return get_string('requires_geolocation', 'availability_geolocation');
    }

        // Need to get the name for the geolocation. Unfortunately this requires
        // a database query. To save queries, get all geolocations for course at
        // once in a static cache.       

    
    /**
     * Include this condition only if we are including groups in restore, or
     * if it's a generic 'same activity' one.
     *
     * @param int $restoreid The restore Id.
     * @param int $courseid The ID of the course.
     * @param base_logger $logger The logger being used.
     * @param string $name Name of item being restored.
     * @param base_task $task The task being performed.
     *
     * @return Integer groupid
     */
    

    /**
     * Wipes the static cache used to store geolocation names.
     */
  
    /*public function is_applied_to_user_lists() {
        // geolocation conditions are assumed to be 'permanent', so they affect the
        // display of user lists for activities.
        return true;
    }*/

    /*public function filter_user_list(array $users, $not, \core_availability\info $info,
            \core_availability\capability_checker $checker) {
        global $CFG, $DB;

        // If the array is empty already, just return it.
        if (!$users) {
            return $users;
        }

  
    }*/
  
    public function get_debug_string() {
         
    }

    /**
     * Returns a JSON object which corresponds to a condition of this type.
     *
     * Intended for unit testing, as normally the JSON values are constructed
     * by JavaScript code.
     *
     * @param int $geolocationid Required geolocation id (0 = geolocation linked to activity)
     * @return stdClass Object representing condition
     */
  }