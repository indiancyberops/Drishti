
exports.hash = (dec) => {

    const banner = require("./banner");
    const clr = require('colors');


    console.clear();
    banner.show('vice', 'MD5 Hashing');
    const CryptoJS = require("crypto-js");

     {
        var text = banner.ask("Enter text to be Hashed");
        var key = banner.ask("Enter Secret key");
        console.log('');

        var enctext = CryptoJS.MD5(text, key).toString();

        console.log('Your Hashed text : '.red.bold + enctext.green);
        require('./back').back();


    }



}