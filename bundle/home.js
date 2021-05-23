//Drishti is written by 7ORP3DO

exports.show = (mode,mode2) => {

  const ask = require('prompt-sync')();
  const banner = require('./banner');

    
  console.clear();
  
  banner.show('summer');
  console.log(' ');
  banner.list('1','Instagram Lookup');
  banner.list('2','IP Lookup');
  banner.list('3','My IP Info');
  banner.list('4','Url Shortner');
  banner.list('5','Url Expander');
  banner.list('6','Encryption');
  banner.list('7','Host Search');
  banner.list('8','Reverse Ip Lookup');
  banner.list('9','Traceroute');
  banner.list('10','DNS Lookup');
  banner.list('11','My Device Info');
  banner.list('12','Port Scan');
  banner.list('13','HTTP Header Detector');
  console.log('');
  banner.list('99','Update Tool');
  banner.list('00','Exit');
  console.log(' ');
  var ans = banner.ask("Select Your Option")
  
  switch (ans) {
      
        case '1':
          require('./insta').show()
          break;
        case '2':
          require('./iplookup').show();
          break;
        case '3':
          require('./iplookup').show('myip');
          break;
        case '4':
          require('./url').short();
          break;
        case '5':
          require('./url').expand();
          break;
        case '6':
          require('./hash').show();
          break;
        case '7':
          require('./web').host();
          break;
        case '8':
          require('./web').rev();
          break;
        case '9':
          require('./web').trace();
          break;
        case '10':
          require('./web').dns();
          break;
        case '11':
          require('./info').show()
          break;
        case '12':
          require('./web').port();
          break;
        case '13':
          require('./web').head();
          break;      

        
        case '00':
              console.log('Bye!'.cyan);
              process.exit();
              break;
          
        case '99':
          const shell = require('./shell');
          shell.update();
          break;
  
        default:
              console.log("Invalid Option!" .brightRed);
              setTimeout(() => { require('../bundle/home').show() }, 1000);
              break;
      }


    }
    