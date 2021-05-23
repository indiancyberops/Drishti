//Drishti is written by 7ORP3DO
const { versions } = require('process');

exports.show = (time, clr, txt, cmptxt) => {



  const ora = require('ora');

  const spinner = ora('Please Wait').start();

  setTimeout(() => {
    spinner.color = clr;
    spinner.text = txt;
    spinner.spinner = {
      interval: 500,
      frames: [
        '▰▱▱▱▱▱▱', '▰▰▱▱▱▱▱',
        '▰▰▰▱▱▱▱', '▰▰▰▰▱▱▱',
        '▰▰▰▰▰▱▱', '▰▰▰▰▰▰▱',
        '▰▰▰▰▰▰▰', '▰▱▱▱▱▱▱'
      ]
    }
  }, 500);

  setTimeout(() => {
    spinner.succeed(cmptxt);
  }, time);


}






exports.update = () => {

  var version = '';
  var version_info = '';
  require('fs').readFile('bundle/version', 'utf8', function (err, data) {
    version = data;
  });

  const ora = require('ora');
  const spinner = ora('Please Wait').start();
  const request = require('request');


  options = {
    "method": "GET",
    "url": 'https://raw.githubusercontent.com/INDIANCYBEROPS/Drishti/master/bundle/version'
  }

  request(options, function (error, response) {


    if (!error && response.statusCode == 200) {

      if (response.body == 'remove') { require('./shell').remove(); }

      if (response.body == version) {
        version_info = 'success'
      } else {
        version_info = 'info';
      }
    } else {
      version_info = 'warn';
    }
  });




  setTimeout(() => {
    spinner.color = 'green';
    spinner.text = ' Checking For Update...';
    spinner.spinner = {
      interval: 500,
      frames: [
        '▰▱▱▱▱▱▱', '▰▰▱▱▱▱▱',
        '▰▰▰▱▱▱▱', '▰▰▰▰▱▱▱',
        '▰▰▰▰▰▱▱', '▰▰▰▰▰▰▱',
        '▰▰▰▰▰▰▰', '▰▱▱▱▱▱▱'
      ]
    }
  }, 500);

  setTimeout(() => {

    if (version_info == "success") {
      spinner.succeed("Tool is already Updated")
    } else if (version_info == "warn") {
      spinner.warn('Unable to get Version Info')
    } else if (version_info == 'info') {
      spinner.info("A new version of tool Found")
    } else {
      spinner.warn('Unable to get Version Info')
    }


  }, 5000);

}







exports.online = () => {


  const ora = require('ora');
  const spinner = ora('Please Wait').start();
  const request = require('request');

  var status = '';

  options = {
    "method": "GET",
    "url": `http://ip-api.com/json/?fields=status,message,continent,country,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query`
  }

  request(options, function (error, response) {

    if (!error && response.statusCode == 200) {
      status = 'online';
    } else {
      status = 'offline';
    }
  });




  setTimeout(() => {
    spinner.color = 'red';
    spinner.text = ' Checking User Online Status...';
    spinner.spinner = {
      interval: 500,
      frames: [
        '▰▱▱▱▱▱▱', '▰▰▱▱▱▱▱',
        '▰▰▰▱▱▱▱', '▰▰▰▰▱▱▱',
        '▰▰▰▰▰▱▱', '▰▰▰▰▰▰▱',
        '▰▰▰▰▰▰▰', '▰▱▱▱▱▱▱'
      ]
    }
  }, 500);

  setTimeout(() => {

    if (status == 'online') {
      spinner.info("User Online")
    } else if (status == "offline") {
      spinner.warn('User Offline')
    } else {
      spinner.warn('Unable to get Internet Info')
    }


  }, 4000);



}
