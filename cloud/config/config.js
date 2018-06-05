
function define(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true
    });
}

define("dbUrl", 'mongodb://localhost:27017');
define("dbName", 'prmgmt');
define("secret", 'abbprmgmt');
define("collection_options", 'options');
define("collection_users", 'users');
define("collection_projects", 'projects');
define("collection_events", 'events');
define("collection_tasks", 'tasks');
define("collection_subtasks", 'subtasks');
define("options_id", '00001');

