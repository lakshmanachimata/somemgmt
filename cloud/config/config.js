
function define(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true
    });
}

define("dbUrl", 'mongodb://localhost:27017');
define("dbNameOne", 'prmgmt_one');
define("dbNameTwo", 'prmgmt_two');
define("secret", 'abbprmgmt');
define("collection_users", 'users');
define("collection_tasks", 'tasks');
define("collection_subtasks", 'subtasks');
define("options_id", '00001');

