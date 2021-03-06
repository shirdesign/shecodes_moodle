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
 * Front-end class.
 *
 * @package availability_geolocation
 * @copyright 2014 The Open University
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

namespace availability_geolocation;

defined('MOODLE_INTERNAL') || die();

/**
 * Front-end class.
 *
 * @package availability_geolocation
 * @copyright 2014 The Open University
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class frontend extends \core_availability\frontend {
    /** @var array Array of geolocation info for course */
   

    /**
     * Gets all the geolocations on the course.
     *
     * @param int $courseid Course id
     * @return array Array of geolocation objects
     */
   
     protected function get_javascript_strings() {
        // You can return a list of names within your language file and the
        // system will include them here. (Should you need strings from another
        // language file, you can also call $PAGE->requires->strings_for_js
        // manually from here.)
        return array();
    }
 
    protected function get_javascript_init_params($course, \cm_info $cm = null,
            \section_info $section = null) {
        // If you want, you can add some parameters here which will be
        // passed into your JavaScript init method. If you don't include
        // this function, there will be no parameters.
        $a = 'hello';
        return array();
    }
 
    protected function allow_add($course, \cm_info $cm = null,
            \section_info $section = null) {
        // This function lets you control whether the 'add' button for your
        // plugin appears. For example, the grouping plugin does not appear
        // if there are no groupings on the course. This helps to simplify
        // the user interface. If you don't include this function, it will
        // appear.
        return true;
    }
}