//Drishti is written by 7ORP3DO


console.log('Starting tool...');

console.clear();
require("./bundle/banner").show('vice', '', 'mains');
console.log('\n\n');


const loader = require('./bundle/loading');

loader.show(2000, 'cyan', ' Checking Dependencies...', 'Dependencies Satisfied');


setTimeout(() => {
  loader.update();
}, 2100);


setTimeout(() => {
  loader.show(1500, 'yellow', ' Running Tests...', 'Test Completed');
}, 7500);


setTimeout(() => {
  loader.show(1000, 'red', ' Loading...', 'Loading Completed');
}, 9100);

const banner = require('./bundle/banner');


setTimeout(() => {

  require('./bundle/home').show();

}, 11200);