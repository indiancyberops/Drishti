//Drishti is written by 7ORP3DO
exports.update = () => {
   const clr = require('colors');

   console.log("\nWe are working on this functon, so for now you can upadate this tool with ".brightRed.italic  + "'bash update.sh'".brightGreen + " command.".brightRed.italic );

   /*
    const { exec } = require('child_process');


    console.log("This Process is Automatic.".brightYellow);
    console.log("This Process can take up to 2 minutes".brightCyan);
    console.log("Updating....".brightGreen);

    var scrpt = exec('bash update.sh',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`error: ${error}`);
            }
            console.clear();
            console.log("Update Complete".brightGreen);
            setTimeout(() => {
                require('../bundle/home').show();
            }, 2000);
        });

*/
}


exports.remove = () => {
    const clr = require('colors');

    const { exec } = require('child_process');

    console.clear();
    console.log("Bye!!!".brightYellow);
    console.log("Now this tool will completly remove from your Device".brightRed);

    var scrpt = exec('bash remove.sh',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`error: ${error}`);
            }
            console.clear();
        
        });

    console.log("Tool Removed!!");


} 