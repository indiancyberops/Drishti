//Drishti is written by 7ORP3DO
exports.base64 = (des) => {

    const banner = require("./banner");
    const clr = require('colors');
    console.clear();

    if (des) {
        banner.show('vice', 'Base64 Decoder');
        const CryptoJS = require("crypto-js");

        var text = banner.ask("Enter Base64 String to be Decoded");

        var base64 = Buffer.from(text , 'base64').toString();

        console.log('Your Decoded text : '.red.bold + base64.green);

        require('./back').back();
    } else {

        banner.show('vice', 'Base64 Encoder');
        const CryptoJS = require("crypto-js");

        var text = banner.ask("Enter text to be Encoded");

        var base64 = Buffer.from(text).toString('base64');

        console.log('Your Encoded text : '.red.bold + base64.green);

        require('./back').back();
    }

}


