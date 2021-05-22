exports.expand = () => {

    const banner = require('./banner');
    console.clear();
    banner.show('atlas', 'URL Expander');
    const clr = require('colors');


    const longUrl = require('expand-url');
    const ask = require('prompt-sync')();

    var url = banner.ask("Enter Your Short Url");

    longUrl.expand(url, function (err, longUrl) {

        if (err) {
            console.log(clr.red(err));
            require('./back').back();
        } else {
            console.log('\nYour Expended Url:  '.cyan + longUrl.brightGreen);
            require('./back').back();
        }
        
    });


}



exports.short = () => {

    const banner = require('./banner');
    console.clear();
    banner.show('pastel', 'URL Shortner');
    const clr = require('colors');
    const ask = require('prompt-sync')();

    var url = banner.ask("Enter Your Long Url");

    const shortUrl = require('node-url-shortener');

    shortUrl.short(url, function (err,shortUrl) {
       
        if (err) {
             console.log('Something went wrong!'.red);
             require('./back').back();
        } else {
            console.log('\nYour Short Url:  '.cyan + shortUrl.brightGreen);
            require('./back').back();
        }
        
    });

}