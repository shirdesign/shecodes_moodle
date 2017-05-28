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
 * Unit tests for the condition.
 *
 * @package availability_geolocation
 * @copyright 2014 The Open University
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

use availability_geolocation\condition;

/**
 * Unit tests for the condition.
 *
 * @package availability_geolocation
 * @copyright 2014 The Open University
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class availability_geolocation_condition_testcase extends advanced_testcase {
    /**
     * Load required classes.
     */
    public function setUp() {
        // Load the mock info class so that it can be used.
        global $CFG;
        require_once($CFG->dirroot . '/availability/tests/fixtures/mock_info.php');
    }

    /**
     * Tests constructing and using condition.
     */
    public function test_usage() {
        global $CFG, $USER;
        $this->resetAfterTest();
        $CFG->enableavailability = true;

        // Erase static cache before test.
        condition::wipe_static_cache();

        // Make a test course and user.
        $generator = $this->getDataGenerator();
        $course = $generator->create_course();
        $user = $generator->create_user();
        $generator->enrol_user($user->id, $course->id);
        $info = new \core_availability\mock_info($course, $user->id);

        // Make a test geolocation and group.
        
        // Do test (not in geolocation).
       

        // Check if available (when not available).
       

        // Add user to geolocation and refresh cache.
     
        // Recheck.
       
        // Admin user doesn't belong to the geolocation, but they can access it
        // either way (positive or NOT) because of accessallgroups.
        $this->setAdminUser();
        $infoadmin = new \core_availability\mock_info($course, $USER->id);
        $this->assertTrue($cond->is_available(false, $infoadmin, true, $USER->id));
        $this->assertTrue($cond->is_available(true, $infoadmin, true, $USER->id));

        
       
    /**
     * Tests the constructor including error conditions. Also tests the
     * string conversion feature (intended for debugging only).
     */
    public function test_constructor() {
       
    }

    /**
     * Tests the save() function.
     */
   
    /**
     * Tests the update_dependency_id() function.
     */
    
}
