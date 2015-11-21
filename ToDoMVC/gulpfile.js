/// <binding />
/// <vs SolutionOpened='watch' />
var tasks = require('require-dir');
// Call All tasks from ./gulp/tasks folder
tasks('./gulp/tasks', { recurse: true });