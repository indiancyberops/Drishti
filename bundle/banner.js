const gradient = require('gradient-string');
const dateFormat = require("dateformat");
const prompt = require('prompt-sync')();
const clr = require('colors');
var current_date = new Date();
var show_date = dateFormat(current_date, "dd-mm-yyyy");
var show_time = dateFormat(current_date, "hh:MM:ss TT");
var version;
//Drishti is written by 7ORP3DO
require('fs').readFile('./bundle/version', 'utf8', function(err, data) {
    version = data;
});


exports.show = (mode,mode2,mode3) => {

   if (mode3) { version = '0.0.0' }

    banner_logo = `   
        ..,,;;;;;;,,,,
           .,;'';;,..,;;;,,,,,.''';;,..
        ,,''                    '';;;;,;''
       ;'    ,;@@;'  ,@@;, @@, ';;;@@;,;';.
      ''  ,;@@@@@'  ;@@@@; ''    ;;@@@@@;;;;
         ;;@@@@@;    '''     .,,;;;@@@@@@@;;;
        ;;@@@@@@;           , ';;;@@@@@@@@;;;.
         '';@@@@@,.  ,   .   ',;;;@@@@@@;;;;;;  v` + version + `
            .   '';;;;;;;;;,;;;;@@@@@;;' ,.:;'
              ''..,,     ''''    '  .,;'
                   ''''''::''''''''       `;
                      

    console.log(gradient[mode](banner_logo));
   console.log(clr.rainbow("                    D R I S H T I"));

    console.log(' ');
    console.log('       Time   : [ ' + show_date.magenta.italic + ' | ' + show_time.magenta.italic + ' ]');
    console.log('       Team   : [ ' + 'Indian Cyber Ops'.yellow.italic + ' ]');
    console.log('       Author : [ ' + 'Prateek'.brightGreen.italic + ' | ' + 'Samanvai'.yellow.italic + ' | ' + 'Biswajeet'.brightRed.italic    + ' ]' );
    
    if (mode2) {
    console.log('       Tool   : [ ' + mode2.brightCyan.bold + ' ]' );
    console.log(' ');
    
    }
    
}


exports.list = (num,txt)  => {
   console.log('['.green + num.brightRed + '] '.green + txt.blue.italic );
}


exports.ask = (qus)  => {
       return prompt( qus.yellow + ' : '.cyan)
}