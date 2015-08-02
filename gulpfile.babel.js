// gulpfile.babel.js
// Load custom tasks from the `tasks` directory
try {
  require('require-dir')('_gulp/tasks')
} catch (err) {
  console.error(err)
}
