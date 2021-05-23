//Drishti is written by 7ORP3DO
exports.hash = (dec) => {

    const banner = require("./banner");
    const clr = require('colors');


    console.clear();
    banner.show('vice', 'DES Encryption');
    const CryptoJS = require("crypto-js");

    if (dec) {

        var text = banner.ask("Enter text to be Decrypted");
        var key = banner.ask("Enter Secret key");
        console.log('');


        var bytes = CryptoJS.DES.decrypt(text, key);
        var originalText = bytes.toString(CryptoJS.enc.Utf8);

        if (originalText) {
            console.log('Your DES Decrypted text : '.red.bold + originalText.green);
        } else {
            console.log('ERROR :'.red.bold + ' The text is in invalid formet or wrong Secret key!'.red.italic);
        }
        require('./back').back();

    } else {
        var text = banner.ask("Enter text to be Encrypted");
        var key = banner.ask("Enter Secret key");
        console.log('');

        var enctext = CryptoJS.DES.encrypt(text, key).toString();

        console.log('Your secret key for Decryption : '.red.bold + key.green);
        console.log('Your DES Encrypted text : '.red.bold + enctext.green);
        require('./back').back();


    }



}