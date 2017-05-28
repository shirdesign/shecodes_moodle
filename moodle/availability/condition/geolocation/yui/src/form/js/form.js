var geolocation_allowed = false;
var geolocation_allowed_time = 0;

M.availability_geolocation = M.availability_geolocation || {};
 
M.availability_geolocation.form = Y.Object(M.core_availability.plugin);
 
M.availability_geolocation.form.initInner = function(session_allowed, session_allowed_time) {
    geolocation_allowed = session_allowed;
    if (geolocation_allowed) {
        geolocation_allowed_time = session_allowed_time;
    } else {
        geolocation_allowed_time = 0;
    }
};