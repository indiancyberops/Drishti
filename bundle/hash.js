//Drishti is written by 7ORP3DO
exports.show = () => {

  const banner = require('./banner');
  console.clear();
  banner.show('pastel', 'Encryption');

  banner.list('1', 'AES Encryption');
  banner.list('2', 'DES Encryption');
  banner.list('3', 'RC4 Encryption');
  banner.list('4', 'MD5 Hashing');
  banner.list('5', 'Base64 Encoder');
  console.log(' ');
  banner.list('6', 'AES Decryption');
  banner.list('7', 'DES Decryption');
  banner.list('8', 'RC4 Decryption');
  banner.list('9', 'Base64 Decoder');
  console.log(' ');
  banner.list('99', 'Exit ');
  banner.list('00', 'GO Back');
  console.log(' ');
  var ans = banner.ask("Select Your Option")


  switch (ans) {

    case '1':
      require('./aes').hash();
      break;
    case '2':
      require('./des').hash();
      break;
    case '3':
      require('./rc4').hash();
      break;
    case '4':
      require("./md5").hash()
      break;
    case '5':
      require("./crypto").base64()
      break;
    case '6':
      require('./aes').hash('d');
      break;
    case '7':
      require('./des').hash('d');
      break;
    case '8':
      require('./rc4').hash('d');
      break;
    case '9':
      require("./crypto").base64('d')
      break;


    case '99':
      console.log('Bye!'.cyan);
      process.exit();
      break;

    case '00':
      require('./home').show();
      break;

    default:
      console.log("Invalid Option!");
      setTimeout(() => { require('../bundle/hash').show() }, 1000);
      break;
  }


}