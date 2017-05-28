YUI.add('moodle-availability_geolocation-form', function (Y, NAME) {

/**
 * JavaScript for form editing geolocation conditions.
 *
 * @module moodle-availability_geolocation-form
 */
M.availability_geolocation = M.availability_geolocation || {};

/**
 * @class M.availability_geolocation.form
 * @extends M.core_availability.plugin
 */
M.availability_geolocation.form = Y.Object(M.core_availability.plugin);

/**
 * geolocations available for selection (alphabetical order).
 *
 * @property geolocations
 * @type Array
 */
M.availability_geolocation.form.geolocations = null;

/**
 * Initialises this plugin.
 *
 * @method initInner
 * @param {Array} geolocations Array of objects containing geolocationid => name
 */
M.availability_geolocation.form.initInner = function(geolocations) {
    this.geolocations = geolocations;
};

/*M.availability_geolocation.form.getNode = function(json) {
    // Create HTML structure.
    var html = '<label>' + M.util.get_string('title', 'availability_geolocation') + ' <span class="availability-group">' +
            '<select name="id">' +
            '<option value="choose">' + M.util.get_string('choosedots', 'moodle') + '</option>';
    for (var i = 0; i < this.geolocations.length; i++) {
        var geolocation = this.geolocations[i];
        // String has already been escaped using format_string.
        html += '<option value="' + geolocation.id + '">' + geolocation.name + '</option>';
    }
    html += '</select></span></label>';
    var node = Y.Node.create('<span>' + html + '</span>');

    // Set initial value if specified.
    if (json.id !== undefined &&
            node.one('select[name=id] > option[value=' + json.id + ']')) {
        node.one('select[name=id]').set('value', '' + json.id);
    }

    // Add event handlers (first time only).
    if (!M.availability_geolocation.form.addedEvents) {
        M.availability_geolocation.form.addedEvents = true;
        var root = Y.one('#fitem_id_availabilityconditionsjson');
        root.delegate('change', function() {
            // Just update the form fields.
            M.core_availability.form.update();
        }, '.availability_geolocation select');
    }

    return node;
};*/

M.availability_geolocation.form.getNode = function(json) {
    // Create HTML structure.
    var html = '<label>' + M.util.get_string('title', 'availability_geolocation');
    html += '</label>';
    var node = Y.Node.create('<span>' + html + '</span>');

    // Set initial value if specified.
    if (json.id !== undefined &&
            node.one('select[name=id] > option[value=' + json.id + ']')) {
        node.one('select[name=id]').set('value', '' + json.id);
    }

    // Add event handlers (first time only).
    if (!M.availability_geolocation.form.addedEvents) {
        M.availability_geolocation.form.addedEvents = true;
        var root = Y.one('#fitem_id_availabilityconditionsjson');
        root.delegate('change', function() {
            // Just update the form fields.
            M.core_availability.form.update();
        }, '.availability_geolocation select');
    }

    return node;
};

M.availability_geolocation.form.fillValue = function(value, node) {
    /*var selected = node.one('select[name=id]').get('value');
    if (selected === 'choose') {
        value.id = 'choose';
    } else {
        value.id = parseInt(selected, 10);
    }*/
};

M.availability_geolocation.form.fillErrors = function(errors, node) {
    var value = {};
    this.fillValue(value, node);

    // Check geolocation item id.
    if (value.id === 'choose') {
        errors.push('availability_geolocation:error_selectgeolocation');
    }
};


}, '@VERSION@', {"requires": ["base", "node", "event", "moodle-core_availability-form"]});